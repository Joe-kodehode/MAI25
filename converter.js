// Unit Converter

// Global scope variables
const fromUnit = document.querySelector("#from");
const toUnit = document.querySelector("#to");
const calcBtn = document.querySelector("#calculateBtn");
const input = document.querySelector("#userInput");
const resultText = document.querySelector("#result");

// Our convert function which will run when the user clicks calculate button

function convert() {
  // variables which are scoped to our convert function
  const inputValue = +input.value;
  const fromUnitValue = fromUnit.value;
  const toUnitValue = toUnit.value;

  //Input validation to make sure the user enters a number

  let result;

  if (isNaN(inputValue)) {
    resultText.textContent = "Please enter a valid number";
    return;
  }

  //   switch (fromUnitValue + "-" + toUnitValue) {
  //     case "meters-kilometers":
  //       result = inputValue / 1000;
  //       break;
  //     case "meters-miles":
  //       result = inputValue * 0.000621371;
  //       break;
  //     case "kilometers-meters":
  //       result = inputValue * 1000;
  //       break;
  //     case "kilometers-miles":
  //       result = inputValue * 0.621371;
  //       break;
  //     case "miles-meters":
  //       result = inputValue * 1609.34;
  //       break;
  //     case "miles-kilometers":
  //       result = inputValue * 1.60934;
  //       break;
  //     default:
  //       result = inputValue;
  //   }

  // BONUS - Create a conversion rates object. This not only makes it easier to add more units later but also keeps the logic concise.
  const conversionRates = {
    meters: { kilometers: 0.001, miles: 0.000621371 },
    kilometers: { meters: 1000, miles: 0.621371 },
    miles: { meters: 1609.34, kilometers: 1.60934 },
  };

  const factor = conversionRates[fromUnitValue][toUnitValue];

  result = inputValue * factor;

  resultText.textContent = result.toFixed(2);
}

fromUnit.addEventListener("change", sameUnits);
toUnit.addEventListener("change", sameUnits);

function sameUnits() {
  if (fromUnit.value === toUnit.value) {
    calcBtn.disabled = true;
    resultText.textContent = "Don't be stupid, select two different units...";
  } else {
    calcBtn.disabled = false;
    resultText.textContent = "";
  }
}
