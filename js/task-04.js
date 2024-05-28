const clickDown = document.querySelector('[data-action="decrement"]');
const clickUp = document.querySelector('[data-action="increment"]');
const display = document.querySelector("#value");
clickDown.addEventListener("click", handlerClickDown);
clickUp.addEventListener("click", handlerClickUp);

let counterValue = 0;
function handlerClickDown() {
  counterValue -= 1;
  return (display.textContent = counterValue);
};
function handlerClickUp() {
  counterValue += 1;
  return (display.textContent = counterValue);
}
