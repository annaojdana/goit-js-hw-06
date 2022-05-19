const textInput = document.querySelector("#validation-input");
const signLength = Number(textInput.dataset.length);

textInput.addEventListener("blur", () => {
    (textInput.value.length !== signLength ) ? textInput.className = "invalid" : 
    textInput.className = "valid" ;
});