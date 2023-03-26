
// var quizInfo = [ 
//     {
//         question: "Which of these options is not a computer language?",
//         a: "Baby Language",
//         b: "Javascript",
//         c: "C++",
//         d: "Python",
//         correct: "a",

//     },
//     {
//         question: "What is the meanning of the abbreviation CSS in programming?",
//         a: "Computer Style Sheets",
//         b: "Cascading Style StyleSheets",
//         c: "Computerized Style Sheets",
//         d: "Challenging Style Sheets",
//         correct: "b",
//     },
//     {
//         question: "Which of these options is a data type?",
//         a: "Computer",
//         b: "Style",
//         c: "Number",
//         d: "Javascript",
//         correct: "c",
//     },
//     {
//         question: "How many days are in a leap year?",
//         a: "300",
//         b: "350",
//         c: "365",
//         d: "366",
//         correct: "d",
//     },
    

//  ];

//  var quiz = document.getElementById('quiz');
//  var answerEl = document.querySelectorAll('.answer');
//  var questionEl =document.getElementById('question');
//  var a_text = document.getElementById('a_text');
//  var b_text = document.getElementById('b_text');
//  var c_text = document.getElementById('c_text');
//  var d_text = document.getElementById('d_text');

//  const submitBtn = document.getElementById('submit');

//  var  currentQuiz = 0
//  var score = 0

//  loadQuiz()

//  function loadQuiz() {
     
//     deselectAnswers()

//     const currentQuizInfo = quizInfo[currentQuiz]

//     questionEl.innerText = currentQuizInfo.question
//     a_text.innerText =currentQuizInfo.a
//     b_text.innerText =currentQuizInfo.b
//     c_text.innerText =currentQuizInfo.c
//     d_text.innerText =currentQuizInfo.d

// }

// function deselectAnswers() {
//     answerEl.forEach(answerEl => answerEl.checked = false)
// }

// function getSelected() {
//     let answer;
//     answerEl.forEach(answerEl => {
//         if(answerEl.checked) {
//             answer = answerEl.id
//         }
//     });
//     return answer;
// }

// submitBtn.addEventListener('click', () => {
//     const answer = getSelected()
//     if(answer) {
//         if (answer === quizInfo [currentQuiz].correct) {
//             score++
//         }
//         currentQuiz++

//         if(currentQuiz < quizInfo.length) {
//             loadQuiz()
//         } else {
//             quiz.innerHTML = `
//             <h2>You answered ${score}/${quizInfo.length} questions correctly</h2>

//             <button onclick="location.reload()">Reload</button>
//             `
//         }
//     }
// })
 


// var quizInfo = [ 
//     {
//         question: "Which of these options is not a computer language?",
//         a: "Baby Language",
//         b: "Javascript",
//         c: "C++",
//         d: "Python",
//         correct: "a",
//     },
//     {
//         question: "What is the meaning of the abbreviation CSS in programming?",
//         a: "Computer Style Sheets",
//         b: "Cascading Style Sheets",
//         c: "Computerized Style Sheets",
//         d: "Challenging Style Sheets",
//         correct: "b",
//     },
//     {
//         question: "Which of these options is a data type?",
//         a: "Computer",
//         b: "Style",
//         c: "Number",
//         d: "Javascript",
//         correct: "c",
//     },
//     {
//         question: "How many days are in a leap year?",
//         a: "300",
//         b: "350",
//         c: "365",
//         d: "366",
//         correct: "d",
//     },
// ];

// const time = 60; // duration of quiz in seconds
// var quiz = document.getElementById('quiz');
// var answerEl = document.querySelectorAll('.answer');
// var questionEl = document.getElementById('question');
// var a_text = document.getElementById('a_text');
// var b_text = document.getElementById('b_text');
// var c_text = document.getElementById('c_text');
// var d_text = document.getElementById('d_text');
// var timerEl = document.getElementById('timer');

// const submitBtn = document.getElementById('submit');

// var currentQuiz = 0;
// var score = 0;
// var remainingTime = time;

// startTimer();

// function startTimer() {
//   timerEl.innerText = remainingTime;
//   var interval = setInterval(() => {
//     remainingTime--;
//     timerEl.innerText = remainingTime;
//     if (remainingTime === 0) {
//       clearInterval(interval);
//       endQuiz();
//     }
//   }, 1000);
// }

// function loadQuiz() {
//   deselectAnswers();

//   const currentQuizInfo = quizInfo[currentQuiz];

//   questionEl.innerText = currentQuizInfo.question;
//   a_text.innerText = currentQuizInfo.a;
//   b_text.innerText = currentQuizInfo.b;
//   c_text.innerText = currentQuizInfo.c;
//   d_text.innerText = currentQuizInfo.d;
// }

// function deselectAnswers() {
//   answerEl.forEach((answerEl) => (answerEl.checked = false));
// }

// function getSelected() {
//   let answer;
//   answerEl.forEach((answerEl) => {
//     if (answerEl.checked) {
//       answer = answerEl.id;
//     }
//   });
//   return answer;
// }

// function endQuiz() {
//   quiz.innerHTML = `
//             <h2>Time's up! You answered ${score}/${quizInfo.length} questions correctly</h2>
//             <button onclick="location.reload()">Reload</button>
//             `;
// }

// submitBtn.addEventListener('click', () => {
//   const answer = getSelected();
//   if (answer) {
//     if (answer === quizInfo[currentQuiz].correct) {
//         score++;
//       }
//       currentQuiz++;
//       if (currentQuiz < quizInfo.length) {
//         loadQuiz();
//       } else {
//         clearInterval(timer);
//         quiz.innerHTML = `
//           <h2>You answered ${score}/${quizInfo.length} questions correctly</h2>
//           <button onclick="location.reload()">Reload</button>
//         `;
//       }
//     }
//   });
  
//   startTimer();
  
 
// var quizInfo = [     {        question: "Which of these options is not a computer language?",        a: "Baby Language",        b: "Javascript",        c: "C++",        d: "Python",        correct: "a",    },    {        question: "What is the meanning of the abbreviation CSS in programming?",        a: "Computer Style Sheets",        b: "Cascading Style StyleSheets",        c: "Computerized Style Sheets",        d: "Challenging Style Sheets",        correct: "b",    },    {        question: "Which of these options is a data type?",        a: "Computer",        b: "Style",        c: "Number",        d: "Javascript",        correct: "c",    },    {        question: "How many days are in a leap year?",        a: "300",        b: "350",        c: "365",        d: "366",        correct: "d",    },];

// var quiz = document.getElementById('quiz');
// var answerEl = document.querySelectorAll('.answer');
// var questionEl =document.getElementById('question');
// var a_text = document.getElementById('a_text');
// var b_text = document.getElementById('b_text');
// var c_text = document.getElementById('c_text');
// var d_text = document.getElementById('d_text');

// const submitBtn = document.getElementById('submit');
// const timerEl = document.getElementById('timer');
// const timerDuration = 60; // 60 seconds

// var currentQuiz = 0;
// var score = 0;
// var timer;

// loadQuiz();

// function loadQuiz() {
//     resetTimer();
//     startTimer();
//     deselectAnswers();
//     const currentQuizInfo = quizInfo[currentQuiz];
//     questionEl.innerText = currentQuizInfo.question;
//     a_text.innerText = currentQuizInfo.a;
//     b_text.innerText = currentQuizInfo.b;
//     c_text.innerText = currentQuizInfo.c;
//     d_text.innerText = currentQuizInfo.d;
// }

// function resetTimer() {
//     clearInterval(timer);
//     timerEl.innerText = timerDuration;
// }

// function startTimer() {
//     var timeLeft = timerDuration;
//     timer = setInterval(() => {
//         timerEl.innerText = timeLeft;
//         timeLeft--;
//         if (timeLeft < 0) {
//             clearInterval(timer);
//             timerEl.innerText = 0;
//             showResults();
//         }
//     }, 1000);
// }

// function deselectAnswers() {
//     answerEl.forEach(answerEl => answerEl.checked = false);
// }

// function getSelected() {
//     let answer;
//     answerEl.forEach(answerEl => {
//         if(answerEl.checked) {
//             answer = answerEl.id;
//         }
//     });
//     return answer;
// }

// function showResults() {
//     quiz.innerHTML = `
//         <h2>You answered ${score}/${quizInfo.length} questions correctly</h2>
//         <button onclick="location.reload()">Reload</button>
//     `;
// }

// submitBtn.addEventListener('click', () => {
//     const answer = getSelected();
//     if(answer) {
//         if (answer === quizInfo[currentQuiz].correct) {
//             score++;
//         }
//         currentQuiz++;
//         if(currentQuiz < quizInfo.length) {
//             loadQuiz();
//         } else {
//             clearInterval(timer);
//             showResults();
//         }
//     }
// });
// var quizInfo = [ 
//     {
//       question: "Which of these options is not a computer language?",
//       a: "Baby Language",
//       b: "Javascript",
//       c: "C++",
//       d: "Python",
//       correct: "a",
//     },
//     {
//       question: "What is the meaning of the abbreviation CSS in programming?",
//       a: "Computer Style Sheets",
//       b: "Cascading Style Sheets",
//       c: "Computerized Style Sheets",
//       d: "Challenging Style Sheets",
//       correct: "b",
//     },
//     {
//       question: "Which of these options is a data type?",
//       a: "Computer",
//       b: "Style",
//       c: "Number",
//       d: "Javascript",
//       correct: "c",
//     },
//     {
//       question: "How many days are in a leap year?",
//       a: "300",
//       b: "350",
//       c: "365",
//       d: "366",
//       correct: "d",
//     },
//   ];
  
//   var quiz = document.getElementById('quiz');
//   var answerEl = document.querySelectorAll('.answer');
//   var questionEl = document.getElementById('question');
//   var a_text = document.getElementById('a_text');
//   var b_text = document.getElementById('b_text');
//   var c_text = document.getElementById('c_text');
//   var d_text = document.getElementById('d_text');
  
//   const submitBtn = document.getElementById('submit');
//   const timerEl = document.getElementById('timer');
//   const timeLimit = 60; // time limit in seconds
  
//   var currentQuiz = 0;
//   var score = 0;
//   var timeLeft = timeLimit;
  
//   loadQuiz();
//   startTimer();
  
//   function loadQuiz() {
//     deselectAnswers();
  
//     const currentQuizInfo = quizInfo[currentQuiz];
  
//     questionEl.innerText = currentQuizInfo.question;
//     a_text.innerText = currentQuizInfo.a;
//     b_text.innerText = currentQuizInfo.b;
//     c_text.innerText = currentQuizInfo.c;
//     d_text.innerText = currentQuizInfo.d;
//   }
  
//   function deselectAnswers() {
//     answerEl.forEach(answerEl => answerEl.checked = false);
//   }
  
//   function getSelected() {
//     let answer;
//     answerEl.forEach(answerEl => {
//       if (answerEl.checked) {
//         answer = answerEl.id;
//       }
//     });
//     return answer;
//   }
  
//   submitBtn.addEventListener('click', () => {
//     const answer = getSelected();
//     if (answer) {
//       if (answer === quizInfo[currentQuiz].correct) {
//         score++;
//       }
//       currentQuiz++;
  
//       if (currentQuiz < quizInfo.length) {
//         loadQuiz();
//       } else {
//         clearInterval(timerInterval);
//         quiz.innerHTML = `
//           <h2>You answered ${score}/${quizInfo.length} questions correctly</h2>
  
//           <button onclick="location.reload()">Reload</button>
//         `;
//       }
//     }
//   });
  
//   function startTimer() {
//     timerEl.innerText = timeLeft;
//     const timerInterval = setInterval(() => {
//       if (timeLeft <= 0) {
//         clearInterval(timerInterval);
//         quiz.innerHTML = `
//           <h2>You ran out of time</h2>
  
//           <button onclick="location.reload()">Reload</button>
//         `;
//       }
//       timeLeft--;
//       timerEl.innerText = timeLeft;
//     }, 1000);
//   }

// var timerInterval;

// function startTimer(duration, display) {
//   var timer = duration, minutes, seconds;

//   timerInterval = setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     display.textContent = minutes + ":" + seconds;

//     if (--timer < 0) {
//       clearInterval(timerInterval);
//       document.getElementById("quiz").innerHTML = `
//             <h2>You answered ${score}/${quizInfo.length} questions correctly</h2>
//             <h2>Time's up!</h2>
//             <button onclick="location.reload()">Reload</button>
//             `;
//     }
//   }, 1000);
// }


var quizInfo = [ 
    {
      question: "Which of these options is not a computer language?",
      a: "Baby Language",
      b: "Javascript",
      c: "C++",
      d: "Python",
      correct: "a",
    },
    {
      question: "What is the meaning of the abbreviation CSS in programming?",
      a: "Computer Style Sheets",
      b: "Cascading Style Sheets",
      c: "Computerized Style Sheets",
      d: "Challenging Style Sheets",
      correct: "b",
    },
    {
      question: "Which of these options is a data type?",
      a: "Computer",
      b: "Style",
      c: "Number",
      d: "Javascript",
      correct: "c",
    },
    {
      question: "How many days are in a leap year?",
      a: "300",
      b: "350",
      c: "365",
      d: "366",
      correct: "d",
    },
  ];
  
  var quiz = document.getElementById('quiz');
  var answerEl = document.querySelectorAll('.answer');
  var questionEl = document.getElementById('question');
  var a_text = document.getElementById('a_text');
  var b_text = document.getElementById('b_text');
  var c_text = document.getElementById('c_text');
  var d_text = document.getElementById('d_text');
  
  const submitBtn = document.getElementById('submit');
  const timerEl = document.getElementById('timer');
  const timeLimit = 60; // time limit in seconds
  
  var currentQuiz = 0;
  var score = 0;
  var timeLeft = timeLimit;
  
  loadQuiz();
  startTimer(timeLimit, timerEl);
  
  function loadQuiz() {
    deselectAnswers();
  
    const currentQuizInfo = quizInfo[currentQuiz];
  
    questionEl.innerText = currentQuizInfo.question;
    a_text.innerText = currentQuizInfo.a;
    b_text.innerText = currentQuizInfo.b;
    c_text.innerText = currentQuizInfo.c;
    d_text.innerText = currentQuizInfo.d;
  }
  
  function deselectAnswers() {
    answerEl.forEach(answerEl => answerEl.checked = false);
  }
  
  function getSelected() {
    let answer;
    answerEl.forEach(answerEl => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizInfo[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
  
      if (currentQuiz < quizInfo.length) {
        loadQuiz();
      } else {
        clearInterval(timerInterval);
        quiz.innerHTML = `
          <h2>You answered ${score}/${quizInfo.length} questions correctly</h2>
  
          <button onclick="location.reload()">Reload</button>
        `;
      }
    }
  });
  
  var timerInterval;
  
  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
  
    timerInterval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + ":" + seconds;
  
      if (--timer < 0) {
        clearInterval(timerInterval);
        quiz.innerHTML = `
          <h2>You answered ${score}/${quizInfo.length} questions correctly</h2>
          <h2>Time's up!</h2>
          <button onclick="location.reload()">Reload</button>
        `;
      }
    }, 1000);
  }
  