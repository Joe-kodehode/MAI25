// DOM Manipulation with JavaScript

// --------------------------------------
// Section 1: What is the DOM?
// --------------------------------------

// The DOM (Document Object Model) is how JavaScript interacts with HTML on a web page.
// It turns your HTML into a structure of objects you can access and change using JS.

const button = document.getElementById("my-button"); // targets element with id="my-button"
console.log(button);

const heading = document.querySelector("h1");
console.log(heading);

const items = document.querySelectorAll(".list-item");
console.log(items);

// --------------------------------------
// Section 3: Changing Text or HTML Content
// --------------------------------------

// textContent sets or gets the plain text inside an element (no HTML tags)
heading.textContent = "Welcome to the DOM lesson!";

// innerHTML sets or gets the HTML inside an element (can include tags)
heading.innerHTML = "<span style='color:red'>DOM Manipulation</span>";

// ⚠️ Security Warning:
// Be careful when using innerHTML with content that comes from the user or an external source.
// It can create a security risk called XSS (Cross-Site Scripting).
// Always use textContent if you're not intentionally adding HTML tags.

// --------------------------------------
// Section 4: Changing Styles
// --------------------------------------

heading.style.fontSize = "36px";
button.style.color = "blue";
heading.style.textTransform = "uppercase";
heading.style.cssText = "text-transform: lowercase";

// --------------------------------------
// Section 5: Creating and Adding Elements
// --------------------------------------

// Create a new <p> element
const styledParagraph = document.createElement("p");
const styledParagraph2 = document.createElement("p");

styledParagraph.classList.add("paragraphStyling");
styledParagraph2.classList.add("paragraphStyling");

styledParagraph.textContent = "A brand new paragraph!";
styledParagraph2.textContent = "A brand new paragraph!";

document.body.append(styledParagraph, styledParagraph2);

// 📌 append vs appendChild:
// - appendChild() only accepts **DOM nodes** (elements)
// - append() can accept **DOM nodes OR text**, and also multiple things at once

// Creating an image element and adding attributes
const image = document.createElement("img");
image.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/320px-Red_Apple.jpg";

image.setAttribute("alt", "A red apple");

image.classList.add("apple-img");

document.body.prepend(image);

const midParagraph = document.createElement("p");
midParagraph.textContent = "I'm in the middle!";

const target = document.querySelector("p:nth-of-type(2)");

document.body.insertBefore(midParagraph, target);

// 📌 Summary of placement methods:
// append() → adds to the end
// prepend() → adds to the beginning
// insertBefore(newNode, referenceNode) → inserts before a specific node

// 🧠 What is a DOM node?
// A DOM node is any single part of the document tree:
// - An element (like <p> or <div>)
// - A text node (plain text)
// - A comment node (<!-- like this -->)
// Most of the time, when you're working with elements, you're using element nodes.

// Add a new list item to an existing list

const list = document.querySelector("ul");

const newItem = document.createElement("li");

newItem.textContent = "item4";

list.append(newItem);

// --------------------------------------
// Section 6: Removing Elements
// --------------------------------------

const firstListItem = document.querySelector("li");

list.removeChild(firstListItem);

// --------------------------------------
// Section 7: Parent and Child Relationships
// --------------------------------------

// You can move between elements in the DOM using parent/child/sibling relationships

console.log(list.parentElement);
console.log(list.children);
console.log(list.lastElementChild);
console.log(list.firstElementChild);

// --------------------------------------
// Section 8: classList Methods
// --------------------------------------

const box = document.createElement("div");

// add class
box.classList.add("active", "box", "hidden");

// remove class
box.classList.remove("hidden");

//Toggle a class
box.classList.toggle("darkmode");

document.body.append(box);

console.log(box.classList.contains("darkmode"));

// --------------------------------------
// Section 9: Creating a List in a Loop
// --------------------------------------

const favoriteMovies = [
  "Inception",
  "The Matrix",
  "The Lord of the Rings",
  "Spirited Away",
  "Interstellar",
  "Gladiator",
  "The Martian",
  "Star Wars",
  "The room",
];

// Create a Heading
const movieHeading = document.createElement("h2");
movieHeading.textContent = "My favorite movies";
movieHeading.classList.add("section-heading");
document.body.append(movieHeading);

// Create the <ul> element
const movieList = document.createElement("ul");
movieHeading.classList.add("ul-styling");
document.body.append(movieList);

// Loop through the array and create <li> elements

for (let movie of favoriteMovies) {
  const newLi = document.createElement("li");
  newLi.textContent = movie;
  newLi.style.fontSize = `${Math.floor(Math.random() * 30) + 10}px`;
  movieList.append(newLi);
}

//Function that changes background color on the body when button is clicked
function toggleBgColor() {
  document.body.classList.toggle("darkmode");
}

// --------------------------------------
// Summary
// --------------------------------------

// ✅ The DOM is how JavaScript connects to HTML
// ✅ Use querySelector, getElementById, etc. to select elements
// ✅ Use .textContent, .innerHTML, and .style to change content and appearance
// ✅ Use createElement + appendChild to add elements
// ✅ Use removeChild to delete elements
// ✅ DOM has a parent/child/sibling structure you can navigate
// ✅ classList helps manage CSS classes
// ✅ You can attach event listeners like click or mouseover
