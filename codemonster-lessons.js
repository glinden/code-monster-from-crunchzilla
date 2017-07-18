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
      jp: "コードモンスターだ！&nbsp;ここの文章をクリックして次に進んでね！"
    },
    code: "c.fillRect(20, 20, 50, 75);\n",
    lessonSection: {
      en: "Getting Started",
      de: "Los geht's!",
      jp: "さあ、はじめよう！"
    },
    tutorImage: 1,
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n"
  },
  {
    message: {
      en: "You're going to learn some programming! (click again)",
      de: "Du wirst etwas programmieren lernen! (Klicke wieder hier)",
      jp: "これからプログラミングについて学ぼう！&nbsp;(もういちどクリックしてね)"
    }
  },
  {
    message: {
      en: "Below me, on the left, is Javascript code, on the right, what it does.",
      de: "Unter mir, auf der linken Seite, ist Javascript Code. Auf der rechten Seite ist das, was der Code macht.",
      jp: "下を見て。左がわには<ruby>Javascript<rp>(</rp><rt>ジャバスクリプト</rt><rp>)</rp></ruby>のコード、右がわにはそのコードが何をやっているかがかいてあるよ。"
    }
  },
  {
    message: {
      en: "You can use<span class=tutor-code>fillRect()</span>to draw a box. See the number 50?  Can you change that to 150?",
      de: "Du kannst mit<span class=tutor-code>fillRect()</span>ein Rechteck zeichnen. Siehst Du die Nummer 50? Kannst Du die in 150 ändern?",
      jp: "<span class=tutor-code>fillRect()</span>を使って四角形をかけるよ。50という数字が見えるかな？　それを半角数字で150にかえてみよう！&nbsp;<br><br><i class=jp>★プログラミングのおやくそく★<br>数字やアルファベットはかならず<strong>半角</strong>で入力してね！</i>"
    },
    code: "c.fillRect(20, 20, 50, 75);\n"
  },
  {
    message: {
      en: "That made the box wider. What do you think the other numbers do? Try changing them.",
      de: "Das hat das Rechteck weiter gemacht. Was glaubst du machen die anderen Zahlen? Versuche sie zu ändern.",
      jp: "四角形が大きくなったね。他の数字にするとどうなると思う？&nbsp;いろいろかえてみよう！",
    },
    lessonSection: {
      en: "Parameters and Drawing",
      de: "Parameter und Zeichnen",
      jp: "パラメータと描画"
    }
  },
  {
    message: {
      en: "Did you figure it out?  The numbers are how far from the left side to draw the box, how far from the top, how wide to draw the box, and how tall.",
      de: "Hast du verstanden was sie machen? Die Zahlen sagen wie weit von links das Rechteck zu zeichnen ist, wie weit von oben, wie weit das Rechteck ist und wie hoch es gezeichnet werden soll.",
      jp: "分かったかな？&nbsp;これらの数字は、左はし、または上からどのくらいはなれた場所に四角形をかくか、四角形のはば、高さはどのくらいにするかを表しているんだ。"
    }
  },
  {
    message: {
      en: "Try changing all the numbers!  Play with it!",
      de: "Ändere alle Zahlen! Spiel mit ihnen!",
      jp: "全ての数字をかえてみよう！&nbsp;いろいろかえて遊んでみよう！"
    }
  },
  {
    message: {
      en: "Two boxes. Can you change the numbers to make them bigger?",
      de: "Zwei Rechtecke. Kannst du sie grösser machen?",
      jp: "2つの四角形があるね。数字をかえてこれらを大きくしてみよう！"
    },
    code: "c.fillRect(20, 20, 50, 75);\nc.fillRect(100, 100, 60, 80);\n"
  },
  {
    message: {
      en: "Can you change the numbers to move them around?",
      de: "Kannst du die Zahlen ändern um sie herumzubewegen?",
      jp: "数字をかえて四角形を動かしてみよう。"
    }
  },
  {
    message: {
      en: "Can you change the numbers so that one covers the other?",
      de: "Kannst du die Zahlen ändern damit eins mit dem anderen überlappt?",
      jp: "かた方をかくすように数字をかえてみよう。"
    }
  },
  {
    message: {
      en: "Monster like boxes square.",
      de: "Monster mögen Quadrate.",
      jp: "モンスターは<ruby>正方形<rp>(</rp><rt>せいほうけい</rt><rp>)</rp></ruby>がすき。"
    },
    code: "c.fillRect(20, 20, 80, 80);\n"
  },
  {
    message: {
      en: "A square has the same width and height. This box has the same width and height, both are 80.",
      de: "Ein Quadrat hat die gleiche Weite und Höhe. Dieses Rechteck hat die gleiche Weite und Höhe: 80.",
      jp: "正方形はたてと横が同じ長さの四角形だよ。これはたてと横が両方とも80で同じ長さだよ。"
    },
    code: "c.fillRect(20, 20, 80, 80);\n"
  },
  {
    message: {
      en: "Hey, look, this does the same thing!",
      de: "Guck mal! Das hier macht das gleiche!",
      jp: "ねえ、見て！&nbsp;これは同じことをしているよ！"
    },
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\n",
    lessonSection: {
      en: "Variables",
      de: "Variable",
      jp: "変数を見てみよう"
    }
  },
  {
    message: {
      en: "Why does that do the same thing?  Any ideas?",
      de: "Warum macht das das gleiche? Hast du eine Idee?",
      jp: "どうして同じことができると思う？&nbsp;わかるかな？"
    }
  },
  {
    message: {
      en: "var means variable. What we did is create a variable, called it<span class=tutor-code>size</span>, set it equal to 80, and now we can use<span class=tutor-code>size</span>where we would have used 80. Do you know why we might want that?",
      de: "var bedeutet Variable. Was wir gemacht haben ist das wir eine Variable<span class=tutor-code>size</span>erzeugen, und lassen sie 80 sein, und jetzt können wir<span class=tutor-code>size</span>benutzen wo wir früher 80 hatten. Hast du vielleicht eine Idee warum wir das machen?",
      jp: "「var」は<ruby>変数<rp>（</rp><rt>へんすう</rt><rp>）</rp></ruby>という意味だよ。<br>ここでは、「<span class=tutor-code>size</span>」（サイズ・大きさ）とよぶ<ruby>変数<rp>（</rp><rt>へんすう</rt><rp>）</rp></ruby>を作って、それを80にしているんだ。<br>そうすると80にした<span class=tutor-code>size</span>が使えるようになるんだ。<br>なんでそんなことがひつようだと思う?"
    },
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\n"
  },
  {
    message: {
      en: "What happens if you change 80 to 220?",
      de: "Was passiert wenn du die Zahl 80 in 220 änderst?",
      jp: "もし80を220にかえたらどうなると思う?"
    }
  },
  {
    message: {
      en: "And look!  Wider and taller box, both at the same time!",
      de: "Schau! Das Quadrat ist jetzt weiter und höher! Gleichzeitig!",
      jp: "見て！&nbsp;四角形のたてと横の長さを同時にかえられるんだ!"
    }
  },
  {
    message: {
      en: "Can you change the other numbers to move the box around?",
      de: "Kannst du die anderen Zahlen ändern um das Quadrat herumzubewegen?",
      jp: "他の数字もかえて四角形を動かしてみよう。"
    }
  },
  {
    message: {
      en: "Can you make the box very small?",
      de: "Kannst Du das Quadrat ganz klein machen?",
      jp: "四角形をものすごく小さくしてみよう。"
    }
  },
  {
    message: {
      en: "What happens if you make<span class=tutor-code>size</span>equal to 0? Or to something really big like 5000?",
      de: "Was passiert wenn du<span class=tutor-code>size</span>zu 0 machst? Oder riesig, wie zum Beispiel 5000?",
      jp: "<span class=tutor-code>size</span>を0にしたらどうなるかな？&nbsp;また、5000のようなものすごく大きい数字にしたらどうなるかな？"
    }
  },
  {
    message: {
      en: "Monster want two boxes.",
      de: "Monster mag 2 Quadrate.",
      jp: "モンスターは四角形が2つ欲しいな。"
    },
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\nc.fillRect(90, 90, size, size);\n"
  },
  {
    message: {
      en: "Both boxes have the same size.  That's a neat trick.",
      de: "Beide sind gleichgross. Das ist schlau.",
      jp: "四角形は両方とも同じ大きさにしてね。ちょっと考えれば、かんたんだね！"
    }
  },
  {
    message: {
      en: "You can change what<span class=tutor-code>size</span>is equal to.  That will grow or shrink both boxes at once! Try changing 80 to 180!",
      de: "Du kannst<span class=tutor-code>size</span>ändern zu was du magst. Beide werden gleichzeitig grösser oder kleiner! Probiere die 80 in 180 zu ändern!",
      jp: "<span class=tutor-code>size</span>の数字をかえればいいよね。そうすると、いちどに両方の四角形の大きさを大きくしたり、小さくしたりできるからね！&nbsp;<br>80から180にしてみよう！"
    },
    youGotItCheck: "180"
  },
  {
    message: {
      en: "Can you move each of the boxes around by changing some of the numbers?",
      de: "Kannst du die Quadrate herumbewegen indem du einige Zahlen änderst?",
      jp: "いくつか数字をかえて四角形を動かしてみよう。"
    }
  },
  {
    message: {
      en: "Monster want more boxes.  Three boxes!",
      de: "Monster mag mehr Quadrate! 3 Quadrate!",
      jp: "モンスターはもっと四角形がほしいな。3つほしい！"
    },
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\nc.fillRect(80, 80, size, size);\nc.fillRect(140, 140, size, size);\n"
  },
  {
    message: {
      en: "Now what happens when you change what<span class=tutor-code>size</span>is equal to?",
      de: "Was passiert wenn du<span class=tutor-code>size</span>jetzt änderst?",
      jp: "では、<span class=tutor-code>size</span>を同じようにかえたら何が起きるだろう？"
    }
  },
  {
    message: {
      en: "More boxes!  Try changing<span class=tutor-code>size</span>now!",
      de: "Mehr Quadrate! Jetzt versuche<span class=tutor-code>size</span>zu ändern!",
      jp: "四角形がふえた！&nbsp;では、<span class=tutor-code>size</span>を今すぐかえてみよう!"
    },
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\nc.fillRect(60, 60, size, size);\nc.fillRect(100, 100, size, size);\nc.fillRect(140, 140, size, size);\nc.fillRect(180, 180, size, size);\n"
  },
  {
    message: {
      en: "Ooo!  Color!  Pretty!",
      de: "Oh! Farben! Schön!",
      jp: "すごい！&nbsp;色がついてる！&nbsp;かわいい！"
    },
    code: "var size = 80;\n\nc.fillStyle = \"blue\";\nc.fillRect(20, 20, size, size);\n",
    lessonSection: {
      en: "Color",
      de: "Farben",
      jp: "色"
    }
  },
  {
    message: {
      en: "Many colors work.  Try \"green\" or \"purple\" or \"gold\".",
      de: "Viele Farben funktionieren: rot (red), grün (green), blau (blue), violett (purple), goldfarben (gold).",
      jp: "いろんな色にできるよ。blueを \"green\"(緑) や \"purple\"(むらさき) や \"gold\"(金) にしてみよう。"
    }
  },
  {
    message: {
      en: "How about two pink boxes?",
      de: "Wie wäre es mit rosa (pink) Quadraten?",
      jp: "2つのピンクの四角形はどう？"
    },
    code: "var size = 80;\n\nc.fillStyle =\"pink\";\nc.fillRect(20, 20, size, size);\nc.fillRect(90, 90, size, size);\n"
  },
  {
    message: {
      en: "One pink and one silver.",
      de: "Eins rosa (pink), und eins silberfarben (silver).",
      jp: "1つはピンク(pink)で、もう1つは銀(silver)にしよう。"
    },
    code: "var size = 80;\n\nc.fillStyle =\"pink\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"silver\";\nc.fillRect(90, 90, size, size);\n"
  },
  {
    message: {
      en: "Can you make the silver box gold instead?  And the pink one blue instead?",
      de: "Kannst du das silberne Quadrat gold (gold) machen? Und die rosane blau (blue)?",
      jp: "銀の四角形を、銀ではなく金(gold)にできるかな？&nbsp;&nbsp;で、ピンクを青(blue)にかえられる？"
    },
    code: "var size = 80;\n\nc.fillStyle =\"pink\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"silver\";\nc.fillRect(90, 90, size, size);\n"
  },
  {
    message: {
      en: "Here are two boxes that are the same color again.  Now can you make the two boxes be different colors?",
      de: "Hier sind 2 Quadrate mit der gleichen Farbe. Kannst du eine von beiden eine andere Farbe geben?",
      jp: "また2つの四角形が同じ色になったね。今度は、2つの四角形をちがう色にできるかな？"
    },
    code: "var size = 80;\n\nc.fillStyle =\"green\";\nc.fillRect(20, 20, size, size);\n\nc.fillRect(90, 90, size, size);\n"
  },
  {
    message: {
      en: "Here is one version.  I like red and blue.",
      de: "Hier ist eine Lösung. Ich mag rot (red) und blau (blue).",
      jp: "こういうやり方もあるよ。モンスターは赤と青が好きなんだ。"
    },
    code: "var size = 80;\n\nc.fillStyle =\"red\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"blue\";\nc.fillRect(80, 80, size, size);\n"
  },
  {
    message: {
      en: "Red, green, and blue.  That's nice.",
      de: "Rot, grün und blau. Sooo schön.",
      jp: "赤、緑、青。いいね。"
    },
    code: "var size = 80;\n\nc.fillStyle =\"red\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"lime\";\nc.fillRect(80, 80, size, size);\nc.fillStyle =\"blue\";\nc.fillRect(140, 140, size, size);\n"
  },
  {
    message: {
      en: "Wha... This does the same thing!  What could<span class=tutor-code>rgb()</span>be?",
      de: "Huch...das macht das gleiche! Was mag wohl<span class=tutor-code>rgb()</span>sein?",
      jp: "おや、これでも同じことができているよ！&nbsp;<span class=tutor-code>rgb()</span>って何なのかな？"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgb(255, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"rgb(0, 255, 0)\";\nc.fillRect(80, 80, size, size);\nc.fillStyle =\"rgb(0, 0, 255)\";\nc.fillRect(140, 140, size, size);\n"
  },
  {
    message: {
      en: "Try changing any of the zeroes to 200 or so.  And try changing any of the 255 to 0. What do the numbers seem to do?",
      de: "Versuche die Null in zum Beispiel 200 zu ändern. Und die 255 in 0. Was scheinen die Zahlen zu machen?",
      jp: "0のうちのどれかを200とかにしてみよう。そして255のどれかを0にしてみよう。この数字は何を意味しているのかな?"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgb(255, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"rgb(0, 255, 0)\";\nc.fillRect(80, 80, size, size);\nc.fillStyle =\"rgb(0, 0, 255)\";\nc.fillRect(140, 140, size, size);\n"
  },
  {
    message: {
      en: "Did you figure it out? <span class=tutor-code>rgb()</span>refers to red, green, and blue.  The numbers go from 0 to 255. So,<span class=tutor-code>rgb(0, 255, 0)</span>means no red or blue, but all the green you got!",
      de: "Hast du es herausgefunden?<span class=tutor-code>rgb()</span>kommt von red, green, blue (rot, grün, blau). Die Zahlen gehen von 0 bis 255.<span class=tutor-code>rgb(0, 255, 0)</span>heisst kein rot, viel grün, kein blau.",
      jp: "分かったかな？&nbsp;<span class=tutor-code>rgb()</span>とは、red(赤)、green(緑)、blue(青)を意味しているんだ。数字は0から255まで。だから、<span class=tutor-code>rgb(0, 255, 0)</span>は赤でもなく、青でもなく、緑っていうことになるんだ！"
    }
  },
  {
    message: {
      en: "You can make lots of colors this way if you change some of the numbers.  Try it!",
      de: "Du kannst viele Farben erzeugen indem du die Zahlen änderst. Versuch es!",
      jp: "こうやって中の数字をかえることで、いろいろな色にかえられるよ。やってみよう！"
    }
  },
  {
    message: {
      en: "Here is a fun game.  Can you make these two boxes the same color?",
      de: "Hier kommt ein spassiges Spiel: Kannst du beide Quadrate in der gleichen Farbe einfärben?",
      jp: "楽しいゲームをしよう。これらの2つの四角形を同じ色にできるかな？"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgb(0, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"red\";\nc.fillRect(80, 80, size, size);\n",
    lessonSection: {
      en: "Quiz: Color",
      de: "Quiz: Farben",
      jp: "クイズ:色"
    },
    youGotItCheck: "rgbs*(s*255s*,s*0s*,s*0s*)"
  },
  {
    message: {
      en: "Can you make these both blue?",
      de: "Kannst du die Quadrate blau machen?",
      jp: "これら両方の四角形を青色にできるかな？"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgb(0, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"blue\";\nc.fillRect(80, 80, size, size);\n",
    youGotItCheck: "rgb(0, 0, 255)"
  },
  {
    message: {
      en: "Can you figure out what the<span class=tutor-code>rgb()</span>numbers should be to make these both yellow?",
      de: "Welche Zahlen ergeben gelb?",
      jp: "これら両方の四角形を黄色にするには、<span class=tutor-code>rgb()</span>の数字をいくつにすればよいかわかるかな？"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgb(255, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"yellow\";\nc.fillRect(80, 80, size, size);\n"
  },
  {
    message: {
      en: "Can you figure out what the<span class=tutor-code>rgb()</span>numbers should be to make these both teal?",
      de: "Welche Zahlen ergeben blaugrün?",
      jp: "これら両方の四角形を青緑色(teal)にするには、<span class=tutor-code>rgb()</span>の数字をいくつにすればよいかわかるかな？"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgb(0, 0, 128)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"teal\";\nc.fillRect(80, 80, size, size);\n"
  },
  {
    message: {
      en: "Okay, this one is really hard.  Can you make these two exactly match?  Can you figure out what the<span class=tutor-code>rgb()</span>numbers should be to make these both crimson? Don't worry if you don't get it exactly, just see how close you can get!",
      de: "Okay, das ist jetzt schwer: Kannst du die Farben genau gleich machen? Welche Zahlen für<span class=tutor-code>rgb()</span>ergeben karminrot (crimson)? Versuche so genau wie möglich die karminrot zu treffen.",
      jp: "さあ、これはすごくむずかしいよ。この2つの四角形を全く同じ色にできるかな？&nbsp;両方の四角形を<ruby><rb>真紅</rb><rp>(</rp><rt>しんく</rt><rp>)</rp></ruby>の色(crimson)にするには<span class=tutor-code>rgb()</span>の数字をいくつにすればいいかわかるかな？&nbsp;<br>正かくにできなくても心配ないよ。近い色にできればいいよ！"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgb(0, 0, 0)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"crimson\";\nc.fillRect(80, 80, size, size);\n"
  },
  {
    message: {
      en: "Here it is.  Whew, that's a hard one!  How close did you get?",
      de: "Hier ist die Lösung. Weia, das war schwer! Wie nah warst du dran?",
      jp: "できたよ。これはむずかしいね！&nbsp;どのくらい近い色ができたかな？"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgb(220, 20, 60)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"crimson\";\nc.fillRect(80, 80, size, size);\n"
  },
  {
    message: {
      en: "If you want to try others, put \"olive\", \"purple\", \"aqua\", or any other color you can think of as the color for the first box, then try to find the rgb numbers that match it!",
      de: "Wenn du andere Farben probieren willst, probier \"olive\", \"purple\", \"aqua\" oder probier eine andere Farbe (aber in Englisch)",
      jp: "他の色もやってみたければ、\"olive\"(オリーブ色)、\"purple\"(うすむらさき色)、\"aqua\"(水色)を入れてみよう。または、最初の四角形に思いつく色を入れてみて、それに合うrgbの数字を見つけてみよう！"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>rgba()</span>is a crazy version of<span class=tutor-code>rgb()</span>. See what this does?  It's got one more number at the end that's 0.5.  What is that last number doing? Try changing the 0.5 to 0.1.  Or to 0.8.  What does it do?",
      de: "<span class=tutor-code>rgba()</span>ist eine besondere Version von<span class=tutor-code>rgb()</span>. Siehst Du den Unterschied? Sie hat eine Zahl mehr am Ende und die ist 0.5. Was macht die letzte Zahl? Versuch die 0.5 durch 0.1 or 0.8 zu ersetzen. Was passiert?",
      jp: "<span class=tutor-code>rgba()</span>は<span class=tutor-code>rgb()</span>のもっとすごいバージョンだよ。何ができるか見てみよう。<span class=tutor-code>rgb()</span>にはさいごにもう1つ数字が追加されていて、0.5ってなっているね。このさいごの数字は何をやっているんだろう？&nbsp;0.5を0.1にかえてみよう。または0.8にかえてみよう。どうなるかな？"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgba(255, 0, 0, 0.5)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(80, 80, size, size);\n",
    lessonSection: {
      en: "Color and Transparency",
      de: "Farben und Transparenz",
      jp: "色と透明"
    }
  },
  {
    message: {
      en: "The a in<span class=tutor-code>rgba</span>means alpha (how transparent the box is) from 0.0 (invisible) to 1.0 (solid)",
      de: "Das a in<span class=tutor-code>rgba</span>steht für alpha (Transparenz) und sie reicht von 0.0 (unsichtbar) bis 1.0 (undurchsichtig).",
      jp: "<span class=tutor-code>rgb()</span>の「a」は<ruby>alpha<rp>(</rp><rt>アルファ</rt><rp>)</rp></ruby>のことで、どれだけすきとおっているかを意味しているんだ。数字は0.0(とうめい)から1.0(ぬりつぶし)までで、0、0.1、0.2、0.3、0.4、0.5、0.6、0.7、0.8、0.9、1 のどれかを使うんだよ。"
    }
  },
  {
    message: {
      en: "You can do pretty cool things with<span class=tutor-code>rgba()</span>.  Look at this!  Try changing some of the 0.5 alphas to 0.2 or 0.8!",
      de: "Du kannst interessante Sachen mit<span class=tutor-code>rgba()</span>machen. Schau mal! Ändere einige der 0.5 transparenz in 0.2 oder 0.8!",
      jp: "<span class=tutor-code>rgba()</span>を使ってすごいことができるよ。これを見てよ！&nbsp;0.5ってなっているalphaのどれかを0.2または0.8にかえてみよう！"
    },
    code: "var size = 80;\n\nc.fillStyle =\"rgba(255, 0, 0, 0.5)\";\nc.fillRect(20, 20, size, size);\nc.fillStyle =\"rgba(0, 255, 0, 0.5)\";\nc.fillRect(80, 80, size, size);\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(140, 140, size, size);\n"
  },
  {
    message: {
      en: "Try changing the size from 80 to 180!  You can get some fun effects when the colors overlap. Play with it!",
      de: "Versuch die Grösse von 80 auf 180 zu ändern! Du kannst spassige Effekte erhalten wenn Farben überlappen. Spiel damit!",
      jp: "sizeを80から180にかえてみよう！&nbsp;色の重なったところが面白くなっているでしょ。いろいろ遊んでみてね！"
    }
  },
  {
    message: {
      en: "Let's go back to variables. Monster no like to repeat numbers. Can you replace both the 20 numbers with<span class=tutor-code>offset</span>?",
      de: "Lass uns zurück auf Variablen kommen. Monster mögen keine Wiederholungen. Kannst Du beide 20 mit<span class=tutor-code>offset</span>ersetzen?",
      jp: "では<ruby>変数<rp>（</rp><rt>へんすう</rt><rp>）</rp></ruby>にもどろう。モンスターは数字をくり返すのがスキじゃない。20という数字の両方を「<span class=tutor-code>offset</span>」にかえられるかな？"
    },
    code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(20, 20, size, size);\nc.fillRect(90, 90, size, size);\n",
    lessonSection: {
      en: "Operators and Assignment",
      de: "Operatoren und Zuweisungen",
      jp: "演算子と代入"
    }
  },
  {
    message: {
      en: "Now try changing what<span class=tutor-code>var offset</span>is equal to from 30 to 50.  See how you can move the first box?",
      de: "Jetzt ändere<span class=tutor-code>var offset</span>von 30 nach 50. Siehst du wie sich das erste Quadrat bewegt?",
      jp: "今度は、<span class=tutor-code>var offset</span>を30から50にかえてみよう。さいしょの四角形が動いたでしょ？"
    },
    code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\nc.fillRect(90, 90, size, size);\n"
  },
  {
    message: {
      en: "Variables can be set to new values.  See how offset is set to 100 before being used by the second box?",
      de: "Variablen können neue Werte erhalten. Siehst du wie sie auf 100 gesetzt wird bevor es vom zweiten Quadrat benutzt wird?",
      jp: "こんなふうに<ruby>変数<rp>（</rp><rt>へんすう</rt><rp>）</rp></ruby>には新しい数字を入れられるんだ。それに2つ目の四角形のコードの、上の行を見てみて。「var offset = 100;」じゃなくて「offset = 100;」って書いてあるでしょ。2回目からあとは「var」がいらないんだ。"
    },
    code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\noffset = 100;\nc.fillRect(offset, offset, size, size);\n"
  },
  {
    message: {
      en: "Try moving the second box.  Change the 100 to 50 or 150.",
      de: "Versuche das zweite Quadrat zu bewegen. Ändere die 100 in 50 oder 150.",
      jp: "2つ目の四角形を動かしてみよう。100を50や150にかえてみて！"
    }
  },
  {
    message: {
      en: "Try moving the first box too.",
      de: "Versuche das erste Quadrat auch zu bewegen.",
      jp: "1つ目の四角形も動かしてみて。"
    }
  },
  {
    message: {
      en: "Can you put the boxes on top of each other so it looks like just one box?",
      de: "Kannst Du beide Quadrate übereinander zeichnen sodass es wie ein Quadrat aussieht?",
      jp: "1つの四角形に見えるように、四角形を重ねてみてみよう。"
    }
  },
  {
    message: {
      en: "You can also add numbers to a variable. See what this is doing? It changes<span class=tutor-code>offset</span>with<span class=tutor-code>offset = offset + 50</span>",
      de: "Du kannst auch Zahlen zu Variablen addieren. Siehst du wie das funktioniert? Es ändert<span class=tutor-code>offset</span>mit<span class=tutor-code>offset = offset + 50</span>",
      jp: "<ruby>変数<rp>(</rp><rt>へんすう</rt><rp>)</rp></ruby>には数字も足せるんだよ。どうやるかっていうと、<span class=tutor-code>offset</span>を<span class=tutor-code>offset = offset + 50</span>にかえるんだ。"
    },
    code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 50;\nc.fillRect(offset, offset, size, size);\n"
  },
  {
    message: {
      en: "<span class=tutor-code>offset = offset + 50</span>means take<span class=tutor-code>offset</span>, add 50 to it, then make<span class=tutor-code>offset</span>equal that now.  In other words, make<span class=tutor-code>offset</span>50 more than it used to be.",
      de: "<span class=tutor-code>offset = offset + 50</span>bedeutet: nehme den Wert von<span class=tutor-code>offset</span>, addiere 50 dazu, und setze<span class=tutor-code>offset</span>auf den neuen Wert. In anderen Worten: mache<span class=tutor-code>offset</span>50 mehr.",
      jp: "<span class=tutor-code>offset = offset + 50</span>とは、<span class=tutor-code>offset</span>に50足したものが新しい<span class=tutor-code>offset</span>の数字になるということなんだ。ここの例でいうと、元の<span class=tutor-code>offset</span>は30だから、新しい<span class=tutor-code>offset</span>は、30 + 50 = 80、つまり80にかわるということなんだ。"
    }
  },
  {
    message: {
      en: "How about you try it?  Can you replace both the 90 numbers used for the (left, top) of the second box with a variable? Hint: Either create a new variable or change<span class=tutor-code>offset</span>and then use<span class=tutor-code>offset</span>.",
      de: "Probier mal! Kannst du beide 90 für (links, oben) des zweiten Quadrates mit einer Variablen ändern? Ein Tip: Entweder zu benutzt eine neue Variable, oder du änderst<span class=tutor-code>offset</span>und benutzt<span class=tutor-code>offset</span>dann.",
      jp: "試してみよう。2つ目の四角形の(左,上)の90を<ruby>変数<rp>（</rp><rt>へんすう</rt><rp>）</rp></ruby>に変えてみよう。<br>ヒント：新しい<ruby>変数<rp>（</rp><rt>へんすう</rt><rp>）</rp></ruby>を作るか、<span class=tutor-code>offset</span>を使ってみよう。そのときは<span class=tutor-code>offset</span>の数字をかえてね。"
    },
    code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\n\nc.fillRect(90, 90, size, size);\n",
    lessonSection: {
      en: "Quiz: Variables and Operators",
      de: "de section",
      jp: "クイズ:変数と演算"
    }
  },
  {
    message: {
      en: "Monsters like adding.  Me add good.  Okay, now try changing<span class=tutor-code>offset</span>from 30 to 80.  See what happens?",
      de: "Monster mag addieren. Ich kann das! Okay, versuch<span class=tutor-code>offset</span>von 30 auf 80 zu ändern. Was passiert?",
      jp: "モンスターは足すのが大好き。足すっていいね。それでは<span class=tutor-code>var offset</span>を30から80にかえてみよう。何が起きるかな？"
    },
    code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\n"
  },
  {
    message: {
      en: "Ooo, you can move both boxes together!  Change the<span class=tutor-code>offset</span>and move 'em around!",
      de: "Oh, du kannst beide Quadrate zusammen bewegen! Ändere<span class=tutor-code>offset</span>und bewege sie herum!",
      jp: "おおおー、二つの四角形を同時に動かせるね！&nbsp;<span class=tutor-code>offset</span>をかえて、いろんなところに動かしてみよう！"
    }
  },
  {
    message: {
      en: "This looks the same, but it's a little different.  What's that<span class=tutor-code>*</span>doing?  What happens if you change<span class=tutor-code>* 3</span>to<span class=tutor-code>* 2</span>?  Try changing it to<span class=tutor-code>* 1</span>.  Try changing the<span class=tutor-code>offset</span>too.  Did you figure out what<span class=tutor-code>*</span>means?",
      de: "Das sieht ähnlich aus, ist aber etwas anders. Was macht das<span class=tutor-code>*</span>? Was passiert wenn du<span class=tutor-code>* 3</span>in<span class=tutor-code>* 2</span>änderst? Probier auch mal<span class=tutor-code>* 1</span>. Ändere auch<span class=tutor-code>offset</span>. Hast du's herausgefunden was<span class=tutor-code>*</span>macht?",
      jp: "これは同じように見えるけどちょっとちがうね。「<span class=tutor-code>*</span>」は何をしているかな？&nbsp;<span class=tutor-code>* 3</span>を<span class=tutor-code>* 2</span>にかえると何が起こるかな?<span class=tutor-code>* 1</span>にかえるとどうかな？&nbsp;<span class=tutor-code>offset</span>もかえてみよう。「<span class=tutor-code>*</span>」が何か分かったかな？"
    },
    code: "var offset = 30;\nvar size = 80;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\noffset = offset * 3;\nc.fillRect(offset, offset, size, size);\n",
    lessonSection: {
      en: "More Operators",
      de: "Mehr Operatoren",
      jp: "もっと演算をしてみよう"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>*</span>means multiply. <span class=tutor-code>2 * 2</span>would be 4.  So,<span class=tutor-code>offset = offset * 3</span>means make<span class=tutor-code>offset</span>three times bigger.",
      de: "<span class=tutor-code>*</span>benutzt man zum multiplizieren.<span class=tutor-code>2 * 2</span>ist 4.<span class=tutor-code>offset = offset * 3</span>macht also<span class=tutor-code>offset</span>3 mal grösser.",
      jp: "「<span class=tutor-code>*</span>」は「かける（×）」という意味だね。<span class=tutor-code>2 * 2</span>は4になるね。だから<span class=tutor-code>offset = offset * 3</span>は<span class=tutor-code>offset</span>を3倍大きくしてることになるね。"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>*</span>means multiply and<span class=tutor-code>/</span>means divide.  So, what we set size equal to below is just a complicated way of saying make<span class=tutor-code>size</span>equal to 100.  See?",
      de: "<span class=tutor-code>*</span>bedeutet multiplizieren und<span class=tutor-code>/</span>bedeuted dividieren. Was unten steht ist deshalb eine komplizierte Art um<span class=tutor-code>size</span>auf 100 zu setzen. Siehst du?",
      jp: "「<span class=tutor-code>*</span>」は「かける（×）」で、「<span class=tutor-code>/</span>」は「わる（÷）」だよ。つまり、<span class=tutor-code>var size =</span>の後に書いてあるものは、<span class=tutor-code>size</span>は100だよということを、むずかしく書いているだけなんだ。わかるかな？"
    },
    code: "var size = 20 * 6 / 2 + 50 - 10;\nvar offset = 30;\nc.fillStyle =\"lime\";\nc.fillRect(offset, offset, size, size);\noffset = offset * 3;\nc.fillRect(offset, offset, size, size);\n"
  },
  {
    message: {
      en: "We can also compare numbers.  See this code?  We will only draw a second box when<span class=tutor-code>size</span>is less than 80.",
      de: "Wir können auch Nummern vergleichen. Siest du den Code? Wir malen ein zweites Quadrat nur wenn<span class=tutor-code>offset</span>weniger als 80 ist.",
      jp: "もちろん、数を比べることもできるんだよ。このコードはなんだと思う？&nbsp;<span class=tutor-code>size</span>が80より小さいのときに2つ目の四角形をかくんだ。"
    },
    code: "var size = 50;\n\nc.fillRect(20, 20, size, size);\nif (size < 80) {\n  c.fillRect(100, 100, size, size);\n}\n",
    lessonSection: {
      en: "If and Comparisons",
      de: "Wenn (If) und Vergleiche",
      jp: "ifと比較"
    }
  },
  {
    message: {
      en: "Try changing<span class=tutor-code>size</span>to 150.  See what happens? Try changing<span class=tutor-code>size</span>to 79.  Then change it to 80.",
      de: "Versuche<span class=tutor-code>size</span>in 150 zu ändern. Was passiert? Probiere<span class=tutor-code>size</span>auf 79 zu setzen. Dann auf 80.",
      jp: "<span class=tutor-code>var size</span>を150に変えてみよう。何が起こるかな？&nbsp;その次に<span class=tutor-code>var size</span>を79にも変えてみよう。そして80にも変えてみて。"
    }
  },
  {
    message: {
      en: "Okay, let's see what you know!  Here are two boxes.  Can you add a third box (offset by another 60 from the second box)?",
      de: "Okay, lass uns sehen was du weisst! Hier sind zwei Quadrate. Kannst du ein drittes Quadrat zeichnen was 60 mehr rechts/unten vom zweiten Quadrat ist?",
      jp: "分かってきたかな？&nbsp;ここに2つの四角形があるよ。3つめの四角形を足してみよう (2つ目の箱から60はなしてね)。"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"lime\";\n\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\n",
    lessonSection: {
      en: "Quiz: Variables and Color",
      de: "Quiz: Variablen und Farben",
      jp: "クイズ:変数と色"
    }
  },
  {
    message: {
      en: "Here is one way to do it. Try changing the<span class=tutor-code>size</span>or<span class=tutor-code>offset</span>!",
      de: "Hier ist eine Möglichkeit das zu machen. Versuche<span class=tutor-code>size</span>oder<span class=tutor-code>offset</span>zu ändern!",
      jp: "次は<span class=tutor-code>size</span>か<span class=tutor-code>offset</span>の数字を変えてみよう！"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"lime\";\n\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\n"
  },
  {
    message: {
      en: "Remember<span class=tutor-code>rgba()</span>?  Monster like.  Can you make me three boxes with different colors?",
      de: "Erinnerst du dich an<span class=tutor-code>rgba()</span>? Monster mag das. Kannst du drei Quadrate mit verschiedenen Farben machen?",
      jp: "<span class=tutor-code>rgba()</span>をおぼえてるかな？&nbsp;モンスターはすきさ。3つの四角形をちがう色で作れるかな？"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\n"
  },
  {
    message: {
      en: "Here is one way.  Ooo!  Pretty!  Try changing<span class=tutor-code>size</span>,<span class=tutor-code>offset</span>, or the red, blue, and green numbers!",
      de: "So kann man das machen. Oh! Schön! Versuche<span class=tutor-code>size</span>,<span class=tutor-code>offset</span>, oder die rot, grün oder blau Werte zu ändern!",
      jp: "こんなふうにしてもいいんだよ。わあ！&nbsp;素敵！&nbsp;<br>じゃあ、<span class=tutor-code>size</span>か、<span class=tutor-code>offset</span>か、赤、青、緑の数字をかえてみて！&nbsp;<br>（おぼえてるかな？&nbsp;rgbは０から255までだよ）"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(0, 255, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(255, 0, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\n"
  },
  {
    message: {
      en: "Monster no like writing code more than once.  Lots of writing the same code more than once here, me not like.",
      de: "Monster mag Code nicht mehr als einmal schreiben. Hier ist viel gleich. Mag ich nicht.",
      jp: "モンスター、コード、一度しか書かない。何度も同じコードを書く、スキジャナイ。"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\n\nc.fillRect(offset, offset, size, size);\noffset = offset + 40;\nc.fillRect(offset, offset, size, size);\noffset = offset + 40;\nc.fillRect(offset, offset, size, size);\n",
    lessonSection: {
      en: "for Loops",
      de: "for Schleifen",
      jp: "forループ(繰り返し)"
    }
  },
  {
    message: {
      en: "This is called a<span class=tutor-code>for</span>loop.  It repeats code without writing it more than once.  Me like.  Try changing the 3 to 5!",
      de: "Das hier ist eine<span class=tutor-code>for</span>Schleife. Sie wiederholt Sachen ohne dass man das mehrmals schreiben muss. Ich mag das. Versuche die 3 in 5 zu ändern!",
      jp: "これは<span class=tutor-code>for</span>ループ（くりかえし）とよぶのさ。何か同じことをくり返したいとき、コードを何度も書かずにすむんだ。モンスター、スキ。3を5にかえて、ためしてみよう！"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\nfor (var i = 0; i < 3; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n"
  },
  {
    message: {
      en: "for loops have three parts, where to start (<span class=tutor-code>i = 0</span>), when to keep going (<span class=tutor-code>i < 5</span>), and how much to change each time (<span class=tutor-code>i = i + 1</span>). Can you make ten boxes?",
      de: "<span class=tutor-code>for</span>Schleifen haben 3 Teile: wo man anfängt (<span class=tutor-code>i = 0</span>), wie lange man weitermacht (<span class=tutor-code>i < 5</span>), und wieviel pro Schleife verändert wird (<span class=tutor-code>i = i + 1</span>). Kannst du 10 Quadrate machen?",
      jp: "<span class=tutor-code>for</span>ループは3つのパーツでできているんだ。どこから始めるかを(<span class=tutor-code>i = 0</span>)で表し、(<span class=tutor-code>i < 5</span>)でいつまでつづけるかを決め、 (<span class=tutor-code>i = i + 1</span>)でどのくらいかえたいのかを決めるんだ。じゃあ、10この四角形を作ってみようか。"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\nfor (var i = 0; i < 5; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n"
  },
  {
    message: {
      en: "Argh!  They don't fit?  How can you make ten boxes fit?",
      de: "Weia! Sie passen nicht! Wie kannst du die 10 Quadrate passend machen?",
      jp: "あれれ！&nbsp;どうしよう？&nbsp;どうすれば10個の四角形をわくの中に入れることができるかな?"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n"
  },
  {
    message: {
      en: "Here is one way!",
      de: "Hier ist eine Möglichkeit.",
      jp: "こんなふうにやってもいいんだよ！"
    },
    code: "var size = 80;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 10;\n}\n"
  },
  {
    message: {
      en: "Smaller boxes also fit.  Try playing with<span class=tutor-code>size</span>,<span class=tutor-code>offset</span>, and changing 10!",
      de: "Kleinere Quadrate passen auch. Versuche auch<span class=tutor-code>size</span>,<span class=tutor-code>offset</span>und auch die 10 zu ändern!",
      jp: "小さい四角形もわくの中に入るよね。<span class=tutor-code>size</span>や<span class=tutor-code>offset</span>で遊んでみて、10にかえてみよう！"
    },
    code: "var size = 20;\nvar offset = 20;\n\nc.fillStyle =\"blue\";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 10;\n}\n"
  },
  {
    message: {
      en: "Remember rgba()? What's this doing?  Play with it!",
      de: "Erinnerst du dich an rgba()? Was macht das? Spiel damit!",
      jp: "rgba() が何かおぼえているかな？&nbsp;これは何をしているだろう？&nbsp;遊んでみて！"
    },
    code: "var size = 50;\nvar offset = 20;\n\nfor (var i = 0; i < 10; i = i + 1) {\n  var b = i * 25;\n  var rgba = \"rgba(0, 0, \" + b + \", 0.5)\";\n  c.fillStyle = rgba;\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 20;\n}\n",
    lessonSection: {
      en: "Fun with For Loops",
      de: "Spass mit For Schleifen",
      jp: "Forループで楽しんでみよう"
    }
  },
  {
    message: {
      en: "Complicated!  That means use 0 blue light for the first box, 25 for the second, then 50, 75, 100...",
      de: "Kompliziert! Das bedeutet benutze 0 blau für das erste Quadrat, 25 für das zweite, dann 50, 75, 100...",
      jp: "むずかしいね！&nbsp;1つ目の四角形は「rgb」の「b」が0だけど、2つ目の箱は「b」が25になるんだ。そして50、75、100…とつづく。<br>なぜなら「i」が0のとき「b」は0×25=0になるよね。次のループでは「i」は1になるから「b」は1×25=25、その次のループでは「i」が2になるから2×25=50になるというわけさ。"
    }
  },
  {
    message: {
      en: "Here is another one, this one changing alpha!  Neat-o!",
      de: "Hier ist noch eins. Das ändert die Transparenz (alpha). Cool!",
      jp: "次はべつのものだよ。今度はalphaがかわるね。かっこいい！"
    },
    code: "var size = 50;\nvar offset = 20;\n\nfor (var i = 0.1; i < 0.5; i = i + 0.05) {\n  var rgba = \"rgba(0, 0, 255, \" + i + \")\";\n  c.fillStyle = rgba;\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 20;\n}\n"
  },
  {
    message: {
      en: "Can you show me what you learned?  Draw me a square! Hint: Remember<span class=tutor-code>c.fillRect(<i>left, top, width, height</i>);</span>to draw a box.",
      de: "Kannst du mir zeigen was du gelernt hast? Mal mir ein Quadrat! Tip: Erinnere dich an<span class=tutor-code>c.fillRect(<i>left, top, width, height</i>);</span>um ein Rechteck zu zeichnen.",
      jp: "ここまで学んできたことをモンスターとおさらいしよう。正方形をかいてみて！&nbsp;<br>ヒント：「<span class=tutor-code>c.fillRect(<i>左,上,はば,高さ</i>);</span>」を思い出してかいてみよう。"
    },
    code: "",
    lessonSection: {
      en: "Quiz: Write Code Yourself",
      de: "Quiz: Schreib deinen eigenen Code",
      jp: "クイズ：コードを自分で書いてみよう！"
    }
  },
  {
    message: {
      en: "Can you add another square?",
      de: "Kannst du noch ein Quadrat zeichnen?",
      jp: "べつの正方形も足してみよう！"
    }
  },
  {
    message: {
      en: "Now can you make the second square red? (Hint:<span class=tutor-code>c.fillStyle = \"blue\";</span>before<span class=tutor-code>fillRect()</span>will make the rect blue)",
      de: "Kannst du das zweite Quadrat rot machen Tip:<span class=tutor-code>c.fillStyle = \"blue\";</span>vor<span class=tutor-code>fillRect()</span>macht das nächste Recheck blau (blue)",
      jp: "今度は2つ目の正方形を赤(red)にかえてみよう。<br>ヒント：<span class=tutor-code>c.fillRect()</span>のコードの前に<span class=tutor-code>c.fillStyle = \"blue\";</span>というコードを一行くわえたら、正方形は青になったよ。"
    }
  },
  {
    message: {
      en: "Great! Did you get something like this? If not, try playing with the numbers a bit to see how it works!",
      de: "Grossartig! Hast du sowas wie das hier geschrieben? Wenn nicht, ändere die Zahlen und sieh wie's funktioniert!",
      jp: "すばらしい！&nbsp;これと同じようなものができたかな？&nbsp;もしできなかったら、数字を少しかえて遊んでみてね！"
    },
    code: "c.fillRect(10, 10, 20, 20);\nc.fillStyle = \"red\";\nc.fillRect(50, 50, 100, 100);\n"
  },
  {
    message: {
      en: "Monster draw line. What do you think<span class=tutor-code>moveTo()</span>does?<span class=tutor-code>lineTo()</span>? Try changing 20 to 50.",
      de: "Monster malt Linien. Was meinst du was<span class=tutor-code>moveTo()</span>macht? Und<span class=tutor-code>lineTo()</span>? Probier die 20 in 50 zu ändern.",
      jp: "モンスター、線をかくよ。<span class=tutor-code>moveTo()</span>は何をするかな？&nbsp;<span class=tutor-code>lineTo()</span>は？&nbsp;20から50にかえてみよう。"
    },
    code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.stroke();\n",
    lessonSection: {
      en: "Lines",
      de: "Linien",
      jp: "線"
    }
  },
  {
    message: {
      en: "Try changing the other numbers too.  Can you figure out what<span class=tutor-code>moveTo()</span>and<span class=tutor-code>lineTo()</span>do?",
      de: "Versuch auch die anderen Zahlen zu ändern. Weisst du was<span class=tutor-code>moveTo()</span>und<span class=tutor-code>lineTo()</span>tun?",
      jp: "他の数字もかえてみよう。<span class=tutor-code>moveTo()</span>と<span class=tutor-code>lineTo()</span>が何をするか分かるかな?"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>moveTo(left, top)</span>moves the pen to a spot without drawing. <span class=tutor-code>lineTo(left, top)</span>draws a line from wherever the pen is to a spot.",
      de: "moveTo(links, oben) bewegt den Zeichenstift zu den Punkt (links, oben) ohne etwas zu zeichnen. lineTo(links, open) malt eine Linie von woimmer der Zeichenstift ist zu den Punkt (links, oben).",
		jp: "<span class=tutor-code>moveTo(左,上)</span>は線が始まる点のことで、<span class=tutor-code>lineTo(左,上)</span>は線が終わる点のことだね。"
    }
  },
  {
    message: {
      en: "Here is what happens if we do a second<span class=tutor-code>lineTo()</span>.  The second line starts from where the first ended.",
      de: "Hier siehst du was passiert wenn man ein zweites<span class=tutor-code>lineTo()</span>benutzt: die zweite Linie startet dort wo die erste endete.",
      jp: "<span class=tutor-code>lineTo()</span>を追加したらどうなるか見てみよう。2本目の線は1本目が終わるところから始まっているね。"
    },
    code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.lineTo(120, 150);\nc.stroke();\n"
  },
  {
    message: {
      en: "So, we're drawing a path, a trail of lines all connected together.  We start the path with<span class=tutor-code>beginPath()</span>and draw everything with<span class=tutor-code>stroke()</span>.",
      de: "Wir zeichnen also einen Pfad der aus verbundenen Linien besteht. Wir starten den Pfad mit<span class=tutor-code>beginPath()</span>und malen alles auf einmal mit<span class=tutor-code>stroke()</span>.",
      jp: "つまり、オレたちはパス（全てがつながった線のこと）をかいているんだ。このパスは<span class=tutor-code>beginPath()</span>から始まって、全てが <span class=tutor-code>stroke()</span>で終わっているよ。"
    }
  },
  {
    message: {
      en: "If we put a<span class=tutor-code>moveTo()</span>before the second<span class=tutor-code>lineTo()</span>, we'll move the pen without drawing.  See?",
      de: "Wenn wir<span class=tutor-code>moveTo()</span>vor das zweite<span class=tutor-code>lineTo()</span>benutzen, bewegen wir den Zeichenstift ohne zu zeichnen. Siehst du?",
      jp: "<span class=tutor-code>moveTo()</span>を2つ目の<span class=tutor-code>lineTo()</span>よりも前におくと、線がはなれたよ。わかるかな？"
    },
    code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.moveTo(120, 60);\nc.lineTo(120, 150);\nc.stroke();\n"
  },
  {
    message: {
      en: "You try it!  Add another line, put a second<span class=tutor-code>c.lineTo()</span>after the first going to (150, 115).",
      de: "Probier du es! Füge eine neue Linue hinzu: mach ein zweites<span class=tutor-code>c.lineTo()</span>nach dem ersten um zu (150, 115) zu gehen.",
      jp: "他の線を足してみよう！&nbsp;2つ目の線は<span class=tutor-code>c.lineTo(150,115)</span>の後にかいてごらん。"
    },
    code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\n\nc.stroke();\n"
  },
  {
    message: {
      en: "Did that do what you expected?  Try adding a third line!",
      de: "Hat es das gemacht was du gedacht has? Füge eine dritte Linie hinzu!",
      jp: "うまくいったかな？&nbsp;3本目を足しみよう！"
    },
    code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\n\nc.stroke();\n"
  },
  {
    message: {
      en: "Can you make a triangle?",
      de: "Kannst du ein Dreieck machen?",
      jp: "じゃあ、三角形は作れるかな？"
    }
  },
  {
    message: {
      en: "Here is one way, a triangle!",
      de: "Hier ist eine Möglichkeit ein Dreieck zu machen.",
      jp: "三角形を作る方法はこれだ！"
    },
    code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\nc.stroke();\n"
  },
  {
    message: {
      en: "Okay, an orange triangle.  Like blue better.  Can you make it blue?",
      de: "Okay, ein orangenes Dreieck. Ich mal blau lieber. Kannst du es blau (blue) machen?",
		jp: "なるほど、オレンジの三角形か。青の方がすきなんだよな。青にかえられる？"
    },
    code: "c.beginPath();\nc.strokeStyle = \"orange\";\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\nc.stroke();\n"
  },
  {
    message: {
      en: "I was trying to make two triangles, but forgot a<span class=tutor-code>moveTo()</span>.  See what happened?",
      de: "ich wollte zwei Dreiecke machen, aber ich have<span class=tutor-code>moveTo()</span>vergessen. Siehst du was passiert ist?",
      jp: "2つの三角形を作ろうと思ってたんだけど、<span class=tutor-code>moveTo()</span>をわすれちゃったよ。どうなったか見てみる？"
    },
    code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\n\nc.lineTo(250, 215);\nc.lineTo(150, 215);\nc.lineTo(200, 130);\nc.stroke();\n"
  },
  {
    message: {
      en: "That's not good.  Can you add<span class=tutor-code>c.moveTo(200, 130);</span>to make it two separate triangles?",
      de: "Das ist nicht gut. Kannst du<span class=tutor-code>c.moveTo(200, 130);</span>irgendwo einfügen damit es zwei Dreiecke werden?",
      jp: "うまくいかなかっただろ。<span class=tutor-code>c.moveTo(200, 130);</span>を足して2つのはなれた三角形を作れるかな？"
    }
  },
  {
    message: {
      en: "I want a lot of triangles. We need to use<span class=tutor-code>for</span>!  This<span class=tutor-code>for</span>loop draws two triangles.",
      de: "Ich male viele Dreiecke! Wir brauchen<span class=tutor-code>for</span>! Diese <span class=tutor-code>for</span>Schleife zeichnet zwei Dreiecke.",
      jp: "たくさんの三角形がほしいんだ。こういう時は<span class=tutor-code>for</span>を使わなくちゃね！&nbsp;このforループは2つの三角形をかくんだよ。"
    },
    code: "c.beginPath();\nfor (var i = 30; i <= 60; i = i + 30) {\n  c.moveTo(70 + i, i);\n  c.lineTo(120 + i, 85 + i);\n  c.lineTo(20 + i, 85 + i);\n  c.lineTo(70 + i, i);\n}\nc.stroke();\n",
    lessonSection: {
      en: "Lines and Loops",
      de: "Linien und Schleifen",
      jp: "線とループ"
    }
  },
  {
    message: {
      en: "This<span class=tutor-code>for</span>loop starts at 30 and increases by 30 every time.  So, until it is told to stop, it counts 30, 60, 90, 120...  Right now, the for loop is told to stop at 60.",
      de: "Diese<span class=tutor-code>for</span>Schleife startet mit 30 und erhöht sich um 30 jedes mal. Das heisst es zählt 30, 60, 90, 120... bis es fertig ist. Im Moment hört es auf wenn 60 erreicht ist.",
      jp: "この<span class=tutor-code>for</span>ループは30から始まって、30ずつふえていくんだ。つまりストップって言われるまで30、60、90、120…と足していくんだね。今は60になったらストップといってるね。"
    }
  },
  {
    message: {
      en: "So, can you make this<span class=tutor-code>for</span>loop draw three triangles? Five?",
      de: "Kannst du diese<span class=tutor-code>for</span>Schleife drei Dreiecke zeichnen lassen? Fünf auch?",
      jp: "じゃあ、さっそくこの<span class=tutor-code>for</span>ループで3つの三角形をかけるかな？&nbsp;5個は？"
    }
  },
  {
    message: {
      en: "Can you make more triangles by changing how the<span class=tutor-code>for</span>loop goes up?  What if it counted by 10 each time, so it would count 30, 40, 50, 60... Can you do try that?",
      de: "Kannst du mehr Dreiecke zeichnen indem du die Zahl verringerst um den sich der Schleifenzähler ändert pro Schleife? Was wenn du 10 pro Schleife addierst? Es würde dann so zählen: 30, 40, 50, 60... Kannst du das probieren?",
		jp: "<span class=tutor-code>for</span>ループがふえることによってもっと三角形を作れるかな？&nbsp;10ごとに足されることによって、何が起こるかな、30、40、50、60…と変わっていくよ。ためしてみようか。"
}
  },
  {
    message: {
      en: "Aieee!  Look at this!  Forty green triangles!",
      de: "Cooool! Schau mal! Vierzig grüne Dreiecke!",
      jp: "ほらほら、みて！&nbsp;40の緑の三角形ができた！"
    },
    code: "c.strokeStyle = \"green\";\nc.beginPath();\nfor (var i = 10; i <= 210; i = i + 5) {\n  c.moveTo(70 + i, i);\n  c.lineTo(120 + i, 85 + i);\n  c.lineTo(20 + i, 85 + i);\n  c.lineTo(70 + i, i);\n}\nc.stroke();\n"
  },
  {
    message: {
      en: "Play with it more!  Can you change the color?  Can you make even more triangles?",
      de: "Spiel damit! Kannst du die Farbe ändern? Kannst du noch mehr Dreiecke machen?",
      jp: "もっともっと遊んでみて！&nbsp;色をかえられるかな？&nbsp;もっとたくさんの三角形を作れるかな？"
    }
  },
  {
    message: {
      en: "Two boxes, one using<span class=tutor-code>strokeRect()</span>, the other using four lines.",
      de: "Zwei Quadrate. Eins mit<span class=tutor-code>strokeRect()</span>und eins mit vier Linien",
      jp: "二つの四角形だよ。一つは<span class=tutor-code>strokeRect()</span>を使っていて、もう一つは線を使ってるんだね。"
    },
    code: "var size = 100;\n// First box\nc.strokeRect(30, 30, size, size);\n// Second box\nc.beginPath();\nc.moveTo(80, 80);\nc.lineTo(80 + size, 80);\nc.lineTo(80 + size, 80 + size);\nc.lineTo(80, 80 + size);\nc.lineTo(80, 80);\nc.stroke();\n",
    lessonSection: {
      en: "Coding It Easy",
      de: "Coding ist einfach",
      jp: "コーディングってかんたんだね。"
    }
  },
  {
    message: {
      en: "Sure takes a lot more code to draw it with lines. Can you add a third box?",
      de: "Es braucht deutlich mehr Code um mit Linien zu zeichnen. Kannst du ein drittes Quadrat hinzufügen?",
      jp: "よーし、もっと線を引いちゃおう。3つ目の四角形も足せる？"
    },
    code: "var size = 100;\n// First box\nc.strokeRect(30, 30, size, size);\n// Second box\nc.beginPath();\nc.moveTo(80, 80);\nc.lineTo(80 + size, 80);\nc.lineTo(80 + size, 80 + size);\nc.lineTo(80, 80 + size);\nc.lineTo(80, 80);\nc.stroke();\n// Third box?\n"
  },
  {
    message: {
      en: "<span class=tutor-code>strokeRect()</span>is easier, isn't it?  Here are three boxes all using<span class=tutor-code>strokeRect()</span>. Can you add a fourth?",
      de: "<span class=tutor-code>strokeRect()</span>ist einfacher, gell? Hier sind drei Quadrate mit<span class=tutor-code>strokeRect()</span>. Kannst du ein viertes hinzufügen?",
      jp: "<span class=tutor-code>strokeRect()</span>の方がかんたんじゃない？&nbsp;こっちの3つの四角形は<span class=tutor-code>strokeRect()</span>を使っているよ。4つ目も足せる？"
    },
    code: "var size = 100;\n\nc.strokeRect(30, 30, size, size);\nc.strokeRect(80, 80, size, size);\nc.strokeRect(130, 130, size, size);\n"
  },
  {
    message: {
      en: "What if we want even more boxes?  Lots of copying.  Yuck-o.",
      de: "Was wenn wir mehr Quadrate möchten? Viel Code zu kopieren. Bäh...",
      jp: "もっと四角形がほしい時はどうする？&nbsp;どんどんコピーする？&nbsp;うへー！"
    },
    lessonSection: {
      en: "Avoid Repeating Code",
      de: "Vermeidung von Wiederholungen",
      jp: "コードをくり返すのはよくないね。"
    }
  },
  {
    message: {
      en: "I know!  Use<span class=tutor-code>for</span>loop!  Can you make more boxes for Code Monster?",
      de: "Ich weiss!<span class=tutor-code>for</span>Schleifen! Kannst du mehr Quadrate für mich machen?",
      jp: "わかってる！&nbsp;<span class=tutor-code>for</span>ループを使おう！&nbsp;コードモンスターのためにもっと四角形を作ってくれる？"
    },
    code: "var size = 100;\n\nfor (var x = 30; x <= 80; x = x + 50) {\n  c.strokeRect(x, x, size, size);\n}\n"
  },
  {
    message: {
      en: "Can you make more than ten boxes?  And still fit all of them on the screen?",
      de: "Kannst du mehr als 10 Quadrate machen? Und passen die noch auf den Bildschirm?",
      jp: "10こ以上作れる？&nbsp;わくの中に入るかな？"
    }
  },
  {
    message: {
      en: "Is it easier now to make more boxes? Why is that?",
      de: "Ist es jetzt einfacher mehr Quadrate zu machen? Warum ist das so?",
      jp: "前よりも四角形を作るのがかんたんじゃない？&nbsp;なんでだろう？"
    },
    code: "var size = 100;\nvar num = 3;\nvar offset = 30;\n\nfor (var i = 1; i <= num; i = i + 1) {\n  c.strokeRect(i * offset, i * offset, size, size);\n}\n",
    lessonSection: {
      en: "Variables Make It Easy Too",
      de: "Variable machen es leichter",
      jp: "変数を使うとかんたんにできるね。"
    }
  },
  {
    message: {
      en: "This works by having<span class=tutor-code>i</span>count up 1, 2, 3... then putting each box's (left, top) at<span class=tutor-code>i * offset</span>, so, since<span class=tutor-code>offset</span>is 30, the top left of the first box is (30, 30), the second is at (60, 60), then (90, 90) ...",
      de: "Das funktioniert indem wir<span class=tutor-code>i</span>von 1, 2, 3... zählen lassen, und jedes Quadrat (links, oben)<span class=tutor-code>i * offset</span>sein lassen, und weil<span class=tutor-code>offset</span>30 ist, ist (links, oben) vom ersten Quadrat (30, 30), vom zweiten ist es (60, 60), dann (90, 90)...",
		jp: "これは<span class=tutor-code>i</span>に 1、2、3…と数字がじゅんばんに入っていくことで、うまくいくんだ。それから、四角形の(左,上)を<span class=tutor-code>i * offset</span>にしよう。<span class=tutor-code>offset</span>が30だから、さいしょの四角形の(左,上)は(30, 30)、2番目は(60, 60)、次は(90, 90)…。"
    }
  },
  {
    message: {
      en: "Try changing<span class=tutor-code>size</span>,<span class=tutor-code>num</span>, and<span class=tutor-code>offset</span>.  See what happens?  Play with it!",
      de: "Ändere<span class=tutor-code>size</span>,<span class=tutor-code>num</span>, und<span class=tutor-code>offset</span>und sieh was passiert.",
      jp: "<span class=tutor-code>var size</span>、<span class=tutor-code>var num</span>、<span class=tutor-code>var offset</span>の数字をかえてごらん。何が起こるかな？&nbsp;ためしてみて！"
    }
  },
  {
    message: {
      en: "It's often good to have variables that control things (like<span class=tutor-code>size</span>,<span class=tutor-code>num</span>, and<span class=tutor-code>offset</span>) together so they are easy to change.  Like it?",
      de: "Es ist oft sinnvoll Variablen Sachen zusammen kontrollieren zu lassen (wie<span class=tutor-code>size</span>,<span class=tutor-code>num</span>und<span class=tutor-code>offset</span>) damit sie einfacher zu ändern sind. Magst du das auch?",
      jp: "まとめて命れい（<span class=tutor-code>size</span>とか<span class=tutor-code>num</span>とか<span class=tutor-code>offset</span>とか）したいときは、<ruby>変数<rp>（</rp><rt>へんすう</rt><rp>）</rp></ruby>を使うと、かんたんにかえられるね。気に入った？"
    }
  },
  {
    message: {
      en: "Can you show me some of what you know? Draw a box. <br>Hint:<span class=tutor-code>c.strokeRect(<i>left, top, width, height</i>);</span>draws a box.",
      de: "Kannst du mir zeigen was du weisst? Zeichne ein Quadrat. <br>Tip:<span class=tutor-code>c.strokeRect(<i>links, oben, weite, höhe</i>);</span>zeichnet ein Rechteck.",
      jp: "キミの知っていることを、やってみせてくれる？&nbsp;まず四角形をかいてみて。<br>ヒント：<span class=tutor-code>c.strokeRect(<i><ruby>left<rp>(</rp><rt>上</rt><rp>)</rp></ruby>, <ruby>top<rp>(</rp><rt>上</rt><rp>)</rp></ruby>, <ruby>width<rp>(</rp><rt>はば</rt><rp>)</rp></ruby>, <ruby>heibght<rp>(</rp><rt>高さ</rt><rp>)</rp></ruby></i>);</span>は四角形をかくよ。"
    },
    code: "",
    lessonSection: {
      en: "Quiz: For Loops",
      de: "Quiz: For Schleifen",
      jp: "クイズ : forループ"
    }
  },
  {
    message: {
      en: "Now draw four boxes. Hint: Making four boxes is easy using<span class=tutor-code>for</span>. Remember,<span class=tutor-code>for</span>loop look like this:<span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",
      de: "Jetzt zeichne 4 Quadrate. Tip: Es ist einfach mit der<span class=tutor-code>for</span>Schleife.<span class=tutor-code>for</span>Schleifen sehen so aus:<span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",
		jp: "今度は4つの四角形をかいて。<br>ヒント：4つの四角形をつくるには、<span class=tutor-code>for</span>を使うとかんたんだよ。<br><span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>みたいな<span class=tutor-code>for</span>ループを思い出してね。"
    },
    code: ""
  },
  {
    message: {
      en: "Can you make it so you can change the size of all your boxes all at once? Hint: To make a variable named<span class=tutor-code>size</span>set to 50, you use<span class=tutor-code>var size = 50;</span>",
      de: "Kannst du es ändern dass du die Grösse aller Quadrate auf einmal ändern kannst? Tip: Damit du eine Variable mit dem Namen<span class=tutor-code>size</span>mit dem Wert 50 bekommst, schreib<span class=tutor-code>var size = 50;</span>",
      jp: "いっぺんに四角形の大きさを全部かえるってできる？&nbsp;<br>ヒント：<span class=tutor-code>size</span>という<ruby>変数<rp>(</rp><rt>へんすう</rt><rp>)</rp></ruby>を作って、それを50にするんだよ。<br>こんなふうにね →<span class=tutor-code>var size = 50;</span>"
    }
  },
  {
    message: {
      en: "Wow, you're learning to program!  Lots of ways you could do this, but did you get something like this? If not, try changing some stuff, figure out how it works!",
      de: "Super! Wir lernen programmieren! Es gibt viele Möglichkeiten das zu machen. Hier ist eine Lösung.",
      jp: "すごい！&nbsp;プログラミングがわかってきてる！&nbsp;<br>いろんなやり方ができるんだよ。たとえば、下みたいなやり方もあるんだ。もし、このやり方を知らなかったのなら、ちょっとかえてみて、どうなるか見てみて！"
    },
    code: "var size = 50;\n\nfor (var i = 0; i < 4; i += 1) {\n  var x = 80 + 30 * i;\n  var y = 80 + 10 * i;\n  c.strokeRect(x, y, size, size);\n}\n"
  },
  {
    message: {
      en: "Code Monster no like repeating self.  No like.  No like.  For loops avoid repeating.  Me now show you functions too. Functions also avoid repeating.",
      de: "Code Monster mag keine Wiederholungen. Schlecht! Schlecht! For Schleifen vermeiden Wiederholungen. Ich zeig jetzt Funktionen. Funktionen vermeiden auch Wiederholungen.",
      jp: "コードモンスター、自分でくり返すの大きらいなんだ。ほんとに、ほんとに、大きらい。<br>for ループを使えばくり返さなくてすむよね。それに今から「<ruby>function<rp>(</rp><rt>ファンクション</rt><rp>)</rp></ruby>」というものを教えてあげるよ。function は命れいをまとめたもので、何度でも使い回しできるんだ。"
    },
    code: "// All work and no play\n// make monster a dull boy\n// All work and no play\n// make monster a dull boy\n// All work and no play\n// make monster a dull boy\n",
    lessonSection: {
      en: "Your Own Functions",
      de: "Deine eigenen Funktionen",
      jp: "自分だけの関数。"
    }
  },
  {
    message: {
      en: "This is a new function,<span class=tutor-code>strokeSquare()</span>.  It is just like<span class=tutor-code>strokeRect()</span>, but draws squares.",
      de: "Das ist eine neue Funktion:<span class=tutor-code>strokeSquare()</span>. Es ist wie<span class=tutor-code>strokeRect()</span>, aber es zeichnet Quadrate.",
      jp: "これは<span class=tutor-code>strokeSquare()</span>という名の新しいfunctionだ。<span class=tutor-code>strokeRect()</span>みたいな名前だけど、正方形をかくように命れいしているんだ。"
    },
    code: "function strokeSquare(left, top, size) {\n  c.strokeRect(left, top, size, size);\n}\n\nstrokeSquare(30, 100, 50);\nstrokeSquare(10, 10, 200);\nstrokeSquare(50, 50, 10);\n"
  },
  {
    message: {
      en: "<span class=tutor-code>strokeSquare()</span>uses<span class=tutor-code>strokeRect()</span>to draw a rectangle with the same width and height. See how it works?",
      de: "<span class=tutor-code>strokeSquare()</span>benutzt<span class=tutor-code>strokeRect()</span>um Rechtecke mit der gleichen Höhe wie Breite zu zeichnen. Siehst du wie das funktioniert?",
      jp: "<span class=tutor-code>function strokeSquare()</span>では、<span class=tutor-code>strokeRect()</span>を使って正方形をかくんだ。はばと高さは「size」として指定された数字を使うから同じ長さになるよ。どんなふうになるか分かる？"
    }
  },
  {
    message: {
      en: "So, the first square starts at (30, 100) and then has a height and width of 50. See?",
      de: "Das erste Quadrat startet bei (30, 100) und hat eine Höhe als auch Breite von 50. Siehst du?",
      jp: "最初の四角形は (30, 100)から始まっているね。それから高さとはばが50になってるよ。分かる？"
    }
  },
  {
    message: {
      en: "Can you add a fourth square below the others using<span class=tutor-code>strokeSquare()</span>?",
      de: "Kannst du ein 4. Quadrat mit<span class=tutor-code>strokeSquare()</span>unter den anderen zeichnen?",
      jp: "<span class=tutor-code>strokeSquare()</span>を使ってその下に4つ目の正方形を足せるかな？"
    }
  },
  {
    message: {
      en: "Ooo! A star! Pretty! Change some of the numbers!  Mess it up!",
      de: "Oh! Ein Stern! Schön! Ändere die Zahlen um zu sehen was passiert!",
      jp: "ワー！&nbsp;星だ！&nbsp;かわいい！&nbsp;数を変えちゃえ！&nbsp;思いっきりやっちゃえ！"
    },
    code: "c.beginPath();\nc.moveTo(50, 100);\nc.lineTo(150, 100);\nc.lineTo(65, 150);\nc.lineTo(100, 60);\nc.lineTo(135, 150);\nc.lineTo(50, 100);\nc.stroke();\n",
    lessonSection: {
      en: "More Lines",
      de: "Mehr Linien",
      jp: "もっと線をひこう."
    }
  },
  {
    message: {
      en: "Wait, stars aren't green.  Can you make it yellow or gold?",
      de: "Moment mal...Sterne sind nicht grün. Kannst du ihn gelb (yellow) oder goldfarben (gold) machen?",
      jp: "まてよ。星は緑色じゃないよな。黄色か金色でぬりつぶせるかな？"
    },
    code: "c.strokeStyle = \"green\";\nc.beginPath();\nc.moveTo(50, 100);\nc.lineTo(150, 100);\nc.lineTo(65, 150);\nc.lineTo(100, 60);\nc.lineTo(135, 150);\nc.lineTo(50, 100);\nc.stroke();\n"
  },
  {
    message: {
      en: "Ooo! A solid gold star! Did you know you can do that? Change some of the numbers!  Mess it up!",
      de: "Oh! Ein goldener Stern! Hast du gewusst dass man das machen kann? Ändere die Zahlen wieder!",
      jp: "ワー！&nbsp;ほんものの金の星だ！&nbsp;こんなことができるって知ってたの？&nbsp;数をかえちゃえ！&nbsp;思いっきりやっちゃえ！"
    },
    code: "c.fillStyle = \"gold\";\nc.beginPath();\nc.moveTo(50, 100);\nc.lineTo(150, 100);\nc.lineTo(65, 150);\nc.lineTo(100, 60);\nc.lineTo(135, 150);\nc.lineTo(50, 100);\nc.fill();\n"
  },
  {
    message: {
      en: "Variables make it easy to change and add more stars. Try changing<span class=tutor-code>x</span>,<span class=tutor-code>y</span>, and<span class=tutor-code>size</span>(or anything else)!",
      de: "Variablen machen es einfach den Stern zu ändern oder mehr zu machen. Versuche<span class=tutor-code>x</span>,<span class=tutor-code>y</span>, und<span class=tutor-code>size</span>zu ändern!",
      jp: "<ruby>変数<rp>（</rp><rt>へんすう</rt><rp>）</rp></ruby>を使うと、かんたんに星の形をかえたり、足してたりできるんだよ。<span class=tutor-code>var x</span>、<span class=tutor-code>var y</span>とか<span class=tutor-code>size</span>の数字とか、いろいろかえてごらん。"
    },
    code: "c.fillStyle = \"gold\";\n\nvar x = 50;\nvar y = 100;\nvar size = 100;\n\nc.beginPath();\nc.moveTo(x, y);\nc.lineTo(x + size, y);\nc.lineTo(x + size * 0.15, y + size * 0.5);\nc.lineTo(x + size / 2, y - size * 0.4);\nc.lineTo(x + size * 0.85, y + size * 0.5);\nc.lineTo(x, y);\nc.fill();\n"
  },
  {
    message: {
      en: "Here are two stars, but all that repeating myself hurts. No like. What we do?",
      de: "Hier sind zwei Sterne, aber all die Wiederholungen tun weh. Mag ich nicht. Was können wir da machen?",
      jp: "ここに星が2つあるんだ。でも、くり返しだからイヤになっちゃうよ。くり返し、きらーい。どうすればいい？"
    },
    code: "c.fillStyle = \"gold\";\n\nvar x = 50;\nvar y = 100;\nvar size = 100;\n\nc.beginPath();\nc.moveTo(x, y);\nc.lineTo(x + size, y);\nc.lineTo(x + size * 0.15, y + size * 0.5);\nc.lineTo(x + size / 2, y - size * 0.4);\nc.lineTo(x + size * 0.85, y + size * 0.5);\nc.lineTo(x, y);\nc.fill();\nx += 100;\ny += 50;\nc.beginPath();\nc.moveTo(x, y);\nc.lineTo(x + size, y);\nc.lineTo(x + size * 0.15, y + size * 0.5);\nc.lineTo(x + size / 2, y - size * 0.4);\nc.lineTo(x + size * 0.85, y + size * 0.5);\nc.lineTo(x, y);\nc.fill();\n"
  },
  {
    message: {
      en: "Functions! It's<span class=tutor-code>fillStar()</span>! Can you add a third star?",
      de: "Funktionen! Sie heisst<span class=tutor-code>fillStar()</span>! Kannst Du einen dritten Stern malen?",
      jp: "やっぱ function だよね！&nbsp;<span class=tutor-code>fillStar()</span>って名前にしてるね！&nbsp;3つ目の星を足せる？"
    },
    code: "c.fillStyle = \"gold\";\nvar size = 100;\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y);\n  c.lineTo(x + s, y);\n  c.lineTo(x + s * 0.15, y + s * 0.5);\n  c.lineTo(x + s / 2, y - s * 0.4);\n  c.lineTo(x + s * 0.85, y + s * 0.5);\n  c.lineTo(x, y);\n  c.fill();\n}\n\nfillStar(50, 100, size);\nfillStar(150, 150, size);",
    lessonSection: {
      en: "More Functions",
      de: "Mehr Funktionen",
      jp: "もっと関数!"
    }
  },
  {
    message: {
      en: "Four stars in a row!  Can you make it eight?",
      de: "Vier Sterne in einer Reihe! Kannst du acht machen?",
      jp: "れんぞく4つの星！&nbsp;8つにできる？"
    },
    code: "c.fillStyle = \"gold\";\nvar size = 40;\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y);\n  c.lineTo(x + s, y);\n  c.lineTo(x + s * 0.15, y + s * 0.5);\n  c.lineTo(x + s / 2, y - s * 0.4);\n  c.lineTo(x + s * 0.85, y + s * 0.5);\n  c.lineTo(x, y);\n  c.fill();\n}\n\nfor (var i = 0; i < 4; i = i + 1) {\n  fillStar(i * size, 50, size);\n}\n"
  },
  {
    message: {
      en: "Two loops!  Try changing size or the number of stars!",
      de: "Zwei Schleifen! Versuch die Grösse oder die Anzahl der Sterne zu ändern!",
      jp: "ループが2つだ！&nbsp;星の大きさや数を変えてみて!"
    },
    code: "c.fillStyle = \"gold\";\nvar size = 40;\n\nfor (var i = 0; i < 5; i = i + 1) {\n  for (var j = 0; j < 3; j = j + 1) {\n    fillStar(i * size, j * size, size);\n  }\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n",
    lessonSection: {
      en: "Nested Loops",
      de: "Verschachtelte Schleifen",
      jp: "入れ子になったループ"
    }
  },
  {
    message: {
      en: "Did you know you could do two loops like that, one inside the other?",
      de: "Hast du gewusst dass du zwei Schleifen so machen kannst? Eine Schleife innerhalb einer anderen!",
      jp: "ループの中に別のループの中に入れることができるって、知ってた？",
    }
  },
  {
    message: {
      en: "Do you know how it works?",
      de: "Verstehst du wie das funktioniert?",
      jp: "どうなっているか、わかるかな？"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>j</span>will count 0, 1, 2.  The first time<span class=tutor-code>j</span>counts 0, 1, 2,<span class=tutor-code>i</span>will be 0.  The next time j counts 0, 1, 2, i will be 1.",
      de: "<span class=tutor-code>j</span>zählt 0, 1, 2. Das erste mal zählt<span class=tutor-code>j</span>0, 1, 2 und<span class=tutor-code>i</span>ist 0. Das nächste mal zählt<span class=tutor-code>j</span>0, 1, 2,<span class=tutor-code>i</span>ist dann 1.",
		jp:"<span class=tutor-code>j</span>も0から1つずつふえて、0→1→2となるんだよ。<br>まず<span class=tutor-code>i</span>が0から始まるのは、分かるね。<span class=tutor-code>j</span>がループをくりかえして2になってループが終わったら、<span class=tutor-code>i</span>は1になる。そうしたらまた<span class=tutor-code>j</span>は0から2になるまでループをくり返すんだ。",
    },
    code: "c.fillStyle = \"gold\";\nvar size = 40;\n\nfor (var i = 0; i < 5; i = i + 1) {\n  for (var j = 0; j < 3; j = j + 1) {\n    fillStar(i * size, j * size, size);\n  }\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n"
  },
  {
    message: {
      en: "So, for the first star, i = 0 and j = 0.  On the second star, i = 0 and j = 1.  Third, i = 0 and j = 2. Then, i = 1 and j = 0, i = 1 and j = 1, i = 1 and j = 2, and so on.",
      de: "So, für den ersten Stern ist i = 0 und j = 0. Der zweite Stern hat i = 0 und j = 1. Der dritte: i = 0 und j = 2. Dann i = 1 und j = 0, dann i = 1, j = 1, dann i = 1 und j = 2 und so weiter.",
		jp:"つまり、1つ目の星は i = 0,	j = 0 のときにかかれているよ。<br>2つ目の星は i = 0 , j = 1 のとき。3つ目は i = 0, j = 2のとき。<br>…と、つづくんだ。",
    }
  },
  {
    message: {
      en: "Can you figure out what order it draws the stars?  Which star is drawn first?  Which star is the second star drawn?",
      de: "Weisst du in welcher Reihenfolge die Sterne gezeichnet werden? Welcher ist der erste? Welcher der zweite?",
      jp: "星をかいたじゅん番わかる？&nbsp;&nbsp;どの星が1つ目かな？&nbsp;&nbsp;2つ目はどう？"
    }
  },
  {
    message: {
      en: "The first star will be the one at the top left.  The second drawn is the one below it.  Do you see why?",
      de: "Der erste Stern ist oben links. Der zweite ist darunter. Weisst du warum?",
      jp: "1つ目の星は左上のやつ。2つ目の星はその下のやつ。なぜだかわかる?"
    }
  },
  {
    message: {
      en: "Wow!  Full of stars! Try changing size!",
      de: "Super! Voll viele Sterne! Versuche die Grösse zu ändern!",
      jp: "すごい！&nbsp;&nbsp;星だらけ！&nbsp;&nbsp;大きさをかえてみよう！"
    },
    code: "c.fillStyle = \"gold\";\nvar size = 40;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar maxI = Math.floor(w / size);\nvar maxJ = Math.floor(h / size);\n\nfor (var i = 0; i < maxI; i = i + 1) {\n  for (var j = 0; j < maxJ; j = j + 1) {\n    fillStar(i * size, j * size, size);\n  }\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n",
    lessonSection: {
      en: "Fun with Stars",
      de: "Spass mit Sternen",
      jp: "星で遊んじゃおう."
    }
  },
  {
    message: {
      en: "Wow!  Five stars, randomly placed, changing every time. Can you have it draw fifty stars? A hundred?  How about bigger stars or smaller stars?",
      de: "Wow! Fünf Sterne, zufällig plaziert und jedesmal anders. Kannst du 50 Sterne zeichnen? 100? Wie wäre es mit grösseren oder kleineren Sternen?",
      jp: "すごい！&nbsp;&nbsp;5つの星が毎回ちがう場所に表れるよ。50この星をかける？&nbsp;&nbsp;100こは？&nbsp;&nbsp;大きくしたり、小さくしたりできる？"
    },
    code: "c.fillStyle = \"gold\";\nvar n = 5;\nvar size = 20;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < n; i = i + 1) {\n  var x = (w - size) * Math.random();\n  var y = (h - size) * Math.random();\n  fillStar(x, y, size);\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n"
  },
  {
    message: {
      en: "Ugh, me tired of seeing stars.  Lines where it's at.  Here two separate lines. See how much is repeated? No like. What can we do?",
      de: "Hmm...will keine Sterne mehr sehen. Linien jetzt! Hier sind 2 Linien. Siehst du wie sich das wiederholt? Ich mag das nicht. Was können wir da tun?",
      jp: "ふー、星を見るのにつかれちゃった。線をひこう。2本のべつべつの線。どれだけくり返してある？&nbsp;&nbsp;くり返し、きらーい。どうれすばいい？"
    },
    code: "c.beginPath();\nc.moveTo(20, 20);\nc.lineTo(200, 20);\nc.stroke();\nc.beginPath();\nc.moveTo(20, 50);\nc.lineTo(200, 50);\nc.stroke();\n",
    lessonSection: {
      en: "Even More Functions",
      de: "Noch mehr Funktionen",
      jp: "funcionをもっとだ"
    }
  },
  {
    message: {
      en: "Need<span class=tutor-code>drawLine()</span>function.  Here it is.  Now draw one line from (20, 20) to (200, 20) and another from (20, 50) to (200, 50).",
      de: "Wir brauchen die<span class=tutor-code>drawLine()</span>Funktion. Hier ist sie. Nun zeichne eine Linie von (20, 20) nach (200, 20) und eine andere von (20, 50) nach (200, 50).",
      jp: "function <span class=tutor-code>drawLine()</span>がいるね。ほら。次は(20, 20)から(200, 20)へ線をひこう。 (20, 50)から (200, 50)も。"
    },
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\n"
  },
  {
    message: {
      en: "Did you get it? Here is one version.  Can you add a third line below the other two?",
      de: "Verstanden? Hier ist eine Version. Kannst du eine dritte Linie unter den beiden zeichnen?",
      jp: "できるようになったでしょ。もう一つやり方があるよ。他の2本の下に3本目を足せる？"
    },
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\ndrawLine(20, 20, 200, 20);\ndrawLine(20, 50, 200, 50);\n"
  },
  {
    message: {
      en: "Three vertical lines using for loop.  Can you make it ten lines?",
      de: "Drei vertikale Linien mit einer Schleife gemacht. Kannst du 10 machen?",
      jp: "for ループを使った3つのたて線だよ。10本かける？"
    },
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nfor (var i = 0; i < 3; i = i + 1) {\n  var x = 20 + i * 30;\n  drawLine(x, 20, x, 200);\n}\n",
    lessonSection: {
      en: "Fun with Lines",
      de: "Spass mit Linien",
      jp: "線で遊んじゃおう."
    }
  },
  {
    message: {
      en: "Ten lines coming to a point.  Try moving the point!",
      de: "Zehn Linien die sich in einem Punkt treffen. Bewege den Punkt!",
      jp: "10本の線が1つの点につながっているよ。点を動かしてみて！"
    },
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(0, y, px, py);\n}\n"
  },
  {
    message: {
      en: "Ready for something harder?  Now the lines fan to the right.  Can you also add in the ones we saw last, going to the left?",
      de: "Fertig für etwas schwereres? Jetzt gehen alle Linien zur rechten Seite. Kannst du die dazu zeichnen die von links kommen wie vorher?",
      jp: "もっとむずかしいことに、ちょうせんできそう？&nbsp;&nbsp;今は線が右にひっくり返ってるよね。<br>ここに、さっきみたいな左にひっくりかえったものを足せる？"
    },
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(400, y, px, py);\n}\n"
  },
  {
    message: {
      en: "Did you get it?  This is one way to do it.  Try moving the point now!",
      de: "Hast du's geschafft? Hier ist eine Versich wie's geht. Versuch jetzt den Punkt zu bewegen!",
      jp: "わかったかな？&nbsp;&nbsp;これも1つの方法だよ。さあ、今度は点をうごかしてみて！"
    },
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(0, y, px, py);\n  drawLine(400, y, px, py);\n}\n"
  },
  {
    message: {
      en: "Ooo!  Me like!  Try changing<span class=tutor-code>num</span>,<span class=tutor-code>px</span>, or<span class=tutor-code>py</span>!",
      de: "Oh! Schön! Versuche<span class=tutor-code>num</span>,<span class=tutor-code>px</span>oder<span class=tutor-code>py</span>zu ändern!",
      jp: "おー！&nbsp;&nbsp;これいい！&nbsp;<span class=tutor-code>var num</span>や<span class=tutor-code>var px</span>、<span class=tutor-code>var py</span>の数字をかえてみよう！"
    },
    code: "var num = 20;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(400, y, px, py);\n  var x = y * w / h;\n  drawLine(x, 300, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "Can you make lines from all sides?  You will need four<span class=tutor-code>drawLine()</span>and your two new ones will use 0 instead of<span class=tutor-code>w</span>and<span class=tutor-code>h</span>.  Can you do it?",
      de: "Kannst Du Linien von allen vier Seiten zeichnen? Du brauchst vier<span class=tutor-code>drawLine()</span>und die zwei neuen brauchen 0 anstelle von<span class=tutor-code>w</span>und<span class=tutor-code>h</span>. Schaffst du das?",
      jp: "いろいろな方向から線をひける？&nbsp;&nbsp;4つの<span class=tutor-code>drawLine()</span>がいるよ。それに<span class=tutor-code>w</span>と<span class=tutor-code>h</span>のかわりに0をつかって。できる?"
    },
    code: "var num = 20;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(w, y, px, py);\n  var x = y * w / h;\n  drawLine(x, h, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "I like mine blue.  Play with it!",
      de: "Ich mag meine blau. Spiel damit!",
      jp: "青いのがすき。やってみよう！"
    },
    code: "var num = 10;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.strokeStyle = \"blue\";\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(0, y, px, py);\n  drawLine(w, y, px, py);\n  var x = y * w / h;\n  drawLine(x, 0, px, py);\n  drawLine(x, h, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "When me little monster, me draw these.  You like too?  Change number of lines!",
      de: "Als ich ein kleines Monster war, habe ich sowas gemacht. Magst Du es auch? Versuche die Anzahl der Linien zu ändern!",
      jp: "オレが小さかったころ、こんな線をかいたよ。気に入った？&nbsp;線の数をかえてみて！"
    },
    code: "var num = 10;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    lessonSection: {
      en: "More Fun with Lines",
      de: "Mehr Spass mit Linien",
      jp: "もっと線で遊んじゃおう."
    }
  },
  {
    message: {
      en: "Can you add another curve at top right? You will need another<span class=tutor-code>drawLine()</span>but use x, 0, w, y.",
      de: "Kannst du eine neue Kurve oben rechts zeichnen? Du brauchst noch ein<span class=tutor-code>drawLine()</span>, aber diesmal benutze x, 0, w, y.",
      jp: "右上にカーブを足せる？&nbsp;もう1つ<span class=tutor-code>drawLine()</span>がいるよね。そのときは x, 0, w, y を使ってね。"
    },
    code: "var num = 10;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "Pretty!  Try other colors and changing the number of lines!",
      de: "Hübsch! Probier auch andere Farben oder ändere die Anzahl der Linien.",
      jp: "かわいい！&nbsp;他の色をためして、線の数をかえてみて。"
    },
    code: "var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.strokeStyle = \"gold\";\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n  drawLine(x, 0, w, y);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "Can you make it so the two curves are two different colors?",
      de: "Kannst du die zwei Kurven in unterschiedlichen Farben zeichnen?",
      jp: "2つのカーブを、それぞれちがう色にできる？"
    }
  },
  {
    message: {
      en: "Here is one version.  Try changing the colors!",
      de: "Hier ist eine Version. Ändere die Farben!",
      jp: "こんなやり方もあるよ。色をかえてみよう！"
    },
    code: "var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  c.strokeStyle = \"gold\";\n  drawLine(0, y, x, h);\n  c.strokeStyle = \"red\";\n  drawLine(x, 0, w, y);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "Here is a crazy fun random colors changing version.  It's complicated, but take a look.  Can you guess how it works? And try changing num!",
      de: "Hier ist eine verrückt bunte Version. Es ist etwas kompliziert, aber schau mal. Verstehst du wie's funktioniert? Probier mal num zu ändern!",
      jp: "次は色がランダムにかわる、ものすごく楽しいやり方だよ。ふくざつだけど見てみよう。どうなっているか予想できるかな？&nbsp;そして num をかえてみよう！"
    },
    code: "var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  c.strokeStyle = randomRGBA();\n  drawLine(0, y, x, h);\n  c.strokeStyle = randomRGBA();\n  drawLine(x, 0, w, y);\n}\n\nfunction randomRGBA() {\n  var r = randInt(255);\n  var g = randInt(255);\n  var b = randInt(255);\n  var a = Math.random();\n  var rgba = [r,g,b,a].join(\",\");\n  return \"rgba(\" + rgba + \")\";\n}\nfunction randInt(limit) {\n  var x = Math.random() * limit;\n  return Math.floor(x);\n}\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "You know programming?  Show me!  Can make a function called<span class=tutor-code>fillSquare()</span>and then use that to draw a second bigger square? Hint: You'll need something like<span class=tutor-code>function fillSquare(left, top, size) {</span>",
      de: "Kannst du programmieren? Zeig's mir! Kannst du eine Funktion<span class=tutor-code>fillSquare()</span>schreiben die ein grösseres zweites Quadrat zeichnet. Tip: Du brauchst sowas wie<span class=tutor-code>function fillSquare(left, top, size) {</span>",
		jp: "もうプログラミングは分かるよね？&nbsp;<span class=tutor-code>fillSquare()</span>という名の function を使って、もっと大きな2つ目の正方形を作ってみよう。<br>ヒント：<span class=tutor-code>function fillSquare(left, top, size) {</span>がひつようだよ。"
    },
    code: "c.fillRect(20, 30, 100, 100);\n",
    lessonSection: {
      en: "Quiz: Functions",
      de: "Quiz: Funktionen",
      jp: "クイズ:Functions"
    }
  },
  {
    message: {
      en: "Did you get it?  Something like this? Now can you make the first square also use<span class=tutor-code>fillSquare()</span>instead of calling<span class=tutor-code>fillRect()</span>?",
      de: "Hast du's geschafft? Sowas wie das hier? Kannst du das erste Quadrat auch mit<span class=tutor-code>fillSquare()</span>anstelle von<span class=tutor-code>fillRect()</span>machen?",
      jp: "こんなのは分かるかな？&nbsp;今度はさいしょの正方形を<span class=tutor-code>fillRect()</span>ではなく<span class=tutor-code>fillSquare()</span>を使って作れるかな？"
    },
    code: "c.fillRect(20, 30, 100, 100);\n\nfillSquare(200, 70, 150);\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, s, s);\n}\n"
  },
  {
    message: {
      en: "Look, one line. Huh. Want more. It would be easier to add more lines if we had that<span class=tutor-code>drawLine()</span>function again.  Can you write that and then make this line use it? Hint: Create a function with<span class=tutor-code>function doStuff(a, b, c, d) {</span>",
      de: "Guck mal, eine Linie. Ich will mehr! Es wäre einfacher wenn wir wieder die<span class=tutor-code>drawLine()</span>Funktion hätten. Kannst du die schreiben und dann die Linie unten damit zeichnen? Tip:<span class=tutor-code>function doStuff(a, b, c, d) {</span>",
      jp: "見て、線が1本だけだね。もっとほしいな。あの<span class=tutor-code>drawLine()</span>があれば、線を足すのはかんたんになるだろうね。書ける？&nbsp;<br>ヒント：functionの名前はすきなものをつけていいんだよ。すきなアルファベットや数字を使ってね！&nbsp;<span class=tutor-code>function ○○○(a, b, c, d) {</span>みたいに。"
    },
    code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(200, 50);\nc.stroke();\n"
  },
  {
    message: {
      en: "Ahh, isn't that better?  Add another line below this one.  Wasn't that easy now?",
      de: "Ah, ist das nicht besser? Mach noch eine Linie darunter dazu. Das ist einfach, gell?",
      jp: "ああ、かんたんじゃない？&nbsp;下にもう一本線をかいてみよう。かんたんになってきた？"
    },
    code: "drawLine(30, 20, 200, 50);\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "So easy to add more lines, I want lots more.  Give me ten lines total, one on top of the other, separated by 10! Hint: Easier with<span class=tutor-code>for</span>loop.<span class=tutor-code>for</span>loop looks like<span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",
      de: "So einfach mehr Linien zu machen. Mehr! Gib mir 10 Linien! Eine über der anderen. Abstand 10. Tip: Einfacher mit<span class=tutor-code>for</span>Schleifen.<span class=tutor-code>for</span>Schleifen sehen so aus:<span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",
      jp: "線をかくのはかんたんになってきたね。もっとほしいな。全部で10本ちょうだい！&nbsp;線は重ねず、たてに平行にならべてね。<br>ヒント：<span class=tutor-code>for</span>ループ。<br><span class=tutor-code>for</span>ループはこんな感じだね。<span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>"
    }
  },
  {
    message: {
      en: "You get something like this?  You getting good!  Try playing with the numbers! I like<span class=tutor-code>n</span>of 40 and<span class=tutor-code>dy</span>of 5!",
      de: "Hast du das geschafft? So wie das hier? Du wirst gut! Probier andere Zahlen.<span class=tutor-code>n</span>= 40 oder<span class=tutor-code>dy</span>= 5!",
		jp: "これは分かるかな？&nbsp;上手になってきたね！&nbsp;数字で遊んでみよう！&nbsp;<br>40の<span class=tutor-code>n</span>と5の<span class=tutor-code>dy</span>がいいな！"
    },
    code: "var n = 10;\nvar dy = 10;\nfor (var i = 0; i < n; i = i + 1) {\n  var y = 20 + i * dy;\n  drawLine(30, y, 200, y + 30);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "Me miss boxes.  Hey, look, boxes, can erase!  Try moving the white box from (50, 50) to (20, 20)!",
      de: "Ich vermisse Quadrate! Schau mal, Quadrate kann ich löschen! Versuch das Quadrat von (50, 50) nach (20, 20) zu bewegen!",
      jp: "そろそろ四角形がみたいな。おっ、四角形を消すのもできるよ！&nbsp;白い四角形を(50, 50)から(20, 20)に動かしてみよう！"
    },
    code: "function fillSquare(w, h, s) {\n  c.fillRect(w, h, s, s);\n}\n\nc.fillStyle = \"blue\";\nfillSquare(10, 10, 100);\nfillSquare(100, 100, 100);\nc.fillStyle = \"white\";\nfillSquare(50, 50, 100);\n",
    lessonSection: {
      en: "Erasing",
      de: "de section",
      jp: "消してるよ."
    }
  },
  {
    message: {
      en: "Order matters.  Last one to draw gets to stay!  Try moving the white box now!",
      de: "Die Reihenfolge ist wichtig. Das letzte gemalte Quadrat bleibt! Versuch jetzt das weisse Quadrat zu bewegen!",
		jp: "じゅん番は大切。さいごにかくやつは、のこそう！&nbsp;白い四角形を動かしてみよう！"
    },
    code: "function fillSquare(w, h, s) {\n  c.fillRect(w, h, s, s);\n}\n\nc.fillStyle = \"blue\";\nfillSquare(10, 10, 100);\nc.fillStyle = \"white\";\nfillSquare(50, 50, 100);\nc.fillStyle = \"blue\";\nfillSquare(100, 100, 100);\n"
  },
  {
    message: {
      en: "Another way to erase is with clearRect().  Can you make a little blue smiley face using these?  It is almost done.  You just need to move them.",
      de: "Eine andere Möglichkeit Sachen zu löschen ist mittels clearRect(). Kannst du ein kleines blaues Smiley Gesicht damit machen? Es ist fast fertig. Du musst sie nur bewegen.",
      jp: "他の消し方はclearRect()だよ。小さい青いスマイルマークがかけるかな？&nbsp;ほとんどできてるよ。あとは動かすだけ。"
    },
    code: "c.fillStyle = \"blue\";\nc.fillRect(50, 20, 200, 200);\n// Eyes\nc.clearRect(80, 150, 20, 20);\nc.clearRect(120, 150, 20, 20);\n// Mouth\nc.clearRect(70, 50, 100, 10);\n"
  },
  {
    message: {
      en: "Me like this guy.  Ooo, friend.",
      de: "Ich man den Kerl. Freund!",
      jp: "オレ、これ、すきだなぁ。おー、友よ。"
    },
    code: "c.fillStyle = \"blue\";\nc.fillRect(50, 20, 200, 200);\n// Eyes\nc.clearRect(80, 50, 20, 20);\nc.clearRect(150, 50, 20, 20);\n// Mouth\nc.clearRect(70, 150, 100, 10);\n"
  },
  {
    message: {
      en: "A big<span class=tutor-code>clearRect()</span>erases everything.  Uncomment the big<span class=tutor-code>clearRect()</span>(remove the<span class=tutor-code>//</span>) and see what happens.",
      de: "Ein grosses<span class=tutor-code>clearRect()</span>löscht alles. Lösche die Kommentarzeichen (das<span class=tutor-code>//</span>sind Kommentarzeichen) und sieh was passiert.",
      jp: "<span class=tutor-code>clearRect()</span>は全部を消しちゃう命れいだ。<span class=tutor-code>clearRect()</span>の命れいを元にもどして（つまり<span class=tutor-code>//</span>を消して）どうなるか見てみよう。"
    },
    code: "var size = 80;\nvar offset = 20;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(0, 255, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\n// c.clearRect(0, 0, w, h);\noffset = offset + 60;\nc.fillStyle =\"rgba(255, 0, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\n"
  },
  {
    message: {
      en: "<span class=tutor-code>//</span>at the beginning of a line makes the line get ignored.  That's called commenting out.  Try adding<span class=tutor-code>//</span>before some of the other lines and see what happens!",
      de: "<span class=tutor-code>//</span>am Anfang einer Zeile macht dass der Rest ignoriert wird. Einfügen von<span class=tutor-code>//</span>heisst 'auskommentieren'. Füge mal<span class=tutor-code>//</span>vor einer anderen Zeile und sieh was passiert!",
      jp: "「<span class=tutor-code>//</span>」。これを行の先頭に入れると、その行は、むしされる。<i class=jp>コメントアウト</i>というんだよ。では<span class=tutor-code>//</span>を行の先頭にいれるとなにが起こるか、ためしてみよう！"
    },
    code: "var size = 80;\nvar offset = 20;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.fillStyle =\"rgba(0, 0, 255, 0.5)\";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle =\"rgba(0, 255, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\n// c.clearRect(0, 0, w, h);\noffset = offset + 60;\nc.fillStyle =\"rgba(255, 0, 0, 0.5)\";\nc.fillRect(offset, offset, size, size);\n",
    lessonSection: {
      en: "Comments",
      de: "Kommentare",
      jp: "コメント"
    }
  },
  {
    message: {
      en: "A box.  But how did it get that far away from the edge?  Try changing<span class=tutor-code>x</span>and<span class=tutor-code>y</span>.",
      de: "Ein Quadrat. Aber wieso ist es so weit vom Rand entfernt? Versuche<span class=tutor-code>x</span>und<span class=tutor-code>y</span>zu ändern.",
      jp: "四角形だね。でも、なんではしからはなれちゃったんだろう。<span class=tutor-code>x</span>と<span class=tutor-code>y</span>をかえてみよう。"
    },
    code: "var x = 50;\nvar y = 50;\n\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n",
    lessonSection: {
      en: "Rotation and Translation",
      de: "Rotation und Verschiebung",
      jp: "回転と変換"
    }
  },
  {
    message: {
      en: "The<span class=tutor-code>fillRect()</span>says to make the (left, top) at (0, 0), so wouldn't you think the box would be at the upper left corner? But, wait, what is<span class=tutor-code>translate()</span>?",
      de: "Das<span class=tutor-code>fillRect()</span>sagt dass (links, oben) (0, 0) sein soll, deshalb sollte es in der oberen linken Ecke sein. Aber was ist das:<span class=tutor-code>translate()</span>?",
      jp: "<span class=tutor-code>fillRect()</span>では(左, 上)を(0, 0)にすると命れいしてるから、四角形は左上になると思うだろう？&nbsp;でも待って、<span class=tutor-code>translate()</span>ってなんだろう？"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>translate()</span>changes where (0, 0) is. After<span class=tutor-code>translate(50, 50)</span>, for example, anything that tries to draw at (0, 0) will draw at (50, 50).  Drawing at (20, 20) would draw at (70, 70), since 50 + 20 = 70.  See?",
      de: "<span class=tutor-code>translate()</span>verändert wo (0, 0) ist. Nach<span class=tutor-code>translate(50, 50)</span>zum Beispiel ist alles was bei (0, 0) zeichnen will, bei (50, 50). Zeichnen bei (20, 20) zeichnet wirklich bei (70, 70), weil 50 + 20 = 70. Siehst du?",
		jp: "<span class=tutor-code>translate()</span>は(0, 0)の場所をかえるんだ。たとえば<span class=tutor-code>translate(50,50)</span>に指定した後は、どんな線をかこうと(0,0)の場所は(50,50)になるし、(20,20)の場所は50 + 20 = 70だから(70, 70)になるんだ。ほらね？"
    }
  },
  {
    message: {
      en: "Why does this do what it does?  What will happen if you uncomment<span class=tutor-code>save()</span>and<span class=tutor-code>restore()</span>? Try it. Was it what you expected?",
      de: "Warum macht es das? Was passiert wenn man<span class=tutor-code>save()</span>und<span class=tutor-code>restore()</span>auskommentiert? Probier mal! Hast du das erwartet?",
      jp: "なんでこんなことをしてるんだろう？&nbsp;<span class=tutor-code>save()</span>と<span class=tutor-code>restore()</span>のコメントアウトを外してみよう。ほら、予想とおりかな？"
    },
    code: "var x = 50;\nvar y = 50;\n\n// c.save();\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n// c.restore();\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n"
  },
  {
    message: {
      en: "The second box becomes black and gets drawn right on top of the first box!  Why?",
      de: "Das zweite Quadrat wurde schwarz und wir auf dem ersen Quadrat gemalt! Warum?",
      jp: "2つ目の四角形は黒くなって、1つ目の四角形の上にかかれちゃった。何でだろう？"
    },
    code: "var x = 50;\nvar y = 50;\n\nc.save();\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\nc.restore();\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n"
  },
  {
    message: {
      en: "<span class=tutor-code>restore()</span>eliminates all the changes since the last<span class=tutor-code>save()</span>.  So, if you<span class=tutor-code>save()</span>, then change the fillStyle = color or do<span class=tutor-code>translate()</span>, then<span class=tutor-code>restore()</span>, everything goes back to what it was right before the<span class=tutor-code>save()</span>.",
      de: "<span class=tutor-code>restore()</span>entfernt alle Änderungen seit dem letzten<span class=tutor-code>save()</span>. Also wenn du<span class=tutor-code>save()</span>macht, dann die Füllfarbe oder<span class=tutor-code>translate()</span>machst, und dann<span class=tutor-code>restore()</span>benutzt, sind die Einstellungen wie vor dem<span class=tutor-code>save()</span>.",
		jp:"<span class=tutor-code>restore()</span>は、いろいろかえたことを<span class=tutor-code>save()</span>の前のじょうたいにもどしちゃうんだよね。だから<span class=tutor-code>save()</span>の後に指定した <span class=tutor-code>fillStyle</span>の色や<span class=tutor-code>translate()</span>したことなんかが、<span class=tutor-code>restore()</span>より後の行ではなかったことになってるでしょ。"
    }
  },
  {
    message: {
      en: "We can rotate stuff too.  Try changing<span class=tutor-code>angle</span>!",
      de: "Wir können auch Sachen rotieren! Versuch den Winkel<span class=tutor-code>angle</span>zu ändern!",
      jp: "回転させることもできるよ。<span class=tutor-code>angle</span>をかえてみよう！"
    },
    code: "var x = 50;\nvar y = 50;\nvar angle = 0.1;\n\nc.translate(x, y);\nc.rotate(angle);\nc.strokeRect(0, 0, 100, 100);\n"
  },
  {
    message: {
      en: "You might be used to degrees?  Angles in Javascript are in radians.  45 degrees is about 0.8 in radians.  Try changing<span class=tutor-code>angle</span>from 0.1 to 0.8!",
      de: "Denkst du das der Winkel in Grad ist? Winkel in Javascript sind in Radianten geschrieben. 45 Grad sind etwa 0.8 Radianten. Probier den Winkel<span class=tutor-code>angle</span>von 0.1 bis 0.8 zu ändern!",
      jp: "angleって角度のことなんだけど、分かるかな？&nbsp;Javascript では角度はラジアンというもので表すんだ。45°は大体0.8ラジアン。<span class=tutor-code>angle</span>を0.1から0.8にかえてみよう！"
    },
    code: "var x = 50;\nvar y = 50;\nvar angle = 0.1;\n\nc.translate(x, y);\nc.rotate(angle);\nc.strokeRect(0, 0, 100, 100);\n"
  },
  {
    message: {
      en: "Spinning all the way around is 360 degrees, right?  In radians, it is about 6.28.",
      de: "Einmal ganz rumherum sind 360 Grad, richtig? In Radianten sind das etwa 6.28.",
      jp: "ぐるっとまわすと360°だね。だからだいたい6.28ラジアン。"
    }
  },
  {
    message: {
      en: "Did you notice that this box is pivoting through its top left corner when you rotate it?  That's the same spot we said to go with<span class=tutor-code>translate()</span>, right?",
      de: "Hast du bemerkt dass das Quadrat sich um seine linke obere Ecke dreht? Das ist der gleiche Punkt den wir mit<span class=tutor-code>translate()</span>gesetzt haben, richtig?",
      jp: "左角を中心に回るのがわかるかな？&nbsp;それは<span class=tutor-code>translate()</span>で動かしたのと同じ場所だよね."
    }
  },
  {
    message: {
      en: "Try changing<span class=tutor-code>angle</span>now.  How is this different?",
      de: "Probier jetzt den Winkel<span class=tutor-code>angle</span>zu ändern. Was hat sich geändert?",
      jp: "<span class=tutor-code>angle</span>をかえてみよう。どうちがうかな？"
    },
    code: "var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\nc.translate(x, y);\nc.rotate(angle);\nc.strokeRect(-50, -50, 100, 100);\n"
  },
  {
    message: {
      en: "Kind of weird that the<span class=tutor-code>strokeRect()</span>uses -50 for the left and top, isn't it?  But the top left of the box is still at (50, 50), because we translated to (100, 100), and 100 - 50 = 50.",
      de: "Schon seltsam dass<span class=tutor-code>strokeRect()</span>-50 für links und oben benutzt, gell? Aber oben links vom Quadrat ist immernoch bei (50, 50) weil wir alles nach (100, 100) verschoben haben (mit<span class=tutor-code>translate(100, 100)</span>) und 100 - 50 = 50.",
      jp: "<span class=tutor-code>strokeRect()</span>で左と上が-50になっているのは、ちょっとかわってるね。でも、四角形の左上の場所は(50, 50)のままだ。なぜならtranslateで(100, 100)に指定しているから100-50＝50になるんだよ。"
    }
  },
  {
    message: {
      en: "When we rotate, we rotate around (100, 100) because of the translate().  Oh, and (100, 100) is the center of the box!  So, this box is rotating around its center!",
      de: "Wenn wir rotieren, rotieren wir um (100, 100) wegen<span class=tutor-code>translate(100, 100)</span>. Oh, (100, 100) ist auch die Mitte vom Quadrat! Deshalb rotiert das Quadrat um seine Mitte!",
      jp: "(100, 100)で回転させようとすると、(100, 100)は四角形の中心なので中心で回転していることになる。"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>translate()</span>and<span class=tutor-code>rotate()</span>add to any earlier translate() and<span class=tutor-code>rotate()</span>, unless you<span class=tutor-code>restore()</span>the old state.  Try changing angle or uncommenting<span class=tutor-code>save()</span>and<span class=tutor-code>restore()</span>!",
      de: "<span class=tutor-code>translate()</span>und<span class=tutor-code>rotate()</span>addieren sich zu vorherigen<span class=tutor-code>translate()</span>und<span class=tutor-code>rotate()</span>Funktionen, ausser wenn man<span class=tutor-code>restore()</span>benutzt. Versuch den Winkel zu ändern und<span class=tutor-code>save()</span>und<span class=tutor-code>restore()</span>auszukommentieren!",
      jp: "<span class=tutor-code>restore()</span>で前のじょうたいにもどさないかぎり、<span class=tutor-code>translate()</span>と<span class=tutor-code>rotate()</span>が、前の<span class=tutor-code>translate()</span>と<span class=tutor-code>rotate()</span>に足されてしまうね。角度をかえるか<span class=tutor-code>save()</span>と<span class=tutor-code>restore()</span>をコメントアウトしよう。"
    },
    code: "var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\n// c.save();\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\n// c.restore();\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\n"
  },
  {
    message: {
      en: "Did that do what you expected?  You see why it did what it did?  With the<span class=tutor-code>save()</span>and<span class=tutor-code>restore()</span>, the second box is black and gets drawn right on top of the first purple box.",
      de: "Macht es was du erwartest hast? Siehst du wie's funktioniert? Mit<span class=tutor-code>save()</span>und<span class=tutor-code>restore()</span>ist das zweite Quadrat schwarz und wird direkt über das vorherige violette Quadrat gemalt.",
      jp: "予想通りに動いたかな？&nbsp;<span class=tutor-code>save()</span>と<span class=tutor-code>restore()</span>で2つ目の黒い四角形が1つ目のむらさき色の四角形の上にかかれたよ。"
    }
  },
  {
    message: {
      en: "Can you move the black box off the purple box?  So you can see both?",
      de: "Kannst du das schwarze Quadrat verschieben so dass du beide sehen kannst?",
      jp: "黒い四角形をむらさき色の四角形の上から動かしてみようか？&nbsp;両方の四角形が見えるようになるよ。"
    },
    code: "var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\nc.save();\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\nc.restore();\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\n"
  },
  {
    message: {
      en: "Here is one way. See how the<span class=tutor-code>translate()</span>is to a different spot?  Try changing angle now!  Did you try a negative number of angle like -0.2?",
      de: "Hier ist eine Möglichkeit. Siehst du wie<span class=tutor-code>translate()</span>alles zu einem neuen Punkt verschiebt? Ändere den Winkel jetzt! Probier auch mal einen negativen Winkel wie -0.2.",
      jp: "<span class=tutor-code>translate()</span>がちがう場所なのが分かる？&nbsp;では角度を変えて-0.2にしてみよう。"
    },
    code: "var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\nc.save();\nc.fillStyle = \"purple\";\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\nc.restore();\nc.translate(x * 2, y * 2);\nc.rotate(angle*2);\nc.fillRect(-50, -50, 100, 100);\n"
  },
  {
    message: {
      en: "Boxes rotated relative to their center are usually what you want.  Look, a function that makes boxes rotated to different angles!  Can you add a few more boxes?",
      de: "Normalerweise erwartet man Quadrate die sich um ihren Mittelpunkt drehen. Schau, eine Funktion die Quadrate um verschiedene Winkel dreht! Kannst du mehr Quadrate hinzufügen?",
      jp: "四角形が中心をじくに回転するのがふつうだけど、今度はちがう角度で回転するのをみてみよう！&nbsp;もう少し四角を足してみて。"
    },
    code: "function strokeSquare(x, y, size, angle) {\n  c.save();\n  c.translate(x + size / 2, y + size / 2);\n  c.rotate(angle);\n  c.strokeRect(-size / 2, -size / 2,\n                size, size);\n  c.restore();\n}\n\nstrokeSquare(50, 50, 100, 0.2);\nstrokeSquare(180, 100, 50, -0.1);\n"
  },
  {
    message: {
      en: "You coder now? Show me! Draw a box rotated by -0.5.  Hint: Use<span class=tutor-code>c.rotate();</span>and<span class=tutor-code>c.strokeRect();</span>",
      de: "Bist du ein Programmierer oder eine Programmiererin? Zeig's mir! Zeichne ein Quadrat das um -0.5 rotiert ist? Tip: Benutze<span class=tutor-code>c.rotate();</span>und<span class=tutor-code>c.strokeRect();</span>",
      jp: "キミはもうプログラマーだよ！&nbsp;-0.5で回転する四角形をかいてみて！&nbsp;<br>ヒント:<span class=tutor-code>c.rotate();</span>と<span class=tutor-code>c.strokeRect();</span>を使うよ。"
    },
    code: "",
    lessonSection: {
      en: "Quiz: Rotation and Translation",
      de: "de section",
      jp: "クイズ：回転と移動"
    }
  },
  {
    message: {
      en: "Oh, that too easy? You want harder problems? Draw five boxes on top of each other, each rotated by 0.3 more than the last.<br>Hint:<span class=tutor-code>c.translate();</span>might be useful<br>Hint:<span class=tutor-code>for</span>loops look like<span class=tutor-code>for (var i = 0; i < 5; i += 1) {</span>",
      de: "Oh, war das zu leicht? Möchtest du ein schwereres Problem? Zeichne fünf Quadrate, eine über dem anderen, jedes um 0.3 mehr verdreht als das vorherige.<br>Tip:<span class=tutor-code>c.translate();</span>ist praktisch hier.<br>Noch ein Tip:<span class=tutor-code>for</span>Schleifen sehen so aus:<span class=tutor-code>for (var i = 0; i < 5; i += 1) {</span>",
      jp: "かんたんすぎるかな？&nbsp;もう少しむずかし問題がいい？&nbsp;四角形を5つ重ねて0.3ずつ角度を変えて回転させてみよう。<br>ヒント1：<span class=tutor-code>c.translate();</span><br> ヒント2：<span class=tutor-code>for</span>ループはこんなふうに書くよ。<span class=tutor-code>for (var i = 0; i < 5; i += 1) {</span>"
    }
  },
  {
    message: {
      en: "Did you get something like this? See how this works?  It first moves a spot with<span class=tutor-code>translate();</span>, then repeatedly draws squares around that spot and rotates around that spot.",
      de: "Hast du sowas wie das hier herausbekommen? Siehst du wie das funktioniert? Zuerst bewegt es einen Punkt mit<span class=tutor-code>translate();</span>, dann zeichnet es ein Quadrat um diesen Punkt herum und rotiert um den gleichen Punkt.",
      jp: "こんな感じになった？&nbsp;まずは<span class=tutor-code>translate();</span>で動いたところに、くり返し四角形をかいて回転したんだ。"
    },
    code: "var angle = 0.2;\nvar num = 5;\nc.translate(150, 150);\nfor (var i = 0; i < num; i = i + 1) {\n  c.strokeRect(-75, -75, 150, 150);\n  c.rotate(angle);\n}\n"
  },
  {
    message: {
      en: "Play with it a bit!  Try changing<span class=tutor-code>num</span>and<span class=tutor-code>angle</span>!",
      de: "Spiel damit etwas! Versuche<span class=tutor-code>num</span>und<span class=tutor-code>angle</span>zu ändern!",
      jp: "少し遊んでみよう！&nbsp;<span class=tutor-code>num</span>と<span class=tutor-code>angle</span>をかえてみよう！"
    }
  },
  {
    message: {
      en: "Let's say we want to try to draw a tree.  How might you do that?",
      de: "Lass uns überlegen einen Baum zu zeichnen. Wie könnten wir das machen?",
      jp: "じゃあ、木をかいてみよう。どうすればいいかな？"
    },
    code: "",
    lessonSection: {
      en: "A Hard Problem",
      de: "Ein schweres Problem",
      jp: "難問だね."
    }
  },
  {
    message: {
      en: "Trees have branches.  Here is a start. Can you add more branches?",
      de: "Bäume haben Zweige. Hier ist ein Start. Kannst du mehr Zweige machen?",
      jp: "木にはえだがあるね。まずは、えだをつけてみよう。"
    },
    code: "drawLine(200, 300, 200, 200);\ndrawLine(200, 200, 160, 130);\ndrawLine(200, 200, 240, 130);\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "Oog, that a lot of work.",
      de: "Hmm...das ist eine Mange Arbeit.",
      jp: "うーん、大へんだな。"
    }
  },
  {
    message: {
      en: "Me try using variables.  Does that make it easier?  Not sure it does. What do you think?",
      de: "Versuch Variablen zu benutzen? Wird das einfacher? Hmm...ich weiss nicht. Was denkst du?",
      jp: "<ruby>変数<rp>（</rp><rt>へんすう</rt><rp>）</rp></ruby>をつかってみるよ。どう、かんたんになった？&nbsp;そうでもないかな？"
    },
    code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawLine(w * 0.5, h, w * 0.5, h * 0.7);\ndrawLine(w * 0.5, h * 0.7, w * 0.4, h * 0.5);\ndrawLine(w * 0.5, h * 0.7, w * 0.6, h * 0.5);\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "Bleah, that still too much work. For loop maybe?  How might that work? I don't know.  How would we draw two branches from every branch? I'm not sure.  What do you think?",
      de: "Näh, viel zu viel Arbeit! Vielleicht mit einer Schleife? Wie könnte das funktionieren? Ich weiss nicht. Wie kann man zwei Zweige von jedem Zweig aus zeichnen? Ich bin mir nicht sicher. Was denkst du?",
		jp: "うーん、まだ大へんだな。forループかな？&nbsp;どうやれば1つのえだに、2つのえだをかけるんだ？&nbsp;どう思う？"
    }
  },
  {
    message: {
      en: "No, I can't see a way to draw trees easily using a for loop.  What else we got?  Can we use functions?",
      de: "Nein, ich sehe keinen Weg mit einer for Schleife einen Baum zu zeichnen. Was können wir noch benutzen? Funktionen vielleicht?",
      jp: "forループで木をかくのはできないみたいだな。他に何が使えるかな。functionを使ったらいいかな？"
    }
  },
  {
    message: {
      en: "Maybe a function could draw a branch.  But how could every branch draw two more branches?",
      de: "Vielleicht kann eine Funktion einen Zweig zeichnen. Aber wie kann jeder Zweig 2 weitere Zweige zeichnen?",
      jp: "function だと、えだをかけそうだね。でも、1つのえだに2つ以上のえだを足していくには、どうすればいいのかな？"
    }
  },
  {
    message: {
      en: "Let's start with a function that draws a branch.  Here's one.  It takes four numbers, where to start (x,y), the length<span class=tutor-code>l</span>, and the<span class=tutor-code>direction</span>which says whether to draw left, right, or straight.",
      de: "Lass uns mit einer Funktion starten die einen Zweig zeichnet. Hier ist eine. Sie nimmt 4 Zahlen als Argumente: Wo man startet (x, y), die Länge<span class=tutor-code>l</span>, und die Richtung<span class=tutor-code>direction</span>die anzeigt ob man nach links, rechts oder geradeaus zeichnen soll.",
      jp: "じゃあ、まずえだをかくfunctionからやってみよう。<br>function <span class=tutor-code>drawBranch</span>を見てくれ。4つの数字がひつようだよ。スタート地点の<span class=tutor-code>x</span>と<span class=tutor-code>y</span>、長さの<span class=tutor-code>l</span>。<span class=tutor-code>direction</span>は、左とか右とかまっすぐなどの方向を決める。"
    },
    code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w / 2, h, 100, 0);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "<span class=tutor-code>direction</span>works by slanting the branch left (for negative numbers) or right (for positive).  See?  Try changing it!",
      de: "<span class=tutor-code>direction</span>funktioniert mittels kippen vom Zweig nach links (negative Zahlen) oder rechts (positive Zahlen). Siehst du? Versuch sie zu ändern!",
      jp: "<span class=tutor-code>direction</span>で、えだをかたむけることができるよ。左にかたむけるにはマイナスをつけた数、右にかたむけるには何もつけない数（プラスの数）にするよ。どう？&nbsp;やってみて！"
    },
    code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w / 2, h, 100, -0.1);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "How can we make this draw two more branches now?",
      de: "Wie können wir diesen Zweig mehr Zweige zeichnen lassen?",
      jp: "これをどうやったら、もう2つ、えだをかかせられるかな？"
    }
  },
  {
    message: {
      en: "Ah, me know, make function use itself! Can you see what this is doing?",
      de: "Ah, ich weiss: wir lassen die Funktion sich selber aufrufen! Siehst du wie das funktioniert?",
		jp: "あ、オレ分かるよ。こんな風にすればいいんだ。何をしているか分かるかな？"
    },
    code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w/2, h, 100, 0);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n  if (l > 20) {\n    // Call drawBranch twice more\n    drawBranch(x2, y2, l / 2, -0.8);\n    drawBranch(x2, y2, l / 2, 0.8);\n  }\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    lessonSection: {
      en: "Recursion",
      de: "Rekursion",
      jp: "反復,そうくり返してるね."
    }
  },
  {
    message: {
      en: "That crazy! Here's a version that's easier to twiddle.  Try playing with it!  Change<span class=tutor-code>xScale</span>,<span class=tutor-code>yScale</span>, or<span class=tutor-code>minLength</span>!  Cool, huh?",
      de: "Das ist der Wahnsinn! Hier ist eine Version die einfacher zu ändern ist. Spiel damit. Ändere<span class=tutor-code>xScale</span>,<span class=tutor-code>yScale</span>, oder<span class=tutor-code>minLength</span>! Cool, gell?",
      jp: "すごいね！&nbsp;このバージョンならお絵かきがかんたん。<span class=tutor-code>xScale</span>か<span class=tutor-code>yScale</span>か<span class=tutor-code>minLength</span>を、かえればいいんだ。どう？"
    },
    code: "var minLength = 20;\nvar yScale = 0.5;\nvar xScale = 0.8;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w/2, h, 100, 0);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n  if (l > minLength) {\n    // Call drawBranch twice more\n    drawBranch(x2, y2, l * yScale, -xScale);\n    drawBranch(x2, y2, l * yScale, xScale);\n  }\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
  },
  {
    message: {
      en: "There are a couple new things here.  Monster stop to explain.",
      de: "Hier sind einige neue Sachen die du noch nicht kennst. Monster erklärt wie's funktioniert.",
      jp: "新しいことがいくつかあるな。ここで止まって、せつ明しよう。"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>drawBranch()</span>is a <i>recursive</i> function.  That means it calls itself.",
      de: "<span class=tutor-code>drawBranch()</span>ist eine <i>rekursive</i> Funktion. Das heisst sie ruft sich selber auf.",
      jp: "<span class=tutor-code>drawBranch()</span>は<i><ruby>再帰<rp>（</rp><rt>さいき</rt><rp>）</rp></ruby><ruby>関数<rp>（</rp><rt>かんすう</rt><rp>）</rp></ruby></i>というものだよ。自分自身をよぶという意味。"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>drawBranch()</span>only calls itself if<span class=tutor-code>l > minLength</span>. <span class=tutor-code>l</span>gets smaller and smaller every time<span class=tutor-code>drawBranch()</span>calls itself, so<span class=tutor-code>drawBranch()</span>stops calling itself eventually when the length of a branch gets small enough.",
      de: "<span class=tutor-code>drawBranch()</span>ruft sich aber nur selber auf wenn<span class=tutor-code>l > minLength</span>. <span class=tutor-code>l</span>wird jedes mal kleiner wenn sich<span class=tutor-code>drawBranch()</span>selber aufruft. Am Ende, wenn die Länge des Zweiges zu klein wird, hört sie auf sich selber aufzurufen.",
      jp: "<span class=tutor-code>drawBranch()</span>は<span class=tutor-code>l > minLength</span>なら自分自身をよぶ。<span class=tutor-code>l</span>は、毎回<span class=tutor-code>drawBranch()</span>が自分自身をよぶたびに小さくなっていく。だから、えだの長さが十分に小さくなったら<span class=tutor-code>drawBranch()</span>は自分自身をよぶのを止めるんだ。"
    }
  },
  {
    message: {
      en: "Recursive functions are neat, but tricky! Let's do a bit more. Change this to call<span class=tutor-code>nSquareRecursive(4);</span>instead of<span class=tutor-code>nSquare(4);</span>",
      de: "Rekursive Funktionen sind nett, aber trickreich! Lass und ein bisschen mehr damit machen. Ändere<span class=tutor-code>nSquare(4);</span>nach<span class=tutor-code>nSquareRecursive(4);</span>.",
      jp: "<ruby>再帰<rp>（</rp><rt>さいき</rt><rp>）</rp></ruby><ruby>関数<rp>（</rp><rt>かんすう</rt><rp>）</rp></ruby>はすごいけど、むずかしいね！&nbsp;だから、もう少しやってみよう。<span class=tutor-code>nSquare(4);</span>ではなく<span class=tutor-code>nSquareRecursive(4);</span>に、かえてみよう。<br>この(4)はfunctionの(n)を4にするということだよ。"
    },
    code: "nSquare(4);\n\nfunction nSquare(n) {\n  c.strokeStyle = \"blue\";\n  for (var i = n; i > 0; i = i - 1) {\n    c.strokeRect(i * 30, i * 30, 100, 100);\n  }\n}\nfunction nSquareRecursive(n) {\n  if (n > 1) {\n    nSquareRecursive(n - 1);\n  }\n  c.strokeRect(n * 30, n * 30, 100, 100);\n}\n"
  },
  {
    message: {
      en: "Other than not being blue, it's the same, right?  Do you see how they both work?",
      de: "Ausser der Farbe die anders ist, ist es das gleiche, oder? Siehst du wie beide funktionieren?",
		jp: "青が同じじゃないってだけで、他は同じでしょ？&nbsp;この2つがどうなっているかわかるかな？"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>nSquare()</span>uses a for loop, starts at 4, and counts down: 4, 3, 2, 1.",
      de: "<span class=tutor-code>nSquare()</span>benutzt eine for Schleife die mit 4 started und dann runterzählt: 4, 3, 2, 1.",
      jp: "<span class=tutor-code>nSquare()</span>は forループを使ってる。4から始まって4、3、2、1とカウントダウンしていくね。"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>nSquareRecursive()</span>calls itself with one less each time.  So, when called with 4, it calls itself with 3, and that call calls itself with 2, and that call calls itself with 1.  At one, it says, stop calling yourself, so it stops.  And, on each call, it draws a box located at (n * 30, n * 30).  See?",
      de: "<span class=tutor-code>nSquareRecursive()</span>ruft sich selber auf aber verringert ihr Argument n. Wenn man es mit 4 aufruft, ruft es sich selber auf mit 3, danach ruft es sich selber auf mir 2 und dann mit 1. Jetzt stopps es sich selber aufzurufen. Und jedes mal zeichnet es ein Quadrat bei (n * 30, n * 30). Siehst du?",
		jp: "<span class=tutor-code>nSquareRecursive()</span>は、自分自身をよぶときに(n-1)になってるだろ。つまり4で始めたら、n-1 は 4-1 だから n は 3 になる。そして、また自分自身をよぶから、次の n は 2 になり、また自分自身をよぶから、次の n は 1 になるんだけど、n > 1じゃないから、くり返しは終わり。さらに毎回よぶたびに (n * 30, n * 30) の場所に四角形をかくんだ。わかる？"
    }
  },
  {
    message: {
      en: "This little piece of code draws a shrinking pile of boxes. See how it works?",
      de: "Dieses kleine Stück Code zeichnet schrumpfende Quadrate. Siehst du wie's funktioniert?",
      jp: "このちょっとしたコードが、ちぢんでいく四角形の山をかく。どうやっているか、わかるかな？"
    },
    code: "branchBox(100);\n\nfunction branchBox(size) {\n  c.translate(size, size);\n  c.strokeRect(-size, -size, size, size);\n  if (size > 5) {\n    branchBox(size * 0.65);\n  }\n}\n"
  },
  {
    message: {
      en: "The way it works is it does a<span class=tutor-code>translate()</span>to the bottom right corner of the box, then draws the box back up behind it. So the box will be<span class=tutor-code>size</span>big starting at (-size, -size).  Then, as long as the boxes haven't gotten too small, it does that again by calling itself, but shrinking the size of the box the next time.",
      de: "Es funktioniert so: Es macht eine Verschiebung mit<span class=tutor-code>translate()</span>zur unteren rechten Ecke vom Quadrat, dann malt es eine Quadrat. Das Quadrat wird<span class=tutor-code>size</span>gross und startet bei (-size, -size). Dann, solange die Quadrate noch nicht zu klein sind, macht es das wieder, aber die Grösse verringert sich jedes mal.",
      jp: "どうやっているかというと、四角形が右下の角の場所に来るように<span class=tutor-code>translate()</span>でスタート地点を動かしてから四角形をかいている。つまり四角形は (-size, -size)から始まって<span class=tutor-code>size</span>の大きさでかかれているんだ。そして、四角形が小さくなりすぎないかぎり自分自身をよび続けるけど、毎回四角形のサイズは小さくなっていくよ。"
    }
  },
  {
    message: {
      en: "Here is the same thing using a<span class=tutor-code>for</span>loop instead. Compare the two. See how they both work?",
      de: "Hier das gleiche mit einer<span class=tutor-code>for</span>Schleife. Vergleiche die beiden. Verstehst du wie beide funktionieren?",
      jp: "こっちは同じことを<span class=tutor-code>for</span>ループでやったやつ。2つをくらべてみてよ。どうなっているかわかる？"
    },
    code: "branchBoxForLoop(100);\n\nfunction branchBoxForLoop(size) {\n  c.strokeStyle = \"blue\";\n  for (var i = size; i > 4; i = i * 0.65) {\n    c.translate(i, i);\n    c.strokeRect(-i, -i, i, i);\n  }\n}\nfunction branchBox(size) {\n  c.translate(size, size);\n  c.strokeRect(-size, -size, size, size);\n  if (size > 5) {\n    branchBox(size * 0.65);\n  }\n}\n"
  },
  {
    message: {
      en: "The<span class=tutor-code>for</span>loop starts by drawing a box of size 100, then one of 65, and so on.  So does the recursive version, but the recursive version does it by calling itself.",
      de: "Die<span class=tutor-code>for</span>Schleife beginnt ein Quadrat mit der Grösse 100 zu zeichnen, dann 65 und so weiter. Genauso wie die rekursive Funktion, aber letztere ruft sich selber auf.",
      jp: "この<span class=tutor-code>for</span>ループは、大きさ100の四角形をかくことから始めてるね。次が大きさ65の四角形、とつづいていく。<ruby>再帰<rp>（</rp><rt>さいき</rt><rp>）</rp></ruby><ruby>関数<rp>（</rp><rt>かんすう</rt><rp>）</rp></ruby>も同じことをするよね。でも<ruby>再帰<rp>（</rp><rt>さいき</rt><rp>）</rp></ruby><ruby>関数<rp>（</rp><rt>かんすう</rt><rp>）</rp></ruby>の場合は自分自身をよび出して、かいているのさ。"
    }
  },
  {
    message: {
      en: "You can change them if you want!  Go experiment!",
      de: "Du kannst sie ändern wenn du möchtest! Experimentiere!",
      jp: "ためしてみよう！&nbsp;じっけんしてごらん！"
    }
  },
  {
    message: {
      en: "Back to trees.  Ooo!  An even better tree!",
      de: "Zurück zu den Bäumen. Oh! Ein ganz schöner Baum!",
      jp: "木にもどろう。おおお！&nbsp;よくなってる！"
    },
    code: "var angle = 0.35;\nvar branchScale = 0.75;\nvar l = 75;\nvar minL = 5;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.translate(w/2, h);\ndrawBranch(l, 0);\n\nfunction drawBranch(l, direction) {\n  c.save();\n  c.rotate(angle * direction);\n  c.fillRect(-l / 20, 0, l / 10, -l);\n  if (l > minL) {\n    c.translate(0, -l);\n    drawBranch(l * branchScale, -1);\n    drawBranch(l * branchScale, 1);\n  }\n  c.restore();\n}\n",
    lessonSection: {
      en: "Rotation, Translation, and Recursion",
      de: "Rotation, Verschiebung und Rekursion",
      jp: "回転,変換,そして再帰."
    }
  },
  {
    message: {
      en: "See how this works? It uses<span class=tutor-code>translate()</span>to move to the end of a branch, then<span class=tutor-code>rotate()</span>to tilt the branches off to one side or the other.",
      de: "Siehst du wie das funktioniert? Es benutzt<span class=tutor-code>translate()</span>um das Ende vom Zweig zu verschieben, dann<span class=tutor-code>rotate()</span>zum drehen/kippen vom Zweig zur einen oder anderen Seite.",
      jp: "どうなっているか分かる？&nbsp;<span class=tutor-code>translate()</span>で、えだの先まで動いて、<span class=tutor-code>rotate()</span>で、えだをかたむけてるんだ。"
    }
  },
  {
    message: {
      en: "Try changing<span class=tutor-code>angle</span>,<span class=tutor-code>branchScale</span>,<span class=tutor-code>l</span>, and<span class=tutor-code>minL</span>!  If you experiment a bit, you can get some really cool drawings.  Play with it!",
      de: "ändere<span class=tutor-code>angle</span>,<span class=tutor-code>branchScale</span>,<span class=tutor-code>l</span>, und<span class=tutor-code>minL</span>! Wenn du die Zahlen änderst kannst vielleicht echt tolle Zeichnungen machen!",
      jp: "<span class=tutor-code>angle</span>,<span class=tutor-code>branchScale</span>,<span class=tutor-code>l</span>,<span class=tutor-code>minL</span>の全部をかえてみよう！&nbsp;ちょっとじっけんしてみたら、もっとすごくかっこい絵がかけるよ。遊んでみて！"
    }
  },
  {
    message: {
      en: "I think it would look even more like a tree if<span class=tutor-code>angle</span>was a little more random.  Can you make angle bigger and then make<span class=tutor-code>rotate()</span>use a number between 0 and angle? (Hint:<span class=tutor-code>Math.random()</span>makes a number from 0.0 to 1.0)",
      de: "Ich glaube der Baum sähe besser aus mit etwas Zufall für<span class=tutor-code>angle</span>. Kannst du<span class=tutor-code>angle</span>grösser machen und<span class=tutor-code>rotate()</span>eine Zahl zwischen 0 und<span class=tutor-code>angle</span>benutzen lassen? Tip:<span class=tutor-code>Math.random()</span>ergibt eine Zahl von 0.0 bis 1.0",
      jp: "<span class=tutor-code>angle</span>をもっとランダムにしてみたら、より木らしくなると思うんだけど。<span class=tutor-code>angle</span>をもっと大きくして、<span class=tutor-code>rotate()</span>で0と<span class=tutor-code>angle</span>の間の数を使うようにしてみたら？&nbsp;<br>ヒント：<span class=tutor-code>Math.random()</span>は0.0から1.0までのランダムな数字を作るよ。"
    }
  },
  {
    message: {
      en: "Here is one version.  Can you make the<span class=tutor-code>branchScale</span>more random too?",
      de: "Hier ist eine Möglichkeit. Kannst du<span class=tutor-code>branchScale</span>auch etwas zufälliger machen?",
      jp: "こういうやり方もあるよ。<span class=tutor-code>branchScale</span>もランダムにできる？"
    },
    code: "var angle = 0.5;\nvar branchScale = 0.75;\nvar l = 75;\nvar minL = 5;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.translate(w/2, h);\ndrawBranch(l, 0);\n\nfunction drawBranch(l, direction) {\n  c.save();\n  // Make a number between 0 and angle\n  var a = angle * Math.random();\n  c.rotate(a * direction);\n  c.fillRect(-l / 20, 0, l / 10, -l);\n  if (l > minL) {\n    c.translate(0, -l);\n    drawBranch(l * branchScale, -1);\n    drawBranch(l * branchScale, 1);\n  }\n  c.restore();\n}\n"
  },
  {
    message: {
      en: "Ooo!  That's very tree-like!",
      de: "Oh! Sieht schon wirklich wie ein Baum aus!",
      jp: "おおお！&nbsp;本物の木みたいだ！"
    },
    code: "var angle = 0.5;\nvar branchScale = 0.75;\nvar l = 60;\nvar minL = 5;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.translate(w/2, h);\ndrawBranch(l, 0);\n\nfunction drawBranch(l, direction) {\n  c.save();\n  var a = angle * Math.random();\n  c.rotate(a * direction);\n  c.fillRect(-l / 20, 0, l / 10, -l);\n  if (l > minL) {\n    c.translate(0, -l);\n    // Make a number between -0.1 and 0.1\n    var b = 0.2 * (Math.random() - 0.5);\n    // Now make it between 0.9 and 1.1\n    b = b + 1;\n    // And use it to change branchScale\n    drawBranch(l * b * branchScale, -1);\n    b = 1 + 0.2 * (Math.random() - 0.5);\n    drawBranch(l * b * branchScale, 1);\n  }\n  c.restore();\n}\n"
  },
  {
    message: {
      en: "Try changing<span class=tutor-code>angle</span>,<span class=tutor-code>branchScale</span>,<span class=tutor-code>l</span>, and<span class=tutor-code>minL</span>!  If you experiment a bit, you can get some pretty wild stuff!",
      de: "Ändere<span class=tutor-code>angle</span>,<span class=tutor-code>branchScale</span>,<span class=tutor-code>l</span>, und<span class=tutor-code>minL</span>! Du kannst ganz interessante Sachen erzeugen!",
      jp: "<span class=tutor-code>angle</span>、<span class=tutor-code>branchScale</span>、<span class=tutor-code>l</span>、<span class=tutor-code>minL</span>をそれぞれかえてみて！&nbsp;ちょっとじっけんしてみたら、もっとワイルドなのができるから！"
    }
  },
  {
    message: {
      en: "I bet you can draw your own trees now!  Want to try?  I'll help you!",
      de: "Ich wette du kannst jetzt selber Bäume zeichnen! Sollen wir es versuchen? Ich helfe dir!",
      jp: "もう、きっと自分だけの木がかけるはず！&nbsp;やってみたい？&nbsp;てつだうよ！"
    },
    code: "",
    lessonSection: {
      en: "Drawing Your Own Tree",
      de: "Den eigenen Baum zeichnen",
      jp: "自分だけの木をかこう"
    }
  },
  {
    message: {
      en: "Let's draw different trees than we did before.  Let's make this plant alternate between splitting off branches right and left.  Some plants do that.  Ready to start?  I'll guide you through it!",
      de: "Lass und andere Bäume als vorher zeichnen. Dieser Baum wechselt Zweige links und rechts. Einige Pflanzen machen das. Sollen wir starten? Ich leite dich an!",
      jp: "今までやったのとは、ちがう木をかいてみよう。左と右のえだ分かれが、たがいちがいになっている植物を作ろう。そうなっている植物ってあるよね。用意はいい？&nbsp;ちゃんと教えてあげるから、だいじょうぶだよ！"
    }
  },
  {
    message: {
      en: "So, first we need a branch.  Let's make a function<span class=tutor-code>drawBranch()</span>that takes two values, a length called<span class=tutor-code>l</span>and a<span class=tutor-code>direction</span>.",
      de: "So, zuerst brauchen wir einen Zweig. Lass uns eine Funktion<span class=tutor-code>drawBranch()</span>machen die 2 Argumente hat: Länge<span class=tutor-code>l</span>und Richtung<span class=tutor-code>direction</span>.",
		jp: "さて、まずはえだがいるよね。<span class=tutor-code>l</span>という長さを表す<ruby>引数<rp>（</rp><rt>ひきすう</rt><rp>）</rp></ruby>と、<span class=tutor-code>direction</span>という方向を表す<ruby>引数<rp>（</rp><rt>ひきすう</rt><rp>）</rp></ruby>を使った <span class=tutor-code>function drawBranch()</span>を作ろう。<br><i>※ function でよく使う、( ) の中に入る size とか l とか direction といった文字は<strong><ruby>引数<rp>（</rp><rt>ひきすう</rt><rp>）</rp></ruby></strong>というものなんだ。おぼえてね！&nbsp;</i>"
    },
    code: ""
  },
  {
    message: {
      en: "Do you remember how to write a function like that?  You don't need to make it do anything yet, just declare a function called<span class=tutor-code>drawBranch()</span>.",
      de: "Weisst du noch wie man so eine Funktion schreibt? Versuche erstmal nur eine Funktion zu definieren die<span class=tutor-code>drawBranch()</span>heisst.",
      jp: "function をどうやってかくか、おぼえている？&nbsp;まずは何もかかなくていいから、drawBranch()というfunctionをつくろう。function をつくることを「<ruby>関数<rp>（</rp><rt>かんすう</rt><rp>）</rp></ruby><ruby>宣言<rp>（</rp><rt>せんげん</rt><rp>）</rp></ruby>」と言うよ。"
    }
  },
  {
    message: {
      en: "Were you thinking something like this?",
      de: "Hast du an sowas gedacht?",
      jp: "考えていたのはこんな感じ？"
    },
    code: "function drawBranch(l, direction) {\n  \n}\n"
  },
  {
    message: {
      en: "I've added some comments about what to do next.  We need to start drawing our tree.  Can you write the code beneath each of the comments?",
      de: "Ich habe einige Kommentare geschrieben was jetzt zu machen ist. Wir fangen jetzt an den Baum zu zeichnen. Kannst du den Code unter den Kommentaren schreiben?<br>Etwas Übersetzungshilfe:<br>// Benutze c.translate() um nach (200, 250) zu verschieben<br>// Rufe drawBranch() mit 50 für Länge<br>// und 1 als Richtung auf",
      jp: "次に何をするのかをコメントにしてみた。まずは木をかき始めないとな。それぞれのコメントの下にコードを書ける？&nbsp;<br><br></div>"
    },
    code: "function drawBranch(l, direction) {\n  \n}\n\n// Use c.translate() to move to (200, 250).\n// |jp| c.translate()を使って、(200,250)まで動かしてね。\n\n// Call drawBranch() with 50 as the length\n// and 1 as the direction\n// |jp| drawBranch()をよびだして「l」の場所に50、\n// |jp|「direction」の場所に 1 を書こう。\n"
  },
  {
    message: {
      en: "Okay, so you<span class=tutor-code>translate()</span>so you start at the right spot and then you try to draw a branch.  Now we need to make<span class=tutor-code>drawBranch()</span>do something!  Can you do what the comments say to do?  You should get a single branch (which will look like the trunk of the tree) when you are done.",
      de: "Ok, jetzt musst du mit<span class=tutor-code>translate()</span>am richtigen Punkt starten und dann einen Zweig zeichnen. Jetzt musst du<span class=tutor-code>drawBranch()</span>etwas machen lassen! Kannst du machen was die Kommentare sagen? Du solltest am Ende einen einzelnen Zweig haben der die der Stamm aussieht.<br>// c.fillRect(links, oben, weite, höhe) zeichnet ein Rechteck<br>// Benutze es um ein Rechteck zu zeichnen das bei (-1, 0) startet und 2 weit ist mit der Höhe -l (l wie in Länge)",
      jp: "オーケー。まずは<span class=tutor-code>translate()</span>で正しい場所から始めて、えだをかこうとしているよ。さて<span class=tutor-code>drawBranch()</span>に何かさせないと！&nbsp;コメントとしてかいてあることを、できるかな？&nbsp;木のみきに見える1本のえだができるはず！&nbsp;<br>"
    },
	code: "function drawBranch(l, direction) {\n  // c.fillRect(left, top, width, height);\n  // will draw a rectangle.\n  // Use it do draw a rectangle that\n  // starts at (-1, 0) and is 2 wide\n  // and -l (that's l as in length) tall.\n  // |jp| c.fillRect(left,top,width,height)で\n  // |jp| 長方形ができるよ。\n  // |jp| 「left」(=左)を「-1」、「top」(=上)が「0」、\n  // |jp| 「width」(=はば)が「2」、\n  // |jp| 「height」(=高さ)が「-l」(エル)。\n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "You should have something like this now.  Let's keep going!  Look for the comments to tell you what to do next!",
      de: "Jetzt solltest du das hier haben. Weiter geht's! Schau die Kommentare an um zu wissen wie's weitergeht.<br>// Benutze c.translate() um an das Ende<br>// vom Zweig zu gehen<br>// Tip: Das Ende ist bei (0, -l) l wie Länge",
      jp: "こんなのができたはず。もっとやってみよう！&nbsp;コメントを見れば、次に何をすればいいかを教えてくれるから！"
    },
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  // Use c.translate() to move to the end\n  // of the branch.\n  // Hint: The end is at (0, -l), that's l\n  // as in length.\n  // |jp| えだのはしまで動くためにc.translate()を使おう。\n  // |jp| ヒント：えだのはしは(0, -l)にあるよ。lはエルね。\n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "Great!  Now you have drawn your first branch, moved to the end of that branch, and you're ready to draw more branches!",
      de: "Grossartig! Du hast jetzt deinen ersten Zweig gezeichnet, bist zum Ende des Zweiges gegangen und bist jetzt bereit mehr Zweige zu zeichnen!",
      jp: "すごい！&nbsp;さいしょのえだをかいて、そのえだの先まで動いたね。ということは、もっとえだをかく用意ができたね！"
    },
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "Let's stop for a second and think about what we're going to want to do next.",
      de: "Lass uns hier eine Sekunde bleiben und überlegen was wir als nächstes machen.",
      jp: "ちょっと手を止めて、次はいったい何をしたいのか考えてみよう。"
    }
  },
  {
    message: {
      en: "This plant is going to split off two branches, one going up, one going off to the side.  We want the ones going off to the side to alternate, first right, then left, then right, then left.",
      de: "Diese Pflanze hat zwei Zweige: einen nach oben, dann einen zur Seite. Die zur Seite sind abwechselnd links und dann rechts.",
      jp: "この植物は2つのえだに分かれていくけど、1つは上に向かって、もう一つは下がっている。やりたいのは、まずは右、そして左、次は右、そして左、というように、右・左とじゅん番に分かれていくえだだよね。"
    }
  },
  {
    message: {
      en: "We'll keep splitting and drawing and splitting and drawing until the branches get very short.",
      de: "Wir teilen und zeichnen und teilen und zeichnen bis die Zweige ganz klein werden.",
      jp: "えだが分かれて、えだをかいて、えだが分かれて、えだをかいてと、えだがすごく短くなるまでつづける。"
    }
  },
  {
    message: {
      en: "Let's add that next.  We should only draw more branches if the length<span class=tutor-code>l</span>is more than 5.  Can you add that?",
      de: "Lass und das jetzt machen. Wie zeichnen nur neue Zweige wenn die Länge<span class=tutor-code>l</span> grösser als 5 ist. Kannst du das hinzufügen?<br>// Ersetze true in der nächsten Zeile mit etwas was<br>// überprüft ob l gross genug ist<br>// Weiter unten brauchst du noch nichts zu ändern. Das kommt später.",
      jp: "さあ、次にいこう。長さの<span class=tutor-code>l</span>が5より長い時だけもっとえだをかく。できるかな？"
    },
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  // Replace true below with something that\n  // checks if l is big enough\n  // |jp| 下の「true」のところを、「l」(エル)が十分な\n  // |jp| 大きさかどうかチェックするものに、おきかえよう。\n  if ( true ) {\n    // Don't do anything here yet.\n    // We'll add more branches later.\n    // |jp| ここはまだ何もしなくていいよ\n    // |jp| 後でえだを付け足すからね。\n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "You should have this now.",
      de: "Du solltest jetzt das hier haben.",
      jp: "これができるはず。"
    },
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    // Don't do anything here yet.\n    // We'll add more branches later.\n    // |jp| ここはまだ何もしなくていいよ。\n    // |jp| 後でえだを付け足すからね。\n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "Let's add just the branch going straight up.  Let's make it a little shorter that the last branch we drew.  Follow the instructions in the comments.",
      de: "Lass uns nur einen Zweig nach oben machen. Wir machen ihn etwas kürzer als den vorherigen. Folge den Anweisungen in den Kommentaren.<br>// Rufe drawBranch() mit l * 0.8 und Richtung direction",
      jp: "上にのびるえだを追加しよう。さいごにかいたえだより、ちょっとだけ短くなるようにしよう。コメントに書いてあることにしたがってね。"
    },
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    // Call drawBranch() with l * 0.8 and direction\n    // |jp| l * 0.8 とdirectionを使って\n    // |jp| drawranch()をよびだそう。 \n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "Do you have this now?  See what it does?  It repeatedly draws a branch straight up, making the branch a little shorter each time.  It looks like a line, but it's really a bunch of branches piled on top of each other.",
      de: "Hast du das jetzt? Versteht du was es macht? Es zeichnet einen Zweig nach oben der jedesmal etwas kürzer wird. Es sieht aus wie eine Linie, aber es sind in Wirklichkeit aneinandergereihte Zweige.",
      jp: "これができた？&nbsp;何しているかわかる？&nbsp;くり返すたびに少しずつ短くなる、上にのびるえだをかいているんだ。ただの線みたいに見えるけど。"
    },
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "Pretty boring so far?",
      de: "Etwas langweilig, gell?",
      jp: "今のところ、かなりたいくつ？"
    }
  },
  {
    message: {
      en: "It's about to get a lot more exciting!",
      de: "Jetzt wird es interessanter!",
      jp: "そろそろ楽しくなってくるころだよ！"
    }
  },
  {
    message: {
      en: "Let's add the second branch!  For that branch, we are going to rotate to the side indicated by direction, then draw a shorter branch.  Follow the instructions in the comments.",
      de: "Lass und einen zweiten Zweig machen! Dafür drehen wir uns zur Seite mittels direction, und zeichnen einen kurzen Zweig. Folge den Anweisungen in den Kommentaren.<br>// Benutze c.rotate() mit Richtung 0.5 * direction<br>// Rufe callBranch mit l * 0.7 und Richtung direction",
      jp: "2番目のえだを追加しよう！&nbsp;このえだは、directionで指定しているように回転させた上で、えだを短くかいているんだ。コメントに書いてあることにしたがってね。"
    },
    code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n    \n    // Use c.rotate() with an angle of\n    // 0.5 * direction\n    // |jp| c.rotate()をよびだして\n    // |jp| 0.5 * directionで角度を指定しよう。\n\n\n    // Call drawBranch with l * 0.7 and direction\n    // |jp| l * 0.7とdirectionを使って\n    // |jp| drawBranchをよびだそう。\n    \n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "Aieeee!  What did you do?",
      de: "Oh weia! Was hast du gemacht?",
      jp: "ええええ。何をやったの?"
    }
  },
  {
    message: {
      en: "Just kidding!  It's all fine!",
      de: "War nur Spass! Ist alles ok!",
      jp: "じょうだんだよ！&nbsp;すべてうまくいっているよ！"
    }
  },
  {
    message: {
      en: "This is just part of what is called debugging, getting the bugs (the problems) out.",
      de: "Das ist Teil was Fehlersuche heisst: Fehler suchen und korrigieren",
      jp: "これは「デバッグする」とよばれるものの一部。バグ(つまり問題)を見つけることなんだ。"
    }
  },
  {
    message: {
      en: "So, that didn't do what you expected it to do, did it?",
      de: "So, das war nicht das was wir gedacht haben.",
      jp: "つまり、これは期待したとおりに動いていないってことだよね。"
    }
  },
  {
    message: {
      en: "Any idea what's wrong?",
      de: "Hast du eine Idee was falsch ist?",
		jp: "何がいけないのかわかる？"
    }
  },
  {
    message: {
      en: "What's happening is that all those<span class=tutor-code>translate()</span>and<span class=tutor-code>rotate()</span>calls are piled on top of each other.  We didn't really want that.  When it's time to draw the second branch, we really want everything to be the way it was when we did the first branch, but it's not, we've translated and rotated all over the place.",
      de: "Was passiert ist das all die<span class=tutor-code>translate()</span>(verschieben) und<span class=tutor-code>rotate()</span>(drehen) Aufrufe sich aufeinanderstapeln. Das wollen wir nicht. Wenn wir den 2. Zweig zeichnen wollen wir alles so haben wie es beim 1. Zweig war, aber im Moment ist alles verschoben und gedreht.",
      jp: "何が起きているかというと、<span class=tutor-code>translate()</span>と<span class=tutor-code>rotate()</span>をよぶことで、おたがいにつみ重ねあっているんだ。したいことはちょっとちがうよね。2本目のえだをかくときに、1本目でと全く同じなことをしたかったんだ。だけど、まちがえて全部のところで場所をうごかして、角度をかえてしまった。"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>save()</span>and<span class=tutor-code>restore()</span>to the rescue!  Can you add<span class=tutor-code>c.save();</span>and<span class=tutor-code>c.restore();</span>where the comments say to add them?",
      de: "<span class=tutor-code>save()</span>und<span class=tutor-code>restore()</span>kommen zur Rettung! Kannst du<span class=tutor-code>c.save();</span>und<span class=tutor-code>c.restore();</span>da einfügen wo die Kommentare es anzeigen?",
      jp: "問題かいけつのために<span class=tutor-code>c.save();</span>と<span class=tutor-code>c.restore();</span>だ！&nbsp;<br>コメントにかいてあるところに<span class=tutor-code>c.save();</span>と<span class=tutor-code>c.restore();</span>を加えてくれる？"
    },
    code: "function drawBranch(l, direction) {\n  // Save here!\n  // |jp| saveはここだよ！&nbsp;\n  \n  \n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n    \n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, direction);\n  }\n  \n  // Restore here!\n  // |jp| restoreはここだよ！&nbsp;\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "That's mostly better.  But it's only drawing one side of the tree!  Why is that?",
      de: "Das ist ziemlich gut schon. Aber Zweige gehen nur zu einer Seite! Warum?",
      jp: "だいぶいいね。でも木のかたがわにしか、かかれていないね。なんでかな？"
    },
    code: "function drawBranch(l, direction) {\n  c.save();\n  \n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n    \n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, direction);\n  }\n  \n  c.restore();\n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "Figure it out?",
      de: "Weisst du es?",
      jp: "分かるかな？"
    }
  },
  {
    message: {
      en: "It's because we didn't switch direction.  Direction is always the same as what it was at the start, it is always 1.  It should alternate, 1, -1, 1, -1 ...",
      de: "Das ist so weil wir die Richtung nicht wechseln. Richtung<span class=tutor-code>direction</span>ist immer 1. Es sollte 1, dann -1, dann wieder 1, dann -1 usw. sein.",
      jp: "向きをかえなかったからだよ。スタートした時といつも向きがいっしょだろ。いつも 1 だ。それを 1, -1, 1, -1 …と、たがいちがいにしないと。"
    }
  },
  {
    message: {
      en: "Can you make it so both of the<span class=tutor-code>drawBranch()</span>calls inside of<span class=tutor-code>drawBranch()</span>use<span class=tutor-code>-direction</span>instead of<span class=tutor-code>direction</span>?",
      de: "Kannst du den Code ändern dass<span class=tutor-code>drawBranch()</span>Aufrufe innerhalb der<span class=tutor-code>drawBranch()</span>Funktion<span class=tutor-code>-direction</span>anstelle von<span class=tutor-code>direction</span>benutzen?",
      jp: "<span class=tutor-code>function drawBranch()</span>の中でよびだしている<span class=tutor-code>drawBranch()</span>の<ruby>引数<rp>(</rp><rt>ひきすう</rt><rp>)</rp></ruby><span class=tutor-code>direction</span>の代わりに<span class=tutor-code>-direction</span>を使うようにできる？"
    }
  },
  {
    message: {
      en: "Do you now have this?  Wow, nice work!",
      de: "Hast du das hier? Klasse!",
      jp: "さて、できた？&nbsp;ワオ、よくできたね！"
    },
    code: "function drawBranch(l, direction) {\n  c.save();\n  \n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, -direction);\n    \n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, -direction);\n  }\n  \n  c.restore();\n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "Try playing with it more! Try changing the 0.8, 0.7, and 0.5 to see what happens!",
      de: "Spiel damit! Ändere 0.8, 0.7 und 0.5 und sieh was passiert!",
      jp: "もっと遊んでみて！&nbsp;0.8、0.7、そして0.5と、かえてみて。何が起こるか見てみて！"
    },
    lessonSection: {
      en: "Play with Your Tree",
      de: "Mit dem Baum Spielen",
      jp: "木と遊んでみて."
    }
  },
  {
    message: {
      en: "Look! Green leaves on the ends of the branches!",
      de: "Schau! Grüne Blätter am Ende der Zweige!",
      jp: "見て！&nbsp;緑の葉っぱがえだの先に！"
    },
    code: "function drawBranch(l, direction) {\n  c.save();\n  c.fillRect(-1, 0, 2, -l);\n  c.translate(0, -l);\n  if (l > 5) {\n    drawBranch(l * 0.8, -direction);\n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, -direction);\n  } else {\n    c.fillStyle = \"green\";\n    c.fillRect(-2, -2, 4, 4);\n  }\n  c.restore();\n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n"
  },
  {
    message: {
      en: "See how that works? The little size 4 green squares are the leaves! They are only added when we get to the end of the branch.",
      de: "Sieht du wie das funktioniert? Die kleinen Quadrate der Grösse 4 sind die Blätter! Sie werden nur gezeichnet wenn das Ende vom Zweig erreicht wird.",
      jp: "どうやったかわかる？&nbsp;小さな緑の四角形が葉っぱだよ。命れいが、えだのはしっこにきたときに追加しただけ。"
    }
  },
  {
    message: {
      en: "Can you make the branches brown?",
      de: "Kannst du die Zweige braun (brown) machen?",
      jp: "えだを茶色にできる？"
    }
  },
  {
    message: {
      en: "Let me show you something really cool that is only a minor change from what you just did!",
      de: "Lass mich dir was echt cooles zeigen und es braucht nur eine kleine Änderung vom dem was du gemacht hast!",
      jp: "今までやったことを、ほんのちょっとかえるだけで、すごいことができるのを見せるね。"
    },
    code: "function drawBranch(l) {\n  // Make longer branches wider\n  // |jp| 長いえだを幅広くする。\n  var w = 0.5 + l / 30;\n  c.fillRect(w / 2, 0, w, -l);\n  c.save();\n  c.translate(0, -l);\n  if (l > 1) {\n    // Start at -80 degrees\n    var a = -Math.PI * 4 / 9;\n    // Draw three branches\n    for (var i = 0; i < 3; i = i + 1) {\n      // The length of our new branches\n      var l2 = l * 0.5;\n      // Make the middle branch bigger\n      if (i == 1) { l2 = l2 + 0.3 * l; }\n      \n      c.save();\n      c.rotate(a);\n      drawBranch(l2);\n      c.restore();\n      \n      // Add 90 degrees for the next branch\n      a = a + Math.PI / 2;\n    }\n  }\n  c.restore();\n}\n\nc.fillStyle = \"green\";\nc.translate(170, 270);\ndrawBranch(60);\n",
    lessonSection: {
      en: "Fun with Ferns",
      de: "Spass mit Farn",
      jp: "シダっておもしろい."
    }
  },
  {
    message: {
      en: "This fern is drawn just by doing three branches from each branch, each rotated at -80, 10, and 100 degrees.  See how it works?",
      de: "Dieser Farn hat nur 3 Abzweigungen, um -80, 10 und 100 Grad gedreht. Sieht du wie's funktioniert?",
      jp: "このシダはそれぞれのえだから、-80, 10, 100 度とそれぞれ回転させた3つのえだをかくだけでできるね。わかるかな？"
    }
  },
  {
    message: {
      en: "Every time it draws a branch, it draws three more branches from the end of that branch.  It keeps doing that and doing that, smaller and smaller, and you get what looks like a fern!",
      de: "Jedes mal wenn ein Zweig gemalt wird, werden 3 neue Zweige gezeichnet, bis die Zweige ganz klein sind. Was herauskommt ist etwas was wie ein Farn aussieht!",
      jp: "毎回、えだをかくときは、それぞれのえだの先からもう3つのえだをかく。これをくり返しくり返し、どんどん小さく小さくしていく。するとシダみたいなのがかけるんだ！"
    }
  },
  {
    message: {
      en: "All this stuff with trees and ferns are a type of pattern called a <i>fractal</i>. Fractals are crazy cool fun with math.",
      de: "All diese Sachen mir Bäumen und Farnen sind Teile von Muster die man <i>Fraktale</i> nennt. Fraktale sind Spass mit Mathematik.",
      jp: "こういった木やシダは<i>フラクタル</i>と呼ばれるパターンの1つなんだ。フラクタルは数学を使った、チョーかっこいい、面白い世界なんだ。"
    },
    lessonSection: {
      en: "Fractals",
      de: "Fraktale",
      jp: "フラクタル"
    }
  },
  {
    message: {
      en: "This fractal is called the Terdragon.",
      de: "Diese Fraktale heissen Drachenkurven",
		jp: "このフラクタルは Terdragon、日本語では「ドラゴン曲線」とよばれるものなんだ。"
    },
    code: "var n = 8;\nvar l = 5;\nvar angle = 120 * Math.PI / 180;\n\nc.translate(300, 200);\nterdragon(n);\nfunction terdragon(n) {\n  if (n <= 1) {\n    drawLine(l);\n  } else {\n    terdragon(n-1);\n    c.rotate(angle);\n    terdragon(n-1);\n    c.rotate(-angle);\n    terdragon(n-1);\n  }\n}\nfunction drawLine(l) {\n  c.beginPath();\n  c.moveTo(0, 0);\n  c.lineTo(l, 0);\n  c.stroke();\n  // Finish at the end of the line we drew\n  c.translate(l, 0);\n}\n"
  },
  {
    message: {
      en: "If you make<span class=tutor-code>l</span>bigger, you can zoom in and see it's made of little triangles!",
      de: "Wenn du<span class=tutor-code>l</span>grösser machst, kannst du das vergrössern und dann siehst du dass das aus kleinen Dreiecken gemacht ist!",
      jp: "<span class=tutor-code>l</span>を大きくすれば、たくさんの小さい三角形から作られているのがわかるよ！"
    }
  },
  {
    message: {
      en: "Can you figure out how it works? Take a look at the code.",
      de: "Verstehst du wie das funktioniert? Schau dir den Code an.",
      jp: "どうやってできたのか分かる？&nbsp;コードを見てみよう！"
    }
  },
  {
    message: {
      en: "Try making<span class=tutor-code>l=10</span>and then<span class=tutor-code>n=1</span>and then<span class=tutor-code>n=2</span>then<span class=tutor-code>n=3</span>, and you'll see how it grows.",
      de: "Versuche<span class=tutor-code>l=10</span>und dann<span class=tutor-code>n=1</span>und dann<span class=tutor-code>n=2</span>, dann<span class=tutor-code>n=3</span>, und due siehst wie es wächst.",
      jp: "まず、<span class=tutor-code>l=10</span>にしてごらん。それから<span class=tutor-code>n=1</span>にしてみて、<span class=tutor-code>n=2</span>にしてみて、それからまた<span class=tutor-code>n=3</span>にすれば、どうやって大きくなっていったかが分かるよ。"
    }
  },
  {
    message: {
      en: "Okay, it's time for the last quiz.  This one is hard, so don't worry if you can't finish it.  There is a lot of good stuff coming after this.  Whatever you do, don't quit here, make sure to keep going so you can see all the fun stuff!",
      de: "Ok, es ist Zeit für das letzte Quiz. Das ist schwer, deshalb keine Sorgen wenn du es nicht ganz fertig bekommst. Danach kommt noch mehr! Was auch immer passiert, höre hier nicht auf weil nachher neue interessante Sachen kommen!",
      jp: "では、さいごのクイズだよ。これはむずかしいよー。だから、できなくても気にしなくていいよ。ここを乗りこえると、面白いことがたくさん待ってるからね！&nbsp;とちゅうであきらめないで、がんばって！"
    },
    code: "",
    lessonSection: {
      en: "Quiz: Challenge Problem",
      de: "Quiz: Ein etwas schweres Problem",
      jp: "クイズ:問題をチャレンジしよう."
    }
  },
  {
    message: {
      en: "For the quiz, I want you to write something entirely yourself.  Make a checkerboard pattern, a black square, then a white, then a black, and so on, at least four rows of them (like a 6 x 4 grid).  Can you do it?",
      de: "Für das Quiz möchte ich dass Du etwas ganz selber schreibst. Mache ein Schachbrettmuster: ein schwarzes, dann ein weisses, dann wieder ein schwarzes Quadrat. Mindestend 6 in einer Reihe und 4 Reihen (wie ein 6x4 Muster).",
      jp: "このクイズでは、全部自力でやってもらいたいんだ。白の四角形と黒の四角形をくり返した<ruby>市松<rp>(</rp><rt>いちまつ</rt><rp>)</rp></ruby><ruby>模様<rp>(</rp><rt>もよう</rt><rp>)</rp></ruby>を作れるかな？&nbsp;少なくとも、たてに４マス、横に６マスはほしいな。できる？"
    },
    code: ""
  },
  {
    message: {
      en: "If you did it, good job, this is really hard, I'm impressed!  If you didn't get it, no worries, here's a hint, you might need two<span class=tutor-code>for</span>loops, one inside the other, you'll use at least one<span class=tutor-code>c.fillRect()</span>, and don't forget a<span class=tutor-code>for</span>loop looks like<span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",
      de: "Wenn du's geschafft hast: Super! Das ist nicht einfach gewesen. Falls du es nicht geschafft hast, hier ist ein Tip: Du brauchst vielleicht zwei<span class=tutor-code>for</span>Schleifen: eine innerhalb der anderen, und du brauchst<span class=tutor-code>c.fillRect()</span>. Vergiss nicht:<span class=tutor-code>for</span>Schleifen sehen so aus:<span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",
      jp: "もし、1人でできたのなら、本当にすごいよ！&nbsp;できなくても、だいじょうぶ。ここでヒントあげよう。2つの<span class=tutor-code>for</span>ループがいるかもしれないな。1つは、もう1つの中に入る。それに<span class=tutor-code>c.fillRect()</span>を少なくとも1回は使おうね。<span class=tutor-code>for</span>ループは<span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>と、こんな感じになるよ。わすれないでね！"
    }
  },
  {
    message: {
      en: "Ready to see different ways to solve it?",
      de: "Bist du bereit zu sehen wie man das zum Beispiel löst?",
      jp: "ちがうやり方を見てみる？"
    }
  },
  {
    message: {
      en: "Here is one way.  See how this works?",
      de: "Hier ist eine Möglichkeit. Siehst du wie es funktioniert?",
      jp: "こういうやり方もあるんだよな。どうなっているか分かる？"
    },
    code: "var size = 50;\n\nfor (var i = 0; i < 300; i = i + 100) {\n  for (var j = 0; j < 200; j = j + 100) {\n    fillSquare(i, j, size);\n  }\n}\nfor (var i = 50; i < 300; i = i + 100) {\n  for (var j = 50; j < 200; j = j + 100) {\n    fillSquare(i, j, size);\n  }\n}\n\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, size, size);\n}\n",
    lessonSection: {
      en: "Many Ways to Code",
      de: "Viele Wege führen zum Ziel",
      jp: "たくさんのコードするやり方あるよ."
    }
  },
  {
    message: {
      en: "If not, try commenting out one of the<span class=tutor-code>fillSquare()</span>lines (using<span class=tutor-code>//</span>) so you can see what the other is drawing.",
      de: "Probier eine nach der anderen<span class=tutor-code>fillSquare()</span>Zeilen auszukommentieren (mit<span class=tutor-code>//</span>) damit du sehen kannst was die anderen zeichnen.",
      jp: "もし分からないなら、<span class=tutor-code>fillSquare()</span>をどれか1つ、コメントアウトしてごらん（<span class=tutor-code>//</span>を使おう）。もう1つの<span class=tutor-code>fillSquare()</span>で何をかいているのかが分かるよ。"
    }
  },
  {
    message: {
      en: "It draws the first and third rows, starting at (0, 0), then doing (0, 100), then doing (100, 0), then (100, 100), and so on.  Then it draws the second and fourth rows, starting at (50, 50), then (50, 150), and so on.  Make sense?",
      de: "Zuerst zeichnet es die erste und dritte Reihe, angefangen mit (0, 0), dann (0, 100), dann (100, 0), dann (100, 100) und so weiter. Dann zeichnet es die zweite und vierte Reihe, angefangen mit (50, 50), dann (50, 150) und so weiter. Gibt Sinn?",
      jp: "これは、まず1行目と3行目の黒い3つの四角形をかいているんだよ。(0,0)、(0,100)とか(100,0)、(100,100)の場所から始まっているね。<br>次に、2行目と4行目の黒い3つの四角形をかいているね。(50,50)、(50,150)といった場所から始まっている。どう？&nbsp;うまくできてるでしょ。"
    }
  },
  {
    message: {
      en: "Let's look at a few more ways of doing a checkerboard.  Here is another version. See how this works?",
      de: "Lass uns andere Möglichkeiten ein Schachbrettmuster zu zeichnen. Hier ist einen andere Version. Siehst du wie es funktioniert?",
      jp: "もっと他の<ruby>市松<rp>(</rp><rt>いちまつ</rt><rp>)</rp></ruby><ruby>模様<rp>(</rp><rt>もよう</rt><rp>)</rp></ruby>の作り方を見てみよう！&nbsp;これも1つのやりかただよ。どうなっているのか分かる？"
    },
    code: "var size = 50;\n\nfor (var i = 0; i < 3; i = i + 1) {\n  for (var j = 0; j < 2; j = j + 1) {\n    var x = i * 2 * size;\n    var y = j * 2 * size;\n    fillSquare(x, y, size);\n    x = x + size;\n    y = y + size;\n    fillSquare(x, y, size);\n  }\n}\n\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, size, size);\n}\n"
  },
  {
    message: {
      en: "Every time through the loop, it draws two squares, below and to the right of the other.",
      de: "In jeder Schleife zeichnet es zwei Quadrate: unterhalb und rechts.",
      jp: "ループを1回やるたびに、四角形を1つと、その右下にもう1つの四角形をかいているんだ。"
    }
  },
  {
    message: {
      en: "Then, it does that three times across and twice down, skipping over the white squares.  Cool, huh?",
      de: "Dann wiederholt es das drei mal nach rechts und zweimal runter und es überspringt die weissen Felder. Schlau, gell?",
      jp: "その作業を横に3回くり返し、マス目2つ分下にいったところで、また同じことをくり返すことで、白い四角形をスキップしてるんだ。すごくない？"
    }
  },
  {
    message: {
      en: "Here is yet another way of doing a checkerboard.  Any idea how this works?  What's that<span class=tutor-code>i % 2</span>doing?",
      de: "Hier ist noch eine andere Möglichkeit: Hast du eine Idee wie das funktioniert? Was ist das<span class=tutor-code>i % 2</span>?",
      jp: "これもちがうやり方だ。これがどうやってできたかと分かる？&nbsp;<span class=tutor-code>i % 2</span>は何をしてるのかな？"
    },
    code: "var size = 50;\n\nfor (var i = 0; i < 6; i = i + 1) {\n  for (var j = 0; j < 4; j = j + 1) {\n    if ((i % 2 + j % 2) % 2) {\n      var x = i * size;\n      var y = j * size;\n      fillSquare(x, y, size);\n\n    }\n  }\n}\n\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, size, size);\n}\n",
    lessonSection: {
      en: "Modulo",
      de: "Modulus",
      jp: "モジューロ"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>%</span>mean modulo, it gives the remainder after dividing.",
      de: "<span class=tutor-code>%</span>ist der Modulus. Es gibt den Rest nach einer Division zurück.",
      jp: "<span class=tutor-code>%</span>は、わり算をして、その「あまり」をもとめるものなんだ。"
    }
  },
  {
    message: {
      en: "So,<span class=tutor-code>1 % 2</span>is 1,<span class=tutor-code>2 % 2</span>is 0 (because 2 divides 2 evenly with no remainder),<span class=tutor-code>3 % 2</span>is 1 again,<span class=tutor-code>4 % 2</span>is 0.",
      de: "<span class=tutor-code>1 % 2</span>ist 1,<span class=tutor-code>2 % 2</span>ist 0 (weil 2 dividiert durch 2 keinen Rest hat),<span class=tutor-code>3 % 2</span>ist wieder 1,<span class=tutor-code>4 % 2</span>ist 0.",
      jp: "たとえば、<span class=tutor-code>1 % 2</span>は <i>1</i> (1÷2 のあまりは<i>1</i>だね)、<span class=tutor-code>2 % 2</span>は<i>0</i> (2 ÷ 2のあまりは<i>0</i>)、,<span class=tutor-code>3 % 2</span>は<i>1</i>、<span class=tutor-code>4 % 2</span>は<i>0</i>."
    }
  },
  {
    message: {
      en: "So, how does that complicated expression --<span class=tutor-code>(i % 2 + j % 2) % 2</span>-- work? When<span class=tutor-code>i</span>is even,<span class=tutor-code>i % 2</span>will be 0.  Same for<span class=tutor-code>j</span>.  If both are odd, then you get (1 + 1) % 2, which is 0. So, that expression will be 0 if both<span class=tutor-code>i</span>and<span class=tutor-code>j</span>are even or both<span class=tutor-code>i</span>and<span class=tutor-code>j</span>are odd.",
      de: "Was macht das kompliziert aussehende<span class=tutor-code>(i % 2 + j % 2) % 2</span>? Wenn<span class=tutor-code>i</span>gerade ist, ist<span class=tutor-code>i % 2</span>0. Für<span class=tutor-code>j</span>ist es genauso. Wenn beide ungerade sind, ist (1 + 1) % 2, was 0 ist. Also ist<span class=tutor-code>(i % 2 + j % 2) % 2</span>0 wenn beide Zahlen gerade oder beide ungerade sind.",
		jp: "ふくざつだね。<span class=tutor-code>(i%2 + j%2)%2</span>はどうなっているのかな？&nbsp;<span class=tutor-code>i</span>が2でわれる数(<ruby>偶数<rp>(</rp><rt>ぐうすう</rt><rp>)</rp></ruby>というよ)だと<span class=tutor-code>i%2</span>が0になる。<span class=tutor-code>j</span>も同じだ。また、<span class=tutor-code>i</span>も<span class=tutor-code>j</span>も2でわって、あまりが1になる数(<ruby>奇数<rp>(</rp><rt>きすう</rt><rp>)</rp></ruby>というよ)だと、<span class=tutor-code>(1+1)%2</span>になるから答えは0だ。だから、この表し方だと<span class=tutor-code>i</span>と<span class=tutor-code>j</span>が<ruby>偶数<rp>(</rp><rt>ぐうすう</rt><rp>)</rp></ruby>であれ<ruby>奇数<rp>(</rp><rt>きすう</rt><rp>)</rp></ruby>であれ、両方とも0になるね。"
    }
  },
  {
    message: {
      en: "For<span class=tutor-code>if</span>statements, 0 means false and anything else is true.  So, we'll do what's inside the<span class=tutor-code>if</span>statement only when only one of<span class=tutor-code>i</span>or<span class=tutor-code>j</span>is odd.",
      de: "Für die<span class=tutor-code>if</span>Befehl, 0 bedeuted falsch und alles andere ist richtig. Also machen wir das in der<span class=tutor-code>if</span>Befehlen nur wenn entweder<span class=tutor-code>i</span>oder<span class=tutor-code>j</span>unregade sind.",
      jp: "<span class=tutor-code>if</span>文では、0が<ruby>偽<rp>(</rp><rt>ぎ</rt><rp>)</rp></ruby>(合っていない)、それ以外は真(正しい)という意味合いをもつんだ。だから、<span class=tutor-code>i</span>か<span class=tutor-code>j</span>が奇数のときだけ、<span class=tutor-code>if</span>文の中に書かれていることを実行すればいいということなんだ。"
    }
  },
  {
    message: {
      en: "So, what this does is visit all the squares in the 6 x 4 grid, but only draw a black square in the ones where either the column number or row number is odd but not both.  Make sense now?",
      de: "Deshalb ist in dem 6x4 Schachbrettmuster nur dort schwarze Quadrate wenn entweder die Spalte oder die Reihe ungerade ist.",
      jp: "だから、これが何をやっているかというと、たて4こ×横6この全てのマスへ行く。だけど、列と行の数字のどちらかが奇数のところだけ、黒くしているんだ。どちらかだけで、両方ではないんだよ。わかるかな？"
    }
  },
  {
    message: {
      en: "See how many ways there are to solve a problem like this?  There is usually not just one solution to something you want to do, lots of strategies might work.  Isn't that neat?",
      de: "Hast du gesehen wie viele verschiedene Möglichkeiten es gibt dieses kleine Problem zu lösen? Es gibt oft nicht nur eine einzige Möglichkeit. Praktisch, gell?",
      jp: "ほら、こんなふうに、この問題のとき方はたくさんあるだろ？&nbsp;ほとんどの場合は、たったの1つのとき方ではなく、いろんな方法でとけるんだ。すっきりした？"
    }
  },
  {
    message: {
      en: "Okay, time for some fun! Let's do animation!",
      de: "Okay, Zeit für Spass! Lass uns Animationen machen!",
      jp: "では、次は楽しいことをやろう！&nbsp;アニメーションを作ろう！"
    },
    code: "",
    lessonSection: {
      en: "Animation",
      de: "Animationen",
      jp: "アニメーション!"
    }
  },
  {
    message: {
      en: "Moving stuff is fun but a little weird.  You need to make something happen every 1/20th of a second or so. What is this doing?",
      de: "Sachen zu bewegen ist interessant, aber etwas seltsam. Du musst etwas ungefähr jede 20-tel Sekunde zeichnen. Was macht der Code?",
      jp: "ものを動かすのは楽しいけど、少しかわってるよ。20分の1秒ごとに、ものを動かしていくんだ。どうやってやるかな？"
    },
    code: "var vx = 4;\nvar vy = 1;\nvar step = 50;  // In milliseconds\n\nvar x = 0;\nvar y = 0;\nvar size = 50;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\ndrawStep();\nfunction drawStep() {\n  // Clear the screen\n  c.clearRect(0, 0, w, h);\n  // Draw the box\n  c.strokeRect(x, y, size, size);\n  // Move the box unless at edge\n  if (x + vx + size < w &&\n      y + vy + size < h) {\n    x += vx;\n    y += vy;\n    clearTimeout(cmTID);\n    // Do it again in a little bit\n    cmTID = setTimeout(drawStep, step);\n  }\n}\n",
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n"
  },
  {
    message: {
      en: "The way this works is that, every time we are told to do<span class=tutor-code>drawStep()</span>, we erase the screen, move the box, draw the box, and, unless we hit the edge, we say to do<span class=tutor-code>drawStep()</span>again a little while later.",
      de: "Was passiert ist folgendes: jedesmal wenn wir etwas zeichnen sollen mit<span class=tutor-code>drawStep()</span>, löschen wir den Bildschirm, bewegen das Quadrat, zeichnen das Quadrat und wir sagen dass wir, ausser wir haben den Rand erreicht,<span class=tutor-code>drawStep()</span>nochmal bald aufrufen wollen.",
      jp: "これはどうやっているかというと、<span class=tutor-code>drawStep()</span>を実行するように命れいされるたびに、スクリーンを一度消して、四角形を動かして、かくんだ。そしてほんの少しだけ時間をおいてから、画面のふちに当たらないかぎり、また<span class=tutor-code>drawStep()</span>を実行するように命れいしているんだよ。"
    }
  },
  {
    message: {
      en: "Try changing<span class=tutor-code>vx</span>,<span class=tutor-code>vy</span>, and<span class=tutor-code>step</span>. You can change the speed of the box and make it move different directions!",
      de: "Versuche<span class=tutor-code>vx</span>,<span class=tutor-code>vy</span>, und<span class=tutor-code>step</span>zu ändern. Du kannst die Geschwindigkeit und die Richtung verändern!",
      jp: "<span class=tutor-code>vx</span>,<span class=tutor-code>vy</span>それから<span class=tutor-code>step</span>をかえてみて！&nbsp;そうすると、四角形のスピードと進む方向をかえることができるよ！"
    }
  },
  {
    message: {
      en: "Try commenting out the<span class=tutor-code>clearRect()</span>.  That's kind of cool, isn't it?",
      de: "Kommentier auch mal das<span class=tutor-code>clearRect()</span>aus (mit //). Cool, oder?",
      jp: "<span class=tutor-code>clearRect()</span>をコメントアウトしてみて。すごくない？"
    }
  },
  {
    message: {
      en: "Spinning a box is fun.  Can you make it go faster?",
      de: "Drehende Quadrate sind spassig. Kannst du es sich schneller drehen lassen?",
      jp: "四角形を回転させるのが面白いね。もっと早くできる？"
    },
    code: "var step = 100;\nvar angle = 0.01;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nc.translate(w / 2, h / 2);\ndrawStep();\nfunction drawStep() {\n  c.clearRect(-w / 2, -h / 2, w, h);\n  c.strokeRect(-50, -50, 100, 100);\n  c.rotate(angle);\n  clearTimeout(cmTID);\n  cmTID = setTimeout(drawStep, step);\n}\n",
    lessonSection: {
      en: "Rotating Movement",
      de: "Rotationen",
      jp: "回転して動かすこと."
    }
  },
  {
    message: {
      en: "This works the same way as the moving box.  Every time it is told to do<span class=tutor-code>drawStep()</span>, it clears the screen, rotates, draws the box, and then says to do<span class=tutor-code>drawStep()</span>again in a little while later.",
      de: "Das funktioniert genauso wie das sich bewegende Quadrat. Jedesmal wenn<span class=tutor-code>drawStep()</span>aufgerufen wird, löscht es den Bildschirm, rotiert, zeichnet und sagt nochmal<span class=tutor-code>drawStep()</span>etwas später aufzurufen.",
      jp: "これは四角形を動かすことと同じことをやっているよ。<span class=tutor-code>drawStep()</span>を実行するように命れいされるたびに、スクリーンを一度消して、四角形を回転させて、かくんだ。そして、ほんの少しだけ時間をおいてから、<span class=tutor-code>drawStep()</span>をまた実行させている。"
    }
  },
  {
    message: {
      en: "What happens if you comment out the<span class=tutor-code>clearRect()</span>?",
      de: "Was passiert wenn du<span class=tutor-code>clearRect()</span>auskommentierst?",
      jp: "<span class=tutor-code>clearRect()</span>をコメントアウトしたら、何が起こるかな？"
    }
  },
  {
    message: {
      en: "Try adding more boxes. Did it do what you expected?",
      de: "Versuche mehr Quadrate hinzuzufügen. Funktioniert es?",
      jp: "もっとたくさんの四角形を作ってみよう。期待どおりにできたかな？"
    },
    code: "var step = 100;\nvar angle = 0.01;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nc.translate(w / 2, h / 2);\ndrawStep();\nfunction drawStep() {\n  c.clearRect(-w / 2, -h / 2, w, h);\n  c.strokeRect(-50, -50, 100, 100);\n  c.rotate(angle);\n  clearTimeout(cmTID);\n  cmTID = setTimeout(drawStep, step);\n}\n"
  },
  {
    message: {
      en: "I like this version.  It's like a solar system!  Try changing the speed now!",
      de: "Ich mag diese Version! Es ist wie ein kleiner Sonnensystem! Versuche jetzt die Geschwindigkeiten zu ändern!",
      jp: "このバーションが大すきだ。太陽<ruby>系<rp>(</rp><rt>けい</rt><rp>)</rp></ruby>みたいだね！&nbsp;じゃあ、スピードをかえてみよう！"
    },
    code: "var step = 100;\nvar angle = 0.01;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nc.translate(w / 2, h / 2);\ndrawStep();\nfunction drawStep() {\n  c.clearRect(-w / 2, -h / 2, w, h);\n  c.strokeRect(-20, -20, 40, 40);\n  c.fillRect(10, 100, 5, 5);\n  c.fillRect(-50, -70, 5, 5);\n  c.fillRect(50, 30, 5, 5);\n  c.rotate(angle);\n  clearTimeout(cmTID);\n  cmTID = setTimeout(drawStep, step);\n}\n"
  },
  {
    message: {
      en: "Stop for a sec.  Sit back and think about how you might create three moving boxes.",
      de: "Lass und mal überlegen und nachdenken wie wir 3 bewegende Quadrate machen können.",
      jp: "ちょっと待って。どのように3つの動く四角形を作るのか、じっくり考えてみよう。"
    },
    code: "",
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    lessonSection: {
      en: "Objects",
      de: "Objekte",
      jp: "オブジェクト! (物体を作ろう! )"
    }
  },
  {
    message: {
      en: "Well, you'd need the<span class=tutor-code>x</span>and<span class=tutor-code>y</span>position of each, right?  And the size of each.  And maybe the dx and dy velocity of each?  And the<span class=tutor-code>angle</span>?",
      de: "Zuerst brauchen die die<span class=tutor-code>x</span>und<span class=tutor-code>y</span>Koordinaten von jedem, richtig? Und die Grösse. Und die Geschwindigkeit (<span class=tutor-code>dx, dy</span>). Und der Winkel<span class=tutor-code>angle</span>.",
      jp: "まず、それぞれの<span class=tutor-code>x</span>と<span class=tutor-code>y</span>を決めないといけないよね。サイズも。それにたぶん、それぞれの<span class=tutor-code>dx, dy</span>の速さもいるんじゃない？&nbsp;<span class=tutor-code>angle</span>も？"
    }
  },
  {
    message: {
      en: "You could create variables<span class=tutor-code>x1, x2, x3, y1, y2, y3, dx1</span>... ugh.  That's getting painful, isn't it?",
      de: "Man kann jetzt Variablen<span class=tutor-code>x1, x2, x3, y1, y2, y3, dx1</span>... hmm ... das wird schnell unpraktisch.",
      jp: "<ruby>変数<rp>（</rp><rt>へんすう</rt><rp>）</rp></ruby>を作ってもいいよ。x1, x2, x3, y1, y2, y3, dx1 …うへーっ！&nbsp;ちょっと大へんになってきたよね？"
    }
  },
  {
    message: {
      en: "There's another way to do this, we can make objects!  Objects are little bundles of variables and code. Here's a box object.  Take a look at it.  See how it works?",
      de: "Hier ist eine andere Möglichkeit: wir machen Objekte! Objekte sind kleine Pakete mit Variablen und Code. Hier ist ein Quadrat Objekt. Schau es dir an. Siehst du wie's funtioniert?",
      jp: "べつのやり方があるんだよ。オブジェクトだ！&nbsp;オブジェクトとは<ruby>変数<rp>（</rp><rt>へんすう</rt><rp>）</rp></ruby>とコードの小さなまとまりなんだよ。これが四角形のオブジェクト。ちょっと見てみて！"
    },
    code: "// Box object\nfunction Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n}\n// Create a new box\nvar b = new Box(10, 10, 100);\nc.strokeRect(b.x, b.y, b.size, b.size);\n"
  },
  {
    message: {
      en: "What is going on is<span class=tutor-code>new Box(10, 10, 100)</span>creates an object, then immediately calls the<span class=tutor-code>Box()</span>function to set it up. <span class=tutor-code>Box()</span>then uses<span class=tutor-code>this.x</span>to set a variable named<span class=tutor-code>x</span>in the object to the<span class=tutor-code>x</span>that was passed into the function.",
      de: "<span class=tutor-code>new Box(10, 10, 100)</span>macht ein neues Objekt und ruft<span class=tutor-code>Box()</span>auf.<span class=tutor-code>Box()</span>benutzt dann<span class=tutor-code>this.x</span>für das<span class=tutor-code>x</span>vom Objekt.",
		jp:"どんなことをしているかというと、<span class=tutor-code>new Box(10, 10, 100)</span>で1つのオブジェクトを作って、さっそく<span class=tutor-code>function Box()</span>をよびだしている。さらに、<span class=tutor-code>Box()</span>では<span class=tutor-code>this.x</span>が使われているね。これはオブジェクトで<span class=tutor-code>x</span>として指定されたものを<ruby>変数<rp>(</rp><rt>へんすう</rt><rp>)</rp></ruby><span class=tutor-code>x</span>に渡しているんだ。"
    }
  },
  {
    message: {
      en: "It does the same thing to set up all the other variables in our new Box object.  Once the object is created and set up, we set our variable<span class=tutor-code>b</span>to that.  Later, we can get at the<span class=tutor-code>x</span>and<span class=tutor-code>y</span>and other variables of our box using<span class=tutor-code>b.x</span>,<span class=tutor-code>b.y</span>, and so forth.",
      de: "Es macht das gleiche mit den anderen Variablen unseres Box Objekts. Wenn es erstmal erzeugt und initialisiert ist, weisen wir diesem Objekt unserer Variablen<span class=tutor-code>b</span>zu. Jetzt können wir<span class=tutor-code>x</span>und<span class=tutor-code>y</span>von unserem Box Objekt<span class=tutor-code>b</span>mit<span class=tutor-code>b.x</span>,<span class=tutor-code>b.y</span>usw. benutzen.",
		jp: "この新しい「Box」というオブジェクトの他の<ruby>変数<rp>（</rp><rt>へんすう</rt><rp>）</rp></ruby>も同じようにせっていされているんだよ。オブジェクトを作ってせっていしたら、<ruby>変数<rp>（</rp><rt>へんすう</rt><rp>）</rp></ruby><span class=tutor-code>b</span>に<ruby>格納<rp>(</rp><rt>かくのう</rt><rp>)</rp></ruby>する（格納とは入れるという意味だ）。そのあとで、<span class=tutor-code>x</span>と<span class=tutor-code>y</span>や、他の<ruby>変数<rp>（</rp><rt>へんすう</rt><rp>）</rp></ruby>から<span class=tutor-code>b.x</span>、<span class=tutor-code>b.y</span>を使って、データを取り出すんだ。"
    }
  },
  {
    message: {
      en: "Our box object is just a little bundle of variables that describe our box.  It says where the box is, its velocity (dx and dy), how big it is, everything that it means to be a box.",
      de: "Unser Box Objekt ist einfach ein kleines Paket mit Variablen die unser Quadrat beschreiben. Es sagt wo das Quadrat ist (x, y), wie schnell es ist (dx, dy), wie gross es ist, und alles andere was ein Quadrat ausmacht.",
      jp: "このBoxオブジェクトは、ただの小さな<ruby>変数<rp>（</rp><rt>へんすう</rt><rp>）</rp></ruby>の集まりで、四角形を表しているんだ。それがその四角形の場所、速さ(dx と dy)、どのぐらい大きいかなど、四角形のすべてのことを表しているんだよ。"
    }
  },
  {
    message: {
      en: "We can even have box objects know how to draw themselves.",
      de: "Wir können sogar Quadrate machen die wissen wie man sich selber zeichnet!",
      jp: "私たちはこのBoxオブジェクトが、どのようにかかれるのかを見ることもできるんだよ"
    },
    code: "function Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\nvar b1 = new Box(30, 30, 120);\nb1.stroke();\n"
  },
  {
    message: {
      en: "See how<span class=tutor-code>this.stroke</span>is set equal to a function?  And that function calls<span class=tutor-code>strokeRect()</span>to draw this box?  Then, later, we create a box called<span class=tutor-code>b1</span>and tell it to draw itself with<span class=tutor-code>b1.stroke()</span>. That's pretty cool, isn't it?",
      de: "Siehst du wie<span class=tutor-code>this.stroke</span>eine Funktion ist? Und diese Funktion ruft<span class=tutor-code>strokeRect()</span>auf um das Quadrat zu zeichnen. Dann, später, machen wir ein neues Quadrat und nennen es b1 und lasses es sich selber zeichnen mittels<span class=tutor-code>b1.stroke()</span>. Schlau, gell?",
      jp: "<span class=tutor-code>this.stroke</span>が function と同じようにせっていされているのが分かる？&nbsp;それに、そのfunctionが四角形をかくために<span class=tutor-code>strokeRect()</span>をよびだしてるのは？&nbsp;そして、そのあとで<span class=tutor-code>b1</span>という名前のBoxオブジェクトを作って、<span class=tutor-code>b1.stroke()</span>を使って四角形をかくように命令しているんだ。これ、すごくない？"
    }
  },
  {
    message: {
      en: "You know, monster has a secret.  Monster been hiding something from you.",
      de: "Weisst du das das Monster ein Geheimnis hat? Monster hat etwas vor dir versteckt.",
      jp: "知ってる？&nbsp;モンスターはひみつを持ってるんだ。モンスターは何かをかくしているよ。"
    },
    lessonSection: {
      en: "Canvas Object",
      de: "Leinwand Objekt",
      jp: "カンバスオブジェクト!"
    }
  },
  {
    message: {
      en: "Have you been wondering why we use<span class=tutor-code>c.strokeRect()</span>to draw a box?  What's the deal with that<span class=tutor-code>c.</span>?  Why is that there?",
      de: "Hast du dich gewundert warum wir<span class=tutor-code>c.strokeRect()</span>benutzt haben? Was heisst das<span class=tutor-code>c.</span>? Warum ist es hier?",
      jp: "なんでオレたちは<span class=tutor-code>c.strokeRect()</span>を使って四角形をかくのかって考えたことある？&nbsp;<span class=tutor-code>c.</span>って何をするんだ？&nbsp;なんでそこにある？"
    }
  },
  {
    message: {
      en: "Turns out all this time you have been using an object to draw, an object called the canvas object.",
      de: "Wir haben die ganze Zeit schon ein Objekt benutzt: Das Leinwand (canvas) Objekt.",
      jp: "実をいうと、今までCanvas（キャンバス）とよばれるものを使ってきたんだ。"
    }
  },
  {
    message: {
      en: "Monster added some code for you to get that object from the web page and put it in a variable named<span class=tutor-code>c</span>, so you could use it.  Let me show you what that hidden code looks like.",
      de: "Monster hat etwas Code für dich gemacht für die Webseite und es einer Variablen<span class=tutor-code>c</span>zugewiesen damit du es benutzen kannst. Lass mich zeigen wie der Code aussieht.",
      jp: "モンスターはキミがCanvasを使えるように、いくつかのコードを付け加えたんだ。そして、そのコードを<span class=tutor-code>c</span>という名前の<ruby>変数<rp>（</rp><rt>へんすう</rt><rp>）</rp></ruby>に<ruby>格納<rp>(</rp><rt>かくのう</rt><rp>)</rp></ruby>したんだ。だから、キミは<span class=tutor-code>c</span>を使えるんだよ。じゃあ、どんなコードがかくれているかを見せよう。"
    },
    code: "// This code was hidden before\nvar pane = document.getElementById('pane');\nvar c = pane.getContext('2d');\n\nfunction Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\nvar b1 = new Box(30, 30, 120);\nb1.stroke();\n"
  },
  {
    message: {
      en: "That code asks the document object (which is the web page) to give us the element in the web page called 'pane' (which is the id in the web page of the canvas where we draw), and then gets the 2d drawing canvas from that element.  We name that canvas object<span class=tutor-code>c</span>and use all its drawing functions, which is why we use<span class=tutor-code>c.</span>in front of every use of strokeRect().",
      de: "Dieser Code fragt das Dokument Objekt (das ist die Webseite) für das 'pane' Element (das ist der Teil der Webseite wo wir hinzeichnen wollen), und holt dann die 2D Leinwand (canvas) von diesem Element. Das Objekt nennen wir<span class=tutor-code>c</span>und von dem benutzen wir die Zeichenfunktionen wie<span class=tutor-code>strokeRect()</span>mittels<span class=tutor-code>c.strokeRect()</span>.",
		jp: "そのコードには「<i class=jp>Webページを表示させる命れい文の『pane』というIDがついている部分</i><small>（オレたちが図形をかいてきたところだな）</small><i class=jp>に、いろんなことをするよ</i>」という命れいが書かれている。そして、そのコードと、その場所に図形をかけるようする命れいをいっしょに<span class=tutor-code>変数c</span>に格納したというわけだ。だからstrokeRect()の前に毎回かならず<span class=tutor-code>c.</span>を使ったんだよ。"
    }
  },
  {
    message: {
      en: "That's useful to know if you write your own Javascript for your own drawing in web pages later!  But, for now, let me hide it again, so we can focus on Box objects.",
      de: "Das ist gut zu wissen wenn du dein eigenes Javascript für eigene Zeichenfunktionen auf deinen eigenen Webseiten machst. Aber für heute lass es mich wieder verstecken damit wir uns auf die Quadrate konzentrieren können.",
      jp: "こういうことを知っておくと、あとで自分でJavascriptを書いて、Webページに図形をかくときに、きっと役に立つよ！&nbsp;でも、今はこのコードをかくしておこうな。まずBoxオブジェクトにもどろう。"
    },
    code: "function Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\nvar b1 = new Box(30, 30, 120);\nb1.stroke();\n",
    lessonSection: {
      en: "Using Objects",
      de: "Objekte benutzen",
      jp: "オブジェクトを使おう."
    }
  },
  {
    message: {
      en: "Can you create a couple more boxes and have them draw themselves? For each one, you'll have to use new and<span class=tutor-code>stroke()</span>, like we did for the box we called<span class=tutor-code>b1</span>.",
      de: "Kannst du ein paar mehr Quadrate machen die sich selber zeichnen? Für jedes brauchst du ein new und<span class=tutor-code>stroke()</span>wie wir es mit<span class=tutor-code>b1</span>gemacht haben.",
      jp: "四角形をあと2つ追加できる？&nbsp;自動てきにかくようにしたいんだ。それぞれ、<span class=tutor-code>b1</span>というなのBoxみたいに、newと<span class=tutor-code>stroke()</span>を使うよ。"
    }
  },
  {
    message: {
      en: "That's pretty nice, but calling each box<span class=tutor-code>b1, b2, b3</span>, or whatever is painful. What if I want ten boxes?  Or a hundred?",
      de: "Das ist schon ganz gut, aber jedes Quadrat<span class=tutor-code>b1, b2, b3</span>usw. zu nennen ist unpraktisch wenn ich 10 oder 100 Quadrate mag.",
      jp: "いいね〜！&nbsp;でも、いちいち<span class=tutor-code>b1, b2, b3</span>といったBoxをよぶのは、めんどくさいくない？&nbsp;だって、オレがもし「10この四角形がほしい！&nbsp;」とか「100こ作って！&nbsp;」とか言ったら、どうする？"
    }
  },
  {
    message: {
      en: "What I need is a list of boxes, like this!",
      de: "Wir brauchen ein Feld von Quadraten, so wie hier!",
      jp: "オレがほしいのは、こういう四角形のリストだ！"
    },
    code: "function Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\n// Create an empty list of boxes\nvar boxes = [];\n// Create new boxes and add them to our list\nfor (var i = 0; i < 3; i = i + 1) {\n  boxes.push(new Box(i * 30, i * 20, 100));\n}\n// Tell all the boxes to draw themselves\nfor (var i = 0; i < boxes.length; i = i + 1) {\n  boxes[i].stroke();\n}\n",
    lessonSection: {
      en: "Lists (Arrays)",
      de: "Felder (Arrays)",
      jp: "一覧(整列)"
    }
  },
  {
    message: {
      en: "A big new thing here.  Monster explain.",
      de: "Das ist ganz wichtig. Monster erklärt.",
      jp: "ここに大事なことがある。モンスターがせつめいする。"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>[]</span>creates what is called an <i>array</i>, which basically is a list that holds stuff.  These lists can hold objects, numbers, whatever we want.",
      de: "<span class=tutor-code>[]</span>erzeugt ein <i>Feld</i> oder <i>Array</i> in Englisch. Dieses Feld kann viele Sachen enthalten: Zahlen, Objekte oder alles andere was Variablen haben können.",
		jp: "<span class=tutor-code>[]</span>は、<ruby><i>array</i><rp>(</rp><rt>アレイ</rt><rp>)</rp></ruby>（配列）というものを作る。array（配列）とは、きほんてきに、いろんなものを集めたリストのことだ。そのリストにはオブジェクト、数字など、なんでも入れることができる。"
    }
  },
  {
    message: {
      en: "So,<span class=tutor-code>var boxes = []</span>means create an empty list and call it<span class=tutor-code>boxes</span>.",
      de: "Deshalb bedeutet<span class=tutor-code>var boxes = []</span>dass<span class=tutor-code>boxes</span>ein neues leered Feld sein soll.",
      jp: "だから、<span class=tutor-code>var boxes = []</span>は、<span class=tutor-code>boxes</span>という名前の空っぽのリストを作ってるんだ。"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>boxes.push()</span>adds something to the end of the list.  Here, we use it to add a new box.  Because it is in a<span class=tutor-code>for</span>loop that counts 0, 1, 2 and then stops, we will add three boxes to the end of the list.",
      de: "<span class=tutor-code>boxes.push()</span>hängt etwas neues an das Ende vom Feld<span class=tutor-code>boxes</span>. Das benutzen wir für neue Quadrate. Weil es in einer<span class=tutor-code>for</span>Schleife ist die nur 0, 1 und 2 zählt, machen wir 3 neue Quadratobjekte und tun die in das<span class=tutor-code>boxes</span>Feld.",
      jp: "<span class=tutor-code>boxes.push()</span>とは、リストのさいごに何か付け足すってこと。ここでは、新しい四角形を付け足すのに使っているよ。なぜなら、これは1,2,3と数える<span class=tutor-code>for</span>ループの中にあって、ループが終わるとリストのさいごに3つ四角形を加えるようになっているからだ。"
    }
  },
  {
    message: {
      en: "Take a look at the second for loop. <span class=tutor-code>boxes.length</span>is the length of the list. <span class=tutor-code>boxes[0]</span>is the first box in the list,<span class=tutor-code>boxes[1]</span>the second, and so forth.  So, that second<span class=tutor-code>for</span>loop goes through every box in the list and tells it to draw itself by calling<span class=tutor-code>boxes[i].stroke();</span>",
      de: "Schau dir die zweite For Schleife an.<span class=tutor-code>boxes.length</span>ist die Grösse des Feldes.<span class=tutor-code>boxes[0]</span>ist das erste Element in dem Feld, also das erste Quadratobjekt.<span class=tutor-code>boxes[1]</span>ist das zweite usw. Die zweite<span class=tutor-code>for</span>Schleife ruft also jedes Quadratobjekt im Feld auf und lässt es sich mittels<span class=tutor-code>boxes[i].stroke();</span>zeichnen.",
      jp: "2つ目のforループを見て。<span class=tutor-code>boxes.length</span>はリストの長さを表している。<span class=tutor-code>boxes[0]</span>はリストにある1番目の四角形で、<span class=tutor-code>boxes[1]</span>は2つ目の四角形、というように後に続くよ。つまり、2つ目の<span class=tutor-code>for</span>ループはリストのすべての四角形を回りながら、そのたびに<span class=tutor-code>boxes[i].stroke();</span>をよび、四角形をかかせているんだ。"
    }
  },
  {
    message: {
      en: "Can you add some more boxes?",
      de: "Kannst du mehr Quadrate machen?",
      jp: "もっと四角形を足せるかな？"
    }
  },
  {
    message: {
      en: "So far, we haven't really done that much that requires Box objects.  But let's go a step further.  Let's make boxes that are animated and move!",
      de: "Bisher haben wir nichts gemacht was wirklich Objekte braucht. Aber jetzt geht's weiter mit Animationen!",
      jp: "オレたち、Boxオブジェクトをよびだすのは今のところまだやってないね。でも、先に進めよう。動く四角形を作ろう！"
    },
    lessonSection: {
      en: "Methods on Objects",
      de: "Methoden von Objekten",
      jp: "メソッドオンオブジェクト"
    }
  },
  {
    message: {
      en: "Let's start by making all our boxes draw to whatever angle they are supposed to be at.  See how this new version of<span class=tutor-code>stroke()</span>works?",
      de: "Zuerst wollen wir alle Quadrate mit ihrem Winkel zeichnen. Siehst du wie<span class=tutor-code>stroke()</span>funktioniert?",
      jp: "オレたちの四角形を全部、あるべき角度にかこう。ほーら、この新しい<span class=tutor-code>stroke()</span>はちゃんと動くだろ？"
    },
    code: "function Box(x, y, size, a) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.save();\n    // Find the center of the box\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    // Move to the center of the box\n    c.translate(x, y);\n    // Rotate the box around the center\n    c.rotate(this.angle);\n    // Draw the box around its center\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n\nvar boxes = [];\nfor (var i = 1; i < 6; i = i + 1) {\n  var a = Math.random() * 2 - 1;\n  boxes.push(new Box(i * 50, i * 30, 100, a));\n}\nfor (var i = 0; i < boxes.length; i = i + 1) {\n  boxes[i].stroke();\n}\n"
  },
  {
    message: {
      en: "Whenever a box is told to draw itself, we do that by moving to the center of the box, rotating around that center to match the angle of the box, and then draw the box around its center.  Kind of like what we did before for rotated boxes, right?",
      de: "Wenn das Quadratobjekt sich zeichnen soll, drehen wir es um seine Mitte um den richtigen Winkel<span class=tutor-code>angle</span>und zeichnen es dann. Genauso wie vorher mit den sich drehenden Quadraten, gell?",
      jp: "四角形が自分でかくように命れいされるときはいつも、四角形の真ん中に動かして、四角形の角度に合わせるようにする。 ちょっと前にやった、四角形を回転させたときみたいだよね？"
    }
  },
  {
    message: {
      en: "Now let's make the boxes spin!  Look at the new function<span class=tutor-code>updateAll()</span>.  See what it is doing?",
      de: "So, lassen wir jetzt die Quadrate sich drehen! Schau dir die Funktion<span class=tutor-code>updateAll()</span>an. Siehst du was sie macht?",
      jp: "じゃあ、四角形をくるくる回そう！&nbsp;新しい function <span class=tutor-code>updateAll()</span>を見てね。うまくできてるでしょ？"
    },
    code: "var rotateSpeed = 0.02;\nvar timeStep = 50; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < boxes.length; i = i + 1) {\n    boxes[i].angle += rotateSpeed;\n    boxes[i].stroke();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the boxes\nvar boxes = [];\nfor (var i = 1; i < 6; i = i + 1) {\n  var a = Math.random() * 2 - 1;\n  boxes.push(new Box(i * 50, i * 30, 100, a));\n}\n// Do the first update\nupdateAll();\n\nfunction Box(x, y, size, a) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.save();\n    // Find the center of the box\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    // Move to the center of the box\n    c.translate(x, y);\n    // Rotate the box around the center\n    c.rotate(this.angle);\n    // Draw the box around its center\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n",
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n"
  },
  {
    message: {
      en: "<span class=tutor-code>updateAll()</span>starts by clearing the screen, then rotates each box a little more before drawing it.  Finally, it says, call me again in 1/20th of a second.  So, 20 times a second, we rotate each box a little and redraw it.  Cool, huh?",
      de: "<span class=tutor-code>updateAll()</span>löscht zuerst den Bildschirm, dann dreht es jedes Quadrat etwas bevor es gezeichnet wird. Und am Ende sagt es sich nochmal aufzurufen in einer 20-tel Sekunde. Damit wiederholen wir das 20 mal pro Sekunde: Bildschirm löschen, drehen, zeichnen. Einfach, oder?",
      jp: "<span class=tutor-code>updateAll()</span>はスクリーンを消すことから始めてる。そして、それぞれの四角形を少し回転させてから、かいているんだ。さいごに、1/20秒たったら自分自身をまたよびだしているんだ。だから1秒に20回、四角形をすこしずつ回転させて、かき直してるよ。すごいでしょ？"
    }
  },
  {
    message: {
      en: "Can you make the boxes spin faster?",
      de: "Kannst du die Quadrater schneller drehen?",
      jp: "四角形をもっと早く回せるかな？"
    }
  },
  {
    message: {
      en: "Can you make them spin the other direction (counter-clockwise instead of clockwise)?",
      de: "Kannst du sie in die andere Richtung drehen lassen (gegen den Uhrzeigersinn anstelle mit dem Uhrzeigersinn)?",
      jp: "今度は四角形を反対に回せるかな？&nbsp;(反時計回りにね！&nbsp;)"
    }
  },
  {
    message: {
      en: "Can you add more boxes?  You'll have to change three things to fit them all on the canvas, but I bet you can figure it out.  I liked it with 60 of them, looks really weird!",
      de: "Kannst du mehr Quadrate machen? Du musst drei Sachen ändern damit die alle in die Leinwand (canvas) passen, aber ich bin mir sicher dass du sie herausfindest. 60 Stück hätte ich gerne!",
      jp: "もっともっと四角形を足せるかな？&nbsp;1つのキャンバスにおさめるためには、3つ、かえるところがあるよ。キミならわかるはず。60こも四角形があると、とっても面白いね！"
    }
  },
  {
    message: {
      en: "All those fast spinning boxes make Monster dizzy.  Let's slow it down again and let me show you something else.  We can move the update into each Box object.  That will be handy when we make the update do more.  See what this does now?",
      de: "Monster wird schwindelig! Lass uns was neues machen! Die Änderung von jedem Quadratobjekt können wir im Objekt selber machen. Das ist praktisch wenn wir mehr Änderungen machen wollen. Verstehst du wie es funktioniert?",
      jp: "たくさん四角形を回せば、その分モンスターも目が回るよ。今度はまたゆっくりにしてみて、ちがうものを見せよう。オレたちは update を Boxオブジェクトの中に動かすことができるんだ。そうすると、update にもっといろんなことをさせるときに便利なんだ。どうなってるか見てみる？"
    },
    code: "var rotateSpeed = 0.01;\nvar timeStep = 50; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < boxes.length; i = i + 1) {\n    boxes[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the boxes\nvar boxes = [];\nfor (var i = 1; i < 6; i = i + 1) {\n  var a = Math.random() * 2 - 1;\n  boxes.push(new Box(i * 50, i * 30, 100, a));\n}\n// Do the first update\nupdateAll();\n\nfunction Box(x, y, size, a) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.update = function() {\n    this.angle += rotateSpeed;\n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.save();\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    c.translate(x, y);\n    c.rotate(this.angle);\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n"
  },
  {
    message: {
      en: "<span class=tutor-code>updateAll()</span>just calls the<span class=tutor-code>update()</span>of the box. <span class=tutor-code>update()</span>on the box changes the angle and then draws the box.  Each box knows how to update and draw itself now.",
      de: "<span class=tutor-code>updateAll()</span>ruft jetzt nur<span class=tutor-code>update()</span>von jedem Quadratobjekt auf.<span class=tutor-code>update()</span>verändert den Winkel und zeichnet dann sich selber. Jedes Quadratobjekt weiss wie es sich selber ändern muss und wie es sich selber zeichnet.",
      jp: "<span class=tutor-code>updateAll()</span>は、function Box の<span class=tutor-code>update()</span>をよびだしているだけなんだ。<span class=tutor-code>update()</span>は四角形の角度をかえてから、四角形をかかせている。つまり、それぞれの四角形は自分で自分を新しくかけるようになったわけだ。"
    }
  },
  {
    message: {
      en: "Let's make the boxes move too!  All we have to do is have update use<span class=tutor-code>dx</span>and<span class=tutor-code>dy</span>.  Take a look at<span class=tutor-code>Box</span>and how it is updated now!",
      de: "Lass uns jetzt die Quadrate bewegen! Wir brauchen nur<span class=tutor-code>dx</span>und<span class=tutor-code>dy</span>zu ändern. Schau dir an wie ich das gemacht habe.",
      jp: "四角形を動かしてみよう！&nbsp;updateで<span class=tutor-code>dx</span>と<span class=tutor-code>dy</span>を使うだけ。<span class=tutor-code>Box</span>を見てみて。どう、新しくなっているかな！"
    },
    code: "function Box(x, y, size, a, dx, dy, da) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = dx;\n  this.dy = dy;\n  this.da = da;\n\n  this.update = function() {\n    this.angle += this.da;\n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    // Bounce off the edges\n    if (this.x < 0 ||\n        this.x + this.size > w) {\n      this.dx = -this.dx;\n      this.da = -this.da;\n    }\n    if (this.y < 0 ||\n        this.y + this.size > h) {\n      this.dy = -this.dy;\n      this.da = -this.da;\n    }\n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.save();\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    c.translate(x, y);\n    c.rotate(this.angle);\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n\nvar timeStep = 50; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < boxes.length; i = i + 1) {\n    boxes[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the boxes\nvar boxes = [];\nvar s = 80;\nfor (var i = 0; i < 3; i = i + 1) {\n  var x = Math.random() * (w - s);\n  var y = Math.random() * (h - s);\n  var a = Math.random() * 2 - 1;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  var da = 0.1 * (Math.random() * 2 - 1);\n  boxes.push(new Box(x, y, s, a, dx, dy, da));\n}\n// Do the first update\nupdateAll();\n\n",
    lessonSection: {
      en: "Velocity and Collisions",
      de: "Beschleunigung und Kollisionen",
      jp: "速さと衝突"
    }
  },
  {
    message: {
      en: "It's a little more complicated, but only a little.  Every time a box is told to<span class=tutor-code>update()</span>, it moves by its velocity (<span class=tutor-code>dx</span>and<span class=tutor-code>dy</span>) and rotates by its angular velocity (<span class=tutor-code>da</span>).",
      de: "Das wird jetzt ein ganz klein wenig komplizierter. Sieht aber wilder aus als es ist. Jedesmal wenn<span class=tutor-code>update()</span>aufgerufen wird, ändert es seine Position mit der Geschwindigkeit<span class=tutor-code>dx</span>und<span class=tutor-code>dy</span>und es dreht sich um den Winkel<span class=tutor-code>da</span>.",
      jp: "ちょっとむずかしいね。でも、ほんのちょっとだけだよ。四角形が毎回<span class=tutor-code>update()</span>をしてと命れいされると、(<span class=tutor-code>dx</span>と<span class=tutor-code>dy</span>) で決められた速さで動き出すし、(<span class=tutor-code>da</span>) の角度で回転するようになっているんだ。"
    }
  },
  {
    message: {
      en: "If a box gets off the edge of the screen, we reverse its velocities, making it appear to bounce!  Cool!",
      de: "Wenn das Quadrat das Ende der Leinwand erreicht, kehren wir die Drehrichtung um. Das sieht aus als ob es abprallt! Cool!",
      jp: "四角形がスクリーンから出そうになると、向きをかえて、はね返るよ。すごいでしょ！"
    }
  },
  {
    message: {
      en: "One thing that is new here.  When the box checks if it is off the screen, there's something you haven't seen before,<span class=tutor-code>||</span>",
      de: "Etwas ist neu hier: Wenn das Quadratobjekt überprüft ob es am Ende der Leinwand ist, wird<span class=tutor-code>||</span>benutzt.",
      jp: "新しいものが出てきたよ。四角形がスクリーンから出るかどうかをたしかめるときに、<span class=tutor-code>||</span>というのが使われているんだ。これは見たことがないんじゃない？"
    },
    lessonSection: {
      en: "Bitwise Operators (And and Or)",
      de: "Bit Operatoren (Und (and) und Oder (or))",
      jp: "ビット演算 (AndとOr)"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>||</span>means <i>or</i>, as in either-or, so the first if statement checks if the box has either gone off the left or right edge, and the second checks if it has gone off the top or bottom.  Make sense?",
      de: "<span class=tutor-code>||</span>bedeutet <i>oder (or)</i> im Sinne von 'entweder, oder'. Die linke Seite überprüft ob der Rand links oder rechts erreicht ist, und die rechte Seite überprüft oben und unten.",
      jp: "<span class=tutor-code>||</span>は <i>or</i>、つまり「または」ということを意味するよ。だから、さいしょの if 文は、四角形がスクリーンの右はしか左はしにあるかを見て、2つ目の if 文は上か下かを見ているんだ。"
    }
  },
  {
    message: {
      en: "There is also a way to say <i>and</i>, as in both have to be true, which is<span class=tutor-code>&&</span>.  So,<span class=tutor-code>||</span>means <i>or</i> and<span class=tutor-code>&&</span>means <i>and</i>.",
      de: "Es gibt auch eine Möglichkeit <i>Und (and)</i> zu haben. Beide Seiten müssen dann wahr sein:<span class=tutor-code>&&</span><br>Also<span class=tutor-code>||</span>heisst 'oder',<span class=tutor-code>&&</span>ist 'und'.",
      jp: "同じような表し方で <i>and (そして)</i> というのがあるよ。これは、どちらも真(正しい)でなければならないということで<span class=tutor-code>&&</span>と表される。<br>まとめると、<span class=tutor-code>||</span>は<i>or (または)</i>を表し、<span class=tutor-code>&&</span>は<i>and (そして)</i>を表しているよ。"
    }
  },
  {
    message: {
      en: "Back to the fun.  Have you tried putting in a lot of boxes yet?  Try it!  Make it so there are 10 boxes!  Or 50!",
      de: "Zurück zum spassigen Teil. Hast du schon versucht viele Quadrate zu machen? Probier mal! Mach 10 Quadrate! Oder 50!",
      jp: "また楽しいことにもどろう。もっとたくさん四角形を作ってみよう！&nbsp;10こ、いや50こ作って！"
    },
    lessonSection: {
      en: "Easy with Objects",
      de: "Objekte machen's einfach",
      jp: "オブジェクトでかんたん"
    }
  },
  {
    message: {
      en: "See how easy it is to keep track of all these boxes, their position, angle, velocity, and everything else, using objects?  Once you say what a Box object is, it's easy to create lots and lots of them!",
      de: "Siehst du wie einfach es ist so viele Quadratobjekt mit ihrer Position, Winkel, Geschwindigkeit, Drehrichtung usw. zu benutzen? Wenn du erstmal erklärst was ein Quadrat ist, ist es einfach ganz viele davon zu benutzen!",
      jp: "オブジェクトを使うと、四角形の場所・角度・スピードと、なんでも記ろくするのが、かんたんになるね！&nbsp;四角形のオブジェクトに指示すれば、四角形をとってもたくさん作れるよ！"
    }
  },
  {
    message: {
      en: "You're nearing the end of the lessons now.  But I still have a couple fun things to show you.",
      de: "Bald sind wir am Ende! Aber ich habe noch ein paar interessante Sachen für dich.",
      jp: "もう少しで終わり。でも、もっと楽しいことが待っているよ！"
    },
    code: "",
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    lessonSection: {
      en: "Circles, Arcs, and Balls",
      de: "Kreise, Bögen und Bälle",
      jp: "円・アーチ・ボール"
    }
  },
  {
    message: {
      en: "Now that you know about objects with velocity, we actually are really close to being able to do cool things like make a ball bounce.  All we need is a little physics, some acceleration to go with our velocities!",
      de: "Da du jetzt weisst wie Objekte funktionieren, sind wir jetzt ganz nah dran um interesante Sachen die springende Bälle zu machen. Etwas Physik und Beschleunigung ist alles was fehlt!",
      jp: "もう、オブジェクトのスピードについては分かってきたね。もう少しでボールをはねさせるような、かっこいいことが、できるようになるよ。ここからひつようになのは、かんたんな物理とスピードを上げることだ！"
    }
  },
  {
    message: {
      en: "Here's a<span class=tutor-code>Ball</span>object.  It's a lot like the Box object you saw before, but has differences.  Take a look at the code.",
      de: "Hier ist ein<span class=tutor-code>Ball</span>Objekt. Es ist fast wie ein Quadrat, aber es gibt einige Unterschiede. Schau es dir an.",
      jp: "ここに<span class=tutor-code>Ball</span>というオブジェクトがあるね。今まで使ってきたBoxオブジェクトとにてるけど、少しちがうのがわかるかな？&nbsp;よく見てみて。"
    },
    code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    // Bounce off the edges\n    if (this.x - this.r < 0 ||\n        this.x + this.r > w) {\n      this.dx = -this.dx;\n    }\n    if (this.y - this.r < 0 ||\n        this.y + this.r > h) {\n      this.dy = -this.dy;\n    }\n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar timeStep = 50; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 1; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n",
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n"
  },
  {
    message: {
      en: "One big difference is that a ball is round, so angle doesn't matter.  Look at the code.  There is no angle any more, right?",
      de: "Ein grosser Unterschied ist dass der Ball rund ist. Deswegen gibt der Drehwinkel keinen Sinn mehr. Schau dir den Code an. Kein Winkel (angle) mehr da, gell?",
      jp: "大きなちがいは、ボールは丸いってことだ。だから角度は気にしなくていいんだ。コードを見てみて。角度のコードがなくなったのがわかるかな?"
    }
  },
  {
    message: {
      en: "Another big difference is that we use<span class=tutor-code>arc()</span>to draw circles.  Arcs are cool, but they're a little complicated for just drawing a circle. Let me explain how they work.",
      de: "Wir benutzen<span class=tutor-code>arc()</span>(Bogen) zum zeichnen. Bögen sind cool, aber etwas komplizierter als einfache Kreise. Lass es mich erklären.",
      jp: "もう1つのちがいは<span class=tutor-code>arc()</span>を使って円をかいているところだ。arcとは<ruby>弧<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>のことで、円の周りの一部分のことだ。<ruby>弧<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>はかっこいいんだけど、円をかくより少しむずしいんだな。これからせつめいするよ。"
    }
  },
  {
    message: {
      en: "To draw a circle in Javascript, you call<span class=tutor-code>c.arc(x, y, r, 0, Math.PI * 2);</span>, where (x, y) is the center of the circle, r is the radius, and then 0 and<span class=tutor-code>Math.PI * 2</span>says to draw an arc from 0 degrees to 360 degrees (since 2 * pi in radians is 360 degrees).",
      de: "Um einen Kreis in Javascript zu zeichnen, rufst du<span class=tutor-code>c.arc(x, y, r, 0, Math.PI * 2);</span>auf. (x, y) ist die Mitte vom Kreis, r ist der Radius, 0 und<span class=tutor-code>Math.PI * 2</span>sagt dass der Bogen von 0 bis 360 Grad gezeichnet werden soll (2 * pi in Radianten ist 360 Grad).",
      jp: "Javascriptで円をかくために、<span class=tutor-code>c.arc(x, y, r, 0, Math.PI * 2);</span>をよびだすよ。(x,y) は円の中心の場所を表していて、r は<ruby>半径<rp>(</rp><rt>はんけい</rt><rp>)</rp></ruby>（円の中心から円までをむすぶ線のこと）、そして0と<span class=tutor-code>Math.PI * 2</span>は、0度から360度分の<ruby>弧<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>をかくという意味だよ。(半径×２×PI<π>は<ruby>円周<rp>(</rp><rt>えんしゅう</rt><rp>)</rp></ruby>になるんだ)。"
    }
  },
  {
    message: {
      en: "Because we draw circles from the center, a bunch of other things change, such as exactly how we check of whether we need to bounce off the sides.",
      de: "Weil wir den Kreis von der Mitte aus zeichnen, ändern sich ein paar andere Sachen auch, z.B. die Erkennung der Ränder der Leinwand.",
      jp: "円を中心からかくから、他のこともみんな、かわってしまうよ。たとえば、はしからどのようにもどってくるか、とかね。"
    }
  },
  {
    message: {
      en: "Take a look at the code again.  Does it make more sense now?",
      de: "Schau dir den Code genau an. Gibt Sinn jetzt?",
		jp: "もう1度コードを見てみて。わかってきたんじゃない？"
    }
  },
  {
    message: {
      en: "Okay, now we want to make a bouncing ball.  To do physics, we need velocity and acceleration.  So far, we have had velocity, but no acceleration.  Let's add acceleration!  Here it is!",
      de: "Okay, wir wollen einen springenden Ball. Physik sagt wir brauchen Geschwindigkeit und Beschleunigung dafür. Bisher hatten wir Geschwindigkeit. Lasst uns Beschleunigung hinzufügen! Hier ist es!",
      jp: "オッケー。これからボールをはねさせたいんだ。物を動かすには、速さとスピードを上げることがひつようなんだよね。今は一定の速さがあるけど、スピードは上がってないでしょ。ここからスピードを上げさせてみよう！"
    },
    code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    // Bounce off the edges\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy;\n    } else {\n      // Our only acceleration is gravity\n      this.dy += gravity;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar gravity = 0.05;\nvar timeStep = 25; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 1; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n",
    lessonSection: {
      en: "Acceleration, Velocity, and Physics",
      de: "Beschleunigung, Geschwindigkeit und Physik",
      jp: "加速・速さ・物理"
    }
  },
  {
    message: {
      en: "Do you see it?  Now, every time we<span class=tutor-code>update()</span>on a Ball (and the ball isn't bouncing, to simplify things), we change the downward velocity (<span class=tutor-code>dy</span>) by whatever<span class=tutor-code>gravity</span>is.",
      de: "Siehst du es? Jedes mal wenn<span class=tutor-code>update()</span>von einem Ball aufgerufen wird (und der Ball springt jetzt noch nicht damit es einfacher bleibt), ändern wir die Geschwindigkeit nach unten (<span class=tutor-code>dy</span>) um was<span class=tutor-code>gravity</span>ist.",
      jp: "わかるかな？&nbsp;今はボールを<span class=tutor-code>update()</span>するたびに、<span class=tutor-code>gravity</span>がどんな数字であれ、ボールがはね返るまでの下向きのスピード(<span class=tutor-code>dy</span>)を変えている。"
    }
  },
  {
    message: {
      en: "Pretty cool!  Try adding 10-15 balls and watch it for a while.  It's a full physics simulation with gravity and bouncing!  Very fun!",
      de: "Cool! Füge 10-15 Bälle dazu und schau es dir an. Es ist jetzt eine kleine Physik-Simulation!",
      jp: "すごいでしょ！&nbsp;10こから15このボールを付け足して、しばらく見てみて。これでボールがはねるシミュレーションができた！&nbsp;やったね！"
    }
  },
  {
    message: {
      en: "Let me show you one more thing before we move on from bouncing balls.  What is called a partially elastic collision.",
      de: "Lass mir noch eine Sache Zeigen bevor wir zur unelastischen Kollision gehen.",
		jp: "次にいくまえに、もう1つやっておこう。ボールがぶつかったらどのようになるかな？"
    },
    code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    // Bounce off the edges\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx * friction;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy * friction;\n    } else {\n      // Our only acceleration is gravity\n      this.dy += gravity;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar gravity = 0.2;\nvar friction = 0.8;\nvar timeStep = 25; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 4; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n",
    lessonSection: {
      en: "Collisions and Physics",
      de: "Kollisionen und Physik",
      jp: "衝突と物理"
    }
  },
  {
    message: {
      en: "In the real world, when things collide, they usually bounce off each other slower than before.  That's why, when you drop a ball, it doesn't keep bouncing forever.",
      de: "In der realen Welt prallen Sachen etwas langsamer voneinander ab verglichen mit ihrer Geschwindigkeit vor dem Zusammenprall. Darum springt ein Ball nicht für immer.",
      jp: "実さいに2つの物がぶつかったら、はなれる時はスピードが少しおそくなる。だからボールを落としたとき、ずっとはね続けたりはしないだろ。"
    }
  },
  {
    message: {
      en: "If you look at the code in update, there is now a friction force applied when the balls bounce off the walls.  It makes them bounce off slower than they came in.  Eventually, the balls all stop bouncing and slowly roll along the bottom.",
      de: "Schau dir den Code an. Es gibt jetzt eine Reibung (friction) ins Spiel wenn der Ball von einer Wand abprallt. Der Ball springt weniger und weniger und rollt am Ende über den Boden.",
      jp: "新しくなったコードを見れば、ボールがかべからはねるときに、まさつする力（friction）が加えられているのに気付くだろう。だから、ぶつかった時のスピードより、はね返った時のスピードの方が、おそくなっているね。さいごにはボールは、はねる力がなくなって、転がるがる。"
    }
  },
  {
    message: {
      en: "Cool simulation, and adds some realism.  Play with it a bit!  Change the<span class=tutor-code>friction</span>, add more balls, increase<span class=tutor-code>gravity</span>, change<span class=tutor-code>timeStep</span>.  Try messing around with it!",
      de: "Tolle Simulation und sieht sehr echt aus. Spiel damit ein bisschen. Ändere die Reibung<span class=tutor-code>friction</span>, mach mehr Bällem, erhöhe die Schwerkraft<span class=tutor-code>gravity</span>, oder ändere die Zeitschritte<span class=tutor-code>timeStep</span>. Spiel mit den Zahlen!",
      jp: "どんどん本物みたいにしていこう！&nbsp;<span class=tutor-code>friction</span>の数字をかえたり、ボールをふやしてみたり、<span class=tutor-code>gravity</span>の数字を大きくしたり、<span class=tutor-code>timeStep</span>もかえてみよう。思いっきりかえて遊んでみて！"
    }
  },
  {
    message: {
      en: "For our last lessons, let's work a bit with tracking the mouse.  This is a lot of fun!",
      de: "Für den letzten Teil, lass uns mit der Computermaus arbeiten. Das macht Spass!",
      jp: "さいごのレッスンだ。マウスを追いかけてみよう。とっても楽しいよ！"
    },
    code: "",
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    lessonSection: {
      en: "Mouse Events",
      de: "Mausereignisse",
      jp: "マウス操作"
    }
  },
  {
    message: {
      en: "Here is a ball that sticks to the mouse.  Every time the mouse moves, the ball redraws on top of the mouse.",
      de: "Hier ist ein Ball der an der Computermaus hängt. Jedesmal wenn sich die Maus bewegt, wird der Ball neu gezeichtet. Und zwar wo die Maus ist.",
      jp: "見て！&nbsp;このボールはマウスについて回る。マウスが動けばボールも動くよ。"
    },
    code: "var pane = document.getElementById('pane');\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\npane.onmousemove = function(evt) {\n  var x = evt.clientX;\n  var y = evt.clientY;\n  \n  c.clearRect(0, 0, w, h);\n  c.beginPath();\n  c.arc(x, y, 40, 0, Math.PI * 2);\n  c.stroke();\n};\n"
  },
  {
    message: {
      en: "How does it work?  It starts by setting the variable pane to the element of the web page called 'pane', which happens to be the one our drawing canvas is in.",
      de: "Wie funktioniert das? Es fängt damit an dass eine Variable 'pane' das Element der Webseite findet wo gezeichnet wird. Das ist unsere Leinwand.",
      jp: "さて、これはどうやっていると思う？&nbsp;Webページを表示させる命れい文の『pane』というIDがついている部分、つまりオレたちが図形をかいてきたキャンバスにいろんなことをするという命れいを、var paneに<ruby>格納<rp>(</rp><rt>かくのう</rt><rp>)</rp></ruby>してるんだ。"
    }
  },
  {
    message: {
      en: "<span class=tutor-code>pane.onmousemove = function(evt) {};</span>is really important.  That code binds a function to the <i>onmousemove</i> event on the 'pane' element, which means this function is called any time the mouse moves inside the drawing canvas.",
      de: "<span class=tutor-code>pane.onmousemove = function(evt) {};</span>ist ganz wichtig. Diese Zeile verbindet die Funktion <i>onmousemove</i> mit dem 'pane' Element. D.h. jedesmal wenn die Maus in der Leinwand wo wir zeichnen ist, wird diese Funktion aufgerufen.",
      jp: "<span class=tutor-code>pane.onmousemove = function(evt) {};</span>はとても大事だ。そのコードは図形をかくところに<i>onmousemove</i>イベントをするfunctionをまとめている。つまり、マウスがキャンバスのところにあるかぎり、このfunctionがよびだされるというわけだ。"
    }
  },
  {
    message: {
      en: "Our function then asks the event where the mouse is (the<span class=tutor-code>clientX</span>and<span class=tutor-code>clientY</span>) and draws a big circle around it.  Make sense?",
      de: "Unsere Function fragt dann wo die Maus ist (<span class=tutor-code>clientX</span>und<span class=tutor-code>clientY</span>) und zeichnet einen grossen Kreis dorthin. Okay?",
      jp: "そのとき、functionはマウスの場所(<span class=tutor-code>clientX</span>と<span class=tutor-code>clientY</span>)をかくにんして、そのまわりに円をかくんだ。すごいでしょ！"
    }
  },
  {
    message: {
      en: "What's really cool about this is that we can combine it with animation.  Look at this!",
      de: "Das Tolle ist, dass wir das jetzt mit Animationen kombinieren können. Schau hier!",
      jp: "もっとすごいのは、これを合わせてアニメにできるよ。見て！"
    },
    code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    // Acceleration toward the mouse\n    var diffX = mouseX - this.x;\n    var diffY = mouseY - this.y;\n    var dist2 = diffX * diffX + diffY * diffY + 1;\n    var ddx = accel * Math.abs(diffX) *\n              diffX / dist2;\n    var ddy = accel * Math.abs(diffY) *\n              diffY / dist2;\n    \n    // Bounce off the edges\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx * friction;\n    } else {\n      this.dx += ddx;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy * friction;\n    } else {\n      this.dy += ddy;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    // Enforce the boundaries\n    this.x = Math.max(this.r, this.x);\n    this.x = Math.min(w - this.r, this.x);\n    this.y = Math.max(this.r, this.y);\n    this.y = Math.min(h - this.r, this.y);\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar accel = 0.1;\nvar friction = 0.8;\nvar mouseX = 0;\nvar mouseY = 0;\nvar timeStep = 25; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 4; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n// Store the mouse position when the mouse moves\nvar pane = document.getElementById('pane');\npane.onmousemove = function(evt) {\n  mouseX = evt.clientX;\n  mouseY = evt.clientY;\n};\n",
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    lessonSection: {
      en: "Springs and Physics",
      de: "Federn und Physik",
      jp: "バネと物理"
    }
  },
  {
    message: {
      en: "What this does is, every time the mouse moves in the canvas area, it sets<span class=tutor-code>mouseX</span>and<span class=tutor-code>mouseY</span>to the location of the mouse.",
      de: "Hier ist was der Code macht: Jedesmal wenn die Maus innerhalb der Leinwand ist, wird<span class=tutor-code>mouseX</span>und<span class=tutor-code>mouseY</span>auf die Position der Maus gesetzt.",
      jp: "どうなっているかというと、マウスがキャンバスに入るたび、マウスがいる場所に<span class=tutor-code>mouseX</span>と<span class=tutor-code>mouseY</span>をセットするんだ。"
    }
  },
  {
    message: {
      en: "Then, when each ball is updated, it figures out how far away from the mouse it is, and accelerates toward it.",
      de: "Wenn dann jeder Ball neu berechnet wird mittels<span class=tutor-code>update()</span>, findet er heraus wie weit er von der Maus entfernt ist und beschleunigt zur Maus.",
      jp: "そうしたら、ボールがマウスからどのくらいはなれているかをはかって、マウスに近づくためにボールのスピードを上げるんだよ。"
    }
  },
  {
    message: {
      en: "The acceleration is the square root of the distance, so it pulls harder when it is really far away.  Imagine all the balls being connected to the mouse by little rubber bands or springs.  It's a little like that.",
      de: "Die Beschleunigung ist die Wurzel der Entfernung, das heisst sie ist grösser wenn die Maus weiter weg ist. Stell dir vor alle Bälle sind mit einem kleinen Gummiband mit der Maus verbunden.",
      jp: "マウスまでの長さが長いほどスピードはどんどん速くなるよ。マウスにバネがついているのを想ぞうしてみて。引っぱれば引っぱるほどバネはすごく速く動くよね。"
    }
  },
  {
    message: {
      en: "Try making the balls smaller!  And add more of them!  I like it with about 40 small balls chasing the mouse.",
      de: "Mach die Bälle kleiner! Mach mehr Bälle! Ich mag 40 kleine Bälle die die Maus verfolgen!",
      jp: "ボールを小さくしてみて！&nbsp;そしていっぱい作ってみて！&nbsp;40こぐらいの小さなボールがマウスを追いかけると面白いだろうな！"
    }
  },
  {
    message: {
      en: "Great job! Like what you learned? Was it fun?",
      de: "Super! War das interessant? Hat es Spass gemacht?",
      jp: "いいね！&nbsp;こういうのは面白かった？"
    },
    code: "",
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
    lessonSection: {
      en: "The End",
      de: "Das Ende",
      jp: "これでおしまい"
    }
  },
  {
    message: {
      en: "Wow, you did everything!  Congratulations, nice work!  A lot of these are really hard. I'm impressed you finished!  I hope you enjoyed it!",
		de: "Wahnsinn! Du hast alles gemacht! Ich gratuliere dir! Viele waren wirklich schwer! Ich bin beeindruckt und hoffe es hat dir Spass gemacht!",
		jp: "ワオ！&nbsp;とうとう、さいごまでやりきったよ！&nbsp;おめでとう、よくやったね！&nbsp;むずかしいこともたくさんあった。キミがここまでやってきたのは本当にえらい！&nbsp;楽しんでくれたかな？",
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
