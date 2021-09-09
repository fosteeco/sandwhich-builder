/* DOM Imports */
const toppingSelect = document.querySelector("#topping-1");

/* Sandwhich options */

let sandwhich = [];

let breads = [
  "italian",
  "kaiser",
  "white",
  "wheat",
  "whole grain",
  "sourdough",
];

let meats = [
  "turkey",
  "ham",
  "roast beef",
  "tuna",
  "peppered ham",
  "chicken",
  "corned beef",
];

let toppings = [
  "tomato",
  "lettuce",
  "raw onions",
  "mayonaise",
  "oil",
  "vinegar",
  "avacado",
  "bell peppers",
];

function createToppingOptions() {
  toppings.forEach((topping) => {
    const toppingOption = `
        <option value=${topping}>${
      topping[0].toUpperCase() + topping.slice(1)
    }</option>
      `;
    toppingSelect.innerHTML += toppingOption;
  });
}

createToppingOptions();
