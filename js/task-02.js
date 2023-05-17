const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsElList = document.querySelector("#ingredients");
const ingredient = ingredients.map((ingredient) => {
  let ingredientEl = document.createElement("li");

  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");
  return ingredientEl;
});
ingredientsElList.append(...ingredient);
