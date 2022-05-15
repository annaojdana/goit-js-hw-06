const btnPlus = document.querySelector('[data-action="increment"]');
const btnMinus = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');


let counterValue = 0;

const handleClickPlus = () => {
    counterValue += 1;
    value.textContent = counterValue;
};
const handleClickMinus = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

btnPlus.addEventListener("click", handleClickPlus);
btnMinus.addEventListener("click", handleClickMinus);