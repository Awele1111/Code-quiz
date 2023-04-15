
var clearButton = document.querySelector("#clear");
var scoreListElement = document.querySelector("#score-list");
var scores = [];

// in the code above, using queryselector, clearButton, scoreListElement, and scores variables are assigned to clear id and score-list id respectively

// function display scores() {
//     try {
//       scores = JSON.parse(localStorage.getItem("allScores")) || [];
//     } catch (error) {
//       console.error("Error parsing high scores:", error);
//     }
    
//     scores.sort((score1, score2) => score2.score - score1.score);

//     var totalQuestions = 8;

//     scoreListElement.innerHTML = scores.map(score => {
      // var fraction = `${score.score}/${totalQuestions}`;
      // var percentage = `${((score.score / totalQuestions) * 100).toFixed(0)}%`;
      // return `<li>${score.name}: ${fraction} (${percentage})</li>`;
  //   }).join("");
  // }
  
  var clearButton = document.getElementById("clear");
  var scoreListElement = document.getElementById("score-list");
  var scores = [];
  
  function displayScores() {
      try {
          scores = JSON.parse(localStorage.getItem("allScores")) || [];
      } catch (error) {
          console.error("Error parsing high scores:", error);
      }
  
      scores.sort((score1, score2) => score2.score - score1.score);
  
      scoreListElement.innerHTML = scores.map(score => {
          var percentage = `${((score.score / 8) * 100).toFixed(0)}%`;
          return `<li>${score.name}: ${percentage}</li>`;
      }).join("");
  }
  
  //   in the code above, displayScores() function retrieves scores from local storage using json.parse
// if there is an error, it displays it to the console
// join() method is used to concatenate the HTML strings into a single string, which is set as the innerHTML property of scoreListElement.

  function clearScores() {
      localStorage.removeItem("allScores");
      window.location.reload();
  }
  
  document.addEventListener("click", event => {
      if (event.target === clearButton) {
          clearScores();
      }
  });
  
  displayScores();
  


  //   scoreListElement.innerHTML = scores.map(score => {
  //     return `<li>${score.name}: ${score.score}</li>`;
  //   }).join("");
  // }

  // scoreListElement.innerHTML = `<li>Score: ${fraction}</li>`; 



// function clearScores() {
//     localStorage.removeItem("allScores");
//     window.location.reload();
//   }
//   in the code above, clearScores() function removes the "allScores" item from localStorage utilizing localStorage.removeItem().
// the page  is then reloaded window.location.reload().

document.addEventListener("click", event => {
    if (event.target === clearButton) {
      clearScores();
    }
  });
//   the function above checks if the event.target property (which is the DOM element that was clicked) is equal to clearButton. If it is, it calls the clearScores() function.

displayScores();
// the code above is stating that displayScores() function is called to initially display the high scores on the page.