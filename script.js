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

  return cleanedNames.join(" ");
}

console.log(greetEveryone(peopleNames));
