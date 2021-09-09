/* DOM Imports */
const toppingSelect = document.querySelector("#topping-1");
const deleteBtns = document.querySelectorAll("button.delete");

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
  "&nbsp",
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
    let toppingOption;
    if (topping === "&nbsp") {
      console.log("empty topping");
      toppingOption = `
        <option value="" selected disabled hidden>Choose here</option>
      `;
    } else {
      toppingOption = `
        <option value=${topping}>${
        topping[0].toUpperCase() + topping.slice(1)
      }</option>
      `;
    }
    toppingSelect.innerHTML += toppingOption;
  });
}

function createDeleteListener(deleteBtn) {
  deleteBtn.addEventListener("click", (e) => {
    const parent = deleteBtn.parentElement;
    parent.remove();
  });
}

createToppingOptions();
createDeleteListener(deleteBtns[0]);
