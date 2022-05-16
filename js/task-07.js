const fontSizeControler = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

fontSizeControler.addEventListener("change", () => {
    let size = fontSizeControler.value;
    text.style.fontSize = size + "px";
});