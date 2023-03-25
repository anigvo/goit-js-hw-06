const value = document.querySelector(`#value`);
const decrement = document.querySelector(`[data-action="decrement"]`);
const increment = document.querySelector(`[data-action="increment"]`);
let counterValue = Number(value.textContent);

decrement.addEventListener("click", () => {
    counterValue -= 1; 
    value.innerHTML = counterValue;
});

increment.addEventListener("click", () => {
    counterValue += 1; 
    value.innerHTML = counterValue;
});



