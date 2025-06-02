// Lesson 6 - Functions / Methods recap (and introducing math.random)

// --------------------------------------
// Section 1: Check if a list includes an item (function, ternary, array)
// --------------------------------------

const shoppingList = ["milk", "bread", "cheese"];
const gamesList = ["mario kart", "GTA6", "hello kitty island adventure"];

function checkItem(list, item) {
  const result = list.includes(item);
  return `The list ${result ? "does" : "doesn't"} include ${item}.`;
}

console.log(checkItem(shoppingList, "bread")); // "The list does include bread."
console.log(checkItem(shoppingList, "eggs")); // "The list doesn't include eggs."
console.log(checkItem(gamesList, "mario kart"));

// --------------------------------------
// Section 2: Convert a Sentence into Kebab Case (function, methods)
// --------------------------------------

function toKebabCase(sentence) {
  return sentence.trim().toLowerCase().split(" ").join("-");
}

let mySentence = "  Hello World From JavaScript  ";
console.log(toKebabCase(mySentence));

// --------------------------------------
// Section 3: Checking if a word is a palindrome (function, methods)
// --------------------------------------

function isPalindrome(word) {
  const lower = word.toLowerCase();
  return lower === lower.split("").toReversed().join("");
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("banana")); // false

// --------------------------------------
// Section 4: Shorten a String and Add “...” at the End (functions, methods)
// --------------------------------------

function shorten(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength) + "...";
}

myText = "This is a long sentence that needs shortening.";

console.log(shorten(myText, 20)); // "This is a long sente..."

// --------------------------------------
// Section 5: Introduction to Math.random
// --------------------------------------

// Math.random() is a built-in JavaScript method that gives you a random number between 0 (inclusive) and 1 (exclusive).

// 0.000000000000000000000 - 0.99999999
console.log(Math.random());

// If you want a random number between 0 and 9, you can multiply by 10 and use Math.floor():
// 1-10
const randomNumber1 = Math.floor(Math.random() * 10);
console.log(randomNumber1);

// If you want a number between 1-10, simply add "+1"
const randomNumber2 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber2);

// --------------------------------------
// Section 6: Remove the Middle Element from an Array (function, methods, Math.random)
// --------------------------------------

let myArray = ["A", "B", "C", "D", "E", "F"];

function removeMiddle(array) {
  const mid = Math.floor(array.length / 2);
  const copy = array.toSpliced(mid, 1); // non-mutating
  return copy;
}

console.log(removeMiddle(myArray));

// --------------------------------------
// Section 7: Rock, paper scissors (function, switch case, Math.random)
// --------------------------------------

function rockPaperScissors(userInput, aiInput) {
  switch (userInput + aiInput) {
    case "rock" + "rock":
    case "paper" + "paper":
    case "scissors" + "scissors":
      return "it's a draw";
    case "rock" + "scissors":
    case "paper" + "rock":
    case "scissors" + "paper":
      return "user wins";
    default:
      return "AI wins";
  }
}

console.log(rockPaperScissors("rock", "paper"));

// Making things random with Math.random

const possibleAnswers = ["rock", "paper", "scissors"];

let aiAnswer = possibleAnswers[Math.floor(Math.random() * 3)];

console.log(aiAnswer);

console.log(rockPaperScissors("paper", aiAnswer));

// Break until 13:05
