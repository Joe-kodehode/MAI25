// Lesson 7: JavaScript Loops

//DRY - Don't Repeat Yourself

// A loop is a way to repeat code without writing it multiple times.

// --------------------------------------
// Section 1: Why We Use Loops
// --------------------------------------

const names = ["Tom", "Eric", "Jessica", "Joe"];

//  when does the loop start; when will the loop end; what do we do in between loops
for (let i = 0; i < names.length; i++) {
  console.log(`Hei ${names[i]}`);
}

// --------------------------------------
// Section 2: The for Loop
// --------------------------------------

// The for loop lets us alter the rules. Where does the loop start, when does it end, does it increment forwards, backwards or by more than 1 at a time.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

const fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // logs each fruit
}

// "for of" loop

for (let fruit of fruits) {
  console.log(fruit);
}

// --------------------------------------
// Section 3: Combining Loops with Functions and Methods
// --------------------------------------

const peopleNames = ["alice", " BOB ", "charlie", "dEbBy"];
const drinkNames = ["coke", "sprite", "solo"];

function greetEveryone(nameArray) {
  let cleanedNames = [];

  for (let i = 0; i < nameArray.length; i++) {
    let name = nameArray[i].trim().toLowerCase();
    cleanedNames.push(name);
  }

  return cleanedNames;
}

console.log(greetEveryone(peopleNames));

// --------------------------------------
// Section 4: The for...of Loop
// --------------------------------------

// For of... loop is used with an array, it goes over each element in the array and stores it in "color"
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(`Color: ${color}`);
}

// --------------------------------------
// Section 5: The while Loop
// --------------------------------------

let count = 0;

while (count <= 5) {
  console.log(`While count is: ${count}`);
  count++;
}

// Guessing game with a while loop

const secret = Math.floor(Math.random() * 10) + 1;
let guess = 0;

while (guess !== secret) {
  console.log(`Guessing: ${guess}`);
  guess++;
  if (guess === secret) {
    console.log(`Correct! The secret number was: ${guess}`);
  }
}

// --------------------------------------
// Section 6: Creating Arrays with Loops
// --------------------------------------

function makeRandomArray(arrayLength, max) {
  const result = [];

  for (let i = 0; i < arrayLength; i++) {
    const random = Math.floor(Math.random() * max) + 1;
    result.push(random);
  }

  return result;
}

const randomNumbers = makeRandomArray(50, 100);

// --------------------------------------
// Section 7: Finding the Biggest Number
// --------------------------------------

function findMax(array) {
  let biggestNum = 0;

  for (let num of array) {
    if (num > biggestNum) {
      biggestNum = num;
    }
  }
  return `The biggest number in the array was: ${biggestNum}`;
}
console.log(randomNumbers);
console.log(findMax(randomNumbers));

// --------------------------------------
// Section 8: Using break and continue
// --------------------------------------

const moreNames = [
  "Tom",
  "Eric",
  "Jessica",
  "Scott",
  "Anna",
  "Carl",
  "Elisabeth",
  "Benny",
  "Oliver",
  "Andy",
  "Jenny",
  "Ashley",
  "Erin",
  "Patrick",
];

// for (let name of moreNames) {
//   if (name === "Andy") {
//     continue;
//   }
//   console.log(name);
// }

for (let name of moreNames) {
  console.log(name);

  if (name === "Ashley") {
    break;
  }
}
