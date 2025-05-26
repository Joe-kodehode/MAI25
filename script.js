// Lesson 4: Functions in JavaScript

// A function is a block of code designed to do one specific task. It lets you write code once and reuse it, keeping your program clean and organized. However, the function won't do anything until you call it.

// ---------------------------------------------------
// Section 1: Function Declarations and Hoisting
// ---------------------------------------------------

sayHello();

function sayHello() {
  console.log("Hello World!");
}

// ---------------------------------------------------
// Section 2: Arrow Functions (Not hoisted)
// ---------------------------------------------------

const arrowFunction = () => {
  console.log("Hello from the arrow function");
};

arrowFunction();

// ---------------------------------------------------
// Section 3: Return Statements and Scope
// ---------------------------------------------------

function exampleOne() {
  console.log("This function logs a message without returning a value");
}
exampleOne();

function exampleTwo() {
  const myMessage = "This function retruns this message";
  return myMessage;
}

const returnedData = exampleTwo();

// console logging function calls will log the return value of the function
console.log(returnedData);

// ---------------------------------------------------
// Section 4: Functions with Parameters
// ---------------------------------------------------

// Example 1 - Hard coding
function add() {
  return 3 + 4;
}

console.log(add());

// Example 2 - Soft coding (dynamic)
function minus(num1, num2) {
  console.log(num1);
  console.log(num2);
  return num1 - num2;
}

console.log(minus(3, 4));
console.log(minus(10, 3));
console.log(minus(20, 6));
console.log(minus(3, 423478));

// const greeter = (name, time) => {
//   return `Good ${time} ${name}`;
// };

// Because we're using an arrow function and because it only has 1 line of code, we can remove the curly brackets and return keyword. This is called implied
const greeter = (name, time, age) => `Good ${time} ${name}, your age is ${age}`;

const userData = {
  userName: "Joe",
  userAge: "37",
};

console.log(greeter(userData.userName, "morning", userData.userAge));
// console.log(greeter("Bill", "evening"));
// console.log(greeter("Glen", "afternoon"));

// ---------------------------------------------------
// Section 5: Implicit Return in Arrow Functions
// ---------------------------------------------------

// Arrow function with an implicit return (no curly braces or return statemet needed).

// Standard arrow function
// const adder = (num1, num2) => {
//   return num1 + num2
// };

// Same function with implicit return
const adder = (num1, num2) => num1 + num2;

console.log(adder(2, 2));

// ---------------------------------------------------
// Section 6: Calculator Function Using Switch Statement
// ---------------------------------------------------

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    default:
      return "Invalid operator detected";
  }
}

console.log(calculator(10, 43, "+"));
console.log(calculator(3, 4, "-"));
console.log(calculator(7, 4, "/"));
console.log(calculator(4, 4, "*"));

// ---------------------------------------------------
// Section 7: Updating a Global Variable via a Function
// ---------------------------------------------------

let HP = 100;

const updateHP = (amount, direction) => {
  if (direction === "up") {
    HP += amount;
  } else if (direction === "down") {
    HP -= amount;
    if (HP <= 0) {
      console.log("You are dead, try again");
      HP = 100;
    }
  }
};

console.log(HP);
updateHP(50, "up");
console.log(HP);
updateHP(200, "down");
console.log(HP);

// ---------------------------------------------------
// Section 8: Using Template Literals and Ternary Operator in a Function
// ---------------------------------------------------

const fruits = ["Banana", "Apple", "Pear", "Kiwi"];
const drinks = ["Water", "Soda", "Saft", "Tea", "Coffee"];

const checkItem = (item, array) => {
  let itemIncluded = array.includes(item) ? "does" : "doesn't";

  return `The array ${itemIncluded} includes ${item}`;
};

console.log(checkItem("Pear", fruits));
console.log(checkItem("Saft", drinks));
console.log(checkItem("Cola", drinks));
console.log(checkItem("Tea", drinks));
console.log(checkItem("Apple", fruits));

// Using implicit return (no return / curly brackets)
// const checkItem = (item) =>
//   `The array ${fruits.includes(item) ? "does" : "doesn't"} include ${item}`;
