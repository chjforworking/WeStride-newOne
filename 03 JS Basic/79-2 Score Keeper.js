let oneDisplay = document.querySelector(".p1Display");
let twoDisplay = document.querySelector(".p2Display");

let btnOne = document.querySelector(".btnOne");
let btnReset = document.querySelector(".reset");
let btnTwo = document.querySelector(".btnTwo");

let oneScore = 0;
let twoScore = 0;
let winScore = 5;
let isGameOver = false;
let match = document.querySelector(".match");

btnOne.addEventListener("click", () => {
  if (!isGameOver) {
    oneScore += 1;
    if (oneScore == winScore) {
      isGameOver = true;
    }
  }
  oneDisplay.textContent = oneScore;
});
btnTwo.addEventListener("click", () => {
  if (!isGameOver) {
    twoScore += 1;
  }
  if (twoScore == winScore) {
    isGameOver = true;
  }
  twoDisplay.textContent = twoScore;
});

btnReset.addEventListener("click", () => {
  isGameOver = false;
  oneScore = 0;
  twoScore = 0;
  oneDisplay.textContent = oneScore;
  twoDisplay.textContent = twoScore;
});

match.addEventListener('change', () => {
  winScore = Number(this.value)
  
})