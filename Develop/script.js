var score = 0;
var remainingTime = 30;
var questionIndex = 0;
var header = document.querySelector("#header");
var countdownTimer = document.querySelector("#countdownTimer");
var instructionsPage = document.querySelector("#instructionsPage");
var startButton = document.querySelector("#startButton");
var quizArea = document.querySelector("#quizArea");
var userInitials = document.querySelector("#userInitials");
var submitBtn = document.querySelector("#submit");
var showHighscores = document.querySelector("#showHighscores");
var highscoreList = document.querySelector("#highscoreList");

var questionsList = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      options: ["<scripting>", "<js>", "<script>", "<javascript>"],
      answer: "<script>",
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      options: ["alert('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');", "msg('Hello World');"],
      answer: "alert('Hello World');",
    },
    {
      question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
      options: ["if (i <> 5)", "if i <> 5", "if i =! 5 then", "if (i != 5)"],
      answer: "if (i != 5)",
    },
    {
      question: "How can you add a comment in a JavaScript?",
      options: ["<!--This is a comment-->", "'This is a comment", "//This is a comment", "!This is a comment!"],
      answer: "//This is a comment",
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      options: ["onchange", "onmouseclick", "onclick", "onmouseover"],
      answer: "onclick",
    },
  ];