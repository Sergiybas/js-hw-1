const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
input.addEventListener("input", handlerInput);
function handlerInput(evt) {
  return (nameOutput.textContent = evt.currentTarget.value);
}
