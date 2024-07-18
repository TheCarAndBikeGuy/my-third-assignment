// DOM Nodes
const catCount = document.getElementById("cat-count");
const cpsDisplay = document.getElementById("cps-display");
const catBtn = document.getElementById("catBtn");

//Upgrades
const cheeseTreat = document.querySelector(".upgradeOne");
const birdChasing = document.querySelector(".upgradeTwo");
const catnip = document.querySelector(".upgradeThree");
const catTree = document.querySelector(".upgradeFour");
const humanBed = document.querySelector(".upgradeFive");

// STATE (global variables)
let cats = 0;
let cps = 1;

function increaseCats() {
  cats += cps;
  catCount.textContent = cats;
  localStorage.setItem("countInLS", cats);
}

setInterval(increaseCats, 1000);

// Increase Cookies By one
function clickCat() {
  cats++;
  catCount.textContent = cats;
}

catBtn.addEventListener("click", clickCat);

function getCatCount() {
  cats = parseInt(localStorage.getItem("countInLS"));
  catCount.textContent = cats;
}

getCatCount();

// Upgrades
// function to decrease the total number of clicks by 200 when clicked
// add 10 seconds onto the per second when treats is clicked 

function clickTreat() {

}

function clickBirdChase() {  

}

function clickCatnip() {  

}

function clickCatTree() {  

}

function clickHumanBed() {  

}
