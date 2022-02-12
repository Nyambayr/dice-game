//Toglogchiin eeljiig hadgalah huwisagch, 1- eer toglogch 0, 2dugaar toglogch 1 gey
var activePlayer = 1;

//Tgolochgiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];
//Toglogchiin eeljind tsugluulj onoo hadgalah
var roudScore = 0;
// shoonii onoo
var dice = Math.floor(Math.random() * 6 + 1);
window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#current-0").textContent = 0;
window.document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
document.querySelector(".btn-roll").style.display = "none";

console.log(" shoo " + dice);
