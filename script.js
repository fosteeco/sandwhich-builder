/* DOM Imports */
const toppingSelect = document.querySelector("#topping-1");
const breadSelect = document.querySelector("#bread");
const deleteBtns = document.querySelectorAll("button.delete");

/* Sandwhich options */

let sandwhich = [];
let deleted = [];

let breads = [
  "&nbsp",
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

function createBreadOptions() {
  breads.forEach((bread) => {
    let breadOption;
    if (bread === "&nbsp") {
      console.log("empty topping");
      breadOption = `
        <option value="" selected disabled hidden>Choose here</option>
      `;
    } else {
      breadOption = `
        <option value=${bread}>${
        bread[0].toUpperCase() + bread.slice(1)
      }</option>
      `;
    }
    breadSelect.innerHTML += breadOption;
  });
}

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
    deleted.push(parent);
    console.log(deleted);
    parent.remove();
  });
}

createBreadOptions();
createToppingOptions();
createDeleteListener(deleteBtns[0]);
