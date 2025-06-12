// Fruit catalog project

const fruits = [
  { name: "Apple", color: "Red", calories: 52, pricePerKg: 3.5, origin: "USA" },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    pricePerKg: 1.2,
    origin: "Ecuador",
    sale: true,
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    pricePerKg: 2.8,
    origin: "Spain",
    sale: false,
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    pricePerKg: 6.0,
    origin: "Mexico",
    sale: true,
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    pricePerKg: 4.0,
    origin: "India",
    sale: true,
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    pricePerKg: 2.5,
    origin: "Italy",
    sale: true,
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    pricePerKg: 3.0,
    origin: "Costa Rica",
    sale: false,
  },
];

// Create a container to hold fruit cards

const fruitContainer = document.createElement("div");
fruitContainer.classList.add("fruit-catalog");
document.body.appendChild(fruitContainer);

// Loop to loop over fruits array and create cards with info for each fruit object.

for (let fruit of fruits) {
  const card = document.createElement("div");
  card.classList.add("fruit-card");
  fruitContainer.append(card);

  const title = document.createElement("h2");
  title.textContent = fruit.name;

  const fruitImg = document.createElement("img");
  fruitImg.setAttribute("src", `/images/${fruit.name}.jpg`);
  fruitImg.alt = fruit.name;
  fruitImg.classList.add("fruit-image");

  const fruitInfo = document.createElement("p");
  fruitInfo.textContent = `Color: ${fruit.color},  Origin: ${fruit.origin}`;
  fruitInfo.classList.add("fruit-info");

  const nutrition = document.createElement("p");
  nutrition.textContent = `Calories: ${fruit.calories} per 100g`;
  nutrition.classList.add("fruit-nutrition");

  const price = document.createElement("p");
  price.textContent = `Price: ${fruit.pricePerKg} kr/kg`;
  price.classList.add("fruit-price");

  card.append(title, fruitImg, fruitInfo, nutrition, price);

  if (fruit.sale) {
    price.classList.add("strikethrough");

    const salePrice = document.createElement("p");
    salePrice.textContent = `Sale price: ${fruit.pricePerKg * 0.9} kr/kg`;
    salePrice.classList.add("sale");
    card.append(salePrice);
  }
}
