let btnReset = document.querySelector("#reset");
let matching = document.querySelector("#match");
let isGameOver = false;

let p1 = {
  score : 0,
  button : document.querySelector("#btnOne"),
  display : document.querySelector("#p1Display"),
}

let p2 = {
  score : 0,
  button : document.querySelector("#btnTwo"),
  display : document.querySelector("#p2Display"),
}

btnOne.addEventListener("click", function (){
  updateScore(p1,p2)})
btnTwo.addEventListener("click", function(){
  updateScore(p2,p1)})
btnReset.addEventListener("click", function(){
  reset();
});

matching.addEventListener("change", function () {
  winScore = Number(this.value);
  reset();
});

function reset() {
  isGameOver = false;
  p1.score = 0;
  p2.score = 0;
  p1.display.classList.remove("loser", "winner");
  p2.display.classList.remove("winner", "loser");
  p1.button.disabled = false;
  p2.button.disabled = false;
}

function updateScore(player , opponent){
  if(!isGameOver) {
    player.score += 1;
    if(player.score == winScore){
      isGameOver = true;
      player.display.classList.add('winner');
      opponent.display.classList.add('loser');
      player.button.disable = true;
      opponent.button.disable = true;
    }
    player.display.textContent = player.score;
  }
}
