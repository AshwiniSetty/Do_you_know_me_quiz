const chalk = require('chalk');
var center = require('center-align');
var justify = require('justify');
console.log(center(chalk.white.bgBlue.bold.underline('----How well do you know me?-----'),100));


var readlineSync = require('readline-sync');
var score=0;
var userName = readlineSync.question('Let me know your name-');

console.log(center(chalk.white.bgCyan('Hello! ' +userName),80));
function user(){
  userReply=readlineSync.question('Before we start off, Do you think you know me well?\nA.Yes B.No-');
  if(userReply.toUpperCase()==="A"||userReply.toUpperCase()==="B"){
    console.log("Oh! Then, let's test it...");
    console.log(chalk.black.bgWhite("If you get all the questions on Level 1 correct, you'll progress to Level 2."));
  }
  else{
    console.log("Please choose between A or B");
    user();
  }
}
user();

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.rgb(60,179,113).bold("Yay! You are Right!\n"));
    score = score+1;
  }
  else{
    console.log(chalk.keyword('orange').bold("Oh no! You are Wrong!\n"));
  }
  /*console.log(chalk.rgb(218,112,214).bold("Your current score is "+score));
  console.log("_____________________________");*/
}

var questions=[{
  question: "My native place is Bangalore.\nA.Yes B.No\nYour option is: ",
  answer: "B"
}, {
  question: "Do you think my favourite colour would be BLACK?\nA.Yes B.No\nYour option is: ",
  answer: "A"
}, {
  question: "Am I a Morning person or a Night person?\nA.Morning B.Night\nYour option is: ",
  answer: "B"
}, {
  question: "What would I prefer to do on a Saturday night?\nA.Partying B.Stay at home\nYour option is: ",
  answer: "B"
}, {
  question: "Greece is my current favourite holiday destination?\nA.Yes B.No\nYour option is:  ",
  answer: "A"
}, {
  question: "I am good at cooking?\nA.Yes B.No\nYour option is:  ",
  answer: "B"
}, {
  question: "I believe in God/Ghost.\nA.Yes B.No\nYour option is:  ",
  answer: "A"
}, {
  question: "I prefer restaurant food over home food.\nA.Yes B.No\nYour option is ",
  answer: "B"
}, {
  question: "How many siblings do I have??\nA.One B.Two\nYour option is:  ",
  answer: "A"
}, {
  question: "IAm I a vegetarian?\nA.Yes B.No\nYour option is ",
  answer: "A"
}];

for(var i=0; i<questions.length/2 ;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log(center(chalk.white.bgCyan("Your score is "+score),80));
//console.log("_____________________________");

if(score==5){
    console.log(center(chalk.black.bgWhite("Yay!You got it all right! Now, Let's move to level 2\n"),40));
    for(var i=questions.length/2; i<questions.length ;i++){
    var currentQuestion=questions[i];
    play(currentQuestion.question,currentQuestion.answer);  
  }
  console.log(center(chalk.white.bgCyan("Your final score is "+score),80));
  if(score==10){
    console.log(center(chalk.white.bgCyan("Seems like you know me very Well!"),80));
    console.log(center(chalk.white.bgBlue.bold.underline('----Thank You for Your Time!-----'),100));
  }
  else{
      console.log(center(chalk.white.bgBlue.bold.underline('----Thank You for Your Time!-----'),100));
  }
}
else{
  console.log("Oops! You did make it to Level 2, try playing Level 1 Again.\n");
}