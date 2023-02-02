var startButton = document.querySelector (".start");
var timerSpan = document.querySelector(".timer");
var questionSpace = document.querySelector(".questionSpace");
var timer = 1
var questionEl = document.querySelector("questionEL");
var timerCount = 120;
var scoreCard = document.querySelector("score-card")
var allScores =[]
startButton.addEventListener('click', startQuiz);

function listScores() {
    var storedScores =JSON.parse(localStorage.getItem ("player score"));
    allScores.push (storedScores);
    console.log (allScores[0].player);
    if (allScores !===[]) {
        for (var i =0; i <5;i++) {
            var li = document.createElement ("li");
            li.textContent =allScores[i].player+ " " +allScores[i].
            finalScore;
            scoreCard.appendChild(li);
        }
    }
}

function init () {
    listScores();
}
startQuiz () {
var questions = [
    {
        question: "Which of these options is not a computer language?",
        choices: ["Baby language", Javascript, Python, c++ ] ,
        answer: "Baby Language"  ,
    },
    {
        question: "What is the meanning of the abbreviation CSS in programming?",
        choices: ["Computer Style Sheets", "Cascading Style StyleSheets", "Computerized Style Sheets", "Challenging Style Sheets"],
        answer: "Cascading Style Sheets" ,
    },
    {
        question: "Which of these options is a data type?",
        choices: ["Apple", "Number"],
        answer: "Number"
    },
    {
        question: "Bonus question - How many days are in a leap year?",
        choices: ["365", "366", "300"]
    }
]

function showQuestions() {
    questionEl.textContent=questions[questioncounter].question
    button1.textContent=questions[questioncounter].choices[0]
    button2.textContent=questions[questioncounter].choices[1]
    button3.textContent=questions[questioncounter].choices[2]
    button4.textContent=questions[questioncounter].choices[3]


    questionCounter++
    if (questionCounter==questions.length){
        showResults ()
    }

