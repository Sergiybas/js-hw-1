const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// const titlePotatoes = document.createElement("li");
// titlePotatoes.classList.add("item");
// titlePotatoes.textContent = ingredients[0];
// const titleMushrooms = document.createElement("li");
// titleMushrooms.classList.add("item");
// titleMushrooms.textContent = ingredients[1];
// const titleGarlic = document.createElement("li");
// titleGarlic.classList.add("item");
// titleGarlic.textContent = ingredients[2];
// const titleTomatos = document.createElement("li");
// titleTomatos.classList.add("item");
// titleTomatos.textContent = ingredients[3];
// const titleHerbs = document.createElement("li");
// titleHerbs.classList.add("item");
// titleHerbs.textContent = ingredients[4];
// const titleCondiments = document.createElement("li");
// titleCondiments.classList.add("item");
// titleCondiments.textContent = ingredients[5];
// const itemUi = document.querySelector('#ingredients')
// itemUi.append(
//   titlePotatoes,
//   titleMushrooms,
//   titleGarlic,
//   titleTomatos,
//   titleHerbs,
//   titleCondiments
// );
// console.log(itemUi);
//////////////////////////////////////////////////////
//////////////////variant2/////////////////////////////
const title = document.querySelector("#ingredients");
function ingredientsAdd(arr) {
  const ingredientsFor = arr.map((ar) => {
    const createLi = document.createElement("li");
    createLi.classList.add("item");
    createLi.textContent = ar;
    return createLi;
  });
  title.append(...ingredientsFor);
}

ingredientsAdd(ingredients);
console.log(title);
