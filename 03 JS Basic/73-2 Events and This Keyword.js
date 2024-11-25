const btns = document.querySelectorAll("#btn");
for (const btn of btns) {
  btn.addEventListener("click", function () {
    let newColor = randomColor();
    this.style.backgroundColor = newColor;
  });
}

function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let color = `rgb(${r},${g},${b})`;
  return color;
}
