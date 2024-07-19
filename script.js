// DOM Nodes
const catCount = document.getElementById("cat-count");
const cpsDisplay = document.getElementById("cps-display");
const catBtn = document.getElementById("catBtn");

// Upgrades
const cheeseTreat = document.querySelector(".upgradeOne");
const birdChasing = document.querySelector(".upgradeTwo");
const catnip = document.querySelector(".upgradeThree");
const catTree = document.querySelector(".upgradeFour");
const humanBed = document.querySelector(".upgradeFive");

// STATE (global variables)
let cats = 0;
let cps = 1;

// STATE (global variables) UPGRADES
let treatCost = 40;
let birdCost = 1000;
let catnipCost = 3000;
let catTreeCost = 10000;
let humanBedCost = 15000;
let numTreats = 0;
let numBird = 0;
let numCatnip = 0;
let numCatTree = 0;
let numHumanBed = 0;

function increaseCats() {
  cats += cps;
  catCount.textContent = cats;
  localStorage.setItem("countInLS", cats);
  localStorage.setItem("countCPS", cps);
}

setInterval(increaseCats, 1000);

// Increase Cookies By one
function clickCat() {
  cats++;
  catCount.textContent = cats;
}

catBtn.addEventListener("click", clickCat);

function getCatCount() {
  // Cats Count
  let countInLS = 0;
  cats = parseInt(localStorage.getItem("countInLS"));
  catCount.textContent = cats;
  // Seconds Count‹
  cps =  parseInt(localStorage.getItem("countCPS"));
  cpsDisplay.textContent = cps + " Per Second";
  // Treats Count
  numTreats = parseInt(localStorage.getItem("numTreats"));
  document.getElementById("treat-amount").innerHTML = numTreats;
  // Bird Count 
  numBird = parseInt(localStorage.getItem("numBird"));
  document.getElementById("bird-amount").innerHTML = numBird;
  // Catnip Count
  numCatnip = parseInt(localStorage.getItem("numCatnip"));
  document.getElementById("catnip-amount").innerHTML = numCatnip;
  // Cat Tree Cost 
  numCatTree = parseInt(localStorage.getItem("numCatTree"));
  document.getElementById("cattree-amount").innerHTML = numCatTree;
  // Human Bed
  numHumanBed = parseInt(localStorage.getItem("numHumanBed"));
  document.getElementById("humanbed-amount").innerHTML = numHumanBed;
}

// Upgrades
// Cat Treat Upgrade

function clickTreat() {
  if (cats >= treatCost) {
    cats = cats - treatCost;
    cps = cps + 10;
    cpsDisplay.innerHTML = cps + " Per Second";
    numTreats = numTreats + 1;
  }
  document.getElementById("treat-amount").innerHTML = numTreats;
  localStorage.setItem("numTreats", numTreats);
}

cheeseTreat.addEventListener("click", clickTreat);

// Bird Chase Upgrade
function clickBirdChase() {
  if (cats >= birdCost) {
    cats = cats - birdCost;
    cps = cps + 30;
    cpsDisplay.innerHTML = cps + " Per Second";
    numBird = numBird + 1;
  }
  document.getElementById("bird-amount").innerHTML = numBird;
  localStorage.setItem("numBird", numBird);
}

birdChasing.addEventListener("click", clickBirdChase);

// Catnip Upgrade
function clickCatnip() {
  if (cats >= catnipCost) {
    cats = cats - catnipCost;
    cps = cps + 70;
    cpsDisplay.innerHTML = cps + " Per Second";
    numCatnip = numCatnip + 1;
  }
  document.getElementById("catnip-amount").innerHTML = numCatnip;
  localStorage.setItem("numCatnip", numCatnip);
}

catnip.addEventListener("click", clickCatnip);

// Cat Tree Upgrade

function clickCatTree() {
  if (cats >= catTreeCost) {
    cats = cats - catTreeCost;
    cps = cps + 150;
    cpsDisplay.innerHTML = cps + " Per Second";
    numCatTree = numCatTree + 1;
  }
  document.getElementById("cattree-amount").innerHTML = numCatTree;
  localStorage.setItem("numCatTree", numCatTree);
}

catTree.addEventListener("click", clickCatTree);

// Human Bed Upgrade

function clickHumanBed() {
  if (cats >= humanBedCost) {
    cats = cats - humanBedCost;
    cps = cps + 250;
    cpsDisplay.innerHTML = cps + " Per Second";
    numHumanBed = numHumanBed + 1;
  }
  document.getElementById("humanbed-amount").innerHTML = numHumanBed;
  localStorage.setItem("numHumanBed", numHumanBed);
}

humanBed.addEventListener("click", clickHumanBed);

getCatCount();
