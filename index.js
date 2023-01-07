var readlineSync = require("readline-sync");
var score = 0;

var qname = readlineSync.question("What is your name? ");
console.log("Welcome! " + qname + ". Let's play HOW WELL DO YOU KNOW JUNAID!.")


var array = [{
  question: "Do i like sweets ? ",
  answer: "yes",
}, {
  question: "Where am i working currently ? ",
  answer: "amazon",
}, {
  question: "What car do i drive ? ",
  answer: "baleno",
}, {
  question: "What is my age ? ",
  answer: "24",
}, {
  question: "What is my favorite sweet ? ",
  answer: "kajukatli",
}]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("You are right!")
    score = score + 1;
  } else {
    console.log("You are Wrong!")
  }
  console.log("Your current score is : ", score);
  console.log("----------");
}

for (var i = 0; i < array.length; i++) {
  play(array[i].question, array[i].answer);
}

console.log("CONGRATULATIONS! Your total score is : ", score);
