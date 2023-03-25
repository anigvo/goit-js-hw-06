function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(`input`);
const createButton = document.querySelector(`[data-create]`);
const destroyButton = document.querySelector(`[data-destroy]`);
const boxes = document.querySelector(`#boxes`);


createButton.addEventListener(`click`, onCreateButtonClick);
destroyButton.addEventListener(`click`, destroyBoxes);
input.addEventListener(`input`, onInputChange);

let amount;

function onInputChange(event) {
  return amount = event.currentTarget.valueAsNumber;
}

function onCreateButtonClick() {
  createBoxes(amount);
}

function createBoxes(amount) {
  for (let index = 1; index <= amount; index += 1) {
    const boxSize = 20 + 10 * index;
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div style="width: ${boxSize}px; height: ${boxSize}px; background: ${getRandomHexColor()};"></div>`
    );
  }
}

function destroyBoxes() {
  boxes.innerHTML = ``;
}
