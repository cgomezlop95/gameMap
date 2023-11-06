let backgroundImage;
let playerImg;
let towerImg;
let moneyImg;
let merchantImg;
let houseImg; 
let castleImg;
let firstPlayer;
let firstTower;
let moneyIcon;
let buildingsAdded = [];
let canvasWidth = 1400;
let canvasHeigth = 800;
let lifeUpdate = 100;
let numberOfConstructions = 0;

function preload() {
  backgroundImage = loadImage("./imgs/backgroundEmpty.png");
  backgroundImage2 = loadImage("./imgs/test2.png");
  playerImg = loadImage("./imgs/playerHeigth150.png");
  towerImg = loadImage("./imgs/tower.png");
  houseImg = loadImage("./imgs/houseHeigth200.png");
  castleImg = loadImage("./imgs/castleHeigth150.png");
  tavernImg = loadImage("./imgs/tavernHeigth180.png");
  moneyImg = loadImage("./imgs/money.png");
  merchantImg = loadImage("./imgs/merchantHeigth150.png");
}

function setup() {
  firstPlayer = new Player(50, 50, playerImg);
  firstMerchant = new Merchant(50, 400, merchantImg);
  moneyIcon = new Money(700, 400, moneyImg);
  createCanvas(canvasWidth, canvasHeigth);
}

function buildTower() {
  const newTower = new Tower(firstPlayer.x, firstPlayer.y, towerImg);
  buildingsAdded.push(newTower);
  updateConstructions();
}

function buildHouse() {
  const newHouse = new House(firstPlayer.x, firstPlayer.y, houseImg);
  buildingsAdded.push(newHouse);
  updateConstructions();
}

function buildCastle() {
  const newCastle = new Castle(firstPlayer.x, firstPlayer.y, castleImg);
  buildingsAdded.push(newCastle);
  updateConstructions();
}

function buildBar() {
  const newBar = new Bar(firstPlayer.x, firstPlayer.y, tavernImg);
  buildingsAdded.push(newBar);
  updateConstructions();
}

function draw() {
  if (
    firstPlayer.x > 0 &&
    firstPlayer.x < canvasWidth &&
    firstPlayer.y > 0 &&
    firstPlayer.y < canvasHeigth
  ) {
    background(backgroundImage);
  } else {
    background(backgroundImage2);
  }
  firstPlayer.update();
  firstPlayer.draw();
  firstMerchant.draw();
  for (let i = 0; i < buildingsAdded.length; i++) {
    buildingsAdded[i].draw();
  }
}

function updateConstructions() {
  const constructionsElement = document.getElementById("constructions");
  numberOfConstructions += 1;
  constructionsElement.innerHTML = `${numberOfConstructions}`;
}

setInterval(function () {
  console.log("Este mensaje se repetirá cada 10 segundo.");
  lifeUpdate -= 10;
  const life = document.getElementById("life");
  life.innerHTML = `${lifeUpdate}`;
}, 10000);
