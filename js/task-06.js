const input = document.querySelector(`#validation-input`);

input.addEventListener(`blur`, onInputBlur);

function onInputBlur(event) {
    if (!event.currentTarget.value) {
        input.classList.remove(`valid`, `invalid`)
        return;
    }
    if (input.value.length < Number(input.dataset.length)) {
        input.classList.remove(`valid`);
      input.classList.add(`invalid`);
      return;
    }
    input.classList.remove(`invalid`);
    input.classList.add(`valid`);
}
