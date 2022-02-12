//Toglogchiin eeljiig hadgalah huwisagch, 1- eer toglogch 0, 2dugaar toglogch 1 gey
var activePlayer = 0;

//Tgolochgiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];
//Toglogchiin eeljind tsugluulj onoo hadgalah
var roundScore = 0;
// shoonii onoo

window.document.getElementById("score-0").textContent = "0";
window.document.getElementById("score-1").textContent = "0";
window.document.getElementById("current-0").textContent = "0";
window.document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// shoog shideh eventlistener
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6 + 1);
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    document.getElementById("current-" + activePlayer).textContent = 0;
    roundScore = 0;
    diceDom.style.display = "none";
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
  }
});
