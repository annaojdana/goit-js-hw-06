const fontSizeControler = document.querySelector("#font-size-control");

const text = document.querySelector("#text");
const min = fontSizeControler.min;
const max = fontSizeControler.max;


fontSizeControler.addEventListener("change", () => {
    let size = fontSizeControler.value;
    text.style.fontSize = size + "px";
}
    );