// Lesson 3: Recap of JavaScript Basics with New Examples

// ------------------------------
// Section 1: Variables, Data Types, and Operators
// ------------------------------

// Scenario: An online store managing product details.

const storeName = "Tech Haven"; // String
let productName = "Wireless Earbuds"; //String
let productPrice = 75; //Number(Integer)
let productQuantity = 200; // Number
let isInStock = true; //Boolean
let productTags = ["audio", "wireless", "accessory"]; //Array
let discount; //undefined

// Display variable values using console.log()
console.log("Store Name:", storeName);
console.log("Product Name:", productName);
console.log("Product Price:", productPrice);
console.log("Product Quantity", productQuantity);
console.log("In Stock?", isInStock);
console.log("Product Tags:", productTags);
console.log("Discount", discount);

// Arithmetic operations: Calculate the total cost for the available quantity.
productPrice += 10;
const totalCost = productPrice * productQuantity;

console.log("The total cost of all", productName, "in stock is:", totalCost);

// Compound assignment: Increase the product price by 10.
// productPrice = productPrice + 10;
productPrice += 10;
console.log(productPrice);

// Increment and decrement operators:
// Increase the quantity by 1.
productQuantity++;
console.log(productQuantity);

productQuantity--;
console.log(productQuantity);

// Using the modulus operator:
// Find the remainder when total cost is divided by 50.

console.log(totalCost);

const remainder = totalCost % 50;
console.log("Remainder of Total Cost divided by 50:", remainder);

// ------------------------------
// Section 2: Conditionals and Logical Operators
// ------------------------------

// Example: Decide promotion messages based on total basket size.

// Discount if you spend more than 399 (free delivery)
const basketSize = 300;

if (basketSize >= 399) {
  console.log("Congratulations! You qualify for free delivery!");
} else if (basketSize > 200) {
  console.log(
    "You're close to getting free delivery!! Spend 399 or more to qualify"
  );
} else {
  console.log(
    "Sorry, you don't get free delivery, spend at least 399 to qualify"
  );
}

// Logical operators: Using AND (&&) and OR (||)
// Scenario: Show a special message if the product is in stock and either it's on sale or the quantity is high.

let isOnSale = false;

if (isInStock && (isOnSale || productQuantity > 100)) {
  console.log("Special offer! Enjoy exclusive benefits on this purchase!");
} else {
  console.log("Sorry, no special offer for you today");
}

// Ternary operator: Determine shipping cost based on total cost.
let shippingCost =
  basketSize >= 250 ? "You get free shipping" : "50nok shipping fee";

console.log(shippingCost);
// let totalCost = 200;
// if (shippingCost >= 250) {
//   console.log("You get free shipping!");
// } else {
//   console.log("50nok shipping fee");
// }

// Switch statement: Display messages based on the product category.

let category = "electronics";

switch (category) {
  case "audio":
    console.log("This product is in our Audio department");
    break;
  case "accessory":
    console.log("This product is in our Accessory department");
    break;
  case "gadget":
    console.log("This product is in our Gadgets collection.");
    break;
  default:
    console.log("This product belongs to a general category");
}

// ------------------------------
// Section 3: typeof Operator and Truthy/Falsey Values
// ------------------------------

// Using the typeof operator to check data types:

console.log(typeof storeName); // string
console.log(typeof productPrice); //number
console.log(typeof isInStock); // boolean
console.log(typeof productTags); // object

let randomVariable = "50";

if (typeof randomVariable === "number") {
  console.log("The variable is a number data type");
} else if (typeof randomVariable === "string") {
  console.log("The variable is a string data type");
}

const emptyStr = "";
if (emptyStr) {
  console.log("Empty string is truthy");
} else {
  console.log("Empty string is falsey");
}

// Example with a non-empty string (truthy)
const greeting = "Welcome!";
if (greeting) {
  console.log("Greeting detected");
} else {
  console.log("No greeting detected");
}

const zeroValue = 0;
if (zeroValue) {
  console.log("0 is truthy");
} else {
  console.log("0 is falsey");
}

// --------------------------------------------------
// Section 4: Template Literals // Template Strings Recap
// --------------------------------------------------

const firstName = "Alex";
const lastName = "Miller";

const welcomeMsg =
  "Welcome" + " " + firstName + " " + lastName + " " + "Enjoy shopping with us";
const betterWelcomeMsg = `Welcome ${firstName} ${lastName} Enjoy shopping with us`;

console.log(betterWelcomeMsg);
