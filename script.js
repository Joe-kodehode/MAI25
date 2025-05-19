// Variables and basic Operators

// --------------------------------------
// Section 1: Commenting our code
// --------------------------------------

// hotkey to comment ctrl + *
// multi-line-comment shift + alt + A

// --------------------------------------
// Section 2: console log
// --------------------------------------

console.log("hello world");

// --------------------------------------
// Section 3: Variables and Data Types
// --------------------------------------

// camelCase
// this is when we write the first word's letter in lowercase and subsequent first letters of words in upper case. it's used for naming variables in JavaScript.

// Variables store data values. Here we'll see different types of data.

// String (text)

let exampleText = "this is my text";

exampleText = "now this is my text";

console.log(exampleText);

// Integer (whole number)

let myNum = 5;
console.log(myNum);

// Boolean (true or false)

let thisIsTrue = true;
let thisIsFalse = false;

console.log(thisIsTrue);
console.log(thisIsFalse);

// Array (list of values)

let exampleArray = ["this is a string", 100, false];

console.log(exampleArray);

console.log(exampleArray[2]);

// Object (holds key value pairs)

let person = {
  name: "Simen",
  age: 37,
  location: "Oslo",
};

console.log(person);

// Undefined - a lack of data

let undefinedExample;
console.log(undefinedExample);

// Null - A Purposeful lack of data

let nullExample = null;
console.log(nullExample);

// --------------------------------------
// Section 4: Declaring variables - Let and Const
// --------------------------------------

// Using let (value can be redeclared):

let changeableMessage = "I can change!";

changeableMessage = "I've changed!";
console.log(changeableMessage);

let healthPoints = 100;
console.log(healthPoints);
healthPoints = 50;
console.log(healthPoints);

// Using const (value can not be redeclared):

const fixedValue = "I cannot be redeclared!";

// fixedValue = "I won't work";
console.log(fixedValue);

// Note: When you declare a variable with const, you can't reassign or redeclare it in the same scope. However, if the constant holds a mutable object (like an array or an object), the properties or elements of that object can be changed.

const constArray = [4, 6, 7, 3];

constArray[0] = 10;
console.log(constArray);

// --------------------------------------
// Section 5: Basic Operators
// --------------------------------------

// Operators perform calculations or comparisons.

let a = 14;
let b = 5;

console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Modulus (remainder): 0

// Using the + operator with strings to concatenate them:

let firstName = "Jane";
let lastName = "Doe";
let age = 34;
let address = "lsdfjlasdfj";

console.log(firstName + " " + lastName);

let counter = 0;

// Long way of adding to counter
counter = counter + 1;

// Shorthand, better than the long way
counter += 100;

// restricted to only incrementing by 1, great if that's what you want to do
counter++;

counter = counter - 1;
counter -= 100;
counter--;

console.log(counter);

let score = 10;
console.log("Initial score:", score);

score += 5;
console.log("Current score:", score);

score++;
console.log("Current score:", score);

score -= 3;
console.log("Current score:", score);

score *= 2;
console.log("Current score:", score);

score /= 2;
console.log("Current score:", score);

score++;

score %= 2;
console.log("Remainders", score);

// Template Strings / Template Literals

let balance = 500;

// const greeting =
//   "Welcome" +
//   " " +
//   firstName +
//   ", " +
//   "Your account balance is" +
//   " " +
//   balance;

balance--;

balance += 20000;

const betterGreeting = `Welcome ${firstName}, Your account balance is ${balance}`;

console.log(betterGreeting);

// Lesson 1: Variables & Operators

// Lesson 2: Conditionals

// Lesson 3: Functions

// Lesson 4: Methods

// Lesson 5: Loops

// Lesson 6: Objects

// Lesson 7 & 8: DOM Manipulation
