var readlineSync = require('readline-sync');

var userName = readlineSync.question("Please enter your name ");

console.log("Welcome! " + userName + " to DO YOU KNOW NIKHIL? ");

var score = 0;

var quesionOne = {
  question:"Which game do I play everyday? ",
  answer:"badminton"
};

var questionTwo = {
  question:"Do I like coffee? ",
  answer:"yes"
};

var questionBank = [quesionOne,questionTwo];

for(var i=0;i<=questionBank.length-1;i++) {
  var currentQuestion = questionBank[i];
  play(currentQuestion.question,currentQuestion.answer);
}

function play(question, answer) {
    var userAns = readlineSync.question(question);
    var ans = userAns.toLowerCase();
    if(ans === answer) {
      console.log("You're right!");
      score++;
    } else {
      console.log("You're wrong!");
    }
}

console.log("Your score is " + score);

