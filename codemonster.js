// Copyright 2012 Geeky Ventures

// Language Setting. Default is English unless reading the browser default language gets implemented

var language = availableLanguages[0] || "en";

// Constants
var previewUpdateDelay = 300; // In milliseconds

// Global to hold any pending update of the preview and error state
var updatePreviewTimeout;

// Globals for lesson state
var hiddenCode = "";
var currentLesson = 0;

// Put up a stern warning if the user is running IE8 (Code Monster
// doesn't do IE8)
if ((!window.CanvasRenderingContext2D) ||
	($.browser.msie && parseInt($.browser.version, 10) <= 8)) {
	// We can't create a canvas, so browser don't play that game.
	$('#old-browser-warning').modal( {
		maxWidth: 500,
		overlayClose: true,
	} );
}

// Init the editor
var editorOptions = {
	mode: 'javascript',
	tabSize: 2,
	lineNumbers: true,
	lineWrapping: true,
	onCursorActivity: function() {
		// Wait for a period of inactivity before updating the graphic.
		clearTimeout(updatePreviewTimeout);
		updatePreviewTimeout = setTimeout(updatePreview, previewUpdateDelay);
	}
};
var editor = 
	CodeMirror.fromTextArea(document.getElementById('code'), editorOptions);

// Global to keep track if we have reported an error already
var previousErrorLine = null;
// Update the preview and the error report (if any)
function updatePreview() {
    var code = editor.getValue();
    var okay = JSHINT(code, {'undef': true, browser: true, curly: true, predef: predefForJSHint});
	if (!okay) {
		var waitTime = 3000;  // In ms
		
		// There is an error, but we don't want to show it right away.  Let's give them
		// time to keep typing and fix it.  If there is no typing for a few seconds, then
		// show the error.
		var errorPrompts;
		if (typeof jsHintErrorPrompts === "undefined") {
			errorPrompts = errorPromptMessages[language];
		} else {
			// For internationalization, this variable in the lessons JSON file can
			// override the English version of the prompt
			errorPrompts = jsHintErrorPrompts.slice();
		}
		var errorString = errorPrompts[0] + " <i>";
		errorString += JSHINT.errors[0].evidence;
		errorString += "</i><br />" + errorPrompts[1] + " <i>" + JSHINT.errors[0].reason + "</i>";
		var lineNum = JSHINT.errors[0].line - 1;
		if (previousErrorLine != null) {
			// There is an existing error, set wait time much lower so we
			// update the error string quickly
			waitTime = 1;
			if (previousErrorLine != lineNum) {
				// This fixes an odd case where you have two errors at once,
				// and one of the errors can end up staying highlighted.
				editor.setLineClass(previousErrorLine, null, null);
			}
		}
		clearTimeout(updatePreviewTimeout);
		updatePreviewTimeout = setTimeout(function() {previousErrorLine = lineNum; $('#code-errors').html(errorString).slideDown(); editor.setLineClass(lineNum, null, "errorLine");},
										  waitTime);
		return;
    } else if (additionalSyntaxChecks(code)) {
        // Quietly ignore these errors.  Make we should do more?
        return;
	} else if (previousErrorLine != null) {
		$('#code-errors').slideUp();
		editor.setLineClass(previousErrorLine, null, null);
		editor.refresh();  // Workaround for redraw bug in Win7 Chrome w/ graphics card
		previousErrorLine = null;
	}
	// If there is a check whether the kid should be congratulated, run that check
	var lesson = lessons[currentLesson];
	if (lesson.youGotItCheck) {
		if (code.search(lesson.youGotItCheck) >= 0) {
			// Looks like the kid did what they were supposed to do,
			// but only add the congrats if we haven't added it already
			var message = $('#tutor-message').html();
			var congrats;
			congrats = congratsMessage[language];
			if (message.lastIndexOf(congrats) < Math.max(0, message.length - congrats.length)) {
				// This hack checks if the congrats message is already
				// at the end of the string.  It's error prone and
				// ugly, but alternatives (like marking the lesson
				// itself) have other problems (like that the congrats
				// message is gone permanently, even if you go to the
				// lesson and then come back, which isn't the
				// intent). Ultimately, the right thing to do probably
				// is to pull this feature entirely, as it is barely
				// used and probably not worth the complexity.
				changeTutorMessage(message + " " + congrats);
			}
		}
	}

	// Now update the preview pane to show what the code does
    var canvasHTML = '<html><body style="margin: 0px;"><canvas id=pane width=400 height=300><\/canvas>'
	canvasHTML += '<script>';
	canvasHTML += hiddenCode;
	var executionLimitedCode = instrumentCodeForInfiniteLoops(code);
	canvasHTML += executionLimitedCode;
    canvasHTML += '<\/script><\/body><\/html>';
    var previewFrame = document.getElementById('preview');
    var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
	if (preview.stopAnimation) { preview.stopAnimation(); }
	if (preview.stopExecutionMonitor) { preview.stopExecutionMonitor(); }
    preview.open();
    preview.write(canvasHTML);
    preview.close();
}

function additionalSyntaxChecks(code) {
	// The only additional code syntax check is for a dot followed by
	// a newline, which creates problems in some of the lessons when a
	// kid has partially typed something like "c." when trying to add
	// "c.moveTo"
	// Note: This is obviously a hack, and a dangerous one at that
	// (really should parse the code, not use a regex), but it mostly
	// works in this case (with the exception of some unusual cases,
	// like multiline comments and strings).  Be very careful about
	// adding more checks here, and consider using the parser instead
	// if you do.
    var re = new RegExp(/^\s*c\.\s*$/m);
    return re.test(code);
}

// Instrument the code to reduce accidental infinite loops or
// recursion. Ooo, clever!  This handles a surprisingly common
// student error where they accidentally create an infinite loop.
// If this wasn't here, the result is a browser that hangs and
// one very confused student.
// Warning: This type of instrumenting does get a false positive
// on long animations eventually, but that's not a huge deal.
// Warning: This will not catch infinite loops of the form
//    while (1)
//      doSomething()
// because it only instruments blocks (indicated by brackets {}),
// but that is also not a huge deal.
// Note: This uses the CodeMirror parser (which we already have loaded).  
// Other options are the esprima, uglify, or jshint parsers.
function instrumentCodeForInfiniteLoops(code) {
	var mode = CodeMirror.getMode(editorOptions, editorOptions.mode);
	var state = CodeMirror.startState(mode);
	var codeLines = code.split(/[\r\n]/);
	var bracketPositions = [];
	var pos = 0;
	for (var i = 0; i < codeLines.length; i++) {
		var stream = new CodeMirror.StringStream(codeLines[i]);
		while (!stream.eol()) {
			// We're being a little naughtly here calling token()
			// directly and accessing internal variables of
			// CodeMirror's parser.  This could break if these
			// functions change or names change.
			var style = mode.token(stream, state);
			var substr = stream.string.slice(stream.start, stream.pos);
			// We're looking for opening of blocks.  That will be any '{'
			// that is not part of a hash/object literal.
			if (substr == '{') {
				// The state of the parser will tell us if this is a block
				if (state.lexical.info != "switch") {
					// Ignore switch statements, but instrument all other blocks
					if (state.lexical.prev.type == "block" ||
						state.lexical.prev.type == "form") {
						// We found an open of a block.  Add it to our list
						// so we can instrument it later.
						bracketPositions.push(pos + stream.start + 1);
					}
				}
			}
			stream.start = stream.pos;
		}
		pos += codeLines[i].length + 1;
    }
	// Important that this go in reverse order as to not change the
	// positions of other brackets we might need to instrument.
	for (var i = bracketPositions.length - 1; i >= 0; i--) {
		// Add a simple but effective stop on long running code.
		code = code.slice(0, bracketPositions[i]) + 
			'cmRunStepCount++; if (cmRunStepCount > 1000000) {throw Error("Execution limit exceeded. Infinite loop?");}' +
			code.slice(bracketPositions[i]);
	}

	// Init cmRunStepCount and then also clear the cmRunStepCount every 10
	// seconds to keep long running but perfectly okay animations from
	// eventually stopping.  This isn't ideal -- complex animations
	// that do too much in under 10 seconds will still get stopped,
	// and some infinite loops that take longer than 10 seconds to do
	// a lot of stuff will still be infinite -- but it fixes most
	// cases kids hit, and there isn't an ideal solution here (as in,
	// see the halting problem).
	// The complexity around the clearInterval is because, when the frame is
	// reloaded, it does not clear the setInterval (which is a little surprising),
	// so it is important to clear it manually.
	code = 'var cmRunStepCount = 0;\nvar cmExecMonId = setInterval(function() { cmRunStepCount = 0; }, 10000);\ndocument.stopExecutionMonitor = function() { clearInterval(cmExecMonId); }\n' + code;

	return code;
}

setTimeout(updatePreview, previewUpdateDelay);

// Init the lessons
if (window.localStorage && window.localStorage.codeMonsterCurrentLesson != null) {
	// Ooo, HTML5 storage is fun!  Cookies aren't needed in this case, since
	// the server doesn't care about this data.  Anyway, load the last lesson
	// this person was on, if any.
	data = window.localStorage.codeMonsterCurrentLesson;
	data = parseInt(data, 10);
	if (!isNaN(data) && data >= 0 && data < lessons.length) {
		// We're paranoid, but the data checks out, use it.
		currentLesson = data;
	}
}
// Special functionality to allow teachers to bookmark a particular lesson
if (window.location.hash) {
	var jumpTo = window.location.hash.slice(1);
	// Allow people to jump to lessons (overriding the HTML5 storage) using
	// hash locations in their URL.  This is useful for, for example, teachers.
	for (var i = 0; i < lessons.length; i++) {
		var section = lessons[i].lessonSection;
		if (section && section.indexOf(jumpTo) == 0) {
			currentLesson = i;
			break;
		}
	}
	// Might want to clear the URL, but leave it alone for now
	 // window.location.hash = "";
}
// The Lesson Sections info link requires some special set up since
// the content is generated dynamically
// Warning: There's some gotchas here, this needs to be done with the original
// lessons array (so before initCode(), which modifies that, though maybe
// it shouldn't), and also depends on none of the lesson sections having the
// same name (though it warns if they do).
var data = "";
for (var i = 0; i < lessons.length; i++) {
	var nameUsed = {};
	var section = lessons[i].lessonSection;
	if (section) {
		if (nameUsed[section]) {
			console.log("Warning: Some lesson sections have the same name, that's a problem.");
		} else {
			var jsLambda = "$.modal.close(); jumpToLesson(" + i + "); return false;";
			data += '<li><a href="#' + section[language] + '" onclick="' + jsLambda + '">' + section[language] + '</a>'
			nameUsed[section] = 1;
		}
	}
}
$('#lesson-sections-list').html(data);
initCode();
initLesson();

function initCode(initLessonSection) {
	// These need to be three separate loops because each may stop at
	// a different point
	for (var i = currentLesson; i >= 0; i--) {
		if (lessons[i].code != null) {
			editor.setValue(lessons[i].code);
			break;
		}
	}
	for (var i = currentLesson; i >= 0; i--) {
		if (lessons[i].hiddenCode != null) {
			hiddenCode = lessons[i].hiddenCode;
			break;
		}
	}
	for (var i = currentLesson; i >= 0; i--) {
		if (lessons[i].lessonSection != null) {
			// Copy the lessonSection from the last one 
			// where it was defined
			lessons[currentLesson].lessonSection = lessons[i].lessonSection;
			break;
		}
	}
	for (var i = currentLesson; i >= 0; i--) {
		if (lessons[i].tutorImage != null) {
			// Copy the tutorImage from the last one 
			// where it was defined
			lessons[currentLesson].tutorImage = lessons[i].tutorImage;
			break;
		}
	}
}
	
function nextLesson() {
	currentLesson += 1;
	// Don't advance past the beginning or end
	if (currentLesson >= lessons.length) {
		currentLesson = lessons.length - 1;
	} else if (currentLesson < 0) {
		currentLesson = 0;
	}
	initLesson();
}

function changeTutorMessage(message) {
	// New message with nice transition (plus the fancy transition
	// works around a rendering bug in Google Chrome).
	var tutorMessage = $('#tutor-message');
	tutorMessage.stop(true).fadeTo(50, 0.5, function() {
		tutorMessage.html(message);
		tutorMessage.fadeTo(250, 1.0);
	});
}

function changeLessonSection(name) {
	var lessonSection = $('#lesson-section');
	// Do nothing if the lessonSection is the same
	if (lessonSection.html() == name) { return; }
	// Show the name of the section of lessons with nice transition
	lessonSection.stop(true).fadeTo(50, 0.5, function() {
		lessonSection.html(name);
		lessonSection.fadeTo(250, 1.0);
	});
}

function changeTutorImage(filename) {
	var currentTutorImage = $('#tutor-img');
	var imgPath = imgToURL(filename);
	// Do nothing if the tutor image is the same
	if (currentTutorImage.attr("src") == imgPath) { return }

	// We need to make sure the image is loaded, so change the
	// image in this rather complicated way
	var i = new Image();
	// Very small chance of a race condition here because we wait for the image to load
	// Deal with it by aborting if the tutorImage has changed by the time this is called
	var oldTutorImage = lessons[currentLesson].tutorImage;
	i.onload = function() {
		if (oldTutorImage != lessons[currentLesson].tutorImage) { return }
		// Show the new tutor with a nice transition
		currentTutorImage.stop(true, true).fadeTo(200, 0.7, function() {
			currentTutorImage.attr("src", imgPath);
			currentTutorImage.fadeTo(200, 1.0);
		});
	};
	i.src = imgPath;
}

function initLesson() {
	var lesson = lessons[currentLesson];

	changeTutorMessage(lesson.message[language]);
	if (lesson.lessonSection != null) {
		changeLessonSection(lesson.lessonSection);
	}
	if (lesson.tutorImage != null) {
		changeTutorImage(tutorImages[lesson.tutorImage - 1]);
	}
	
	if (lesson.hiddenCode != null) {
		// It's important to set this before calling updatePreview 
		// below since it will be used in that code.
		hiddenCode = lesson.hiddenCode;
	}
	if (lesson.code != null) {
		editor.setValue(lesson.code);
	}
	updatePreview();
	if (window.localStorage) {
		// Save progress
		window.localStorage.codeMonsterCurrentLesson = currentLesson;
	}
	// Update progress bar display
	var percent = Math.floor((currentLesson + 1) * 100 / lessons.length);
	$('#lesson-progress').attr('value', percent);
	$('#lesson-progress').attr('title', percent + percentCompletedMessage[language]);
}

// Clicking on the monster or his speech advances to the next lesson
$('#tutor-talk').mousedown(nextLesson);
$('#tutor-avatar').mousedown(nextLesson);

// Reset button sets the code back to what it was at the beginning of the lesson
$('#reset-button').click(function() {
	// Briefly clear the code to give visual feedback, then reset it
	editor.setValue("");
	updatePreview();
	setTimeout(function() {initCode(); updatePreview();}, 100);
});

// Jumping to a different lesson resets the code, and briefly
// says what lesson we are on
function jumpToLesson(lessonNum) {
	// Don't allow illegal values
	if (lessonNum < 0) {
		lessonNum = 0;
	} else if (lessonNum >= lessons.length) {
		lessonNum = lessons.length - 1;
	}
	if (currentLesson != lessonNum) {
		// Only update everything if this is a change
		currentLesson = lessonNum;
		initCode();
		initLesson();
		updatePreview();
	}
	// ... but always show the current lesson
	var lessonNum = $('#lesson-number');
	lessonNum.stop(true).fadeOut(50, function() {
		// Bit of a hack, saves the first word of the string (which should be the word "Lesson", 
		// then appends the new lesson number. Done this way for internationalization.
		lessonNum.html(lessonNum.html().split(" ")[0] + " " + (currentLesson+1));
		lessonNum.fadeIn(100).fadeOut(700);
	});
}

// Back button moves back one lesson, resets the code, and briefly
// says what lesson we are on
$('#back-button').click(function() {
	jumpToLesson(currentLesson - 1);
});

// Disable dragging the image (because it can be confusing to the user)
$('#tutor-avatar img').bind('dragstart', function(evt) { evt.preventDefault(); } );

// Selection is disabled in the CSS, but IE9 seems to have bugs that
// still allow it in rare cases.  Here's yet another attempt to
// prevent IE9 from allowing selection of the tutor text.
$('#tutor').bind('selectstart', function(evt) { evt.preventDefault(); } );

// Enable all the info links at the bottom of the page
// We just use modal dialogs for all of them, never leave the page.
$('.info-link').click( function(evt) {
	// Take the html string and convert it into an id
	// (just the lower case version of the string with spaces made into dashes
	var id = $(evt.target).html().toLowerCase().replace(/\s+/g, "-");
	id = "#" + id;
	// Open the modal dialog using the content for that id
	$(id).modal({
		onOpen: function(d) { 
			// We could make these sequential, but they look good in parallel
			d.overlay.fadeIn(300);
			d.container.fadeIn(700);
			d.data.fadeIn(1000);
		},
		onClose: function(d) { 
			d.data.fadeOut(200);
			d.container.fadeOut(200);
			// $.model.close() needs to be called at the end to clean up
			d.overlay.fadeOut(400, $.modal.close);
		},
		maxWidth: 500,
		maxHeight: 700,
		autoResize: true,
		overlayClose: true,
	});
});


function imgToURL(filename) {
	// return "cm/" + filename;
	return filename;
}
// Preload the tutor images
for (var i=0; i < tutorImages.length; i++) {
	(new Image()).src = imgToURL(tutorImages[i]);
}
