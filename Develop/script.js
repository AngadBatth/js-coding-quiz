// Globally declared Variables to be used within functions
var score = 0;
var remainingTime = 30;
var questionIndex = 0;
var userResponse;
var header = document.querySelector("#header");
var countdownTimer = document.querySelector("#countdownTimer");
var instructionsPage = document.querySelector("#instructionsPage");
var appendQuiz = document.querySelector("#appendQuiz");
var showQuestion = document.querySelector("#showQuestion");
var showChoices = document.querySelector("#showChoices");
var startButton = document.querySelector("#startButton");
var quizSection = document.querySelector("#quizSection");
var userInitials = document.querySelector("#userInitials");
var showEndScore = document.querySelector("#showEndScore");
var enterInitials = document.querySelector("#enterInitials");
var submitBtn = document.querySelector("#submit");
var showHighscores = document.querySelector("#showHighscores");
var highscoreList = document.querySelector("#highscoreList");
var createButton = document.createElement("button");

// Object with all 5 Questions and respective answers
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

//   Takes the current questionIndex and loops through the questionsList object,
//   If working correctly, this should create a button and append it to the screen
//   for each answer option.
  function createQuiz() {
    userResponse = questionsList[questionIndex].options;
    for (i = 0; i < userResponse.length; i++) {
        var userReturn = userResponse[i];
        createButton.textContent = userReturn;
        createButton.addEventListener("click", function(event) {
            isCorrect(event.target.innerText);
        });
        showChoices.appendChild(createButton);
    }
  }

//   Makes the landing page dissappear and displays the questions based on current index.
  function appendQuestions() {
    if (questionIndex == 5) {
        return;
    }

    instructionsPage.style.display = "none";
    appendQuiz.style.display = "flex";
    showQuestion.innerHTML = questionsList[questionIndex].question;
    createQuiz();
  }

//   Checks if the users choice is correct by seeing if it is equal to the correct answer.
//  function then replaces the text content with blank string to replace with the next question.
  function isCorrect(userChoice) {
    let answerIndex = questionsList[questionIndex].answer;
    let correctAnswer = questionsList[questionIndex].options[answerIndex];

    if (userChoice == correctAnswer) {
        score++;
    } else {
        remainingTime -= 5;
    }
    showQuestion.textContent = "";
    showChoices.textContent = "";
    questionIndex++;
    appendQuestions();
  }

//   Tells user their score and moves onto entering initials screen
  function terminateProcess() {
    alert("Your score is: " + score);
    appendQuiz.style.display = "none";
    userInitials.style.display = "flex";
    showEndScore.textContent = "Your score is: " + score;
  }

//   Keeps timer decreasing by 1second and ends at 0
  function decreaseTimer() {
    timer = setInterval(() => {
        remainingTime -= 1;
        countdownTimer.innerHTML = remainingTime;
        if (remainingTime <= 0 || questionIndex == 5) {
            clearInterval(timer);
            terminateProcess();
        }
    }, 1000)
  }

//   Function to actually begin the game by calling the decreaseTimer and appendQuestions functions
  function beginPlaying() {
    decreaseTimer();
    appendQuestions();
  }

//   Event listener on the start button to call the beginPlaying function
  startButton.addEventListener("click", beginPlaying);