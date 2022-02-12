//Toglogchiin eeljiig hadgalah huwisagch, 1- eer toglogch 0, 2dugaar toglogch 1 gey
var activePlayer = 1;

//Tgolochgiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];
//Toglogchiin eeljind tsugluulj onoo hadgalah
var roudScore = 0;
// shoonii onoo

window.document.getElementById("score-0").textContent = "0";
window.document.getElementById("score-0").textContent = "0";
window.document.getElementById("current-0").textContent = "0";
window.document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6 + 1);
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
