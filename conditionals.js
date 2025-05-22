// Lesson 2: Conditionals and Related Operators in JavaScript

// --------------------------------------
// Section 1: The typeof Operator
// --------------------------------------

// let myVariable = {
//   name: "joe",
//   age: 37,
// };

// console.log(typeof myVariable);

// console.log(myVariable);

// --------------------------------------
// Section 2: Comparison Operators
// --------------------------------------

// These operators compare values and return a boolean (true or false).

// console.log(15 > 20);
// console.log(15 < 20);
// console.log(20 <= 20);
// console.log(20 >= 21);

// The equality (==) operator checks if values are equal (with type conversion):
// console.log("20" == 20);

// Strict equality (===) operator checks for both value and type:
// console.log(15 === "15"); // false, because the types differ (number vs string)

// console.log(15 != "15");
// console.log(15 !== "15");

// --------------------------------------
// Section 2: Conditionals with if, if...else, if...else if...else
// --------------------------------------

// let temperature = 11;

// if (temperature >= 25) {
//   console.log("It's a hot day!");
// } else if (temperature < 0) {
//   console.log("It's freezing!");
// } else {
//   console.log("it's a fairly normal day");
// }

// if (temperature > 25) {
//   console.log("It's warm outside");
// }

// --------------------------------------
// Section 4: Logical Operators: AND (&&) and OR (||)
// --------------------------------------

let age = 15;
let hasLicence = true;
let suspended = false;

if (age >= 18 && hasLicence && !suspended) {
  console.log("You are allowed to drive");
} else {
  console.log("You are NOT allowed to drive");
}

// hasLicence    is the same as    hasLicence === true
// !suspended    is the same as    suspended === false

let day = "dsfgsdfg";

if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend!");
} else if (
  day === "Monday" ||
  day === "Tuesday" ||
  day === "Wednesday" ||
  day === "Thursday" ||
  day === "Friday"
) {
  console.log("It's a weekday 😔");
} else {
  console.log("An error has occured");
}

let test = "alsdfjlasdjf";

if (typeof test === "string") {
  console.log("test passed, data is a string");
} else {
  console.log("Wrong datatype detected");
}

// --------------------------------------
// Section 5: Ternary Operator
// --------------------------------------

// The ternary operator is a shortcut for simple if...else statements.

let isMember = true;

let fee = isMember ? "$5" : "$10";

// let fee = "";

// if (isMember) {
//   fee = "$5";
// } else {
//   fee = "$10";
// }

console.log(fee);

// --------------------------------------
// Section 6: Switch Statement
// --------------------------------------

// A switch statement checks a value against multiple cases.

let fruit = "Kiwi";

switch (fruit) {
  case "apple":
    console.log("Apples are great!");
    break;
  case "banana":
    console.log("Bananas are a great source of energy!");
    break;
  case "orange":
    console.log("Oranges are full of Vitamin C");
    break;
  default:
    console.log("Unknown fruit detected");
}

// --------------------------------------
// Section 7: Truthy and Falsey Values
// --------------------------------------

// In JavaScript, some values are automatically considered "truthy" (true) or "falsey" (false) when used in conditions.

// let value = ""; empty string is falsey
// let value = "hello";  filled string is truthy
// let value = 1; A positive number is true
// let value = -1; A negative number is true
// let value = 0; 0 is false
// let value = null; null is false
// let value; undefined is false
// let value = []; empty array is true
// let value = [1]; filled array is true
// let value = {}; empty object is true
// let value = NaN; Not a Number is false

if (value) {
  console.log("The value is truthy.");
} else {
  console.log("The value is falsey.");
}
