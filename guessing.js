let randomNumber, guessedNumbers, totalGuesses;

// Cache the DOM elements
const guessInput = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");
const guessesLeftDisplay = document.getElementById("guessesLeft");
const previousGuessesElement = document.getElementById("previousGuesses");
const restartButton = document.getElementById("restartButton");
const guessButton = document.getElementById("guessButton");

// Function to initialize or restart the game

function initGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  totalGuesses = 10;
  guessedNumbers = [];
  feedback.textContent = "";
  guessesLeftDisplay.textContent = `Guesses left: ${totalGuesses}`;
  previousGuessesElement.textContent = "";
  guessInput.disabled = false;
  guessButton.disabled = false;
  restartButton.style.display = "none";
  guessInput.value = "";
  console.log(randomNumber);
}

// Function to update the game based on users guess

function checkGuess() {
  const userGuess = Number(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Please enter a number between 1-100";
    return;
  }

  // Record the guess and update previous guesses display

  console.log(userGuess);

  guessedNumbers.push(userGuess);
  previousGuessesElement.textContent = `Previous guesses: ${guessedNumbers.join(
    ", "
  )}`;

  totalGuesses--;

  // Check if the guess is correct

  if (userGuess === randomNumber) {
    feedback.textContent = `Congratulations! You guessed it right. The number was: ${randomNumber}`;
    endGame();
    return;
  }

  // Provide feedback based on how close the guess is
  const difference = Math.abs(userGuess - randomNumber);

  if (difference <= 5) {
    feedback.textContent = "You're really close!";
  } else if (userGuess < randomNumber) {
    feedback.textContent = "Too low! Try a higher number!";
  } else {
    feedback.textContent = "Too high! Try a lower number";
  }

  // Update guesses left display
  guessesLeftDisplay.textContent = `Guesses Left: ${totalGuesses}`;

  //End the game if no guesses remain

  if (totalGuesses === 0) {
    feedback.textContent = `Game over! You've run out of guesses. The number was ${randomNumber}`;
    endGame();
  }
}

// Function to end the game and show restart button

function endGame() {
  guessInput.disabled = true;
  guessButton.disabled = true;
  restartButton.style.display = "inline-block";
}
