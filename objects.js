// Lesson 8: JavaScript Objects

// --------------------------------------
// Section 1: What is an Object?
// --------------------------------------

// An object stores related data using key-value pairs.

const person = {
  name: "Alice",
  age: 28,
  job: "Designer",
};

console.log(person); // logs the entire object
console.log(person.name); // access with dot notation
console.log(person["job"]); // access with bracket notation

// --------------------------------------
// Section 2: Creating and Modifying Objects
// --------------------------------------

person.country = "Norway"; // Create a new key-value pair in an already existing object
person.age = 29; //Modify an existing value

console.log(person);

// --------------------------------------
// Section 3: Looping Through an Object using 'for in' loop
// --------------------------------------

// const key = "job";

// console.log(person[key]);  //Dynamic key access

for (let key in person) {
  console.log(key); //key
  console.log(person[key]); // value
}

// Dynamic key access is useful when you don’t know the property name in advance, like when looping through an object or handling user input.

// --------------------------------------
// Section 4: Nested Objects and Arrays
// --------------------------------------

const userData = {
  firstName: "Olav",
  lastName: "Hansen",
  age: 31,
  male: true,
  hobbies: ["Golf", "Hiking", "Cinema"],
  address: {
    streetName: "Solskinnsgaten",
    streetNumber: 38,
    postCode: 4050,
  },
  position: "Manager",
};

console.log(userData.address.postCode);

// --------------------------------------
// Section 5: Arrays of Objects // Object arrays
// --------------------------------------

const products = [
  { productName: "Shirt", productId: 746352, stock: 32 },
  { productName: "Pants", productId: 745642, stock: 5 },
  { productName: "Socks", productId: 749345, stock: 22 },
];

for (let product of products) {
  console.log(
    `Product: ${product.productName} has this many left in stock: ${product.stock} and its product ID is: ${product.productId}`
  );
}

// --------------------------------------
// Section 6: Descriptive Sentences with Objects
// --------------------------------------

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  { name: "Avery", male: true, age: 28, hobbies: ["coding", "games", "memes"] },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  { name: "Otto", male: true, age: 36, hobbies: ["movies", "cinema", "music"] },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing"],
  },
];

//Let's write a 'for of' loop which console logs the persons name, age, if they are a man or woman, a random hobby.
// For example: "Cathy is a 18-year-old woman who enjoys drawing"

for (let person of people) {
  let randomNumber = Math.floor(Math.random() * person.hobbies.length);

  //   console.log(person.hobbies[randomNumber]);

  console.log(
    `${person.name} is a ${person.age} year-old ${
      person.male ? "man" : "woman"
    } who enjoys ${person.hobbies[randomNumber]}`
  );
}

// --------------------------------------
// Section 7: Working with Object Data
// --------------------------------------

// Calculate total age of all people
let totalAge = 0;

for (let person of people) {
  totalAge += person.age;
}
console.log(`Total combined age: ${totalAge}`);

// --------------------------------------
// Section 8: Combining Hobbies with Spread Syntax
// --------------------------------------

const allHobbies = [];

for (let person of people) {
  allHobbies.push(...person.hobbies); // spreads each hobby into the array
}

console.log(allHobbies); // all hobbies flattened into one array

// --------------------------------------
// Section 9: Adding New Properties to Objects in an Array
// --------------------------------------

for (let person of people) {
  person.title = person.male ? "Mr" : "Ms";
}

console.log(people);

// --------------------------------------
// Summary
// --------------------------------------

// ✅ Objects use key-value pairs to store data.
// ✅ Dot and bracket notation let you access or update values.
// ✅ Objects can contain arrays, other objects, or even functions.
// ✅ You can loop through objects with for...in.
// ✅ Arrays can contain objects and be used with loops.
// ✅ Spread syntax can flatten nested arrays.
// ✅ You can dynamically add or modify object properties.
