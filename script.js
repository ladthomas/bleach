$(document).ready(function() {
  $("#newquote").click(function() {
   
    var q = randomArrayElement(quotesList);
    currentQuote = randomArrayElement(q.quotes);
    
   
    //if(currentQuote !== previousQuote) {    
    if(q.author != $("footer").text()) {   
      $("#quote").text(currentQuote);
      $("#quote").append("<footer>" + q.author + "</footer>");
      $("#authorimg").prop("src", q.imgsrc);
      $("#authorimg").prop("alt", q.author) ;
      previousQuote = currentQuote;
    }
    else
      $("#newquote").click();
  })
  
  $("#tweet").click(function() {
    if(currentQuote !== "") {
      
      window.open("https://twitter.com/intent/tweet?text=" + escape(currentQuote) + "&hashtags=bleach,quote", "_blank");
    }
  });
  
  $("#newquote").click();
});

/* -------- DECLARATIONS -------- */

var previousQuote = "";
var currentQuote = "";

// Returns a random element from an array
function randomArrayElement(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

/* ------------ DATA ------------ */

var quotesList = [
  {"author": "Kuchiki Rukia",
   "imgsrc": "http://i.imgur.com/Z0jW7ln.jpg",
   "quotes": ["We are taught never to shed tears. For to shed tears means that the body has been defeated by emotion. And to us, this simple act of crying proves, without question, that the existence of emotion is nothing but a burden.", "Those who are left behind in a fight or are in the way aren't the ones who lack power. They're the ones who lack resolve.", "I don't have a method of stepping into the depths of your heart without getting it dirty."]},
  {"author": "Sosuke Aizen",
  "imgsrc": "http://i.imgur.com/9CjTzcu.jpg",
  "quotes": ["Don't use such strong words. It'll only make you look weak.", "Admiration is the furthest thing from understanding.", "Laws exist only for those who cannot live without clinging to them."]},
  {"author": "Kurotsuchi Mayuri",
  "imgsrc": "http://i.imgur.com/hDrRTdl.jpg",
  "quotes": ["I hate perfection. To be perfect is to be unable to improve any further."]},
  {"author": "Kurosaki Isshin",
 "imgsrc": "http://i.imgur.com/GXXHc5T.jpg",
 "quotes": ["Live well, age well, go bald well, and die after me. And... if you can, die smiling.", "GOOD MOOOORNING ICHIGOOOOOO!!!", "Around the time we started dating, she said that my hand is cool when I'm smoking a cigarette. Now that I think about it, that was the only time your mom complimented me on my looks. So every year I smoke on this day only. In front of her."]},
  {"author": "Zaraki Kenpachi",
 "imgsrc": "http://i.imgur.com/knkBgAL.jpg",
 "quotes": ["Everyone who searches for power, without exception, searches for battle. Do you fight in order to become more powerful? Or do you want more power so you can fight?", "Loyalty to someone is different from depending on them. It isn't even interesting fighting against someone who doesn't have his own goals."]},
  {"author": "Zangetsu",
 "imgsrc": "http://i.imgur.com/A1hmhJ7.jpg",
 "quotes": ["Look forward! Go forward! Never stand still. Retreat and you will age. Hesitate and you will die.", "I have had the pleasure of standing by your side all this time, watching you grow. What greater happiness can there be?"]},
  {"author": "Ulquiorra Schiffer",
 "imgsrc": "http://i.imgur.com/34Reqof.jpg",
 "quotes": ["We are nothingness. Our head is a void. And without anything around us, we are nothing. We become what we perceive.", "If there is such a thing like happiness in this world, it should resemble the endless nothingness. Nihility is having nothing and having nothing to lose. If that isn't happiness... then what is?"]},
  {"author": "Askin Nakk Le Vaar",
 "imgsrc": "http://i.imgur.com/gpAAXkE.jpg",
 "quotes": ["Society always looks down on those people who spend all their time dreaming and don't actually achieve anything, but then you look at a guy who can achieve anything he likes just by dreaming, and you think, hey, maybe it's not such a bad thing that most dreams don't come true."]},
  {"author": "Yasutora Sado",
   "imgsrc": "http://i.imgur.com/dvgVix4.jpg",
   "quotes": ["What is the point of hitting? Hurting those who hurt you... and what is left?"]},
  {"author": "Grimmjow Jaegerjaquez",
   "imgsrc": "http://i.imgur.com/kqPdGiR.jpg",
   "quotes": ['"What happened to your arm?"  "I threw it away before I got here, \'cause I won\'t need two arms to kill you."']}
];

/* Template:
{"author": "",
 "imgsrc": "",
 "quotes": [""]} */