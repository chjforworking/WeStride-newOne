const form = document.querySelector("#formShelter");
const input = document.querySelector("#input01");
const span = document.querySelector("#span");

form.addEventListener("submit", function (a) {
  a.preventDefault();
  let newInput = input.value;
  // span.innerText = newInput;
  span.append(newInput);
});
