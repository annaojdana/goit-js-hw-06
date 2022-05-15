const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
    (inputName.value !== "") ? outputName.textContent = event.currentTarget.value : outputName.textContent = "Anonymous";
});