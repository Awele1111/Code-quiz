
var timeElement = document.querySelector("#countdown");
var intro = document.querySelector("#intro");
var beginButton = document.querySelector("#start");
var questionParent = document.querySelector("#questions");
var questionPrompt = document.querySelector("#question-prompt");
var questionChoices = document.querySelector("#question-choices");
var userAnswerOutcomeParent = document.querySelector("#answer-feedback");
var userAnswerOutcome = document.querySelector("#answer-outcome");
var scoreParent = document.querySelector("#score-input");
var userFinalScore = document.querySelector("#user-final-score");
var userName = document.querySelector("#name");
var scoreButton = document.querySelector("#score-button");

var questionNumber = 0;
var numberCorrect = 0;

var time = 300;
var timer;

questionInfo = [
  {
    question: "What does HTML stand for?",
    choices: [
      "HyperText Markup Language",
      "Hover Text Markup Language",
      "Half Text Markup Language",
      "None of the above",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "Which of these options is a data type?",
    choices: ["Computer", "Number", "Style", "Javascript"],
    answer: "Number",
  },
  {
    question: "What is the meaning of the abbreviation CSS in programming?",
    choices: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Computerized Style Sheets",
      "Challenging Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which of these options is not a computer language?",
    choices: ["Baby Language", "Javascript", "C++", "Python"],
    answer: "Baby Language",
  },
  {
    question: "How many days are in a leap year?",
    choices: ["300 days", "350 days", "365 days", "366 days"],
    answer: "366 days",
  },
  {
    question: "Which of the following signifies an array?",
    choices: ["[ ] is an array", "{ } is an array", "( ) is an array"],
    answer: "[ ] is an array",
  },
  {
    question: "Which of the following signifies an object?",
    choices: ["[ ] is an object", "{ } is an object ", "( ) is an object"],
    answer: "{ } is an object",
  },
  {
    question: "Which of the following signifies a function?",
    choices: ["[ ] is a function", "{ } is a function", "( ) is a function"],
    answer: "( ) is a function",
  },
  
];

function shuffleQuestions() {
  for (var i = questionInfo.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = questionInfo[i];
    questionInfo[i] = questionInfo[j];
    questionInfo[j] = temp;
  }
}

var time = 300; // 5 minutes in seconds

var beginQuizQuestions = function() {
  var currentQuestion = questionInfo[questionNumber];
  questionPrompt.textContent = currentQuestion.question;
  questionChoices.innerHTML = "";
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    var liEl = document.createElement("li");
    liEl.innerHTML = "<button>" + choice + "</button>";
    questionChoices.appendChild(liEl);
  }
  questionChoices.addEventListener("click", checkAnswer);
};

// var beginQuiz = function() {
//   var minutes = Math.floor(time / 60); // converting the seconds to minutes
//   var seconds = time % 60; //this variable gets the remaining seconds
//   timeElement.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds; // this is to display time in minutes format
//   timer = setInterval(function() {
//     time--;
//     timeElement.textContent = time;
//     if (time <= 0) {
//       stopQuiz();
//     }
//   }, 1000);
//   questionParent.style.display = "";
//   beginButton.style.display = "none";
//   shuffleQuestions();
//   beginQuizQuestions();
// };

// var beginQuiz = function() {
//   var minutes = Math.floor(time / 60); // convert seconds to minutes
//   var seconds = time % 60; // get the remaining seconds
//   timeElement.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds; // display time in minutes format
//   timer = setInterval(function() {
//     time--;
//     var minutes = Math.floor(time / 60); // convert seconds to minutes
//     var seconds = time % 60; // get the remaining seconds
//     timeElement.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds; // update time display in minutes format
//     if (time <= 0) {
//       stopQuiz();
//     }
//   }, 1000);
//   questionParent.style.display = "";
//   beginButton.style.display = "none";
//   shuffleQuestions();
//   beginQuizQuestions();
// };

var beginQuiz = function() {
  var minutes = Math.floor(time / 60); // convert seconds to minutes
  var seconds = time % 60; // get the remaining seconds
  timeElement.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds; // display time in minutes format
  timer = setInterval(function() {
    time--;
    var minutes = Math.floor(time / 60); // convert seconds to minutes
    var seconds = time % 60; // get the remaining seconds
    timeElement.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds; // update time display in minutes format
    if (time <= 0) {
      stopQuiz();
    }
  }, 1000);
  questionParent.style.display = "";
  beginButton.style.display = "none";
  shuffleQuestions();
  beginQuizQuestions();
};


var checkAnswer = function(event) {
  userAnswerOutcomeParent.style.display = "none";

  if (event.target.innerText === questionInfo[questionNumber].answer) {
    userAnswerOutcome.textContent = "The option you chose is correct!";
    userAnswerOutcome.setAttribute("class", "");
    numberCorrect += 1;
    event.target.style.backgroundColor = "green";
  } else {
    userAnswerOutcome.textContent = "Incorrect!";
    userAnswerOutcome.setAttribute("class", "");
    time -= 40; // subtract 40 seconds from the timer
    timeElement.textContent = time;
    event.target.style.backgroundColor = "red";
  }

  userAnswerOutcomeParent.style.display = "";
  setTimeout(function() {
    userAnswerOutcomeParent.style.display = "none";
  }, 1000);

  setTimeout(() => {
    if (questionNumber === (questionInfo.length - 1)) {
      stopQuiz();
    } else {
      questionNumber++;
      beginQuizQuestions();
    }
  }, 1000);
};

// var stopQuiz = function() {
//   clearInterval(timer);
//   setTimeout(function() {
//     questionParent.style.display = "none";
//     userAnswerOutcomeParent.style.display = "none";
//    scoreParent.style.display = "";
//     userFinalScore.textContent = numberCorrect * time;
//   }, 1000);
// };

var stopQuiz = function() {
  clearInterval(timer);
  var totalQuestions = questionInfo.length;
  var totalScore = numberCorrect / totalQuestions;
  userFinalScore.textContent = "Your total score is: " + totalScore.toFixed(2);
  setTimeout(function() {
    questionParent.style.display = "none";
    userAnswerOutcomeParent.style.display = "none";
    scoreParent.style.display = "";
  }, 1000);
};

function stopQuiz() {
  clearInterval(interval);
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  let totalScore = 0;
  let numCorrect = 0;
  for (let i = 0; i < questions.length; i++) {
    let userAnswer = userAnswers[i];
    let answer = questions[i].correctAnswer;
    if (userAnswer === answer) {
      numCorrect++;
      totalScore += 1;
    }
  }
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  resultContainer.innerHTML = `Quiz Complete! You scored ${totalScore}/${questions.length} (${Math.round(totalScore / questions.length * 100)}%) in ${minutes} minutes and ${seconds} seconds. You answered ${numCorrect} questions correctly.`;
}



var saveScore = function() {
  var name = userName.value.trim();

  if (name !== "") {
    var allScores =
      JSON.parse(window.localStorage.getItem("allScores")) || [];

    var userScore = {
      score: numberCorrect * time,
      name: name,
    };

    allScores.push(userScore);
    window.localStorage.setItem(
      "allScores",
      JSON.stringify(allScores)
    );

    scoreButton.onclick = function() {
      location.href = "scores.html";
    };
  }
};

beginButton.addEventListener("click", beginQuiz);
scoreButton.addEventListener("click", saveScore);





