const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

// add event
btn.addEventListener("click", function () {
  let hexColor = "#";

  for (let i = 1; i < 7; i++) {
    hexColor += hex[getRandomColor()];
  }

  color.textContent = hexColor;
  //   body access by querySelector
  //   document.querySelector("body").style.backgroundColor = hexColor;

  // or
  document.body.style.backgroundColor = hexColor;
});

// random number genarate
function getRandomColor() {
  return Math.floor(Math.random() * hex.length);
}
