const body = document.querySelector('body');
const btnChange = document.querySelector(".change-color");
const color = document.querySelector(".color");

btnChange.addEventListener("click", () => {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
} )

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
