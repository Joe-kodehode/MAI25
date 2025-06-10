// Lesson 9: Recap — Loops & Objects

// --------------------------------------
// Section 1: Looping Through Arrays
// --------------------------------------

const fruitNames = [
  "Apple",
  "Banana",
  "Mango",
  "Grapes",
  "Pear",
  "Peach",
  "Cherrys",
];

// 'for' loop, allows the possibility to change starting index, when we end and how we increment.

for (let i = 0; i < fruitNames.length; i++) {
  console.log(fruitNames[i]);
}

for (let fruit of fruitNames) {
  const newFruit = fruit.toUpperCase();
  console.log(newFruit);
}

// --------------------------------------
// Section 2: Looping with Conditions
// --------------------------------------

const numbers = [12, 5, 8, 13, 44, 313, 22];

for (let number of numbers) {
  if (number < 10) continue;
  if (number > 100) break;

  console.log(number);
}

// --------------------------------------
// Section 3: The while Loop (Guessing Game)
// --------------------------------------

// Random number between 1-10
const randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = 0;

// While loop runs while the condition is true and will stop once it's false.
while (guess !== randomNumber) {
  guess++;
  console.log(`Guessing ${guess}`);
  if (guess === randomNumber) {
    console.log(`Correct! The number was: ${guess}`);
  }
}

// --------------------------------------
// Section 4: Basic Object Review
// --------------------------------------

const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 310,
};

// Creating a new key-value pair in an existing object
book.published = 1937;
book.pages = 320;

console.log(book);
console.log(book.title); // dot notation
console.log(book["author"]); // bracket notation

// --------------------------------------
// Section 5: Looping Through an Object and using Dynamic keys
// --------------------------------------

for (let key in book) {
  console.log(key); // logs each key in the loop
  console.log(book[key]); // logs each value in the loop using bracket notation
}

// --------------------------------------
// Section 6: Array of Objects – Fruit Data
// --------------------------------------

const fruits = [
  {
    name: "Apple",
    color: "Red",
    calories: 52,
    pricePerKg: 3.5,
    countryOfOrigin: "USA",
  },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    pricePerKg: 1.2,
    countryOfOrigin: "Ecuador",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    pricePerKg: 2.8,
    countryOfOrigin: "Spain",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    pricePerKg: 6.0,
    countryOfOrigin: "Mexico",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    pricePerKg: 4.0,
    countryOfOrigin: "India",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    pricePerKg: 2.5,
    countryOfOrigin: "Italy",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    pricePerKg: 3.0,
    countryOfOrigin: "Costa Rica",
  },
];

// Pineapple is a brown fruit from Costa Rica

for (let fruit of fruits) {
  console.log(
    `${fruit.name} is a ${fruit.color} fruit from ${fruit.countryOfOrigin}`
  );
}

// --------------------------------------
// Section 7: Find the Cheapest Fruit
// --------------------------------------

// loop over the array of objects
// make a variable to store the cheapest which updates if a new cheapest is found during the loop

let cheapest = null;
let lowestPrice = Infinity;

for (let fruit of fruits) {
  if (fruit.pricePerKg < lowestPrice) {
    lowestPrice = fruit.pricePerKg;
    cheapest = fruit.name;
  }
}

console.log(cheapest);
console.log(lowestPrice);

// --------------------------------------
// Section 8: Adding and Removing Properties in a Loop
// --------------------------------------

// Add a "good" property to every fruit
for (let fruit of fruits) {
  fruit.good = true;
}

console.log(fruits); // now all have "good: true"

// Remove the "good" property
for (let fruit of fruits) {
  delete fruit.good;
}

console.log(fruits); // back to original

// --------------------------------------
// Section 9: Object in Function
// --------------------------------------

function describeFruit(fruit) {
  return `${fruit.name} contains ${fruit.calories} calories per 100g and costs ${fruit.pricePerKg} kr. per kg.`;
}

console.log(describeFruit(fruits[0]));

// --------------------------------------
// Section 10: Summary
// --------------------------------------

// ✅ Use loops to repeat tasks or go through arrays and objects.
// ✅ for...of is great for arrays; for...in is used for object keys.
// ✅ Objects store data in key-value pairs.
// ✅ Arrays can contain multiple objects.
// ✅ Loops can combine with logic, conditions, and functions.
// ✅ You can add, modify, or delete properties dynamically.
