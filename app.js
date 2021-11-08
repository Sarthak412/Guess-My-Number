"use strict";

// Functionality of the game starts here

// Generating a random number between 1 to 20 using Math.random function

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
// Handling click events to check the number

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(guess);

  // If number is not provided
  if (!guess) {
    displayMessage("🚫 Number not provided!");
    //document.querySelector(".message").textContent = "🚫 Number not provided!";
  }
  // if guessed number is equal to secret number
  else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "Correct Number 🎉🎊";
    displayMessage("Correct Number🎉🎊");
    document.querySelector("body").style.backgroundColor = "seagreen";
    document.querySelector("body").style.transition = "0.21s ease-in-out";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").style.border = "2px dashed #222";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    } // Refactored Code
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High 📈" : "Too Low 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lose 😔"); // referencing it from the above function
      // document.querySelector(".message").textContent = "You lose 😞";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#D22B2B";
    }
  }
});

// Code before Refactoring

// if guessed number is greater then secret number i.e. if the number is "too high"
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too High 📈";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You lose 😞";
//       document.querySelector(".score").textContent = 0;
//       document.querySelector("body").style.backgroundColor = "#D22B2B";
//     }
//   }
//   // if guessed number is less then secret number i.e. if the number is "too low"
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too Low 📈";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You lose 😞";
//       document.querySelector(".score").textContent = 0;
//       document.querySelector("body").style.backgroundColor = "#D22B2B";
//     }
//   }
// });

// 1st way

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  //  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "20rem";
});

// 2nd way

// document.querySelector('.again').addEventListener('click', function () {
//   window.location.reload();
// });
