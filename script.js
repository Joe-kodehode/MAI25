// Lesson 5: JavaScript Methods (Strings, Arrays, and Numbers)

// A method in JavaScript is a built-in function that you use with a specific type of data, like strings or arrays. It lets you do something with that data—like change it, check it, copy or access part of it.

// --------------------------------------
// Section 1: String Methods
// --------------------------------------
const text = "    Hello, JavaScript World! World!   ";

console.log(text.trim()); // removes whitespace from both ends of the string
console.log(text.toUpperCase()); // converts the string to uppercase
console.log(text.toLocaleLowerCase()); // converts the string to lowercase
console.log(text.indexOf("JavaScript")); // returns the starting index of "JavaScript" in the string
console.log(text.slice(11, 21)); // Extracts a copy of the characters from index 11 to 21. Does not affect the original string.
console.log(text.replace("World", "Universe")); // replaces the first occurrence of "World" with "Universe"
console.log(text.replaceAll("World", "Universe")); // replaces all occurrences of "World" with "Universe"
console.log(text.charCodeAt(6)); // returns the Unicode value of the character at index 6
console.log(text.length); // returns the length of the string
console.log(text.trim().split(" ")); // splits the string into an array of substrings by spaces
console.log(text.repeat(3)); // repeats the string 3 times

// --------------------------------------
// Section 1.2: Converting a String to a Number
// --------------------------------------

let numericString = "123.45xyz678";

console.log(parseInt(numericString)); // parses as an integer until an invalid character; returns 123
console.log(parseFloat(numericString)); // parses as a float until an invalid character; returns 123.45
console.log(Number(numericString)); // converts entire string to a number; returns NaN if any part is invalid

// --------------------------------------
// Section 2: Array Methods
// --------------------------------------

const colors = ["Red", "Green", "Blue"];

console.log(colors.length); // returns the number of elements in the array

colors.push("Yellow", "Purple", "Cyan"); // adds "Yellow" to the end and logs the updated array
console.log(colors);

colors.pop(); // removes the last element

console.log(colors);

const lastElement = colors.pop(); // removes and returns the last element

console.log(lastElement);
console.log(colors);

console.log(colors.join(" ")); // joins array elements into a string separated by " "

console.log(colors.includes("Green")); // checks if "Green" is in the array; returns true or false

const firstColor = colors.shift(); // removes and returns the first element ("Red")

console.log(firstColor);
console.log(colors);

colors.unshift("Pink"); // adds "Pink" at the beginning
console.log(colors);

// toSpliced(): Returns a new array with elements spliced in without modifying the original array
const newColors = colors.toSpliced(1, 2, "Orange", "Purple");

console.log(colors);
console.log(newColors);

let unsortedArray = [3, 1, 4, 1, 5, 9];

let sortedArray = unsortedArray.toSorted(); // returns a new sorted array without modifying the original

console.log(unsortedArray);
console.log(sortedArray);

console.log(sortedArray.at(2)); // accesses the first element using a positive index
console.log(sortedArray.at(-2)); // accesses the last element using a negative index

sortedArray.reverse(); // reverses an array, affects the original array
const reversedArray = sortedArray.toReversed(); // returns a new array with elements in reverse order
console.log(reversedArray);

console.log(sortedArray);

// --------------------------------------
// Section 3: Number Methods
// --------------------------------------

const myNum = 3.1415926;

console.log(myNum.toFixed(2)); // returns a string representing myNum rounded to 2 decimal places

console.log(myNum.toString()); // converts myNum to a string

console.log(myNum.toExponential()); // returns a string with myNum in exponential notation

// --------------------------------------
// Section 4: Chaining Methods Together
// --------------------------------------

// Example 1: Chaining String Methods
const rawString = "   JavaScript is fun!   ";

// prettier-ignore
const processedString = rawString.trim().replace("fun", "awesome").toUpperCase();

console.log(processedString);

// Example 2: Chaining Array Methods
const words = ["hello", "world"];

const messageFromArray = words.join(" ").toUpperCase();

console.log(messageFromArray);

// Example 3: Chaining with a Number (after converting to string)
// Take a number, round it to 2 decimals, convert to a string, and repeat it twice

const chainedNumber = myNum.toFixed(2).toString().repeat(2);
console.log(chainedNumber);
