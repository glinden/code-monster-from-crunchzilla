// Copyright 2012 Geeky Ventures

// Each lesson has a tutor message, the code given at the start of the
// lesson, some hiddenCode that is not shown but defines some
// convenience functions and globals, a lessonSection that is
// displayed to give a sense of where you are and progress, which
// tutorImage to display, and a check that (when it exists) will
// display a little congratulatory "You got it!" the first time that
// regex appears in the student's code.
// code, if missing, will not change the code in the box.
// hiddenCode, lessonSection, and tutorImage all will, if missing, use
// the hiddenCode from the last lesson where it was defined.
// youGotItCheck, if missing, will just not display the congrats message.
// Of these, the message is always there and the code often there.  Others
// are usually missing for most lessons.


var lessons =
[
  {
    message: {
      en: "I'm Code Monster! (click on my words to see what's next)",
      de: "Ich bin das Code Monster! (Klick auf meine Wörter was danach kommt)",
      jp: "私はコードマスターよ！私の文章をクリックして次に進んでね"
    },
    code: "c.fillRect(20, 20, 50, 75);\n",
    lessonSection: {
      en: "Getting Started",
      de: "Los geht's!",
      jp: "jp section"
    },
    tutorImage: 1,
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n"
  },
  {
    message: {
      en: "You're going to learn some programming! (click again)",
      de: "Du wirst etwas programmieren lernen! (Klicke wieder hier)",
      jp: "jp"
    },
  },
  {
    message: {
      en: "Below me, on the left, is Javascript code, on the right, what it does.",
      de: "Unter mir, auf der linken Seite, ist Javascript Code. Auf der rechten Seite ist das, was der Code macht",
      jp: "jp"
    }
  },
  {
    message: {
      en: "You can use <span class=tutor-code>fillRect()</span> to draw a box. See the number 50?  Can you change that to 150?",
      de: "Du kannst mit <span class=tutor-code>fillRect()</span> ein Rechteck zeichnen. Siehst Du die Nummer 50? Kannst Du die in 150 ändern?",
      jp: "jp"
    },
    code: "c.fillRect(20, 20, 50, 75);\n",
  },
  {
    message: {
      en: "That made the box wider. What do you think the other numbers do? Try changing them.",
      de: "Das hat das Rechteck weiter gemacht. Was glaubst du machen die anderen Zahlen? Versuche sie zu ändern.",
      jp: "jp"
    },
    lessonSection: {
      en: "Parameters and Drawing",
      de: "Parameter und Zeichnen",
      jp: "jp parameter and drawing section"
    }
  },
  {
    message: {
      en: "Did you figure it out?  The numbers are how far from the left side to draw the box, how far from the top, how wide to draw the box, and how tall.",
      de: "Hast du verstanden was sie machen? Die Zahlen sagen wie weit von links das Rechteck zu zeichnen ist, wie weit von oben, wie weit das Rechteck ist und wie hoch es gezeichnet werden soll.",
      jp: "jp"
    },
  },
  {
    message: {
      en: "Try changing all the numbers!  Play with it!",
      de: "Ändere alle Zahlen! Spiel mit ihnen!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Two boxes. Can you change the numbers to make them bigger?",
      de: "Zwei Rechtecke. Kannst du sie grösser machen?",
      jp: "jp"
    },
    code: "c.fillRect(20, 20, 50, 75);\nc.fillRect(100, 100, 60, 80);\n"
  },
  {
    message: {
      en: "Can you change the numbers to move them around?",
      de: "Kannst du die Zahlen ändern um sie herumzubewegen?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Can you change the numbers so that one covers the other?",
      de: "Kannst du die Zahlen ändern damit eins mit dem anderen überlappt?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Monster like boxes square.",
      de: "Monster mögen Quadrate.",
      jp: "jp"
    },
    code: "c.fillRect(20, 20, 80, 80);\n"
  },
  {
    message: {
      en: "A square has the same width and height.  This box has the same width and height, both are 80.",
      de: "Ein Quadrat hat die gleiche Weite und Höhe. Dieses Rechteck hat die gleiche Weite und Höhe: 80.",
      jp: "jp"
    },
    code: "c.fillRect(20, 20, 80, 80);\n"
  },
  {
    message: {
      en: "Hey, look, this does the same thing!",
      de: "Guck mal! Das hier macht das gleiche!",
      jp: "jp"
    },
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\n",
    lessonSection: {
      en: "Variables",
      de: "Variable",
      jp: "jp variable section"
    }
  },
  {
    message: {
      en: "Why does that do the same thing?  Any ideas?",
      de: "Warum macht das das gleiche? Hast du eine Idee?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "var means variable. What we did is create a variable, called it <span class=tutor-code>size</span>, set it equal to 80, and now we can use <span class=tutor-code>size</span> where we would have used 80. Do you know why we might want that?",
      de: "var bedeutet Variable. Was wir gemacht haben ist das wir eine Variable <span class=tutor-code>size</span> erzeugen, und lassen sie 80 sein, und jetzt können wir <span class=tutor-code>size</span> benutzen wo wir früher 80 hatten. Hast du vielleicht eine Idee warum wir das machen?",
      jp: "jp"
    },
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\n"
  },
  {
    message: {
      en: "What happens if you change 80 to 220?",
      de: "Was passiert wenn du die Zahl 80 in 220 änderst?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "And look!  Wider and taller box, both at the same time!",
      de: "Schau! Das Quadrat ist jetzt weiter und höher! Gleichzeitig!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Can you change the other numbers to move the box around?",
      de: "Kannst du die anderen Zahlen ändern um das Quadrat herumzubewegen?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Can you make the box very small?",
      de: "Kannst Du das Quadrat ganz klein machen?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "What happens if you make <span class=tutor-code>size</span> equal to 0? Or to something really big like 5000?",
      de: "Was passiert wenn du <span class=tutor-code>size</span> zu 0 machst? Oder riesig, wie zum Beispiel 5000?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Monster want two boxes.",
      de: "Monster mag 2 Quadrate.",
      jp: "jp"
    },
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\nc.fillRect(90, 90, size, size);\n"
  },
  {
    message: {
      en: "Both boxes have the same size.  That's a neat trick.",
      de: "Beide sind gleichgross. Das ist schlau.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "You can change what <span class=tutor-code>size</span> is equal to.  That will grow or shrink both boxes at once! Try changing 80 to 180!",
      de: "Du kannst <span class=tutor-code>size</span> ändern zu was du magst. Beide werden gleichzeitig grösser oder kleiner! Probiere die 80 in 180 zu ändern!",
      jp: "jp"
    },
    youGotItCheck: "180"

  },
  {
    message: {
      en: "Can you move each of the boxes around by changing some of the numbers?",
      de: "Kannst du die Quadrate herumbewegen indem du einige Zahlen änderst?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Monster want more boxes.  Three boxes!",
      de: "Monster mag mehr Quadrate! 3 Quadrate!",
      jp: "jp"
    },
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\nc.fillRect(80, 80, size, size);\nc.fillRect(140, 140, size, size);\n"
  },
  {
    message: {
      en: "Now what happens when you change what <span class=tutor-code>size</span> is equal to?",
      de: "Was passiert wenn du <span class=tutor-code>size</span> jetzt änderst?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "More boxes!  Try changing <span class=tutor-code>size</span> now!",
      de: "Mehr Quadrate! Jetzt versuche <span class=tutor-code>size</span> zu ändern!",
      jp: "jp"
    },
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\nc.fillRect(60, 60, size, size);\nc.fillRect(100, 100, size, size);\nc.fillRect(140, 140, size, size);\nc.fillRect(180, 180, size, size);\n"
  },
  {
    message: {
      en: "Ooo!  Color!  Pretty!",
      de: "Oh! Farben! Schön!",
      jp: "jp"
    },
    code: "var size = 80;\n\nc.fillStyle = \"blue\";\nc.fillRect(20, 20, size, size);\n",
    lessonSection: {
      en: "Color",
      de: "Farben",
      jp: "jp color section"
    }
  },
  {
    message: {
      en: "Many colors work.  Try \"green\" or \"purple\" or \"gold\".",
      de: "Viele Farben funktionieren: rot (red), grün (green), blau (blue), violett (purple), goldfarben (gold).",
      jp: "jp"
    }
  },
  {
    message: {
      en: "How about two pink boxes?",
      de: "Wie wäre es mit rosa (pink) Quadraten?",
      jp: "jp"
    },
    code: "var size = 80;\n\nc.fillStyle =\"pink\";\nc.fillRect(20, 20, size, size);\nc.fillRect(90, 90, size, size);\n"
  },
  {
    message: {
      en: "One pink and one silver.",
      de: "Eins rosa (pink), und eins silberfarben (silver).",
      jp: "jp"
    },
    code: "var size = 80;\n\nc.fillStyle =\"pink\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"silver\";\nc.fillRect(90, 90, size, size);\n"
  },
  {
    message: {
      en: "Can you make the silver box gold instead?  And the pink one blue instead?",
      de: "Kannst du das silberne Quadrat gold (gold) machen? Und die rosane blau (blue)?",
      jp: "jp"
    },
    code: "var size = 80;\n\nc.fillStyle =\"pink\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"silver\";\nc.fillRect(90, 90, size, size);\n"
  },
  {
    message: {
      en: "Here are two boxes that are the same color again.  Now can you make the two boxes be different colors?",
      de: "Hier sind 2 Quadrate mit der gleichen Farbe. Kannst du eine von beiden eine andere Farbe geben?",
      jp: "jp"
    },
    code: "var size = 80;\n\nc.fillStyle =\"green\";\nc.fillRect(20, 20, size, size);\n\nc.fillRect(90, 90, size, size);\n"
  },
  {
    message: {
      en: "Here is one version.  I like red and blue.",
      de: "Hier ist eine Lösung. Ich mag rot (red) und blau (blue).",
      jp: "jp"
    },
    code: "var size = 80;\n\nc.fillStyle =\"red\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"blue\";\nc.fillRect(80, 80, size, size);\n"
  },
  {
    message: {
      en: "Red, green, and blue.  That's nice.",
      de: "Rot, grün und blau. Sooo schön.",
      jp: "jp"
    },
    code: "var size = 80;\n\nc.fillStyle =\"red\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"lime\";\nc.fillRect(80, 80, size, size);\nc.fillStyle =\"blue\";\nc.fillRect(140, 140, size, size);\n"
  },
  {
    message: {
      en: "Wha... This does the same thing!  What could <span class=tutor-code>rgb()</span> be?",
      de: "Huch...das macht das gleiche! Was mag wohl <span class=tutor-code>rgb()</span> sein?",
      jp: "jp"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgb(255, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"rgb(0, 255, 0)\";\nc.fillRect(80, 80, size, size);\nc.fillStyle =\"rgb(0, 0, 255)\";\nc.fillRect(140, 140, size, size);\n"
  },
  {
    message: {
      en: "Try changing any of the zeroes to 200 or so.  And try changing any of the 255 to 0. What do the numbers seem to do?",
      de: "Versuche die Null in zum Beispiel 200 zu ändern. Und die 255 in 0. Was scheinen die Zahlen zu machen?",
      jp: "jp"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgb(255, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"rgb(0, 255, 0)\";\nc.fillRect(80, 80, size, size);\nc.fillStyle =\"rgb(0, 0, 255)\";\nc.fillRect(140, 140, size, size);\n"
  },
  {
    message: {
      en: "Did you figure it out?  <span class=tutor-code>rgb()</span> refers to red, green, and blue.  The numbers go from 0 to 255. So, <span class=tutor-code>rgb(0, 255, 0)</span> means no red or blue, but all the green you got!",
      de: "Hast du es herausgefunden? <span class=tutor-code>rgb()</span> kommt von red, green, blue (rot, grün, blau). Die Zahlen gehen von 0 bis 255. <span class=tutor-code>rgb(0, 255, 0)</span> heisst kein rot, viel grün, kein blau.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "You can make lots of colors this way if you change some of the numbers.  Try it!",
      de: "Du kannst viele Farben erzeugen indem du die Zahlen änderst. Versuch es!",
      jp: "jp"
    },
  },
  {
    message: {
      en: "Here is a fun game.  Can you make these two boxes the same color?",
      de: "Hier kommt ein spassiges Spiel: Kannst du beide Quadrate in der gleichen Farbe einfärben?",
      jp: "jp"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgb(0, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"red\";\nc.fillRect(80, 80, size, size);\n",
    lessonSection: {
      en: "Quiz: Color",
      de: "Quiz: Farben",
      jp: "jp quiz color section"
    },
    youGotItCheck: "rgb\s*(\s*255\s*,\s*0\s*,\s*0\s*)"
  },
  {
    message: {
      en: "Can you make these both blue?",
      de: "Kannst du die Quadrate blau machen?",
      jp: "jp"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgb(0, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"blue\";\nc.fillRect(80, 80, size, size);\n",
    youGotItCheck: "rgb(0, 0, 255)"
  },

  {
    message: {
      en: "Can you figure out what the <span class=tutor-code>rgb()</span> numbers should be to make these both yellow?",
      de: "Welche Zahlen ergeben gelb?",
      jp: "jp"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgb(255, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"yellow\";\nc.fillRect(80, 80, size, size);\n"
  },
  {
    message: {
      en: "Can you figure out what the <span class=tutor-code>rgb()</span> numbers should be to make these both teal?",
      de: "Welche Zahlen ergeben blaugrün?",
      jp: "jp"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgb(0, 0, 128)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"teal\";\nc.fillRect(80, 80, size, size);\n"
  },
  {
    message: {
      en: "Okay, this one is really hard.  Can you make these two exactly match?  Can you figure out what the <span class=tutor-code>rgb()</span> numbers should be to make these both crimson? Don't worry if you don't get it exactly, just see how close you can get!",
      de: "Okay, das ist jetzt schwer: Kannst du die Farben genau gleich machen? Welche Zahlen für <span class=tutor-code>rgb()</span> ergeben karminrot (crimson)? Versuche so genau wie möglich die karminrot zu treffen.",
      jp: "jp"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgb(0, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"crimson\";\nc.fillRect(80, 80, size, size);\n"
  },
  {
    message: {
      en: "Here it is.  Whew, that's a hard one!  How close did you get?",
      de: "Hier ist die Lösung. Weia, das war schwer! Wie nah warst du dran?",
      jp: "jp"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgb(220, 20, 60)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"crimson\";\nc.fillRect(80, 80, size, size);\n"
  },
  {
    message: {
      en: "If you want to try others, put \"olive\", \"purple\", \"aqua\", or any other color you can think of as the color for the first box, then try to find the rgb numbers that match it!",
      de: "Wenn du andere Farben probieren willst, probier \"olive\", \"purple\", \"aqua\" oder probier eine andere Farbe (aber in Englisch)",
      jp: "jp"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>rgba()</span> is a crazy version of <span class=tutor-code>rgb()</span>. See what this does?  It's got one more number at the end that's 0.5.  What is that last number doing? Try changing the 0.5 to 0.1.  Or to 0.8.  What does it do?",
      de: "<span class=tutor-code>rgba()</span> ist eine besondere Version von <span class=tutor-code>rgb()</span>. Siehst Du den Unterschied? Sie hat eine Zahl mehr am Ende und die ist 0.5. Was macht die letzte Zahl? Versuch die 0.5 durch 0.1 or 0.8 zu ersetzen. Was passiert?",
      jp: "jp"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgba(255, 0, 0, 0.5)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(80, 80, size, size);\n",
    lessonSection: {
      en: "Color and Transparency",
      de: "Farben und Transparenz",
      jp: "jp colors and transparency section"
    }
  },
  {
    message: {
      en: "The a in <span class=tutor-code>rgba</span> means alpha (how transparent the box is) from 0.0 (invisible) to 1.0 (solid)",
      de: "Das a in <span class=tutor-code>rgba</span> steht für alpha (Transparenz) und sie reicht von 0.0 (unsichtbar) bis 1.0 (undurchsichtig).",
      jp: "jp"
    }
  },
  {
    message: {
      en: "You can do pretty cool things with <span class=tutor-code>rgba()</span>.  Look at this!  Try changing some of the 0.5 alphas to 0.2 or 0.8!",
      de: "Du kannst interessante Sachen mit <span class=tutor-code>rgba()</span> machen. Schau mal! Ändere einige der 0.5 transparenz in 0.2 oder 0.8!",
      jp: "jp"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgba(255, 0, 0, 0.5)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"rgba(0, 255, 0, 0.5)\";\nc.fillRect(80, 80, size, size);\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(140, 140, size, size);\n"
  },
  {
    message: {
      en: "Try changing the size from 80 to 180!  You can get some fun effects when the colors overlap. Play with it!",
      de: "Versuch die Grösse von 80 auf 180 zu ändern! Du kannst spassige Effekte erhalten wenn Farben überlappen. Spiel damit!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Let's go back to variables. Monster no like to repeat numbers. Can you replace both the 20 numbers with <span class=tutor-code>offset</span>?",
      de: "Lass uns zurück auf Variablen kommen. Monster mögen keine Wiederholungen. Kannst Du beide 20 mit <span class=tutor-code>offset</span> ersetzen?",
      jp: "jp"
    },
    code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(20, 20, size, size);\nc.fillRect(90, 90, size, size);\n",
    lessonSection: {
      en: "Operators and Assignment",
      de: "Operatoren und Zuweisungen",
      jp: "jp operators and assignment section"
    }
  },
  {
    message: {
      en: "Now try changing what <span class=tutor-code>offset</span> is equal to from 30 to 50.  See how you can move the first box?",
      de: "Jetzt ändere <span class=tutor-code>offset</span> von 30 nach 50. Siehst du wie sich das erste Quadrat bewegt?",
      jp: "jp"
    },
    code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\nc.fillRect(90, 90, size, size);\n"
  },
  {
    message: {
      en: "Variables can be set to new values.  See how offset is set to 100 before being used by the second box?",
      de: "Variablen können neue Werte erhalten. Siehst du wie sie auf 100 gesetzt wird bevor es vom zweiten Quadrat benutzt wird?",
      jp: "jp"
    },
    code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\noffset = 100;\nc.fillRect(offset, offset, size, size);\n"
  },
  {
    message: {
      en: "Try moving the second box.  Change the 100 to 50 or 150.",
      de: "Versuche das zweite Quadrat zu bewegen. Ändere die 100 in 50 oder 150.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Try moving the first box too.",
      de: "Versuche das erste Quadrat auch zu bewegen.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Can you put the boxes on top of each other so it looks like just one box?",
      de: "Kannst Du beide Quadrate übereinander zeichnen sodass es wie ein Quadrat aussieht?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "You can also add numbers to a variable. See what this is doing? It changes <span class=tutor-code>offset</span> with <span class=tutor-code>offset = offset + 50</span>",
      de: "Du kannst auch Zahlen zu Variablen addieren. Siehst du wie das funktioniert? Es ändert <span class=tutor-code>offset</span> mit <span class=tutor-code>offset = offset + 50</span>",
      jp: "jp"
    },
    code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 50;\nc.fillRect(offset, offset, size, size);\n"
  },
  {
    message: {
      en: "<span class=tutor-code>offset = offset + 50</span> means take <span class=tutor-code>offset</span>, add 50 to it, then make <span class=tutor-code>offset</span> equal that now.  In other words, make <span class=tutor-code>offset</span> 50 more than it used to be.",
      de: "<span class=tutor-code>offset = offset + 50</span> bedeutet: nehme den Wert von <span class=tutor-code>offset</span>, addiere 50 dazu, und setze <span class=tutor-code>offset</span> auf den neuen Wert. In anderen Worten: mache <span class=tutor-code>offset</span> 50 mehr.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "How about you try it?  Can you replace both the 90 numbers used for the (left, top) of the second box with a variable? Hint: Either create a new variable or change <span class=tutor-code>offset</span> and then use <span class=tutor-code>offset</span>.",
      de: "Probier mal! Kannst du beide 90 für (links, oben) des zweiten Quadrates mit einer Variablen ändern? Ein Tip: Entweder zu benutzt eine neue Variable, oder du änderst <span class=tutor-code>offset</span> und benutzt <span class=tutor-code>offset</span> dann.",
      jp: "jp"
    },
    code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\n\nc.fillRect(90, 90, size, size);\n",
    lessonSection: {
      en: "Quiz: Variables and Operators",
      de: "de section",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Monsters like adding.  Me add good.  Okay, now try changing <span class=tutor-code>offset</span> from 30 to 80.  See what happens?",
      de: "Monster mag addieren. Ich kann das! Okay, versuch <span class=tutor-code>offset</span> von 30 auf 80 zu ändern. Was passiert?",
      jp: "jp"
    },
    code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\n"
  },
  {
    message: {
      en: "Ooo, you can move both boxes together!  Change the <span class=tutor-code>offset</span> and move 'em around!",
      de: "Oh, du kannst beide Quadrate zusammen bewegen! Ändere <span class=tutor-code>offset</span> und bewege sie herum!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "This looks the same, but it's a little different.  What's that <span class=tutor-code>*</span> doing?  What happens if you change <span class=tutor-code>* 3</span> to <span class=tutor-code>* 2</span>?  Try changing it to <span class=tutor-code>* 1</span>.  Try changing the <span class=tutor-code>offset</span> too.  Did you figure out what <span class=tutor-code>*</span> means?",
      de: "Das sieht ähnlich aus, ist aber etwas anders. Was macht das <span class=tutor-code>*</span> ? Was passiert wenn du <span class=tutor-code>* 3</span> in <span class=tutor-code>* 2</span> änderst? Probier auch mal <span class=tutor-code>* 1</span>. Ändere auch <span class=tutor-code>offset</span>. Hast du's herausgefunden was <span class=tutor-code>*</span> macht?",
      jp: "jp"
    },
    code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\noffset = offset * 3;\nc.fillRect(offset, offset, size, size);\n",
    lessonSection: {
      en: "More Operators",
      de: "Mehr Operatoren",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>*</span> means multiply.  <span class=tutor-code>2 * 2</span> would be 4.  So, <span class=tutor-code>offset = offset * 3</span> means make <span class=tutor-code>offset</span> three times bigger.",
      de: "<span class=tutor-code>*</span> benutzt man zum multiplizieren. <span class=tutor-code>2 * 2</span> ist 4. <span class=tutor-code>offset = offset * 3</span> macht also <span class=tutor-code>offset</span> 3 mal grösser.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>*</span> means multiply and <span class=tutor-code>/</span> means divide.  So, what we set size equal to below is just a complicated way of saying make <span class=tutor-code>size</span> equal to 100.  See?",
      de: "<span class=tutor-code>*</span> bedeutet multiplizieren und <span class=tutor-code>/</span> bedeuted dividieren. Was unten steht ist deshalb eine komplizierte Art um <span class=tutor-code>size</span> auf 100 zu setzen. Siehst du?",
      jp: "jp"
    },
    code: "var size = 20 * 6 / 2 + 50 - 10;\nvar offset = 30;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\noffset = offset * 3;\nc.fillRect(offset, offset, size, size);\n"
  },
  {
    message: {
      en: "We can also compare numbers.  See this code?  We will only draw a second box when <span class=tutor-code>size</span> is less than 80.",
      de: "Wir können auch Nummern vergleichen. Siest du den Code? Wir malen ein zweites Quadrat nur wenn <span class=tutor-code>offset</span> weniger als 80 ist.",
      jp: "jp"
    },
    code: "var size = 50;\n\nc.fillRect(20, 20, size, size);\nif (size < 80) {\n  c.fillRect(100, 100, size, size);\n}\n",
    lessonSection: {
      en: "If and Comparisons",
      de: "Wenn (If) und Vergleiche",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Try changing <span class=tutor-code>size</span> to 150.  See what happens? Try changing <span class=tutor-code>size</span> to 79.  Then change it to 80.",
      de: "Versuche <span class=tutor-code>size</span> in 150 zu ändern. Was passiert? Probiere <span class=tutor-code>size</span> auf 79 zu setzen. Dann auf 80.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Okay, let's see what you know!  Here are two boxes.  Can you add a third box (offset by another 60 from the second box)?",
      de: "Okay, lass uns sehen was du weisst! Hier sind zwei Quadrate. Kannst du ein drittes Quadrat zeichnen was 60 mehr rechts/unten vom zweiten Quadrat ist?",
      jp: "jp"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"lime\";\n\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\n",
    lessonSection: {
      en: "Quiz: Variables and Color",
      de: "Quiz: Variablen und Farben",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Here is one way to do it. Try changing the <span class=tutor-code>size</span> or <span class=tutor-code>offset</span>!",
      de: "Hier ist eine Möglichkeit das zu machen. Versuche <span class=tutor-code>size</span> oder <span class=tutor-code>offset</span> zu ändern!",
      jp: "jp"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"lime\";\n\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\n"
  },
  {
    message: {
      en: "Remember <span class=tutor-code>rgba()</span> ?  Monster like.  Can you make me three boxes with different colors?",
      de: "Erinnerst du dich an <span class=tutor-code>rgba()</span> ? Monster mag das. Kannst du drei Quadrate mit verschiedenen Farben machen?",
      jp: "jp"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\n"
  },
  {
    message: {
      en: "Here is one way.  Ooo!  Pretty!  Try changing <span class=tutor-code>size</span>, <span class=tutor-code>offset</span>, or the red, blue, and green numbers!",
      de: "So kann man das machen. Oh! Schön! Versuche <span class=tutor-code>size</span>, <span class=tutor-code>offset</span>, oder die rot, grün oder blau Werte zu ändern!",
      jp: "jp"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(0, 255, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(255, 0, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\n"
  },
  {
    message: {
      en: "Monster no like writing code more than once.  Lots of writing the same code more than once here, me not like.",
      de: "Monster mag Code nicht mehr als einmal schreiben. Hier ist viel gleich. Mag ich nicht.",
      jp: "jp"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\n\nc.fillRect(offset, offset, size, size);\noffset = offset + 40;\nc.fillRect(offset, offset, size, size);\noffset = offset + 40;\nc.fillRect(offset, offset, size, size);\n",
    lessonSection: {
      en: "For Loops",
      de: "For Schleifen",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "This is called a <span class=tutor-code>for</span> loop.  It repeats code without writing it more than once.  Me like.  Try changing the 3 to 5!",
      de: "Das hier ist eine <span class=tutor-code>for</span> Schleife. Sie wiederholt Sachen ohne dass man das mehrmals schreiben muss. Ich mag das. Versuche die 3 in 5 zu ändern!",
      jp: "jp"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\nfor (var i = 0; i < 3; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n"
  },
  {
    message: {
      en: "For loops have three parts, where to start (<span class=tutor-code>i = 0</span>), when to keep going (<span class=tutor-code>i < 5</span>), and how much to change each time (<span class=tutor-code>i = i + 1</span>). Can you make ten boxes?",
      de: "<span class=tutor-code>for</span> Schleifen haben 3 Teile: wo man anfängt (<span class=tutor-code>i = 0</span>), wie lange man weitermacht (<span class=tutor-code>i < 5</span>), und wieviel pro Schleife verändert wird (<span class=tutor-code>i = i + 1</span>). Kannst du 10 Quadrate machen?",
      jp: "jp"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\nfor (var i = 0; i < 5; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n"
  },
  {
    message: {
      en: "Argh!  They don't fit?  How can you make ten boxes fit?",
      de: "Weia! Sie passen nicht! Wie kannst du die 10 Quadrate passend machen?",
      jp: "jp"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n"
  },
  {
    message: {
      en: "Here is one way!",
      de: "Hier ist eine Möglichkeit.",
      jp: "jp"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 10;\n}\n"
  },
  {
    message: {
      en: "Smaller boxes also fit.  Try playing with <span class=tutor-code>size</span>, <span class=tutor-code>offset</span>, and changing 10!",
      de: "Kleinere Quadrate passen auch. Versuche auch <span class=tutor-code>size</span>, <span class=tutor-code>offset</span> und auch die 10 zu ändern!",
      jp: "jp"
    },
    code: "var size = 20;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 10;\n}\n"
  },
  {
    message: {
      en: "Remember rgba()? What's this doing?  Play with it!",
      de: "Erinnerst du dich an rgba()? Was macht das? Spiel damit!",
      jp: "jp"
    },
    code: "var size = 50;\nvar offset = 20;\n\nfor (var i = 0; i < 10; i = i + 1) {\n  var b = i * 25;\n  var rgba = \"rgba(0, 0, \" + b + \", 0.5)\";\n  c.fillStyle = rgba;\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 20;\n}\n",
    lessonSection: {
      en: "Fun with For Loops",
      de: "Spass mit For Schleifen",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Complicated!  That means use 0 blue light for the first box, 25 for the second, then 50, 75, 100...",
      de: "Kompliziert! Das bedeutet benutze 0 blau für das erste Quadrat, 25 für das zweite, dann 50, 75, 100...",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Here is another one, this one changing alpha!  Neat-o!",
      de: "Hier ist noch eins. Das ändert die Transparenz (alpha). Cool!",
      jp: "jp"
    },
    code: "var size = 50;\nvar offset = 20;\n\nfor (var i = 0.1; i < 0.5; i = i + 0.05) {\n  var rgba = \"rgba(0, 0, 255, \" + i + \")\";\n  c.fillStyle = rgba;\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 20;\n}\n"
  },
  {
    message: {
      en: "Can you show me what you learned?  Draw me a square! Hint: Remember <span class=tutor-code>c.fillRect(<i>left, top, width, height</i>);</span> to draw a box.",
      de: "Kannst du mir zeigen was du gelernt hast? Mal mir ein Quadrat! Tip: Erinnere dich an <span class=tutor-code>c.fillRect(<i>left, top, width, height</i>);</span> um ein Rechteck zu zeichnen.",
      jp: "jp"
    },
    code: "",
    lessonSection: {
      en: "Quiz: Write Code Yourself",
      de: "Quiz: Schreib deinen eigenen Code",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Can you add another square?",
      de: "Kannst du noch ein Quadrat zeichnen?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Now can you make the second square red? (Hint: <span class=tutor-code>c.fillStyle = \"blue\";</span> before <span class=tutor-code>fillRect()</span> will make the rect blue)",
      de: "Kannst du das zweite Quadrat rot machen Tip: <span class=tutor-code>c.fillStyle = \"blue\";</span> vor <span class=tutor-code>fillRect()</span> macht das nächste Recheck blau (blue)",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Great! Did you get something like this? If not, try playing with the numbers a bit to see how it works!",
      de: "Grossartig! Hast du sowas wie das hier geschrieben? Wenn nicht, ändere die Zahlen und sieh wie's funktioniert!",
      jp: "jp"
    },
    code: "c.fillRect(10, 10, 20, 20);\nc.fillStyle = \"red\";\nc.fillRect(50, 50, 100, 100);\n"
  },
  {
    message: {
      en: "Monster draw line. What do you think <span class=tutor-code>moveTo()</span> does? <span class=tutor-code>lineTo()</span> ? Try changing 20 to 50.",
      de: "Monster malt Linien. Was meinst du was <span class=tutor-code>moveTo()</span> macht? Und <span class=tutor-code>lineTo()</span> ? Probier die 20 in 50 zu ändern.",
      jp: "jp"
    },
    code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.stroke();\n",
    lessonSection: {
      en: "Lines",
      de: "Linien",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Try changing the other numbers too.  Can you figure out what <span class=tutor-code>moveTo()</span> and <span class=tutor-code>lineTo()</span> do?",
      de: "Versuch auch die anderen Zahlen zu ändern. Weisst du was <span class=tutor-code>moveTo()</span> und <span class=tutor-code>lineTo()</span> tun?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>moveTo(left, top)</span> moves the pen to a spot without drawing.  <span class=tutor-code>lineTo(left, top)</span> draws a line from wherever the pen is to a spot.",
      de: "moveTo(links, oben) bewegt den Zeichenstift zu den Punkt (links, oben) ohne etwas zu zeichnen. lineTo(links, open) malt eine Linie von woimmer der Zeichenstift ist zu den Punkt (links, oben).",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Here is what happens if we do a second <span class=tutor-code>lineTo()</span>.  The second line starts from where the first ended.",
      de: "Hier siehst du was passiert wenn man ein zweites <span class=tutor-code>lineTo()</span> benutzt: die zweite Linie startet dort wo die erste endete.",
      jp: "jp"
    },
    code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.lineTo(120, 150);\nc.stroke();\n"
  },
  {
    message: {
      en: "So, we're drawing a path, a trail of lines all connected together.  We start the path with <span class=tutor-code>beginPath()</span> and draw everything with <span class=tutor-code>stroke()</span>.",
      de: "Wir zeichnen also einen Pfad der aus verbundenen Linien besteht. Wir starten den Pfad mit <span class=tutor-code>beginPath()</span> und malen alles auf einmal mit <span class=tutor-code>stroke()</span>.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "If we put a <span class=tutor-code>moveTo()</span> before the second <span class=tutor-code>lineTo()</span>, we'll move the pen without drawing.  See?",
      de: "Wenn wir <span class=tutor-code>moveTo()</span> vor das zweite <span class=tutor-code>lineTo()</span> benutzen, bewegen wir den Zeichenstift ohne zu zeichnen. Siehst du?",
      jp: "jp"
    },
    code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.moveTo(120, 60);\nc.lineTo(120, 150);\nc.stroke();\n"
  },
  {
    message: {
      en: "You try it!  Add another line, put a second <span class=tutor-code>c.lineTo()</span> after the first going to (50, 115).",
      de: "Probier du es! Füge eine neue Linue hinzu: mach ein zweites <span class=tutor-code>c.lineTo()</span> nach dem ersten um zu (50, 115) zu gehen.",
      jp: "jp"
    },
    code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\n\nc.stroke();\n"
  },
  {
    message: {
      en: "Did that do what you expected?  Try adding a third line!",
      de: "Hat es das gemacht was du gedacht has? Füge eine dritte Linie hinzu!",
      jp: "jp"
    },
    code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\n\nc.stroke();\n"
  },
  {
    message: {
      en: "Can you make a triangle?",
      de: "Kannst du ein Dreieck machen?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Here is one way, a triangle!",
      de: "Hier ist eine Möglichkeit ein Dreieck zu machen.",
      jp: "jp"
    },
    code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\nc.stroke();\n"
  },
  {
    message: {
      en: "Okay, an orange triangle.  Like blue better.  Can you make it blue?",
      de: "Okay, ein orangenes Dreieck. Ich mal blau lieber. Kannst du es blau (blue) machen?",
      jp: "jp"
    },
    code: "c.beginPath();\nc.strokeStyle = \"orange\";\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\nc.stroke();\n"
  },
  {
    message: {
      en: "I was trying to make two triangles, but forgot a <span class=tutor-code>moveTo()</span>.  See what happened?",
      de: "ich wollte zwei Dreiecke machen, aber ich have <span class=tutor-code>moveTo()</span> vergessen. Siehst du was passiert ist?",
      jp: "jp"
    },
    code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\n\nc.lineTo(250, 215);\nc.lineTo(150, 215);\nc.lineTo(200, 130);\nc.stroke();\n"
  },
  {
    message: {
      en: "That's not good.  Can you add <span class=tutor-code>c.moveTo(200, 130);</span> to make it two separate triangles?",
      de: "Das ist nicht gut. Kannst du <span class=tutor-code>c.moveTo(200, 130);</span> irgendwo einfügen damit es zwei Dreiecke werden?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "I want a lot of triangles. We need to use <span class=tutor-code>for</span>!  This <span class=tutor-code>for</span> loop draws two triangles.",
      de: "Ich male viele Dreiecke! Wir brauchen <span class=tutor-code>for</span>! Diese  <span class=tutor-code>for</span> Schleife zeichnet zwei Dreiecke.",
      jp: "jp"
    },
    code: "c.beginPath();\nfor (var i = 30; i <= 60; i = i + 30) {\n  c.moveTo(70 + i, i);\n  c.lineTo(120 + i, 85 + i);\n  c.lineTo(20 + i, 85 + i);\n  c.lineTo(70 + i, i);\n}\nc.stroke();\n",
    lessonSection: {
      en: "Lines and Loops",
      de: "Linien und Schleifen",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "This <span class=tutor-code>for</span> loop starts at 30 and increases by 30 every time.  So, until it is told to stop, it counts 30, 60, 90, 120...  Right now, the for loop is told to stop at 60.",
      de: "Diese <span class=tutor-code>for</span> Schleife startet mit 30 und erhöht sich um 30 jedes mal. Das heisst es zählt 30, 60, 90, 120... bis es fertig ist. Im Moment hört es auf wenn 60 erreicht ist.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "So, can you make this <span class=tutor-code>for</span> loop draw three triangles? Five?",
      de: "Kannst du diese <span class=tutor-code>for</span> Schleife drei Dreiecke zeichnen lassen? Fünf auch?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Can you make more triangles by changing how the <span class=tutor-code>for</span> loop goes up?  What if it counted by 10 each time, so it would count 30, 40, 50, 60... Can you do try that?",
      de: "Kannst du mehr Dreiecke zeichnen indem du die Zahl verringerst um den sich der Schleifenzähler ändert pro Schleife? Was wenn du 10 pro Schleife addierst? Es würde dann so zählen: 30, 40, 50, 60... Kannst du das probieren?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Aieee!  Look at this!  Forty green triangles!",
      de: "Cooool! Schau mal! Vierzig grüne Dreiecke!",
      jp: "jp"
    },
    code: "c.strokeStyle = \"green\";\nc.beginPath();\nfor (var i = 10; i <= 210; i = i + 5) {\n  c.moveTo(70 + i, i);\n  c.lineTo(120 + i, 85 + i);\n  c.lineTo(20 + i, 85 + i);\n  c.lineTo(70 + i, i);\n}\nc.stroke();\n"
  },
  {
    message: {
      en: "Play with it more!  Can you change the color?  Can you make even more triangles?",
      de: "Spiel damit! Kannst du die Farbe ändern? Kannst du noch mehr Dreiecke machen?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Two boxes, one using <span class=tutor-code>strokeRect()</span>, the other using four lines.",
      de: "Zwei Quadrate. Eins mit <span class=tutor-code>strokeRect()</span> und eins mit vier Linien",
      jp: "jp"
    },
    code: "var size = 100;\n// First box\nc.strokeRect(30, 30, size, size);\n// Second box\nc.beginPath();\nc.moveTo(80, 80);\nc.lineTo(80 + size, 80);\nc.lineTo(80 + size, 80 + size);\nc.lineTo(80, 80 + size);\nc.lineTo(80, 80);\nc.stroke();\n",
    lessonSection: {
      en: "Coding It Easy",
      de: "Coding ist einfach",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Sure takes a lot more code to draw it with lines. Can you add a third box?",
      de: "Es braucht deutlich mehr Code um mit Linien zu zeichnen. Kannst du ein drittes Quadrat hinzufügen?",
      jp: "jp"
    },
    code: "var size = 100;\n// First box\nc.strokeRect(30, 30, size, size);\n// Second box\nc.beginPath();\nc.moveTo(80, 80);\nc.lineTo(80 + size, 80);\nc.lineTo(80 + size, 80 + size);\nc.lineTo(80, 80 + size);\nc.lineTo(80, 80);\nc.stroke();\n// Third box?\n"
  },
  {
    message: {
      en: "<span class=tutor-code>strokeRect()</span> is easier, isn't it?  Here are three boxes all using <span class=tutor-code>strokeRect()</span>. Can you add a fourth?",
      de: "<span class=tutor-code>strokeRect()</span> ist einfacher, gell? Hier sind drei Quadrate mit <span class=tutor-code>strokeRect()</span>. Kannst du ein viertes hinzufügen?",
      jp: "jp"
    },
    code: "var size = 100;\n\nc.strokeRect(30, 30, size, size);\nc.strokeRect(80, 80, size, size);\nc.strokeRect(130, 130, size, size);\n"
  },
  {
    message: {
      en: "What if we want even more boxes?  Lots of copying.  Yuck-o.",
      de: "Was wenn wir mehr Quadrate möchten? Viel Code zu kopieren. Bäh...",
      jp: "jp"
    },
    lessonSection: {
      en: "Avoid Repeating Code",
      de: "Vermeidung von Wiederholungen",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "I know!  Use <span class=tutor-code>for</span> loop!  Can you make more boxes for Code Monster?",
      de: "Ich weiss! <span class=tutor-code>for</span> Schleifen! Kannst du mehr Quadrate für mich machen?",
      jp: "jp"
    },
    code: "var size = 100;\n\nfor (var x = 30; x <= 80; x = x + 50) {\n  c.strokeRect(x, x, size, size);\n}\n"
  },
  {
    message: {
      en: "Can you make more than ten boxes?  And still fit all of them on the screen?",
      de: "Kannst du mehr als 10 Quadrate machen? Und passen die noch auf den Bildschirm?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Is it easier now to make more boxes? Why is that?",
      de: "Ist es jetzt einfacher mehr Quadrate zu machen? Warum ist das so?",
      jp: "jp"
    },
    code: "var size = 100;\nvar num = 3;\nvar offset = 30;\n\nfor (var i = 1; i <= num; i = i + 1) {\n  c.strokeRect(i * offset, i * offset, size, size);\n}\n",
    lessonSection: {
      en: "Variables Make It Easy Too",
      de: "Variable machen es leichter",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "This works by having <span class=tutor-code>i</span> count up 1, 2, 3... then putting each box's (left, top) at <span class=tutor-code>i * offset</span>, so, since <span class=tutor-code>offset</span> is 30, the top left of the first box is (30, 30), the second is at (60, 60), then (90, 90) ...",
      de: "Das funktioniert indem wir <span class=tutor-code>i</span> von 1, 2, 3... zählen lassen, und jedes Quadrat (links, oben) <span class=tutor-code>i * offset</span> sein lassen, und weil <span class=tutor-code>offset</span> 30 ist, ist (links, oben) vom ersten Quadrat (30, 30), vom zweiten ist es (60, 60), dann (90, 90)...",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Try changing <span class=tutor-code>size</span>, <span class=tutor-code>num</span>, and <span class=tutor-code>offset</span>.  See what happens?  Play with it!",
      de: "Ändere <span class=tutor-code>size</span>, <span class=tutor-code>num</span>, und <span class=tutor-code>offset</span> und sieh was passiert.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "It's often good to have variables that control things (like <span class=tutor-code>size</span>, <span class=tutor-code>num</span>, and <span class=tutor-code>offset</span>) together so they are easy to change.  Like it?",
      de: "Es ist oft sinnvoll Variablen Sachen zusammen kontrollieren zu lassen (wie <span class=tutor-code>size</span>, <span class=tutor-code>num</span> und <span class=tutor-code>offset</span>) damit sie einfacher zu ändern sind. Magst du das auch?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Can you show me some of what you know? Draw a box. <br>Hint: <span class=tutor-code>c.strokeRect(<i>left, top, width, height</i>);</span> draws a box.",
      de: "Kannst du mir zeigen was du weisst? Zeichne ein Quadrat. <br>Tip: <span class=tutor-code>c.strokeRect(<i>links, oben, weite, höhe</i>);</span> zeichnet ein Rechteck.",
      jp: "jp"
    },
    code: "",
    lessonSection: {
      en: "Quiz: For Loops",
      de: "Quiz: For Schleifen",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Now draw four boxes. Hint: Making four boxes is easy using <span class=tutor-code>for</span>. Remember, <span class=tutor-code>for</span> loop look like this: <span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",
      de: "Jetzt zeichne 4 Quadrate. Tip: Es ist einfach mit der <span class=tutor-code>for</span> Schleife. <span class=tutor-code>for</span> Schleifen sehen so aus: <span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",
      jp: "jp"
    },
    code: ""
  },
  {
    message: {
      en: "Can you make it so you can change the size of all your boxes all at once? Hint: To make a variable named <span class=tutor-code>size</span> set to 50, you use <span class=tutor-code>var size = 50;</span>",
      de: "Kannst du es ändern dass du die Grösse aller Quadrate auf einmal ändern kannst? Tip: Damit du eine Variable mit dem Namen <span class=tutor-code>size</span> mit dem Wert 50 bekommst, schreib <span class=tutor-code>var size = 50;</span>",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Wow, you're learning to program!  Lots of ways you could do this, but did you get something like this? If not, try changing some stuff, figure out how it works!",
      de: "Super! Wir lernen programmieren! Es gibt viele Möglichkeiten das zu machen. Hier ist eine Lösung.",
      jp: "jp"
    },
    code: "var size = 50;\n\nfor (var i = 0; i < 4; i += 1) {\n  var x = 80 + 30 * i;\n  var y = 80 + 10 * i;\n  c.strokeRect(x, y, size, size);\n}\n"
  },
  {
    message: {
      en: "Code Monster no like repeating self.  No like.  No like.  For loops avoid repeating.  Me now show you functions too. Functions also avoid repeating.",
      de: "Code Monster mag keine Wiederholungen. Schlecht! Schlecht! For Schleifen vermeiden Wiederholungen. Ich zeig jetzt Funktionen. Funktionen vermeiden auch Wiederholungen.",
      jp: "jp"
    },
    code: "// All work and no play\n// make monster a dull boy\n// All work and no play\n// make monster a dull boy\n// All work and no play\n// make monster a dull boy\n",
    lessonSection: {
      en: "Your Own Functions",
      de: "Deine eigenen Funktionen",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "This is a new function, <span class=tutor-code>strokeSquare()</span>.  It is just like <span class=tutor-code>strokeRect()</span>, but draws squares.",
      de: "Das ist eine neue Funktion: <span class=tutor-code>strokeSquare()</span>. Es ist wie <span class=tutor-code>strokeRect()</span>, aber es zeichnet Quadrate.",
      jp: "jp"
    },
    code: "function strokeSquare(left, top, size) {\n  c.strokeRect(left, top, size, size);\n}\n\nstrokeSquare(30, 100, 50);\nstrokeSquare(10, 10, 200);\nstrokeSquare(50, 50, 10);\n"
  },
  {
    message: {
      en: "<span class=tutor-code>strokeSquare()</span> uses <span class=tutor-code>strokeRect()</span> to draw a rectangle with the same width and height. See how it works?",
      de: "<span class=tutor-code>strokeSquare()</span> benutzt <span class=tutor-code>strokeRect()</span> um Rechtecke mit der gleichen Höhe wie Breite zu zeichnen. Siehst du wie das funktioniert?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "So, the first square starts at (30, 100) and then has a height and width of 50. See?",
      de: "Das erste Quadrat startet bei (30, 100) und hat eine Höhe als auch Breite von 50. Siehst du?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Can you add a fourth square below the others using <span class=tutor-code>strokeSquare()</span>?",
      de: "Kannst du ein 4. Quadrat mit <span class=tutor-code>strokeSquare()</span> unter den anderen zeichnen?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Ooo! A star! Pretty! Change some of the numbers!  Mess it up!",
      de: "Oh! Ein Stern! Schön! Ändere die Zahlen um zu sehen was passiert!",
      jp: "jp"
    },
    code: "c.beginPath();\nc.moveTo(50, 100);\nc.lineTo(150, 100);\nc.lineTo(65, 150);\nc.lineTo(100, 60);\nc.lineTo(135, 150);\nc.lineTo(50, 100);\nc.stroke();\n",
    lessonSection: {
      en: "More Lines",
      de: "Mehr Linien",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Wait, stars aren't green.  Can you make it yellow or gold?",
      de: "Moment mal...Sterne sind nicht grün. Kannst du ihn gelb (yellow) oder goldfarben (gold) machen?",
      jp: "jp"
    },
    code: "c.strokeStyle = \"green\";\nc.beginPath();\nc.moveTo(50, 100);\nc.lineTo(150, 100);\nc.lineTo(65, 150);\nc.lineTo(100, 60);\nc.lineTo(135, 150);\nc.lineTo(50, 100);\nc.stroke();\n"
  },
  {
    message: {
      en: "Ooo! A solid gold star! Did you know you can do that? Change some of the numbers!  Mess it up!",
      de: "Oh! Ein goldener Stern! Hast du gewusst dass man das machen kann? Ändere die Zahlen wieder!",
      jp: "jp"
    },
    code: "c.fillStyle = \"gold\";\nc.beginPath();\nc.moveTo(50, 100);\nc.lineTo(150, 100);\nc.lineTo(65, 150);\nc.lineTo(100, 60);\nc.lineTo(135, 150);\nc.lineTo(50, 100);\nc.fill();\n"
  },
  {
    message: {
      en: "Variables make it easy to change and add more stars. Try changing <span class=tutor-code>x</span>, <span class=tutor-code>y</span>, and <span class=tutor-code>size</span> (or anything else)!",
      de: "Variablen machen es einfach den Stern zu ändern oder mehr zu machen. Versuche <span class=tutor-code>x</span>, <span class=tutor-code>y</span>, und <span class=tutor-code>size</span> zu ändern!",
      jp: "jp"
    },
    code: "c.fillStyle = \"gold\";\n\nvar x = 50;\nvar y = 100;\nvar size = 100;\n\nc.beginPath();\nc.moveTo(x, y);\nc.lineTo(x + size, y);\nc.lineTo(x + size * 0.15, y + size * 0.5);\nc.lineTo(x + size / 2, y - size * 0.4);\nc.lineTo(x + size * 0.85, y + size * 0.5);\nc.lineTo(x, y);\nc.fill();\n"
  },
  {
    message: {
      en: "Here are two stars, but all that repeating myself hurts. No like. What we do?",
      de: "Hier sind zwei Sterne, aber all die Wiederholungen tun weh. Mag ich nicht. Was können wir da machen?",
      jp: "jp"
    },
    code: "c.fillStyle = \"gold\";\n\nvar x = 50;\nvar y = 100;\nvar size = 100;\n\nc.beginPath();\nc.moveTo(x, y);\nc.lineTo(x + size, y);\nc.lineTo(x + size * 0.15, y + size * 0.5);\nc.lineTo(x + size / 2, y - size * 0.4);\nc.lineTo(x + size * 0.85, y + size * 0.5);\nc.lineTo(x, y);\nc.fill();\nx += 100;\ny += 50;\nc.beginPath();\nc.moveTo(x, y);\nc.lineTo(x + size, y);\nc.lineTo(x + size * 0.15, y + size * 0.5);\nc.lineTo(x + size / 2, y - size * 0.4);\nc.lineTo(x + size * 0.85, y + size * 0.5);\nc.lineTo(x, y);\nc.fill();\n"
  },
  {
    message: {
      en: "Functions! It's <span class=tutor-code>fillStar()</span>! Can you add a third star?",
      de: "Funktionen! Sie heisst <span class=tutor-code>fillStar()</span>! Kannst Du einen dritten Stern malen?",
      jp: "jp"
    },
    code: "c.fillStyle = \"gold\";\nvar size = 100;\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y);\n  c.lineTo(x + s, y);\n  c.lineTo(x + s * 0.15, y + s * 0.5);\n  c.lineTo(x + s / 2, y - s * 0.4);\n  c.lineTo(x + s * 0.85, y + s * 0.5);\n  c.lineTo(x, y);\n  c.fill();\n}\n\nfillStar(50, 100, size);\nfillStar(150, 150, size);",
    lessonSection: {
      en: "More Functions",
      de: "Mehr Funktionen",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Four stars in a row!  Can you make it eight?",
      de: "Vier Sterne in einer Reihe! Kannst du acht machen?",
      jp: "jp"
    },
    code: "c.fillStyle = \"gold\";\nvar size = 40;\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y);\n  c.lineTo(x + s, y);\n  c.lineTo(x + s * 0.15, y + s * 0.5);\n  c.lineTo(x + s / 2, y - s * 0.4);\n  c.lineTo(x + s * 0.85, y + s * 0.5);\n  c.lineTo(x, y);\n  c.fill();\n}\n\nfor (var i = 0; i < 4; i = i + 1) {\n  fillStar(i * size, 50, size);\n}\n"
  },
  {
    message: {
      en: "Two loops!  Try changing size or the number of stars!",
      de: "Zwei Schleifen! Versuch die Grösse oder die Anzahl der Sterne zu ändern!",
      jp: "jp"
    },
    code: "c.fillStyle = \"gold\";\nvar size = 40;\n\nfor (var i = 0; i < 5; i = i + 1) {\n  for (var j = 0; j < 3; j = j + 1) {\n    fillStar(i * size, j * size, size);\n  }\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n",
    lessonSection: {
      en: "Nested Loops",
      de: "Verschachtelte Schleifen",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Did you know you could do two loops like that, one inside the other?",
      de: "Hast du gewusst dass du zwei Schleifen so machen kannst? Eine Schleife innerhalb einer anderen!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Do you know how it works?",
      de: "Verstehst du wie das funktioniert?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>j</span> will count 0, 1, 2.  The first time <span class=tutor-code>j</span> counts 0, 1, 2, <span class=tutor-code>i</span> will be 0.  The next time j counts 0, 1, 2, i will be 1.",
      de: "<span class=tutor-code>j</span> zählt 0, 1, 2. Das erste mal zählt <span class=tutor-code>j</span> 0, 1, 2 und <span class=tutor-code>i</span> ist 0. Das nächste mal zählt <span class=tutor-code>j</span> 0, 1, 2, <span class=tutor-code>i</span> ist dann 1.",
      jp: "jp"
    },
    code: "c.fillStyle = \"gold\";\nvar size = 40;\n\nfor (var i = 0; i < 5; i = i + 1) {\n  for (var j = 0; j < 3; j = j + 1) {\n    fillStar(i * size, j * size, size);\n  }\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n"
  },
  {
    message: {
      en: "So, for the first star, i = 0 and j = 0.  On the second star, i = 0 and j = 1.  Third, i = 0 and j = 2. Then, i = 1 and j = 0, i = 1 and j = 1, i = 1 and j = 2, and so on.",
      de: "So, für den ersten Stern ist i = 0 und j = 0. Der zweite Stern hat i = 0 und j = 1. Der dritte: i = 0 und j = 2. Dann i = 1 und j = 0, dann i = 1, j = 1, dann i = 1 und j = 2 und so weiter.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Can you figure out what order it draws the stars?  Which star is drawn first?  Which star is the second star drawn?",
      de: "Weisst du in welcher Reihenfolge die Sterne gezeichnet werden? Welcher ist der erste? Welcher der zweite?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "The first star will be the one at the top left.  The second drawn is the one below it.  Do you see why?",
      de: "Der erste Stern ist oben links. Der zweite ist darunter. Weisst du warum?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Wow!  Full of stars! Try changing size!",
      de: "Super! Voll viele Sterne! Versuche die Grösse zu ändern!",
      jp: "jp"
    },
    code: "c.fillStyle = \"gold\";\nvar size = 40;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar maxI = Math.floor(w / size);\nvar maxJ = Math.floor(h / size);\n\nfor (var i = 0; i < maxI; i = i + 1) {\n  for (var j = 0; j < maxJ; j = j + 1) {\n    fillStar(i * size, j * size, size);\n  }\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n",
    lessonSection: {
      en: "Fun with Stars",
      de: "Spass mit Sternen",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Wow!  Five stars, randomly placed, changing every time. Can you have it draw fifty stars? A hundred?  How about bigger stars or smaller stars?",
      de: "Wow! Fünf Sterne, zufällig plaziert und jedesmal anders. Kannst du 50 Sterne zeichnen? 100? Wie wäre es mit grösseren oder kleineren Sternen?",
      jp: "jp"
    },
    code: "c.fillStyle = \"gold\";\nvar n = 5;\nvar size = 20;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < n; i = i + 1) {\n  var x = (w - size) * Math.random();\n  var y = (h - size) * Math.random();\n  fillStar(x, y, size);\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n"
  },
  {
    message: {
      en: "Ugh, me tired of seeing stars.  Lines where it's at.  Here two separate lines. See how much is repeated? No like. What can we do?",
      de: "Hmm...will keine Sterne mehr sehen. Linien jetzt! Hier sind 2 Linien. Siehst du wie sich das wiederholt? Ich mag das nicht. Was können wir da tun?",
      jp: "jp"
    },
    code: "c.beginPath();\nc.moveTo(20, 20);\nc.lineTo(200, 20);\nc.stroke();\nc.beginPath();\nc.moveTo(20, 50);\nc.lineTo(200, 50);\nc.stroke();\n",
    lessonSection: {
      en: "Even More Functions",
      de: "Noch mehr Funktionen",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Need <span class=tutor-code>drawLine()</span> function.  Here it is.  Now draw one line from (20, 20) to (200, 20) and another from (20, 50) to (200, 50).",
      de: "Wir brauchen die <span class=tutor-code>drawLine()</span> Funktion. Hier ist sie. Nun zeichne eine Linie von (20, 20) nach (200, 20) und eine andere von (20, 50) nach (200, 50).",
      jp: "jp"
    },
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\n"
  },
  {
    message: {
      en: "Did you get it? Here is one version.  Can you add a third line below the other two?",
      de: "Verstanden? Hier ist eine Version. Kannst du eine dritte Linie unter den beiden zeichnen?",
      jp: "jp"
    },
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\ndrawLine(20, 20, 200, 20);\ndrawLine(20, 50, 200, 50);\n"
  },
  {
    message: {
      en: "Three vertical lines using for loop.  Can you make it ten lines?",
      de: "Drei vertikale Linien mit einer Schleife gemacht. Kannst du 10 machen?",
      jp: "jp"
    },
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nfor (var i = 0; i < 3; i = i + 1) {\n  var x = 20 + i * 30;\n  drawLine(x, 20, x, 200);\n}\n",
    lessonSection: {
      en: "Fun with Lines",
      de: "Spass mit Linien",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Ten lines coming to a point.  Try moving the point!",
      de: "Zehn Linien die sich in einem Punkt treffen. Bewege den Punkt!",
      jp: "jp"
    },
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(0, y, px, py);\n}\n"
  },
  {
    message: {
      en: "Ready for something harder?  Now the lines fan to the right.  Can you also add in the ones we saw last, going to the left?",
      de: "Fertig für etwas schwereres? Jetzt gehen alle Linien zur rechten Seite. Kannst du die dazu zeichnen die von links kommen wie vorher?",
      jp: "jp"
    },
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(400, y, px, py);\n}\n"
  },
  {
    message: {
      en: "Did you get it?  This is one way to do it.  Try moving the point now!",
      de: "Hast du's geschafft? Hier ist eine Versich wie's geht. Versuch jetzt den Punkt zu bewegen!",
      jp: "jp"
    },
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(0, y, px, py);\n  drawLine(400, y, px, py);\n}\n"
  },
  {
    message: {
      en: "Ooo!  Me like!  Try changing <span class=tutor-code>num</span>, <span class=tutor-code>px</span>, or <span class=tutor-code>py</span>!",
      de: "Oh! Schön! Versuche <span class=tutor-code>num</span>, <span class=tutor-code>px</span> oder <span class=tutor-code>py</span> zu ändern!",
      jp: "jp"
    },
    code: "var num = 20;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(400, y, px, py);\n  var x = y * w / h;\n  drawLine(x, 300, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "Can you make lines from all sides?  You will need four <span class=tutor-code>drawLine()</span> and your two new ones will use 0 instead of <span class=tutor-code>w</span> and <span class=tutor-code>h</span>.  Can you do it?",
      de: "Kannst Du Linien von allen vier Seiten zeichnen? Du brauchst vier <span class=tutor-code>drawLine()</span> und die zwei neuen brauchen 0 anstelle von <span class=tutor-code>w</span> und <span class=tutor-code>h</span>. Schaffst du das?",
      jp: "jp"
    },
    code: "var num = 20;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(w, y, px, py);\n  var x = y * w / h;\n  drawLine(x, h, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "I like mine blue.  Play with it!",
      de: "Ich mag meine blau. Spiel damit!",
      jp: "jp"
    },
    code: "var num = 10;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.strokeStyle = \"blue\";\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(0, y, px, py);\n  drawLine(w, y, px, py);\n  var x = y * w / h;\n  drawLine(x, 0, px, py);\n  drawLine(x, h, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "When me little monster, me draw these.  You like too?  Change number of lines!",
      de: "Als ich ein kleines Monster war, habe ich sowas gemacht. Magst Du es auch? Versuche die Anzahl der Linien zu ändern!",
      jp: "jp"
    },
    code: "var num = 10;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    lessonSection: {
      en: "More Fun with Lines",
      de: "Mehr Spass mit Linien",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Can you add another curve at top right? You will need another <span class=tutor-code>drawLine()</span> but use x, 0, w, y.",
      de: "Kannst du eine neue Kurve oben rechts zeichnen? Du brauchst noch ein <span class=tutor-code>drawLine()</span>, aber diesmal benutze x, 0, w, y.",
      jp: "jp"
    },
    code: "var num = 10;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "Pretty!  Try other colors and changing the number of lines!",
      de: "Hübsch! Probier auch andere Farben oder ändere die Anzahl der Linien.",
      jp: "jp"
    },
    code: "var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.strokeStyle = \"gold\";\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n  drawLine(x, 0, w, y);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "Can you make it so the two curves are two different colors?",
      de: "Kannst du die zwei Kurven in unterschiedlichen Farben zeichnen?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Here is one version.  Try changing the colors!",
      de: "Hier ist eine Version. Ändere die Farben!",
      jp: "jp"
    },
    code: "var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  c.strokeStyle = \"gold\";\n  drawLine(0, y, x, h);\n  c.strokeStyle = \"red\";\n  drawLine(x, 0, w, y);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "Here is a crazy fun random colors changing version.  It's complicated, but take a look.  Can you guess how it works? And try changing num!",
      de: "Hier ist eine verrückt bunte Version. Es ist etwas kompliziert, aber schau mal. Verstehst du wie's funktioniert? Probier mal num zu ändern!",
      jp: "jp"
    },
    code: "var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  c.strokeStyle = randomRGBA();\n  drawLine(0, y, x, h);\n  c.strokeStyle = randomRGBA();\n  drawLine(x, 0, w, y);\n}\n\nfunction randomRGBA() {\n  var r = randInt(255);\n  var g = randInt(255);\n  var b = randInt(255);\n  var a = Math.random();\n  var rgba = [r,g,b,a].join(\",\");\n  return \"rgba(\" + rgba + \")\";\n}\nfunction randInt(limit) {\n  var x = Math.random() * limit;\n  return Math.floor(x);\n}\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "You know programming?  Show me!  Can make a function called <span class=tutor-code>fillSquare()</span> and then use that to draw a second bigger square? Hint: You'll need something like <span class=tutor-code>function fillSquare(left, top, size) {</span>",
      de: "Kannst du programmieren? Zeig's mir! Kannst du eine Funktion <span class=tutor-code>fillSquare()</span> schreiben die ein grösseres zweites Quadrat zeichnet. Tip: Du brauchst sowas wie <span class=tutor-code>function fillSquare(left, top, size) {</span>",
      jp: "jp"
    },
    code: "c.fillRect(20, 30, 100, 100);\n",
    lessonSection: {
      en: "Quiz: Functions",
      de: "Quiz: Funktionen",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Did you get it?  Something like this? Now can you make the first square also use <span class=tutor-code>fillSquare()</span> instead of calling <span class=tutor-code>fillRect()</span>?",
      de: "Hast du's geschafft? Sowas wie das hier? Kannst du das erste Quadrat auch mit <span class=tutor-code>fillSquare()</span> anstelle von <span class=tutor-code>fillRect()</span> machen?",
      jp: "jp"
    },
    code: "c.fillRect(20, 30, 100, 100);\n\nfillSquare(200, 70, 150);\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, s, s);\n}\n"
  },
  {
    message: {
      en: "Look, one line. Huh. Want more. It would be easier to add more lines if we had that <span class=tutor-code>drawLine()</span> function again.  Can you write that and then make this line use it? Hint: Create a function with <span class=tutor-code>function doStuff(a, b, c, d) {</span>",
      de: "Guck mal, eine Linie. Ich will mehr! Es wäre einfacher wenn wir wieder die <span class=tutor-code>drawLine()</span> Funktion hätten. Kannst du die schreiben und dann die Linie unten damit zeichnen? Tip: <span class=tutor-code>function doStuff(a, b, c, d) {</span>",
      jp: "jp"
    },
    code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(200, 50);\nc.stroke();\n"
  },
  {
    message: {
      en: "Ahh, isn't that better?  Add another line below this one.  Wasn't that easy now?",
      de: "Ah, ist das nicht besser? Mach noch eine Linie darunter dazu. Das ist einfach, gell?",
      jp: "jp"
    },
    code: "drawLine(30, 20, 200, 50);\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "So easy to add more lines, I want lots more.  Give me ten lines total, one on top of the other, separated by 10! Hint: Easier with <span class=tutor-code>for</span> loop. <span class=tutor-code>for</span> loop looks like <span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",
      de: "So einfach mehr Linien zu machen. Mehr! Gib mir 10 Linien! Eine über der anderen. Abstand 10. Tip: Einfacher mit <span class=tutor-code>for</span> Schleifen. <span class=tutor-code>for</span> Schleifen sehen so aus: <span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",
      jp: "jp"
    }
  },
  {
    message: {
      en: "You get something like this?  You getting good!  Try playing with the numbers! I like <span class=tutor-code>n</span> of 40 and <span class=tutor-code>dy</span> of 5!",
      de: "Hast du das geschafft? So wie das hier? Du wirst gut! Probier andere Zahlen. <span class=tutor-code>n</span> = 40 oder <span class=tutor-code>dy</span> = 5!",
      jp: "jp"
    },
    code: "var n = 10;\nvar dy = 10;\nfor (var i = 0; i < n; i = i + 1) {\n  var y = 20 + i * dy;\n  drawLine(30, y, 200, y + 30);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "Me miss boxes.  Hey, look, boxes, can erase!  Try moving the white box from (50, 50) to (20, 20)!",
      de: "Ich vermisse Quadrate! Schau mal, Quadrate kann ich löschen! Versuch das Quadrat von (50, 50) nach (20, 20) zu bewegen!",
      jp: "jp"
    },
    code: "function fillSquare(w, h, s) {\n  c.fillRect(w, h, s, s);\n}\n\nc.fillStyle = \"blue\";\nfillSquare(10, 10, 100);\nfillSquare(100, 100, 100);\nc.fillStyle = \"white\";\nfillSquare(50, 50, 100);\n",
    lessonSection: {
      en: "Erasing",
      de: "de section",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Order matters.  Last one to draw gets to stay!  Try moving the white box now!",
      de: "Die Reihenfolge ist wichtig. Das letzte gemalte Quadrat bleibt! Versuch jetzt das weisse Quadrat zu bewegen!",
      jp: "jp"
    },
    code: "function fillSquare(w, h, s) {\n  c.fillRect(w, h, s, s);\n}\n\nc.fillStyle = \"blue\";\nfillSquare(10, 10, 100);\nc.fillStyle = \"white\";\nfillSquare(50, 50, 100);\nc.fillStyle = \"blue\";\nfillSquare(100, 100, 100);\n"
  },
  {
    message: {
      en: "Another way to erase is with clearRect().  Can you make a little blue smiley face using these?  It is almost done.  You just need to move them.",
      de: "Eine andere Möglichkeit Sachen zu löschen ist mittels clearRect(). Kannst du ein kleines blaues Smiley Gesicht damit machen? Es ist fast fertig. Du musst sie nur bewegen.",
      jp: "jp"
    },
    code: "c.fillStyle = \"blue\";\nc.fillRect(50, 20, 200, 200);\n// Eyes\nc.clearRect(80, 150, 20, 20);\nc.clearRect(120, 150, 20, 20);\n// Mouth\nc.clearRect(70, 50, 100, 10);\n"
  },
  {
    message: {
      en: "Me like this guy.  Ooo, friend.",
      de: "Ich man den Kerl. Freund!",
      jp: "jp"
    },
    code: "c.fillStyle = \"blue\";\nc.fillRect(50, 20, 200, 200);\n// Eyes\nc.clearRect(80, 50, 20, 20);\nc.clearRect(150, 50, 20, 20);\n// Mouth\nc.clearRect(70, 150, 100, 10);\n"
  },
  {
    message: {
      en: "A big <span class=tutor-code>clearRect()</span> erases everything.  Uncomment the big <span class=tutor-code>clearRect()</span> (remove the <span class=tutor-code>//</span>) and see what happens.",
      de: "Ein grosses <span class=tutor-code>clearRect()</span> löscht alles. Lösche die Kommentarzeichen (das <span class=tutor-code>//</span> sind Kommentarzeichen) und sieh was passiert.",
      jp: "jp"
    },
    code: "var size = 80;\nvar offset = 20;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(0, 255, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\n// c.clearRect(0, 0, w, h);\noffset = offset + 60;\nc.fillStyle =\"rgba(255, 0, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\n"
  },
  {
    message: {
      en: "<span class=tutor-code>//</span> at the beginning of a line makes the line get ignored.  That's called commenting out.  Try adding <span class=tutor-code>//</span> before some of the other lines and see what happens!",
      de: "<span class=tutor-code>//</span> am Anfang einer Zeile macht dass der Rest ignoriert wird. Einfügen von <span class=tutor-code>//</span> heisst 'auskommentieren'. Füge mal <span class=tutor-code>//</span> vor einer anderen Zeile und sieh was passiert!",
      jp: "jp"
    },
    code: "var size = 80;\nvar offset = 20;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(0, 255, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\n// c.clearRect(0, 0, w, h);\noffset = offset + 60;\nc.fillStyle =\"rgba(255, 0, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\n",
    lessonSection: {
      en: "Comments",
      de: "Kommentare",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "A box.  But how did it get that far away from the edge?  Try changing <span class=tutor-code>x</span> and <span class=tutor-code>y</span>.",
      de: "Ein Quadrat. Aber wieso ist es so weit vom Rand entfernt? Versuche <span class=tutor-code>x</span> und <span class=tutor-code>y</span> zu ändern.",
      jp: "jp"
    },
    code: "var x = 50;\nvar y = 50;\n\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n",
    lessonSection: {
      en: "Rotation and Translation",
      de: "Rotation und Verschiebung",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "The <span class=tutor-code>fillRect()</span> says to make the (left, top) at (0, 0), so wouldn't you think the box would be at the upper left corner? But, wait, what is <span class=tutor-code>translate()</span> ?",
      de: "Das <span class=tutor-code>fillRect()</span> sagt dass (links, oben) (0, 0) sein soll, deshalb sollte es in der oberen linken Ecke sein. Aber was ist das: <span class=tutor-code>translate()</span> ?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>translate()</span> changes where (0, 0) is. After <span class=tutor-code>translate(50, 50)</span>, for example, anything that tries to draw at (0, 0) will draw at (50, 50).  Drawing at (20, 20) would draw at (70, 70), since 50 + 20 = 70.  See?",
      de: "<span class=tutor-code>translate()</span> verändert wo (0, 0) ist. Nach <span class=tutor-code>translate(50, 50)</span> zum Beispiel ist alles was bei (0, 0) zeichnen will, bei (50, 50). Zeichnen bei (20, 20) zeichnet wirklich bei (70, 70), weil 50 + 20 = 70. Siehst du?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Why does this do what it does?  What will happen if you uncomment <span class=tutor-code>save()</span> and <span class=tutor-code>restore()</span>? Try it. Was it what you expected?",
      de: "Warum macht es das? Was passiert wenn man <span class=tutor-code>save()</span> und <span class=tutor-code>restore()</span> auskommentiert? Probier mal! Hast du das erwartet?",
      jp: "jp"
    },
    code: "var x = 50;\nvar y = 50;\n\n// c.save();\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n// c.restore();\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n"
  },
  {
    message: {
      en: "The second box becomes black and gets drawn right on top of the first box!  Why?",
      de: "Das zweite Quadrat wurde schwarz und wir auf dem ersen Quadrat gemalt! Warum?",
      jp: "jp"
    },
    code: "var x = 50;\nvar y = 50;\n\nc.save();\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\nc.restore();\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n"
  },
  {
    message: {
      en: "<span class=tutor-code>restore()</span> eliminates all the changes since the last <span class=tutor-code>save()</span>.  So, if you <span class=tutor-code>save()</span>, then change the fillStyle = color or do <span class=tutor-code>translate()</span>, then <span class=tutor-code>restore()</span>, everything goes back to what it was right before the <span class=tutor-code>save()</span>.",
      de: "<span class=tutor-code>restore()</span> entfernt alle Änderungen seit dem letzten <span class=tutor-code>save()</span>. Also wenn du <span class=tutor-code>save()</span> macht, dann die Füllfarbe oder <span class=tutor-code>translate()</span> machst, und dann <span class=tutor-code>restore()</span> benutzt, sind die Einstellungen wie vor dem <span class=tutor-code>save()</span>,",
      jp: "jp"
    }
  },
  {
    message: {
      en: "We can rotate stuff too.  Try changing <span class=tutor-code>angle</span>!",
      de: "Wir können auch Sachen rotieren! Versuch den Winkel <span class=tutor-code>angle</span> zu ändern!",
      jp: "jp"
    },
    code: "var x = 50;\nvar y = 50;\nvar angle = 0.1;\n\nc.translate(x, y);\nc.rotate(angle);\nc.strokeRect(0, 0, 100, 100);\n"
  },
  {
    message: {
      en: "You might be used to degrees?  Angles in Javascript are in radians.  45 degrees is about 0.8 in radians.  Try changing <span class=tutor-code>angle</span> from 0.1 to 0.8!",
      de: "Denkst du das der Winkel in Grad ist? Winkel in Javascript sind in Radianten geschrieben. 45 Grad sind etwa 0.8 Radianten. Probier den Winkel <span class=tutor-code>angle</span> von 0.1 bis 0.8 zu ändern!",
      jp: "jp"
    },
    code: "var x = 50;\nvar y = 50;\nvar angle = 0.1;\n\nc.translate(x, y);\nc.rotate(angle);\nc.strokeRect(0, 0, 100, 100);\n"
  },
  {
    message: {
      en: "Spinning all the way around is 360 degrees, right?  In radians, it is about 6.28.",
      de: "Einmal ganz rumherum sind 360 Grad, richtig? In Radianten sind das etwa 6.28.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Did you notice that this box is pivoting through its top left corner when you rotate it?  That's the same spot we said to go with <span class=tutor-code>translate()</span> , right?",
      de: "Hast du bemerkt dass das Quadrat sich um seine linke obere Ecke dreht? Das ist der gleiche Punkt den wir mit <span class=tutor-code>translate()</span> gesetzt haben, richtig?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Try changing <span class=tutor-code>angle</span> now.  How is this different?",
      de: "Probier jetzt den Winkel <span class=tutor-code>angle</span> zu ändern. Was hat sich geändert?",
      jp: "jp"
    },
    code: "var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\nc.translate(x, y);\nc.rotate(angle);\nc.strokeRect(-50, -50, 100, 100);\n"
  },
  {
    message: {
      en: "Kind of weird that the <span class=tutor-code>strokeRect()</span> uses -50 for the left and top, isn't it?  But the top left of the box is still at (50, 50), because we translated to (100, 100), and 100 - 50 = 50.",
      de: "Schon seltsam dass <span class=tutor-code>strokeRect()</span> -50 für links und oben benutzt, gell? Aber oben links vom Quadrat ist immernoch bei (50, 50) weil wir alles nach (100, 100) verschoben haben (mit <span class=tutor-code>translate(100, 100)</span>) und 100 - 50 = 50.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "When we rotate, we rotate around (100, 100) because of the translate().  Oh, and (100, 100) is the center of the box!  So, this box is rotating around its center!",
      de: "Wenn wir rotieren, rotieren wir um (100, 100) wegen <span class=tutor-code>translate(100, 100)</span>. Oh, (100, 100) ist auch die Mitte vom Quadrat! Deshalb rotiert das Quadrat um seine Mitte!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>translate()</span> and <span class=tutor-code>rotate()</span> add to any earlier translate() and <span class=tutor-code>rotate()</span>, unless you <span class=tutor-code>restore()</span> the old state.  Try changing angle or uncommenting <span class=tutor-code>save()</span> and <span class=tutor-code>restore()</span>!",
      de: "<span class=tutor-code>translate()</span> und <span class=tutor-code>rotate()</span> addieren sich zu vorherigen <span class=tutor-code>translate()</span> und <span class=tutor-code>rotate()</span> Funktionen, ausser wenn man <span class=tutor-code>restore()</span> benutzt. Versuch den Winkel zu ändern und <span class=tutor-code>save()</span> und <span class=tutor-code>restore()</span> auszukommentieren!",
      jp: "jp"
    },
    code: "var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\n// c.save();\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\n// c.restore();\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\n"
  },
  {
    message: {
      en: "Did that do what you expected?  You see why it did what it did?  With the <span class=tutor-code>save()</span> and <span class=tutor-code>restore()</span>, the second box is black and gets drawn right on top of the first purple box.",
      de: "Macht es was du erwartest hast? Siehst du wie's funktioniert? Mit <span class=tutor-code>save()</span> und <span class=tutor-code>restore()</span> ist das zweite Quadrat schwarz und wird direkt über das vorherige violette Quadrat gemalt.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Can you move the black box off the purple box?  So you can see both?",
      de: "Kannst du das schwarze Quadrat verschieben so dass du beide sehen kannst?",
      jp: "jp"
    },
    code: "var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\nc.save();\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\nc.restore();\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\n"
  },
  {
    message: {
      en: "Here is one way. See how the <span class=tutor-code>translate()</span> is to a different spot?  Try changing angle now!  Did you try a negative number of angle like -0.2?",
      de: "Hier ist eine Möglichkeit. Siehst du wie <span class=tutor-code>translate()</span> alles zu einem neuen Punkt verschiebt? Ändere den Winkel jetzt! Probier auch mal einen negativen Winkel wie -0.2.",
      jp: "jp"
    },
    code: "var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\nc.save();\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\nc.restore();\nc.translate(x * 2, y * 2);\nc.rotate(angle*2);\nc.fillRect(-50, -50, 100, 100);\n"
  },
  {
    message: {
      en: "Boxes rotated relative to their center are usually what you want.  Look, a function that makes boxes rotated to different angles!  Can you add a few more boxes?",
      de: "Normalerweise erwartet man Quadrate die sich um ihren Mittelpunkt drehen. Schau, eine Funktion die Quadrate um verschiedene Winkel dreht! Kannst du mehr Quadrate hinzufügen?",
      jp: "jp"
    },
    code: "function strokeSquare(x, y, size, angle) {\n  c.save();\n  c.translate(x + size / 2, y + size / 2);\n  c.rotate(angle);\n  c.strokeRect(-size / 2, -size / 2,\n                size, size);\n  c.restore();\n}\n\nstrokeSquare(50, 50, 100, 0.2);\nstrokeSquare(180, 100, 50, -0.1);\n"
  },
  {
    message: {
      en: "You coder now? Show me! Draw a box rotated by -0.5.  Hint: Use <span class=tutor-code>c.rotate();</span> and <span class=tutor-code>c.strokeRect();</span>",
      de: "Bist du ein Programmierer oder eine Programmiererin? Zeig's mir! Zeichne ein Quadrat das um -0.5 rotiert ist? Tip: Benutze <span class=tutor-code>c.rotate();</span> und <span class=tutor-code>c.strokeRect();</span>",
      jp: "jp"
    },
    code: "",
    lessonSection: {
      en: "Quiz: Rotation and Translation",
      de: "de section",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Oh, that too easy? You want harder problems? Draw five boxes on top of each other, each rotated by 0.3 more than the last.<br>Hint: <span class=tutor-code>c.translate();</span> might be useful<br>Hint: <span class=tutor-code>for</span> loops look like <span class=tutor-code>for (var i = 0; i < 5; i += 1) {</span>",
      de: "Oh, war das zu leicht? Möchtest du ein schwereres Problem? Zeichne fünf Quadrate, eine über dem anderen, jedes um 0.3 mehr verdreht als das vorherige.<br>Tip: <span class=tutor-code>c.translate();</span> ist praktisch hier.<br>Noch ein Tip: <span class=tutor-code>for</span> Schleifen sehen so aus: <span class=tutor-code>for (var i = 0; i < 5; i += 1) {</span>",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Did you get something like this? See how this works?  It first moves a spot with <span class=tutor-code>translate();</span>, then repeatedly draws squares around that spot and rotates around that spot.",
      de: "Hast du sowas wie das hier herausbekommen? Siehst du wie das funktioniert? Zuerst bewegt es einen Punkt mit <span class=tutor-code>translate();</span>, dann zeichnet es ein Quadrat um diesen Punkt herum und rotiert um den gleichen Punkt.",
      jp: "jp"
    },
    code: "var angle = 0.2;\nvar num = 5;\nc.translate(150, 150);\nfor (var i = 0; i < num; i = i + 1) {\n  c.strokeRect(-75, -75, 150, 150);\n  c.rotate(angle);\n}\n"
  },
  {
    message: {
      en: "Play with it a bit!  Try changing <span class=tutor-code>num</span> and <span class=tutor-code>angle</span>!",
      de: "Spiel damit etwas! Versuche <span class=tutor-code>num</span> und <span class=tutor-code>angle</span> zu ändern!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Let's say we want to try to draw a tree.  How might you do that?",
      de: "Lass uns überlegen einen Baum zu zeichnen. Wie könnten wir das machen?",
      jp: "jp"
    },
    code: "",
    lessonSection: {
      en: "A Hard Problem",
      de: "Ein schweres Problem",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Trees have branches.  Here is a start. Can you add more branches?",
      de: "Bäume haben Zweige. Hier ist ein Start. Kannst du mehr Zweige machen?",
      jp: "jp"
    },
    code: "drawLine(200, 300, 200, 200);\ndrawLine(200, 200, 160, 130);\ndrawLine(200, 200, 240, 130);\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "Oog, that a lot of work.",
      de: "Hmm...das ist eine Mange Arbeit.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Me try using variables.  Does that make it easier?  Not sure it does. What do you think?",
      de: "Versuch Variablen zu benutzen? Wird das einfacher? Hmm...ich weiss nicht. Was denkst du?",
      jp: "jp"
    },
    code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawLine(w * 0.5, h, w * 0.5, h * 0.7);\ndrawLine(w * 0.5, h * 0.7, w * 0.4, h * 0.5);\ndrawLine(w * 0.5, h * 0.7, w * 0.6, h * 0.5);\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "Bleah, that still too much work. For loop maybe?  How might that work? I don't know.  How would we draw two branches from every branch? I'm not sure.  What do you think?",
      de: "Näh, viel zu viel Arbeit! Vielleicht mit einer Schleife? Wie könnte das funktionieren? Ich weiss nicht. Wie kann man zwei Zweige von jedem Zweig aus zeichnen? Ich bin mir nicht sicher. Was denkst du?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "No, I can't see a way to draw trees easily using a for loop.  What else we got?  Can we use functions?",
      de: "Nein, ich sehe keinen Weg mit einer for Schleife einen Baum zu zeichnen. Was können wir noch benutzen? Funktionen vielleicht?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Maybe a function could draw a branch.  But how could every branch draw two more branches?",
      de: "Vielleicht kann eine Funktion einen Zweig zeichnen. Aber wie kann jeder Zweig 2 weitere Zweige zeichnen?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Let's start with a function that draws a branch.  Here's one.  It takes four numbers, where to start (x,y), the length <span class=tutor-code>l</span>, and the <span class=tutor-code>direction</span> which says whether to draw left, right, or straight.",
      de: "Lass uns mit einer Funktion starten die einen Zweig zeichnet. Hier ist eine. Sie nimmt 4 Zahlen als Argumente: Wo man startet (x, y), die Länge <span class=tutor-code>l</span>, und die Richtung <span class=tutor-code>direction</span> die anzeigt ob man nach links, rechts oder geradeaus zeichnen soll.",
      jp: "jp"
    },
    code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w / 2, h, 100, 0);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "<span class=tutor-code>direction</span> works by slanting the branch left (for negative numbers) or right (for positive).  See?  Try changing it!",
      de: "<span class=tutor-code>direction</span> funktioniert mittels kippen vom Zweig nach links (negative Zahlen) oder rechts (positive Zahlen). Siehst du? Versuch sie zu ändern!",
      jp: "jp"
    },
    code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w / 2, h, 100, -0.1);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "How can we make this draw two more branches now?",
      de: "Wie können wir diesen Zweig mehr Zweige zeichnen lassen?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Ah, me know, make function use itself! Can you see what this is doing?",
      de: "Ah, ich weiss: wir lassen die Funktion sich selber aufrufen! Siehst du wie das funktioniert?",
      jp: "jp"
    },
    code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w/2, h, 100, 0);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n  if (l > 20) {\n    // Call drawBranch twice more\n    drawBranch(x2, y2, l / 2, -0.8);\n    drawBranch(x2, y2, l / 2, 0.8);\n  }\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    lessonSection: {
      en: "Recursion",
      de: "Rekursion",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "That crazy! Here's a version that's easier to twiddle.  Try playing with it!  Change <span class=tutor-code>xScale</span>, <span class=tutor-code>yScale</span>, or <span class=tutor-code>minLength</span>!  Cool, huh?",
      de: "Das ist der Wahnsinn! Hier ist eine Version die einfacher zu ändern ist. Spiel damit. Ändere <span class=tutor-code>xScale</span>, <span class=tutor-code>yScale</span>, oder <span class=tutor-code>minLength</span>! Cool, gell?",
      jp: "jp"
    },
    code: "var minLength = 20;\nvar yScale = 0.5;\nvar xScale = 0.8;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w/2, h, 100, 0);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n  if (l > minLength) {\n    // Call drawBranch twice more\n    drawBranch(x2, y2, l * yScale, -xScale);\n    drawBranch(x2, y2, l * yScale, xScale);\n  }\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "There are a couple new things here.  Monster stop to explain.",
      de: "Hier sind einige neue Sachen die du noch nicht kennst. Monster erklärt wie's funktioniert.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>drawBranch()</span> is a <i>recursive</i> function.  That means it calls itself.",
      de: "<span class=tutor-code>drawBranch()</span> ist eine <i>rekursive</i> Funktion. Das heisst sie ruft sich selber auf.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>drawBranch()</span> only calls itself if <span class=tutor-code>l > minLength</span>.  <span class=tutor-code>l</span> gets smaller and smaller every time <span class=tutor-code>drawBranch()</span> calls itself, so <span class=tutor-code>drawBranch()</span> stops calling itself eventually when the length of a branch gets small enough.",
      de: "<span class=tutor-code>drawBranch()</span> ruft sich aber nur selber auf wenn <span class=tutor-code>l > minLength</span>.  <span class=tutor-code>l</span> wird jedes mal kleiner wenn sich <span class=tutor-code>drawBranch()</span> selber aufruft. Am Ende, wenn die Länge des Zweiges zu klein wird, hört sie auf sich selber aufzurufen.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Recursive functions are neat, but tricky! Let's do a bit more. Change this to call <span class=tutor-code>nSquareRecursive(4);</span> instead of <span class=tutor-code>nSquare(4);</span>",
      de: "Rekursive Funktionen sind nett, aber trickreich! Lass und ein bisschen mehr damit machen. Ändere <span class=tutor-code>nSquare(4);</span> nach <span class=tutor-code>nSquareRecursive(4);</span>.",
      jp: "jp"
    },
    code: "nSquare(4);\n\nfunction nSquare(n) {\n  c.strokeStyle = \"blue\";\n  for (var i = n; i > 0; i = i - 1) {\n    c.strokeRect(i * 30, i * 30, 100, 100);\n  }\n}\nfunction nSquareRecursive(n) {\n  if (n > 1) {\n    nSquareRecursive(n - 1);\n  }\n  c.strokeRect(n * 30, n * 30, 100, 100);\n}\n"
  },
  {
    message: {
      en: "Other than not being blue, it's the same, right?  Do you see how they both work?",
      de: "Ausser der Farbe die anders ist, ist es das gleiche, oder? Siehst du wie beide funktionieren?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>nSquare()</span> uses a for loop, starts at 4, and counts down: 4, 3, 2, 1.",
      de: "<span class=tutor-code>nSquare()</span> benutzt eine for Schleife die mit 4 started und dann runterzählt: 4, 3, 2, 1.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>nSquareRecursive()</span> calls itself with one less each time.  So, when called with 4, it calls itself with 3, and that call calls itself with 2, and that call calls itself with 1.  At one, it says, stop calling yourself, so it stops.  And, on each call, it draws a box located at (n * 30, n * 30).  See?",
      de: "<span class=tutor-code>nSquareRecursive()</span> ruft sich selber auf aber verringert ihr Argument n. Wenn man es mit 4 aufruft, ruft es sich selber auf mit 3, danach ruft es sich selber auf mir 2 und dann mit 1. Jetzt stopps es sich selber aufzurufen. Und jedes mal zeichnet es ein Quadrat bei (n * 30, n * 30). Siehst du?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "This little piece of code draws a shrinking pile of boxes. See how it works?",
      de: "Dieses kleine Stück Code zeichnet schrumpfende Quadrate. Siehst du wie's funktioniert?",
      jp: "jp"
    },
    code: "branchBox(100);\n\nfunction branchBox(size) {\n  c.translate(size, size);\n  c.strokeRect(-size, -size, size, size);\n  if (size > 5) {\n    branchBox(size * 0.65);\n  }\n}\n"
  },
  {
    message: {
      en: "The way it works is it does a <span class=tutor-code>translate()</span> to the bottom right corner of the box, then draws the box back up behind it. So the box will be <span class=tutor-code>size</span> big starting at (-size, -size).  Then, as long as the boxes haven't gotten too small, it does that again by calling itself, but shrinking the size of the box the next time.",
      de: "Es funktioniert so: Es macht eine Verschiebung mit <span class=tutor-code>translate()</span> zur unteren rechten Ecke vom Quadrat, dann malt es eine Quadrat. Das Quadrat wird <span class=tutor-code>size</span> gross und startet bei (-size, -size). Dann, solange die Quadrate noch nicht zu klein sind, macht es das wieder, aber die Grösse verringert sich jedes mal.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Here is the same thing using a <span class=tutor-code>for</span> loop instead. Compare the two. See how they both work?",
      de: "Hier das gleiche mit einer <span class=tutor-code>for</span> Schleife. Vergleiche die beiden. Verstehst du wie beide funktionieren?",
      jp: "jp"
    },
    code: "branchBoxForLoop(100);\n\nfunction branchBoxForLoop(size) {\n  c.strokeStyle = \"blue\";\n  for (var i = size; i > 4; i = i * 0.65) {\n    c.translate(i, i);\n    c.strokeRect(-i, -i, i, i);\n  }\n}\nfunction branchBox(size) {\n  c.translate(size, size);\n  c.strokeRect(-size, -size, size, size);\n  if (size > 5) {\n    branchBox(size * 0.65);\n  }\n}\n"
  },
  {
    message: {
      en: "The <span class=tutor-code>for</span> loop starts by drawing a box of size 100, then one of 65, and so on.  So does the recursive version, but the recursive version does it by calling itself.",
      de: "Die <span class=tutor-code>for</span> Schleife beginnt ein Quadrat mit der Grösse 100 zu zeichnen, dann 65 und so weiter. Genauso wie die rekursive Funktion, aber letztere ruft sich selber auf.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "You can change them if you want!  Go experiment!",
      de: "Du kannst sie ändern wenn du möchtest! Experimentiere!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Back to trees.  Ooo!  An even better tree!",
      de: "Zurück zu den Bäumen. Oh! Ein ganz schöner Baum!",
      jp: "jp"
    },
    code: "var angle = 0.35;\nvar branchScale = 0.75;\nvar l = 75;\nvar minL = 5;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.translate(w/2, h);\ndrawBranch(l, 0);\n\nfunction drawBranch(l, direction) {\n  c.save();\n  c.rotate(angle * direction);\n  c.fillRect(-l / 20, 0, l / 10, -l);\n  if (l > minL) {\n    c.translate(0, -l);\n    drawBranch(l * branchScale, -1);\n    drawBranch(l * branchScale, 1);\n  }\n  c.restore();\n}\n",
    lessonSection: {
      en: "Rotation, Translation, and Recursion",
      de: "Rotation, Verschiebung und Rekursion",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "See how this works? It uses <span class=tutor-code>translate()</span> to move to the end of a branch, then <span class=tutor-code>rotate()</span> to tilt the branches off to one side or the other.",
      de: "Siehst du wie das funktioniert? Es benutzt <span class=tutor-code>translate()</span> um das Ende vom Zweig zu verschieben, dann <span class=tutor-code>rotate()</span> zum drehen/kippen vom Zweig zur einen oder anderen Seite.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Try changing <span class=tutor-code>angle</span>, <span class=tutor-code>branchScale</span>, <span class=tutor-code>l</span>, and <span class=tutor-code>minL</span>!  If you experiment a bit, you can get some really cool drawings.  Play with it!",
      de: "ändere <span class=tutor-code>angle</span>, <span class=tutor-code>branchScale</span>, <span class=tutor-code>l</span>, und <span class=tutor-code>minL</span>! Wenn du die Zahlen änderst kannst vielleicht echt tolle Zeichnungen machen!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "I think it would look even more like a tree if <span class=tutor-code>angle</span> was a little more random.  Can you make angle bigger and then make <span class=tutor-code>rotate()</span> use a number between 0 and angle? (Hint: <span class=tutor-code>Math.random()</span> makes a number from 0.0 to 1.0)",
      de: "Ich glaube der Baum sähe besser aus mit etwas Zufall für <span class=tutor-code>angle</span>. Kannst du <span class=tutor-code>angle</span> grösser machen und <span class=tutor-code>rotate()</span> eine Zahl zwischen 0 und <span class=tutor-code>angle</span> benutzen lassen? Tip: <span class=tutor-code>Math.random()</span> ergibt eine Zahl von 0.0 bis 1.0",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Here is one version.  Can you make the <span class=tutor-code>branchScale</span> more random too?",
      de: "Hier ist eine Möglichkeit. Kannst du <span class=tutor-code>branchScale</span> auch etwas zufälliger machen?",
      jp: "jp"
    },
    code: "var angle = 0.5;\nvar branchScale = 0.75;\nvar l = 75;\nvar minL = 5;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.translate(w/2, h);\ndrawBranch(l, 0);\n\nfunction drawBranch(l, direction) {\n  c.save();\n  // Make a number between 0 and angle\n  var a = angle * Math.random();\n  c.rotate(a * direction);\n  c.fillRect(-l / 20, 0, l / 10, -l);\n  if (l > minL) {\n    c.translate(0, -l);\n    drawBranch(l * branchScale, -1);\n    drawBranch(l * branchScale, 1);\n  }\n  c.restore();\n}\n"
  },
  {
    message: {
      en: "Ooo!  That's very tree-like!",
      de: "Oh! Sieht schon wirklich wie ein Baum aus!",
      jp: "jp"
    },
    code: "var angle = 0.5;\nvar branchScale = 0.75;\nvar l = 60;\nvar minL = 5;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.translate(w/2, h);\ndrawBranch(l, 0);\n\nfunction drawBranch(l, direction) {\n  c.save();\n  var a = angle * Math.random();\n  c.rotate(a * direction);\n  c.fillRect(-l / 20, 0, l / 10, -l);\n  if (l > minL) {\n    c.translate(0, -l);\n    // Make a number between -0.1 and 0.1\n    var b = 0.2 * (Math.random() - 0.5);\n    // Now make it between 0.9 and 1.1\n    b = b + 1;\n    // And use it to change branchScale\n    drawBranch(l * b * branchScale, -1);\n    b = 1 + 0.2 * (Math.random() - 0.5);\n    drawBranch(l * b * branchScale, 1);\n  }\n  c.restore();\n}\n"
  },
  {
    message: {
      en: "Try changing <span class=tutor-code>angle</span>, <span class=tutor-code>branchScale</span>, <span class=tutor-code>l</span>, and <span class=tutor-code>minL</span>!  If you experiment a bit, you can get some pretty wild stuff!",
      de: "Ändere <span class=tutor-code>angle</span>, <span class=tutor-code>branchScale</span>, <span class=tutor-code>l</span>, und <span class=tutor-code>minL</span>! Du kannst ganz interessante Sachen erzeugen!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "I bet you can draw your own trees now!  Want to try?  I'll help you!",
      de: "Ich wette du kannst jetzt selber Bäume zeichnen! Sollen wir es versuchen? Ich helfe dir!",
      jp: "jp"
    },
    code: "",
    lessonSection: {
      en: "Drawing Your Own Tree",
      de: "Den eigenen Baum zeichnen",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Let's draw different trees than we did before.  Let's make this plant alternate between splitting off branches right and left.  Some plants do that.  Ready to start?  I'll guide you through it!",
      de: "Lass und andere Bäume als vorher zeichnen. Dieser Baum wechselt Zweige links und rechts. Einige Pflanzen machen das. Sollen wir starten? Ich leite dich an!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "So, first we need a branch.  Let's make a function <span class=tutor-code>drawBranch()</span> that takes two values, a length called <span class=tutor-code>l</span> and a <span class=tutor-code>direction</span>.",
      de: "So, zuerst brauchen wir einen Zweig. Lass uns eine Funktion <span class=tutor-code>drawBranch()</span> machen die 2 Argumente hat: Länge <span class=tutor-code>l</span> und Richtung <span class=tutor-code>direction</span>.",
      jp: "jp"
    },
    code: ""
  },
  {
    message: {
      en: "Do you remember how to write a function like that?  You don't need to make it do anything yet, just declare a function called <span class=tutor-code>drawBranch()</span>.",
      de: "Weisst du noch wie man so eine Funktion schreibt? Versuche erstmal nur eine Funktion zu definieren die <span class=tutor-code>drawBranch()</span> heisst.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Were you thinking something like this?",
      de: "Hast du an sowas gedacht?",
      jp: "jp"
    },
    code: "function drawBranch(l, direction) {\n  \n}\n"
  },
  {
    message: {
      en: "I've added some comments about what to do next.  We need to start drawing our tree.  Can you write the code beneath each of the comments?",
      de: "Ich habe einige Kommentare geschrieben was jetzt zu machen ist. Wir fangen jetzt an den Baum zu zeichnen. Kannst du den Code unter den Kommentaren schreiben?<br>Etwas Übersetzungshilfe:<br>// Benutze c.translate() um nach (200, 250) zu verschieben<br>// Rufe drawBranch() mit 50 für Länge<br>// und 1 als Richtung auf",
      jp: "jp"
    },
    code: "function drawBranch(l, direction) {\n  \n}\n\n// Use c.translate() to move to (200, 250).\n\n// Call drawBranch() with 50 as the length\n// and 1 as the direction\n"
  },
  {
    message: {
      en: "Okay, so you <span class=tutor-code>translate()</span> so you start at the right spot and then you try to draw a branch.  Now we need to make <span class=tutor-code>drawBranch()</span> do something!  Can you do what the comments say to do?  You should get a single branch (which will look like the trunk of the tree) when you are done.",
      de: "Ok, jetzt musst du mit <span class=tutor-code>translate()</span> am richtigen Punkt starten und dann einen Zweig zeichnen. Jetzt musst du <span class=tutor-code>drawBranch()</span> etwas machen lassen! Kannst du machen was die Kommentare sagen? Du solltest am Ende einen einzelnen Zweig haben der die der Stamm aussieht.<br>// c.fillRect(links, oben, weite, höhe) zeichnet ein Rechteck<br>// Benutze es um ein Rechteck zu zeichnen das bei (-1, 0) startet und 2 weit ist mit der Höhe -l (l wie in Länge)",
      jp: "jp"
    },
    code: "function drawBranch(l, direction) {\n  // c.fillRect(left, top, width, height);\n  // will draw a rectangle.\n  // Use it do draw a rectangle that\n  // starts at (-1, 0) and is 2 wide\n  // and -l (that's l as in length) tall.\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "You should have something like this now.  Let's keep going!  Look for the comments to tell you what to do next!",
      de: "Jetzt solltest du das hier haben. Weiter geht's! Schau die Kommentare an um zu wissen wie's weitergeht.<br>// Benutze c.translate() um an das Ende<br>// vom Zweig zu gehen<br>// Tip: Das Ende ist bei (0, -l) l wie Länge",
      jp: "jp"
    },
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  // Use c.translate() to move to the end\n  // of the branch.\n  // Hint: The end is at (0, -l), that's l\n  // as in length.\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "Great!  Now you have drawn your first branch, moved to the end of that branch, and you're ready to draw more branches!",
      de: "Grossartig! Du hast jetzt deinen ersten Zweig gezeichnet, bist zum Ende des Zweiges gegangen und bist jetzt bereit mehr Zweige zu zeichnen!",
      jp: "jp"
    },
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "Let's stop for a second and think about what we're going to want to do next.",
      de: "Lass uns hier eine Sekunde bleiben und überlegen was wir als nächstes machen.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "This plant is going to split off two branches, one going up, one going off to the side.  We want the ones going off to the side to alternate, first right, then left, then right, then left.",
      de: "Diese Pflanze hat zwei Zweige: einen nach oben, dann einen zur Seite. Die zur Seite sind abwechselnd links und dann rechts.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "We'll keep splitting and drawing and splitting and drawing until the branches get very short.",
      de: "Wir teilen und zeichnen und teilen und zeichnen bis die Zweige ganz klein werden.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Let's add that next.  We should only draw more branches if the length <span class=tutor-code>l</span> is more than 5.  Can you add that?",
      de: "Lass und das jetzt machen. Wie zeichnen nur neue Zweige wenn die Länge <span class=tutor-code>l</span>  grösser als 5 ist. Kannst du das hinzufügen?<br>// Ersetze true in der nächsten Zeile mit etwas was<br>// überprüft ob l gross genug ist<br>// Weiter unten brauchst du noch nichts zu ändern. Das kommt später.",
      jp: "jp"
    },
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  // Replace true below with something that\n  // checks if l is big enough\n  if ( true ) {\n    // Don't do anything here yet.\n    // We'll add more branches later.\n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "You should have this now.",
      de: "Du solltest jetzt das hier haben.",
      jp: "jp"
    },
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    // Don't do anything here yet.\n    // We'll add more branches later.\n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "Let's add just the branch going straight up.  Let's make it a little shorter that the last branch we drew.  Follow the instructions in the comments.",
      de: "Lass uns nur einen Zweig nach oben machen. Wir machen ihn etwas kürzer als den vorherigen. Folge den Anweisungen in den Kommentaren.<br>// Rufe drawBranch() mit l * 0.8 und Richtung direction",
      jp: "jp"
    },
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    // Call drawBranch() with l * 0.8 and direction\n    \n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "Do you have this now?  See what it does?  It repeatedly draws a branch straight up, making the branch a little shorter each time.  It looks like a line, but it's really a bunch of branches piled on top of each other.",
      de: "Hast du das jetzt? Versteht du was es macht? Es zeichnet einen Zweig nach oben der jedesmal etwas kürzer wird. Es sieht aus wie eine Linie, aber es sind in Wirklichkeit aneinandergereihte Zweige.",
      jp: "jp"
    },
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "Pretty boring so far?",
      de: "Etwas langweilig, gell?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "It's about to get a lot more exciting!",
      de: "Jetzt wird es interessanter!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Let's add the second branch!  For that branch, we are going to rotate to the side indicated by direction, then draw a shorter branch.  Follow the instructions in the comments.",
      de: "Lass und einen zweiten Zweig machen! Dafür drehen wir uns zur Seite mittels direction, und zeichnen einen kurzen Zweig. Folge den Anweisungen in den Kommentaren.<br>// Benutze c.rotate() mit Richtung 0.5 * direction<br>// Rufe callBranch mit l * 0.7 und Richtung direction",
      jp: "jp"
    },
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n    \n    // Use c.rotate() with an angle of\n    // 0.5 * direction\n    \n    \n    // Call drawBranch with l * 0.7 and direction\n    \n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "Aieeee!  What did you do?",
      de: "Oh weia! Was hast du gemacht?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Just kidding!  It's all fine!",
      de: "War nur Spass! Ist alles ok!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "This is just part of what is called debugging, getting the bugs (the problems) out.",
      de: "Das ist Teil was Fehlersuche heisst: Fehler suchen und korrigieren",
      jp: "jp"
    }
  },
  {
    message: {
      en: "So, that didn't do what you expected it to do, did it?",
      de: "So, das war nicht das was wir gedacht haben.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Any idea what's wrong?",
      de: "Hast du eine Idee was falsch ist?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "What's happening is that all those <span class=tutor-code>translate()</span> and <span class=tutor-code>rotate()</span> calls are piled on top of each other.  We didn't really want that.  When it's time to draw the second branch, we really want everything to be the way it was when we did the first branch, but it's not, we've translated and rotated all over the place.",
      de: "Was passiert ist das all die <span class=tutor-code>translate()</span> (verschieben) und <span class=tutor-code>rotate()</span> (drehen) Aufrufe sich aufeinanderstapeln. Das wollen wir nicht. Wenn wir den 2. Zweig zeichnen wollen wir alles so haben wie es beim 1. Zweig war, aber im Moment ist alles verschoben und gedreht.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>save()</span> and <span class=tutor-code>restore()</span> to the rescue!  Can you add <span class=tutor-code>c.save();</span> and <span class=tutor-code>c.restore();</span> where the comments say to add them?",
      de: "<span class=tutor-code>save()</span> und <span class=tutor-code>restore()</span> kommen zur Rettung! Kannst du <span class=tutor-code>c.save();</span> und <span class=tutor-code>c.restore();</span> da einfügen wo die Kommentare es anzeigen?",
      jp: "jp"
    },
    code: "function drawBranch(l, direction) {\n  // Save here!\n  \n  \n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n    \n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, direction);\n  }\n  \n  // Restore here!\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "That's mostly better.  But it's only drawing one side of the tree!  Why is that?",
      de: "Das ist ziemlich gut schon. Aber Zweige gehen nur zu einer Seite! Warum?",
      jp: "jp"
    },
    code: "function drawBranch(l, direction) {\n  c.save();\n  \n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n    \n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, direction);\n  }\n  \n  c.restore();\n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "Figure it out?",
      de: "Weisst du es?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "It's because we didn't switch direction.  Direction is always the same as what it was at the start, it is always 1.  It should alternate, 1, -1, 1, -1 ...",
      de: "Das ist so weil wir die Richtung nicht wechseln. Richtung <span class=tutor-code>direction</span> ist immer 1. Es sollte 1, dann -1, dann wieder 1, dann -1 usw. sein.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Can you make it so both of the <span class=tutor-code>drawBranch()</span> calls inside of <span class=tutor-code>drawBranch()</span> use <span class=tutor-code>-direction</span> instead of <span class=tutor-code>direction</span>?",
      de: "Kannst du den Code ändern dass <span class=tutor-code>drawBranch()</span> Aufrufe innerhalb der <span class=tutor-code>drawBranch()</span> Funktion <span class=tutor-code>-direction</span> anstelle von <span class=tutor-code>direction</span> benutzen?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Do you now have this?  Wow, nice work!",
      de: "Hast du das hier? Klasse!",
      jp: "jp"
    },
    code: "function drawBranch(l, direction) {\n  c.save();\n  \n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, -direction);\n    \n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, -direction);\n  }\n  \n  c.restore();\n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "Try playing with it more! Try changing the 0.8, 0.7, and 0.5 to see what happens!",
      de: "Spiel damit! Ändere 0.8, 0.7 und 0.5 und sieh was passiert!",
      jp: "jp"
    },
    lessonSection: {
      en: "Play with Your Tree",
      de: "Mit dem Baum Spielen",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Look! Green leaves on the ends of the branches!",
      de: "Schau! Grüne Blätter am Ende der Zweige!",
      jp: "jp"
    },
    code: "function drawBranch(l, direction) {\n  c.save();\n  c.fillRect(-1, 0, 2, -l);\n  c.translate(0, -l);\n  if (l > 5) {\n    drawBranch(l * 0.8, -direction);\n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, -direction);\n  } else {\n    c.fillStyle = \"green\";\n    c.fillRect(-2, -2, 4, 4);\n  }\n  c.restore();\n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "See how that works? The little size 4 green squares are the leaves! They are only added when we get to the end of the branch.",
      de: "Sieht du wie das funktioniert? Die kleinen Quadrate der Grösse 4 sind die Blätter! Sie werden nur gezeichnet wenn das Ende vom Zweig erreicht wird.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Can you make the branches brown?",
      de: "Kannst du die Zweige braun (brown) machen?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Let me show you something really cool that is only a minor change from what you just did!",
      de: "Lass mich dir was echt cooles zeigen und es braucht nur eine kleine Änderung vom dem was du gemacht hast!",
      jp: "jp"
    },
    code: "function drawBranch(l) {\n  // Make longer branches wider\n  var w = 0.5 + l / 30;\n  c.fillRect(w / 2, 0, w, -l);\n  c.save();\n  c.translate(0, -l);\n  if (l > 1) {\n    // Start at -80 degrees\n    var a = -Math.PI * 4 / 9;\n    // Draw three branches\n    for (var i = 0; i < 3; i = i + 1) {\n      // The length of our new branches\n      var l2 = l * 0.5;\n      // Make the middle branch bigger\n      if (i == 1) { l2 = l2 + 0.3 * l; }\n      \n      c.save();\n      c.rotate(a);\n      drawBranch(l2);\n      c.restore();\n      \n      // Add 90 degrees for the next branch\n      a = a + Math.PI / 2;\n    }\n  }\n  c.restore();\n}\n\nc.fillStyle = \"green\";\nc.translate(170, 270);\ndrawBranch(60);\n",
    lessonSection: {
      en: "Fun with Ferns",
      de: "Spass mit Farn",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "This fern is drawn just by doing three branches from each branch, each rotated at -80, 10, and 100 degrees.  See how it works?",
      de: "Dieser Farn hat nur 3 Abzweigungen, um -80, 10 und 100 Grad gedreht. Sieht du wie's funktioniert?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Every time it draws a branch, it draws three more branches from the end of that branch.  It keeps doing that and doing that, smaller and smaller, and you get what looks like a fern!",
      de: "Jedes mal wenn ein Zweig gemalt wird, werden 3 neue Zweige gezeichnet, bis die Zweige ganz klein sind. Was herauskommt ist etwas was wie ein Farn aussieht!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "All this stuff with trees and ferns are a type of pattern called a <i>fractal</i>. Fractals are crazy cool fun with math.",
      de: "All diese Sachen mir Bäumen und Farnen sind Teile von Muster die man <i>Fraktale</i> nennt. Fraktale sind Spass mit Mathematik.",
      jp: "jp"
    },
    lessonSection: {
      en: "Fractals",
      de: "Fraktale",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "This fractal is called the Terdragon.",
      de: "Diese Fraktale heissen Drachenkurven",
      jp: "jp"
    },
    code: "var n = 8;\nvar l = 5;\nvar angle = 120 * Math.PI / 180;\n\nc.translate(300, 200);\nterdragon(n);\nfunction terdragon(n) {\n  if (n <= 1) {\n    drawLine(l);\n  } else {\n    terdragon(n-1);\n    c.rotate(angle);\n    terdragon(n-1);\n    c.rotate(-angle);\n    terdragon(n-1);\n  }\n}\nfunction drawLine(l) {\n  c.beginPath();\n  c.moveTo(0, 0);\n  c.lineTo(l, 0);\n  c.stroke();\n  // Finish at the end of the line we drew\n  c.translate(l, 0);\n}\n"
  },
  {
    message: {
      en: "If you make <span class=tutor-code>l</span> bigger, you can zoom in and see it's made of little triangles!",
      de: "Wenn du <span class=tutor-code>l</span> grösser machst, kannst du das vergrössern und dann siehst du dass das aus kleinen Dreiecken gemacht ist!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Can you figure out how it works? Take a look at the code.",
      de: "Verstehst du wie das funktioniert? Schau dir den Code an.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Try making <span class=tutor-code>l=10</span> and then <span class=tutor-code>n=1</span> and then <span class=tutor-code>n=2</span> then <span class=tutor-code>n=3</span>, and you'll see how it grows.",
      de: "Versuche <span class=tutor-code>l=10</span> und dann <span class=tutor-code>n=1</span> und dann <span class=tutor-code>n=2</span>, dann <span class=tutor-code>n=3</span>, und due siehst wie es wächst.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Okay, it's time for the last quiz.  This one is hard, so don't worry if you can't finish it.  There is a lot of good stuff coming after this.  Whatever you do, don't quit here, make sure to keep going so you can see all the fun stuff!",
      de: "Ok, es ist Zeit für das letzte Quiz. Das ist schwer, deshalb keine Sorgen wenn du es nicht ganz fertig bekommst. Danach kommt noch mehr! Was auch immer passiert, höre hier nicht auf weil nachher neue interessante Sachen kommen!",
      jp: "jp"
    },
    code: "",
    lessonSection: {
      en: "Quiz: Challenge Problem",
      de: "Quiz: Ein etwas schweres Problem",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "For the quiz, I want you to write something entirely yourself.  Make a checkerboard pattern, a black square, then a white, then a black, and so on, at least four rows of them (like a 6 x 4 grid).  Can you do it?",
      de: "Für das Quiz möchte ich dass Du etwas ganz selber schreibst. Mache ein Schachbrettmuster: ein schwarzes, dann ein weisses, dann wieder ein schwarzes Quadrat. Mindestend 6 in einer Reihe und 4 Reihen (wie ein 6x4 Muster).",
      jp: "jp"
    },
    code: ""
  },
  {
    message: {
      en: "If you did it, good job, this is really hard, I'm impressed!  If you didn't get it, no worries, here's a hint, you might need two <span class=tutor-code>for</span> loops, one inside the other, you'll use at least one <span class=tutor-code>c.fillRect()</span>, and don't forget a <span class=tutor-code>for</span> loop looks like <span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",
      de: "Wenn du's geschafft hast: Super! Das ist nicht einfach gewesen. Falls du es nicht geschafft hast, hier ist ein Tip: Du brauchst vielleicht zwei <span class=tutor-code>for</span> Schleifen: eine innerhalb der anderen, und du brauchst <span class=tutor-code>c.fillRect()</span>. Vergiss nicht: <span class=tutor-code>for</span> Schleifen sehen so aus: <span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Ready to see different ways to solve it?",
      de: "Bist du bereit zu sehen wie man das zum Beispiel löst?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Here is one way.  See how this works?",
      de: "Hier ist eine Möglichkeit. Siehst du wie es funktioniert?",
      jp: "jp"
    },
    code: "var size = 50;\n\nfor (var i = 0; i < 300; i = i + 100) {\n  for (var j = 0; j < 200; j = j + 100) {\n    fillSquare(i, j, size);\n  }\n}\nfor (var i = 50; i < 300; i = i + 100) {\n  for (var j = 50; j < 200; j = j + 100) {\n    fillSquare(i, j, size);\n  }\n}\n\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, size, size);\n}\n",
    lessonSection: {
      en: "Many Ways to Code",
      de: "Viele Wege führen zum Ziel",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "If not, try commenting out one of the <span class=tutor-code>fillSquare()</span> lines (using <span class=tutor-code>//</span>) so you can see what the other is drawing.",
      de: "Probier eine nach der anderen <span class=tutor-code>fillSquare()</span> Zeilen auszukommentieren (mit <span class=tutor-code>//</span>) damit du sehen kannst was die anderen zeichnen.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "It draws the first and third rows, starting at (0, 0), then doing (0, 100), then doing (100, 0), then (100, 100), and so on.  Then it draws the second and fourth rows, starting at (50, 50), then (50, 150), and so on.  Make sense?",
      de: "Zuerst zeichnet es die erste und dritte Reihe, angefangen mit (0, 0), dann (0, 100), dann (100, 0), dann (100, 100) und so weiter. Dann zeichnet es die zweite und vierte Reihe, angefangen mit (50, 50), dann (50, 150) und so weiter. Gibt Sinn?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Let's look at a few more ways of doing a checkerboard.  Here is another version. See how this works?",
      de: "Lass uns andere Möglichkeiten ein Schachbrettmuster zu zeichnen. Hier ist einen andere Version. Siehst du wie es funktioniert?",
      jp: "jp"
    },
    code: "var size = 50;\n\nfor (var i = 0; i < 3; i = i + 1) {\n  for (var j = 0; j < 2; j = j + 1) {\n    var x = i * 2 * size;\n    var y = j * 2 * size;\n    fillSquare(x, y, size);\n    x = x + size;\n    y = y + size;\n    fillSquare(x, y, size);\n  }\n}\n\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, size, size);\n}\n"
  },
  {
    message: {
      en: "Every time through the loop, it draws two squares, below and to the right of the other.",
      de: "In jeder Schleife zeichnet es zwei Quadrate: unterhalb und rechts.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Then, it does that three times across and twice down, skipping over the white squares.  Cool, huh?",
      de: "Dann wiederholt es das drei mal nach rechts und zweimal runter und es überspringt die weissen Felder. Schlau, gell?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Here is yet another way of doing a checkerboard.  Any idea how this works?  What's that <span class=tutor-code>i % 2</span> doing?",
      de: "Hier ist noch eine andere Möglichkeit: Hast du eine Idee wie das funktioniert? Was ist das <span class=tutor-code>i % 2</span>?",
      jp: "jp"
    },
    code: "var size = 50;\n\nfor (var i = 0; i < 6; i = i + 1) {\n  for (var j = 0; j < 4; j = j + 1) {\n    if ((i % 2 + j % 2) % 2) {\n      var x = i * size;\n      var y = j * size;\n      fillSquare(x, y, size);\n\n    }\n  }\n}\n\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, size, size);\n}\n",
    lessonSection: {
      en: "Modulo",
      de: "Modulus",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>%</span> mean modulo, it gives the remainder after dividing.",
      de: "<span class=tutor-code>%</span> ist der Modulus. Es gibt den Rest nach einer Division zurück.",

      jp: "jp"
    }
  },
  {
    message: {
      en: "So, <span class=tutor-code>1 % 2</span> is 1, <span class=tutor-code>2 % 2</span> is 0 (because 2 divides 2 evenly with no remainder), <span class=tutor-code>3 % 2</span> is 1 again, <span class=tutor-code>4 % 2</span> is 0.",
      de: "<span class=tutor-code>1 % 2</span> ist 1, <span class=tutor-code>2 % 2</span> ist 0 (weil 2 dividiert durch 2 keinen Rest hat), <span class=tutor-code>3 % 2</span> ist wieder 1, <span class=tutor-code>4 % 2</span> ist 0.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "So, how does that complicated expression -- <span class=tutor-code>(i % 2 + j % 2) % 2</span> -- work? When <span class=tutor-code>i</span> is even, <span class=tutor-code>i % 2</span> will be 0.  Same for <span class=tutor-code>j</span>.  If both are odd, then you get (1 + 1) % 2, which is 0. So, that expression will be 0 if both <span class=tutor-code>i</span> and <span class=tutor-code>j</span> are even or both <span class=tutor-code>i</span> and <span class=tutor-code>j</span> are odd.",
      de: "Was macht das kompliziert aussehende <span class=tutor-code>(i % 2 + j % 2) % 2</span>? Wenn <span class=tutor-code>i</span> gerade ist, ist <span class=tutor-code>i % 2</span> 0. Für <span class=tutor-code>j</span> ist es genauso. Wenn beide ungerade sind, ist (1 + 1) % 2, was 0 ist. Also ist <span class=tutor-code>(i % 2 + j % 2) % 2</span> 0 wenn beide Zahlen gerade oder beide ungerade sind.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "For <span class=tutor-code>if</span> statements, 0 means false and anything else is true.  So, we'll do what's inside the <span class=tutor-code>if</span> statement only when only one of <span class=tutor-code>i</span> or <span class=tutor-code>j</span> is odd.",
      de: "Für die <span class=tutor-code>if</span> Befehl, 0 bedeuted falsch und alles andere ist richtig. Also machen wir das in der <span class=tutor-code>if</span> Befehlen nur wenn entweder <span class=tutor-code>i</span> oder <span class=tutor-code>j</span> unregade sind.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "So, what this does is visit all the squares in the 6 x 4 grid, but only draw a black square in the ones where either the column number or row number is odd but not both.  Make sense now?",
      de: "Deshalb ist in dem 6x4 Schachbrettmuster nur dort schwarze Quadrate wenn entweder die Spalte oder die Reihe ungerade ist.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "See how many ways there are to solve a problem like this?  There is usually not just one solution to something you want to do, lots of strategies might work.  Isn't that neat?",
      de: "Hast du gesehen wie viele verschiedene Möglichkeiten es gibt dieses kleine Problem zu lösen? Es gibt oft nicht nur eine einzige Möglichkeit. Praktisch, gell?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Okay, time for some fun! Let's do animation!",
      de: "Okay, Zeit für Spass! Lass uns Animationen machen!",
      jp: "jp"
    },
    code: "",
    lessonSection: {
      en: "Animation",
      de: "Animationen",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Moving stuff is fun but a little weird.  You need to make something happen every 1/20th of a second or so. What is this doing?",
      de: "Sachen zu bewegen ist interessant, aber etwas seltsam. Du musst etwas ungefähr jede 20-tel Sekunde zeichnen. Was macht der Code?",
      jp: "jp"
    },
    code: "var vx = 4;\nvar vy = 1;\nvar step = 50;  // In milliseconds\n\nvar x = 0;\nvar y = 0;\nvar size = 50;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\ndrawStep();\nfunction drawStep() {\n  // Clear the screen\n  c.clearRect(0, 0, w, h);\n  // Draw the box\n  c.strokeRect(x, y, size, size);\n  // Move the box unless at edge\n  if (x + vx + size < w &&\n      y + vy + size < h) {\n    x += vx;\n    y += vy;\n    clearTimeout(cmTID);\n    // Do it again in a little bit\n    cmTID = setTimeout(drawStep, step);\n  }\n}\n",
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n"
  },
  {
    message: {
      en: "The way this works is that, every time we are told to do <span class=tutor-code>drawStep()</span>, we erase the screen, move the box, draw the box, and, unless we hit the edge, we say to do <span class=tutor-code>drawStep()</span> again a little while later.",
      de: "Was passiert ist folgendes: jedesmal wenn wir etwas zeichnen sollen mit <span class=tutor-code>drawStep()</span>, löschen wir den Bildschirm, bewegen das Quadrat, zeichnen das Quadrat und wir sagen dass wir, ausser wir haben den Rand erreicht, <span class=tutor-code>drawStep()</span> nochmal bald aufrufen wollen.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Try changing <span class=tutor-code>vx</span>, <span class=tutor-code>vy</span>, and <span class=tutor-code>step</span>. You can change the speed of the box and make it move different directions!",
      de: "Versuche <span class=tutor-code>vx</span>, <span class=tutor-code>vy</span>, und <span class=tutor-code>step</span> zu ändern. Du kannst die Geschwindigkeit und die Richtung verändern!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Try commenting out the <span class=tutor-code>clearRect()</span>.  That's kind of cool, isn't it?",
      de: "Kommentier auch mal das <span class=tutor-code>clearRect()</span> aus (mit //). Cool, oder?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Spinning a box is fun.  Can you make it go faster?",
      de: "Drehende Quadrate sind spassig. Kannst du es sich schneller drehen lassen?",
      jp: "jp"
    },
    code: "var step = 100;\nvar angle = 0.01;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nc.translate(w / 2, h / 2);\ndrawStep();\nfunction drawStep() {\n  c.clearRect(-w / 2, -h / 2, w, h);\n  c.strokeRect(-50, -50, 100, 100);\n  c.rotate(angle);\n  clearTimeout(cmTID);\n  cmTID = setTimeout(drawStep, step);\n}\n",
    lessonSection: {
      en: "Rotating Movement",
      de: "Rotationen",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "This works the same way as the moving box.  Every time it is told to do <span class=tutor-code>drawStep()</span>, it clears the screen, rotates, draws the box, and then says to do <span class=tutor-code>drawStep()</span> again in a little while later.",
      de: "Das funktioniert genauso wie das sich bewegende Quadrat. Jedesmal wenn <span class=tutor-code>drawStep()</span> aufgerufen wird, löscht es den Bildschirm, rotiert, zeichnet und sagt nochmal <span class=tutor-code>drawStep()</span> etwas später aufzurufen.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "What happens if you comment out the <span class=tutor-code>clearRect()</span>?",
      de: "Was passiert wenn du <span class=tutor-code>clearRect()</span> auskommentierst?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Try adding more boxes. Did it do what you expected?",
      de: "Versuche mehr Quadrate hinzuzufügen. Funktioniert es?",
      jp: "jp"
    },
    code: "var step = 100;\nvar angle = 0.01;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nc.translate(w / 2, h / 2);\ndrawStep();\nfunction drawStep() {\n  c.clearRect(-w / 2, -h / 2, w, h);\n  c.strokeRect(-50, -50, 100, 100);\n  c.rotate(angle);\n  clearTimeout(cmTID);\n  cmTID = setTimeout(drawStep, step);\n}\n"
  },
  {
    message: {
      en: "I like this version.  It's like a solar system!  Try changing the speed now!",
      de: "Ich mag diese Version! Es ist wie ein kleiner Sonnensystem! Versuche jetzt die Geschwindigkeiten zu ändern!",
      jp: "jp"
    },
    code: "var step = 100;\nvar angle = 0.01;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nc.translate(w / 2, h / 2);\ndrawStep();\nfunction drawStep() {\n  c.clearRect(-w / 2, -h / 2, w, h);\n  c.strokeRect(-20, -20, 40, 40);\n  c.fillRect(10, 100, 5, 5);\n  c.fillRect(-50, -70, 5, 5);\n  c.fillRect(50, 30, 5, 5);\n  c.rotate(angle);\n  clearTimeout(cmTID);\n  cmTID = setTimeout(drawStep, step);\n}\n"
  },
  {
    message: {
      en: "Stop for a sec.  Sit back and think about how you might create three moving boxes.",
      de: "Lass und mal überlegen und nachdenken wie wir 3 bewegende Quadrate machen können.",
      jp: "jp"
    },
    code: "",
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    lessonSection: {
      en: "Objects",
      de: "Objekte",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Well, you'd need the <span class=tutor-code>x</span> and <span class=tutor-code>y</span> position of each, right?  And the size of each.  And maybe the dx and dy velocity of each?  And the <span class=tutor-code>angle</span>?",
      de: "Zuerst brauchen die die <span class=tutor-code>x</span> und <span class=tutor-code>y</span> Koordinaten von jedem, richtig? Und die Grösse. Und die Geschwindigkeit (<span class=tutor-code>dx, dy</span>). Und der Winkel <span class=tutor-code>angle</span>.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "You could create variables <span class=tutor-code>x1, x2, x3, y1, y2, y3, dx1</span> ... ugh.  That's getting painful, isn't it?",
      de: "Man kann jetzt Variablen <span class=tutor-code>x1, x2, x3, y1, y2, y3, dx1</span> ... hmm ... das wird schnell unpraktisch.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "There's another way to do this, we can make objects!  Objects are little bundles of variables and code. Here's a box object.  Take a look at it.  See how it works?",
      de: "Hier ist eine andere Möglichkeit: wir machen Objekte! Objekte sind kleine Pakete mit Variablen und Code. Hier ist ein Quadrat Objekt. Schau es dir an. Siehst du wie's funtioniert?",
      jp: "jp"
    },
    code: "// Box object\nfunction Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n}\n// Create a new box\nvar b = new Box(10, 10, 100);\nc.strokeRect(b.x, b.y, b.size, b.size);\n"
  },
  {
    message: {
      en: "What is going on is <span class=tutor-code>new Box(10, 10, 100)</span> creates an object, then immediately calls the <span class=tutor-code>Box()</span> function to set it up.  <span class=tutor-code>Box()</span> then uses <span class=tutor-code>this.x</span> to set a variable named <span class=tutor-code>x</span> in the object to the <span class=tutor-code>x</span> that was passed into the function.",
      de: "<span class=tutor-code>new Box(10, 10, 100)</span> macht ein neues Objekt und ruft <span class=tutor-code>Box()</span> auf. <span class=tutor-code>Box()</span> benutzt dann <span class=tutor-code>this.x</span> für das <span class=tutor-code>x</span> vom Objekt.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "It does the same thing to set up all the other variables in our new Box object.  Once the object is created and set up, we set our variable <span class=tutor-code>b</span> to that.  Later, we can get at the <span class=tutor-code>x</span> and <span class=tutor-code>y</span> and other variables of our box using <span class=tutor-code>b.x</span>, <span class=tutor-code>b.y</span>, and so forth.",
      de: "Es macht das gleiche mit den anderen Variablen unseres Box Objekts. Wenn es erstmal erzeugt und initialisiert ist, weisen wir diesem Objekt unserer Variablen <span class=tutor-code>b</span> zu. Jetzt können wir <span class=tutor-code>x</span> und <span class=tutor-code>y</span> von unserem Box Objekt <span class=tutor-code>b</span> mit <span class=tutor-code>b.x</span>, <span class=tutor-code>b.y</span> usw. benutzen.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Our box object is just a little bundle of variables that describe our box.  It says where the box is, its velocity (dx and dy), how big it is, everything that it means to be a box.",
      de: "Unser Box Objekt ist einfach ein kleines Paket mit Variablen die unser Quadrat beschreiben. Es sagt wo das Quadrat ist (x, y), wie schnell es ist (dx, dy), wie gross es ist, und alles andere was ein Quadrat ausmacht.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "We can even have box objects know how to draw themselves.",
      de: "Wir können sogar Quadrate machen die wissen wie man sich selber zeichnet!",
      jp: "jp"
    },
    code: "function Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\nvar b1 = new Box(30, 30, 120);\nb1.stroke();\n"
  },
  {
    message: {
      en: "See how <span class=tutor-code>this.stroke</span> is set equal to a function?  And that function calls <span class=tutor-code>strokeRect()</span> to draw this box?  Then, later, we create a box called <span class=tutor-code>b1</span> and tell it to draw itself with <span class=tutor-code>b1.stroke()</span>. That's pretty cool, isn't it?",
      de: "Siehst du wie <span class=tutor-code>this.stroke</span> eine Funktion ist? Und diese Funktion ruft <span class=tutor-code>strokeRect()</span> auf um das Quadrat zu zeichnen. Dann, später, machen wir ein neues Quadrat und nennen es b1 und lasses es sich selber zeichnen mittels <span class=tutor-code>b1.stroke()</span>. Schlau, gell?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "You know, monster has a secret.  Monster been hiding something from you.",
      de: "Weisst du das das Monster ein Geheimnis hat? Monster hat etwas vor dir versteckt.",
      jp: "jp"
    },
    lessonSection: {
      en: "Canvas Object",
      de: "Leinwand Objekt",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Have you been wondering why we use <span class=tutor-code>c.strokeRect()</span> to draw a box?  What's the deal with that <span class=tutor-code>c.</span>?  Why is that there?",
      de: "Hast du dich gewundert warum wir <span class=tutor-code>c.strokeRect()</span> benutzt haben? Was heisst das <span class=tutor-code>c.</span>? Warum ist es hier?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Turns out all this time you have been using an object to draw, an object called the canvas object.",
      de: "Wir haben die ganze Zeit schon ein Objekt benutzt: Das Leinwand (canvas) Objekt.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Monster added some code for you to get that object from the web page and put it in a variable named <span class=tutor-code>c</span>, so you could use it.  Let me show you what that hidden code looks like.",
      de: "Monster hat etwas Code für dich gemacht für die Webseite und es einer Variablen <span class=tutor-code>c</span> zugewiesen damit du es benutzen kannst. Lass mich zeigen wie der Code aussieht.",
      jp: "jp"
    },
    code: "// This code was hidden before\nvar pane = document.getElementById('pane');\nvar c = pane.getContext('2d');\n\nfunction Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\nvar b1 = new Box(30, 30, 120);\nb1.stroke();\n"
  },
  {
    message: {
      en: "That code asks the document object (which is the web page) to give us the element in the web page called 'pane' (which is the id in the web page of the canvas where we draw), and then gets the 2d drawing canvas from that element.  We name that canvas object <span class=tutor-code>c</span> and use all its drawing functions, which is why we use <span class=tutor-code>c.</span> in front of every use of strokeRect().",
      de: "Dieser Code fragt das Dokument Objekt (das ist die Webseite) für das 'pane' Element (das ist der Teil der Webseite wo wir hinzeichnen wollen), und holt dann die 2D Leinwand (canvas) von diesem Element. Das Objekt nennen wir <span class=tutor-code>c</span> und von dem benutzen wir die Zeichenfunktionen wie <span class=tutor-code>strokeRect()</span> mittels <span class=tutor-code>c.strokeRect()</span>.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "That's useful to know if you write your own Javascript for your own drawing in web pages later!  But, for now, let me hide it again, so we can focus on Box objects.",
      de: "Das ist gut zu wissen wenn du dein eigenes Javascript für eigene Zeichenfunktionen auf deinen eigenen Webseiten machst. Aber für heute lass es mich wieder verstecken damit wir uns auf die Quadrate konzentrieren können.",
      jp: "jp"
    },
    code: "function Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\nvar b1 = new Box(30, 30, 120);\nb1.stroke();\n",
    lessonSection: {
      en: "Using Objects",
      de: "Objekte benutzen",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Can you create a couple more boxes and have them draw themselves? For each one, you'll have to use new and <span class=tutor-code>stroke()</span>, like we did for the box we called <span class=tutor-code>b1</span>.",
      de: "Kannst du ein paar mehr Quadrate machen die sich selber zeichnen? Für jedes brauchst du ein new und <span class=tutor-code>stroke()</span> wie wir es mit <span class=tutor-code>b1</span> gemacht haben.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "That's pretty nice, but calling each box <span class=tutor-code>b1, b2, b3</span>, or whatever is painful. What if I want ten boxes?  Or a hundred?",
      de: "Das ist schon ganz gut, aber jedes Quadrat <span class=tutor-code>b1, b2, b3</span> usw. zu nennen ist unpraktisch wenn ich 10 oder 100 Quadrate mag.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "What I need is a list of boxes, like this!",
      de: "Wir brauchen ein Feld von Quadraten, so wie hier!",
      jp: "jp"
    },
    code: "function Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\n// Create an empty list of boxes\nvar boxes = [];\n// Create new boxes and add them to our list\nfor (var i = 0; i < 3; i = i + 1) {\n  boxes.push(new Box(i * 30, i * 20, 100));\n}\n// Tell all the boxes to draw themselves\nfor (var i = 0; i < boxes.length; i = i + 1) {\n  boxes[i].stroke();\n}\n",
    lessonSection: {
      en: "Lists (Arrays)",
      de: "Felder (Arrays)",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "A big new thing here.  Monster explain.",
      de: "Das ist ganz wichtig. Monster erklärt.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>[]</span> creates what is called an <i>array</i>, which basically is a list that holds stuff.  These lists can hold objects, numbers, whatever we want.",
      de: "<span class=tutor-code>[]</span> erzeugt ein <i>Feld</i> oder <i>Array</i> in Englisch. Dieses Feld kann viele Sachen enthalten: Zahlen, Objekte oder alles andere was Variablen haben können.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "So, <span class=tutor-code>var boxes = []</span> means create an empty list and call it <span class=tutor-code>boxes</span>.",
      de: "Deshalb bedeutet <span class=tutor-code>var boxes = []</span> dass <span class=tutor-code>boxes</span> ein neues leered Feld sein soll.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>boxes.push()</span> adds something to the end of the list.  Here, we use it to add a new box.  Because it is in a <span class=tutor-code>for</span> loop that counts 0, 1, 2 and then stops, we will add three boxes to the end of the list.",
      de: "<span class=tutor-code>boxes.push()</span> hängt etwas neues an das Ende vom Feld <span class=tutor-code>boxes</span>. Das benutzen wir für neue Quadrate. Weil es in einer <span class=tutor-code>for</span> Schleife ist die nur 0, 1 und 2 zählt, machen wir 3 neue Quadratobjekte und tun die in das <span class=tutor-code>boxes</span> Feld.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Take a look at the second for loop.  <span class=tutor-code>boxes.length</span> is the length of the list.  <span class=tutor-code>boxes[0]</span> is the first box in the list, <span class=tutor-code>boxes[1]</span> the second, and so forth.  So, that second <span class=tutor-code>for</span> loop goes through every box in the list and tells it to draw itself by calling <span class=tutor-code>boxes[i].stroke();</span>",
      de: "Schau dir die zweite For Schleife an. <span class=tutor-code>boxes.length</span> ist die Grösse des Feldes. <span class=tutor-code>boxes[0]</span> ist das erste Element in dem Feld, also das erste Quadratobjekt. <span class=tutor-code>boxes[1]</span> ist das zweite usw. Die zweite <span class=tutor-code>for</span> Schleife ruft also jedes Quadratobjekt im Feld auf und lässt es sich mittels <span class=tutor-code>boxes[i].stroke();</span> zeichnen.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Can you add some more boxes?",
      de: "Kannst du mehr Quadrate machen?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "So far, we haven't really done that much that requires Box objects.  But let's go a step further.  Let's make boxes that are animated and move!",
      de: "Bisher haben wir nichts gemacht was wirklich Objekte braucht. Aber jetzt geht's weiter mit Animationen!",
      jp: "jp"
    },
    lessonSection: {
      en: "Methods on Objects",
      de: "Methoden von Objekten",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Let's start by making all our boxes draw to whatever angle they are supposed to be at.  See how this new version of <span class=tutor-code>stroke()</span> works?",
      de: "Zuerst wollen wir alle Quadrate mit ihrem Winkel zeichnen. Siehst du wie <span class=tutor-code>stroke()</span> funktioniert?",
      jp: "jp"
    },
    code: "function Box(x, y, size, a) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.save();\n    // Find the center of the box\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    // Move to the center of the box\n    c.translate(x, y);\n    // Rotate the box around the center\n    c.rotate(this.angle);\n    // Draw the box around its center\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n\nvar boxes = [];\nfor (var i = 1; i < 6; i = i + 1) {\n  var a = Math.random() * 2 - 1;\n  boxes.push(new Box(i * 50, i * 30, 100, a));\n}\nfor (var i = 0; i < boxes.length; i = i + 1) {\n  boxes[i].stroke();\n}\n"
  },
  {
    message: {
      en: "Whenever a box is told to draw itself, we do that by moving to the center of the box, rotating around that center to match the angle of the box, and then draw the box around its center.  Kind of like what we did before for rotated boxes, right?",
      de: "Wenn das Quadratobjekt sich zeichnen soll, drehen wir es um seine Mitte um den richtigen Winkel <span class=tutor-code>angle</span> und zeichnen es dann. Genauso wie vorher mit den sich drehenden Quadraten, gell?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Now let's make the boxes spin!  Look at the new function <span class=tutor-code>updateAll()</span> .  See what it is doing?",
      de: "So, lassen wir jetzt die Quadrate sich drehen! Schau dir die Funktion <span class=tutor-code>updateAll()</span> an. Siehst du was sie macht?",
      jp: "jp"
    },
    code: "var rotateSpeed = 0.02;\nvar timeStep = 50; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < boxes.length; i = i + 1) {\n    boxes[i].angle += rotateSpeed;\n    boxes[i].stroke();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the boxes\nvar boxes = [];\nfor (var i = 1; i < 6; i = i + 1) {\n  var a = Math.random() * 2 - 1;\n  boxes.push(new Box(i * 50, i * 30, 100, a));\n}\n// Do the first update\nupdateAll();\n\nfunction Box(x, y, size, a) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.save();\n    // Find the center of the box\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    // Move to the center of the box\n    c.translate(x, y);\n    // Rotate the box around the center\n    c.rotate(this.angle);\n    // Draw the box around its center\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n",
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n"
  },
  {
    message: {
      en: "<span class=tutor-code>updateAll()</span> starts by clearing the screen, then rotates each box a little more before drawing it.  Finally, it says, call me again in 1/20th of a second.  So, 20 times a second, we rotate each box a little and redraw it.  Cool, huh?",
      de: "<span class=tutor-code>updateAll()</span> löscht zuerst den Bildschirm, dann dreht es jedes Quadrat etwas bevor es gezeichnet wird. Und am Ende sagt es sich nochmal aufzurufen in einer 20-tel Sekunde. Damit wiederholen wir das 20 mal pro Sekunde: Bildschirm löschen, drehen, zeichnen. Einfach, oder?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Can you make the boxes spin faster?",
      de: "Kannst du die Quadrater schneller drehen?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Can you make them spin the other direction (counter-clockwise instead of clockwise)?",
      de: "Kannst du sie in die andere Richtung drehen lassen (gegen den Uhrzeigersinn anstelle mit dem Uhrzeigersinn)?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Can you add more boxes?  You'll have to change three things to fit them all on the canvas, but I bet you can figure it out.  I liked it with 60 of them, looks really weird!",
      de: "Kannst du mehr Quadrate machen? Du musst drei Sachen ändern damit die alle in die Leinwand (canvas) passen, aber ich bin mir sicher dass du sie herausfindest. 60 Stück hätte ich gerne!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "All those fast spinning boxes make Monster dizzy.  Let's slow it down again and let me show you something else.  We can move the update into each Box object.  That will be handy when we make the update do more.  See what this does now?",
      de: "Monster wird schwindelig! Lass uns was neues machen! Die Änderung von jedem Quadratobjekt können wir im Objekt selber machen. Das ist praktisch wenn wir mehr Änderungen machen wollen. Verstehst du wie es funktioniert?",
      jp: "jp"
    },
    code: "var rotateSpeed = 0.01;\nvar timeStep = 50; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < boxes.length; i = i + 1) {\n    boxes[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the boxes\nvar boxes = [];\nfor (var i = 1; i < 6; i = i + 1) {\n  var a = Math.random() * 2 - 1;\n  boxes.push(new Box(i * 50, i * 30, 100, a));\n}\n// Do the first update\nupdateAll();\n\nfunction Box(x, y, size, a) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.update = function() {\n    this.angle += rotateSpeed;\n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.save();\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    c.translate(x, y);\n    c.rotate(this.angle);\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n"
  },
  {
    message: {
      en: "<span class=tutor-code>updateAll()</span> just calls the <span class=tutor-code>update()</span> of the box.  <span class=tutor-code>update()</span> on the box changes the angle and then draws the box.  Each box knows how to update and draw itself now.",
      de: "<span class=tutor-code>updateAll()</span> ruft jetzt nur <span class=tutor-code>update()</span> von jedem Quadratobjekt auf. <span class=tutor-code>update()</span> verändert den Winkel und zeichnet dann sich selber. Jedes Quadratobjekt weiss wie es sich selber ändern muss und wie es sich selber zeichnet.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Let's make the boxes move too!  All we have to do is have update use <span class=tutor-code>dx</span> and <span class=tutor-code>dy</span>.  Take a look at <span class=tutor-code>Box</span> and how it is updated now!",
      de: "Lass uns jetzt die Quadrate bewegen! Wir brauchen nur <span class=tutor-code>dx</span> und <span class=tutor-code>dy</span> zu ändern. Schau dir an wie ich das gemacht habe.",
      jp: "jp"
    },
    code: "function Box(x, y, size, a, dx, dy, da) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = dx;\n  this.dy = dy;\n  this.da = da;\n\n  this.update = function() {\n    this.angle += this.da;\n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    // Bounce off the edges\n    if (this.x < 0 ||\n        this.x + this.size > w) {\n      this.dx = -this.dx;\n      this.da = -this.da;\n    }\n    if (this.y < 0 ||\n        this.y + this.size > h) {\n      this.dy = -this.dy;\n      this.da = -this.da;\n    }\n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.save();\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    c.translate(x, y);\n    c.rotate(this.angle);\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n\nvar timeStep = 50; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < boxes.length; i = i + 1) {\n    boxes[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the boxes\nvar boxes = [];\nvar s = 80;\nfor (var i = 0; i < 3; i = i + 1) {\n  var x = Math.random() * (w - s);\n  var y = Math.random() * (h - s);\n  var a = Math.random() * 2 - 1;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  var da = 0.1 * (Math.random() * 2 - 1);\n  boxes.push(new Box(x, y, s, a, dx, dy, da));\n}\n// Do the first update\nupdateAll();\n\n",
    lessonSection: {
      en: "Velocity and Collisions",
      de: "Beschleunigung und Kollisionen",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "It's a little more complicated, but only a little.  Every time a box is told to <span class=tutor-code>update()</span>, it moves by its velocity (<span class=tutor-code>dx</span> and <span class=tutor-code>dy</span>) and rotates by its angular velocity (<span class=tutor-code>da</span>).",
      de: "Das wird jetzt ein ganz klein wenig komplizierter. Sieht aber wilder aus als es ist. Jedesmal wenn <span class=tutor-code>update()</span> aufgerufen wird, ändert es seine Position mit der Geschwindigkeit <span class=tutor-code>dx</span> und <span class=tutor-code>dy</span> und es dreht sich um den Winkel <span class=tutor-code>da</span>.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "If a box gets off the edge of the screen, we reverse its velocities, making it appear to bounce!  Cool!",
      de: "Wenn das Quadrat das Ende der Leinwand erreicht, kehren wir die Drehrichtung um. Das sieht aus als ob es abprallt! Cool!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "One thing that is new here.  When the box checks if it is off the screen, there's something you haven't seen before, <span class=tutor-code>||</span>",
      de: "Etwas ist neu hier: Wenn das Quadratobjekt überprüft ob es am Ende der Leinwand ist, wird <span class=tutor-code>||</span> benutzt.",
      jp: "jp"
    },
    lessonSection: {
      en: "Bitwise Operators (And and Or)",
      de: "Bit Operatoren (Und (and) und Oder (or))",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>||</span> means <i>or</i>, as in either-or, so the first if statement checks if the box has either gone off the left or right edge, and the second checks if it has gone off the top or bottom.  Make sense?",
      de: "<span class=tutor-code>||</span> bedeutet <i>oder (or)</i> im Sinne von 'entweder, oder'. Die linke Seite überprüft ob der Rand links oder rechts erreicht ist, und die rechte Seite überprüft oben und unten.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "There is also a way to say <i>and</i>, as in both have to be true, which is <span class=tutor-code>&&</span>.  So, <span class=tutor-code>||</span> means <i>or</i> and <span class=tutor-code>&&</span> means <i>and</i>.",
      de: "Es gibt auch eine Möglichkeit <i>Und (and)</i> zu haben. Beide Seiten müssen dann wahr sein: <span class=tutor-code>&&</span><br>Also <span class=tutor-code>||</span> heisst 'oder', <span class=tutor-code>&&</span> ist 'und'.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Back to the fun.  Have you tried putting in a lot of boxes yet?  Try it!  Make it so there are 10 boxes!  Or 50!",
      de: "Zurück zum spassigen Teil. Hast du schon versucht viele Quadrate zu machen? Probier mal! Mach 10 Quadrate! Oder 50!",
      jp: "jp"
    },
    lessonSection: {
      en: "Easy with Objects",
      de: "Objekte machen's einfach",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "See how easy it is to keep track of all these boxes, their position, angle, velocity, and everything else, using objects?  Once you say what a Box object is, it's easy to create lots and lots of them!",
      de: "Siehst du wie einfach es ist so viele Quadratobjekt mit ihrer Position, Winkel, Geschwindigkeit, Drehrichtung usw. zu benutzen? Wenn du erstmal erklärst was ein Quadrat ist, ist es einfach ganz viele davon zu benutzen!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "You're nearing the end of the lessons now.  But I still have a couple fun things to show you.",
      de: "Bald sind wir am Ende! Aber ich habe noch ein paar interessante Sachen für dich.",
      jp: "jp"
    },
    code: "",
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    lessonSection: {
      en: "Circles, Arcs, and Balls",
      de: "Kreise, Bögen und Bälle",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Now that you know about objects with velocity, we actually are really close to being able to do cool things like make a ball bounce.  All we need is a little physics, some acceleration to go with our velocities!",
      de: "Da du jetzt weisst wie Objekte funktionieren, sind wir jetzt ganz nah dran um interesante Sachen die springende Bälle zu machen. Etwas Physik und Beschleunigung ist alles was fehlt!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Here's a <span class=tutor-code>Ball</span> object.  It's a lot like the Box object you saw before, but has differences.  Take a look at the code.",
      de: "Hier ist ein <span class=tutor-code>Ball</span> Objekt. Es ist fast wie ein Quadrat, aber es gibt einige Unterschiede. Schau es dir an.",
      jp: "jp"
    },
    code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    // Bounce off the edges\n    if (this.x - this.r < 0 ||\n        this.x + this.r > w) {\n      this.dx = -this.dx;\n    }\n    if (this.y - this.r < 0 ||\n        this.y + this.r > h) {\n      this.dy = -this.dy;\n    }\n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar timeStep = 50; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 1; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n",
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n"
  },
  {
    message: {
      en: "One big difference is that a ball is round, so angle doesn't matter.  Look at the code.  There is no angle any more, right?",
      de: "Ein grosser Unterschied ist dass der Ball rund ist. Deswegen gibt der Drehwinkel keinen Sinn mehr. Schau dir den Code an. Kein Winkel (angle) mehr da, gell?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Another big difference is that we use <span class=tutor-code>arc()</span> to draw circles.  Arcs are cool, but they're a little complicated for just drawing a circle. Let me explain how they work.",
      de: "Wir benutzen <span class=tutor-code>arc()</span> (Bogen) zum zeichnen. Bögen sind cool, aber etwas komplizierter als einfache Kreise. Lass es mich erklären.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "To draw a circle in Javascript, you call <span class=tutor-code>c.arc(x, y, r, 0, Math.PI * 2);</span>, where (x, y) is the center of the circle, r is the radius, and then 0 and <span class=tutor-code>Math.PI * 2</span> says to draw an arc from 0 degrees to 360 degrees (since 2 * pi in radians is 360 degrees).",
      de: "Um einen Kreis in Javascript zu zeichnen, rufst du <span class=tutor-code>c.arc(x, y, r, 0, Math.PI * 2);</span> auf. (x, y) ist die Mitte vom Kreis, r ist der Radius, 0 und <span class=tutor-code>Math.PI * 2</span> sagt dass der Bogen von 0 bis 360 Grad gezeichnet werden soll (2 * pi in Radianten ist 360 Grad).",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Because we draw circles from the center, a bunch of other things change, such as exactly how we check of whether we need to bounce off the sides.",
      de: "Weil wir den Kreis von der Mitte aus zeichnen, ändern sich ein paar andere Sachen auch, z.B. die Erkennung der Ränder der Leinwand.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Take a look at the code again.  Does it make more sense now?",
      de: "Schau dir den Code genau an. Gibt Sinn jetzt?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Okay, now we want to make a bouncing ball.  To do physics, we need velocity and acceleration.  So far, we have had velocity, but no acceleration.  Let's add acceleration!  Here it is!",
      de: "Okay, wir wollen einen springenden Ball. Physik sagt wir brauchen Geschwindigkeit und Beschleunigung dafür. Bisher hatten wir Geschwindigkeit. Lasst uns Beschleunigung hinzufügen! Hier ist es!",
      jp: "jp"
    },
    code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    // Bounce off the edges\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy;\n    } else {\n      // Our only acceleration is gravity\n      this.dy += gravity;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar gravity = 0.05;\nvar timeStep = 25; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 1; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n",
    lessonSection: {
      en: "Acceleration, Velocity, and Physics",
      de: "Beschleunigung, Geschwindigkeit und Physik",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Do you see it?  Now, every time we <span class=tutor-code>update()</span> on a Ball (and the ball isn't bouncing, to simplify things), we change the downward velocity (<span class=tutor-code>dy</span>) by whatever <span class=tutor-code>gravity</span> is.",
      de: "Siehst du es? Jedes mal wenn <span class=tutor-code>update()</span> von einem Ball aufgerufen wird (und der Ball springt jetzt noch nicht damit es einfacher bleibt), ändern wir die Geschwindigkeit nach unten (<span class=tutor-code>dy</span>) um was <span class=tutor-code>gravity</span> ist.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Pretty cool!  Try adding 10-15 balls and watch it for a while.  It's a full physics simulation with gravity and bouncing!  Very fun!",
      de: "Cool! Füge 10-15 Bälle dazu und schau es dir an. Es ist jetzt eine kleine Physik-Simulation!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Let me show you one more thing before we move on from bouncing balls.  What is called a partially elastic collision.",
      de: "Lass mir noch eine Sache Zeigen bevor wir zur unelastischen Kollision gehen.",
      jp: "jp"
    },
    code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    // Bounce off the edges\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx * friction;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy * friction;\n    } else {\n      // Our only acceleration is gravity\n      this.dy += gravity;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar gravity = 0.2;\nvar friction = 0.8;\nvar timeStep = 25; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 4; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n",
    lessonSection: {
      en: "Collisions and Physics",
      de: "Kollisionen und Physik",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "In the real world, when things collide, they usually bounce off each other slower than before.  That's why, when you drop a ball, it doesn't keep bouncing forever.",
      de: "In der realen Welt prallen Sachen etwas langsamer voneinander ab verglichen mit ihrer Geschwindigkeit vor dem Zusammenprall. Darum springt ein Ball nicht für immer.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "If you look at the code in update, there is now a friction force applied when the balls bounce off the walls.  It makes them bounce off slower than they came in.  Eventually, the balls all stop bouncing and slowly roll along the bottom.",
      de: "Schau dir den Code an. Es gibt jetzt eine Reibung (friction) ins Spiel wenn der Ball von einer Wand abprallt. Der Ball springt weniger und weniger und rollt am Ende über den Boden.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Cool simulation, and adds some realism.  Play with it a bit!  Change the <span class=tutor-code>friction</span>, add more balls, increase <span class=tutor-code>gravity</span>, change <span class=tutor-code>timeStep</span>.  Try messing around with it!",
      de: "Tolle Simulation und sieht sehr echt aus. Spiel damit ein bisschen. Ändere die Reibung <span class=tutor-code>friction</span>, mach mehr Bällem, erhöhe die Schwerkraft <span class=tutor-code>gravity</span>, oder ändere die Zeitschritte <span class=tutor-code>timeStep</span>. Spiel mit den Zahlen!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "For our last lessons, let's work a bit with tracking the mouse.  This is a lot of fun!",
      de: "Für den letzten Teil, lass uns mit der Computermaus arbeiten. Das macht Spass!",
      jp: "jp"
    },
    code: "",
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    lessonSection: {
      en: "Mouse Events",
      de: "Mausereignisse",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Here is a ball that sticks to the mouse.  Every time the mouse moves, the ball redraws on top of the mouse.",
      de: "Hier ist ein Ball der an der Computermaus hängt. Jedesmal wenn sich die Maus bewegt, wird der Ball neu gezeichtet. Und zwar wo die Maus ist.",
      jp: "jp"
    },
    code: "var pane = document.getElementById('pane');\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\npane.onmousemove = function(evt) {\n  var x = evt.clientX;\n  var y = evt.clientY;\n  \n  c.clearRect(0, 0, w, h);\n  c.beginPath();\n  c.arc(x, y, 40, 0, Math.PI * 2);\n  c.stroke();\n};\n"
  },
  {
    message: {
      en: "How does it work?  It starts by setting the variable pane to the element of the web page called 'pane', which happens to be the one our drawing canvas is in.",
      de: "Wie funktioniert das? Es fängt damit an dass eine Variable 'pane' das Element der Webseite findet wo gezeichnet wird. Das ist unsere Leinwand.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>pane.onmousemove = function(evt) {};</span> is really important.  That code binds a function to the <i>onmousemove</i> event on the 'pane' element, which means this function is called any time the mouse moves inside the drawing canvas.",
      de: "<span class=tutor-code>pane.onmousemove = function(evt) {};</span> ist ganz wichtig. Diese Zeile verbindet die Funktion <i>onmousemove</i> mit dem 'pane' Element. D.h. jedesmal wenn die Maus in der Leinwand wo wir zeichnen ist, wird diese Funktion aufgerufen.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Our function then asks the event where the mouse is (the <span class=tutor-code>clientX</span> and <span class=tutor-code>clientY</span>) and draws a big circle around it.  Make sense?",
      de: "Unsere Function fragt dann wo die Maus ist (<span class=tutor-code>clientX</span> und <span class=tutor-code>clientY</span>) und zeichnet einen grossen Kreis dorthin. Okay?",
      jp: "jp"
    }
  },
  {
    message: {
      en: "What's really cool about this is that we can combine it with animation.  Look at this!",
      de: "Das Tolle ist, dass wir das jetzt mit Animationen kombinieren können. Schau hier!",
      jp: "jp"
    },
    code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    // Acceleration toward the mouse\n    var diffX = mouseX - this.x;\n    var diffY = mouseY - this.y;\n    var dist2 = diffX * diffX + diffY * diffY + 1;\n    var ddx = accel * Math.abs(diffX) *\n              diffX / dist2;\n    var ddy = accel * Math.abs(diffY) *\n              diffY / dist2;\n    \n    // Bounce off the edges\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx * friction;\n    } else {\n      this.dx += ddx;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy * friction;\n    } else {\n      this.dy += ddy;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    // Enforce the boundaries\n    this.x = Math.max(this.r, this.x);\n    this.x = Math.min(w - this.r, this.x);\n    this.y = Math.max(this.r, this.y);\n    this.y = Math.min(h - this.r, this.y);\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar accel = 0.1;\nvar friction = 0.8;\nvar mouseX = 0;\nvar mouseY = 0;\nvar timeStep = 25; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 4; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n// Store the mouse position when the mouse moves\nvar pane = document.getElementById('pane');\npane.onmousemove = function(evt) {\n  mouseX = evt.clientX;\n  mouseY = evt.clientY;\n};\n",
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    lessonSection: {
      en: "Springs and Physics",
      de: "Federn und Physik",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "What this does is, every time the mouse moves in the canvas area, it sets <span class=tutor-code>mouseX</span> and <span class=tutor-code>mouseY</span> to the location of the mouse.",
      de: "Hier ist was der Code macht: Jedesmal wenn die Maus innerhalb der Leinwand ist, wird <span class=tutor-code>mouseX</span> und <span class=tutor-code>mouseY</span> auf die Position der Maus gesetzt.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Then, when each ball is updated, it figures out how far away from the mouse it is, and accelerates toward it.",
      de: "Wenn dann jeder Ball neu berechnet wird mittels <span class=tutor-code>update()</span>, findet er heraus wie weit er von der Maus entfernt ist und beschleunigt zur Maus.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "The acceleration is the square root of the distance, so it pulls harder when it is really far away.  Imagine all the balls being connected to the mouse by little rubber bands or springs.  It's a little like that.",
      de: "Die Beschleunigung ist die Wurzel der Entfernung, das heisst sie ist grösser wenn die Maus weiter weg ist. Stell dir vor alle Bälle sind mit einem kleinen Gummiband mit der Maus verbunden.",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Try making the balls smaller!  And add more of them!  I like it with about 40 small balls chasing the mouse.",
      de: "Mach die Bälle kleiner! Mach mehr Bälle! Ich mag 40 kleine Bälle die die Maus verfolgen!",
      jp: "jp"
    }
  },
  {
    message: {
      en: "Great job! Like what you learned? Was it fun?",
      de: "Super! War das interessant? Hat es Spass gemacht?",
      jp: "jp"
    },
    code: "",
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    lessonSection: {
      en: "The End",
      de: "Das Ende",
      jp: "jp section"
    }
  },
  {
    message: {
      en: "Wow, you did everything!  Congratulations, nice work!  A lot of these are really hard. I'm impressed you finished!  I hope you enjoyed it!",
      de: "Wahnsinn! Du hast alles gemacht! Ich gratuliere dir! Viele waren wirklich schwer! Ich bin beeindruckt und hoffe es hat dir Spass gemacht!",
      jp: "jp"
    },
    code: "var pane = document.getElementById('pane');\nvar s = 3;\n\npane.onmousemove = function(evt) {\n  c.fillStyle = randomRGBA();\n  var x = evt.clientX;\n  var y = evt.clientY;\n  c.fillRect(x - s / 2, y - s / 2, s, s);};\n\nfunction randomRGBA() {\n  var r = randInt(255);\n  var g = randInt(255);\n  var b = randInt(255);\n  var a = Math.random();\n  var rgba = [r,g,b,a].join(\",\");\n  return \"rgba(\" + rgba + \")\";\n}\nfunction randInt(limit) {\n  var x = Math.random() * limit;\n  return Math.floor(x);\n}\n"
  }
];




// To keep JSHint from complaining about variables and functions in
// the hidden code, list them here.  The boolean is whether they can
// be overridden by user code.
var predefForJSHint = {c: true, 
             rgb: true, 
             rgba: true,
            };


// Images for tutor, referenced by the lessons to switch
// [ This is disabled.  It was too distracting in playtesting.
// still could be used later to switch poses in Code Maven. ]
var tutorImages = [
  "i/monster2.png",
  "i/tutor0.png"
  ];



/*
IDEAS FOR MORE:

onmousedown to clear screen?  Or to make boxes repelled instead of attracted?
Done enough fractals?  If more, snowflake fractal? Dragon curve? Sierpinski's Triangle?
A snake?  First box attracted to mouse, other boxes attracted to previous box?
Birds?  Boxes try to keep distance from each other?
Game of life?  Wolves and sheep?
*/
