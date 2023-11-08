let buildingsAdded = [];
let canvasWidth = 1100;
let canvasHeigth = 600;
let lifeUpdate = 100;
let numberOfConstructions = 0;
let dialogueText = "";
let dialogueVisible = false;
let fontSize = 25;

function preload() {
  backgroundImageTest = loadImage("./imgs/backgroundTest1600.png");
  playerImg = loadImage("./imgs/playerHeigth150.png");
  towerImg = loadImage("./imgs/tower.png");
  houseImg = loadImage("./imgs/houseHeigth200.png");
  castleImg = loadImage("./imgs/castleHeigth150.png");
  tavernImg = loadImage("./imgs/tavernHeigth180.png");
  moneyImg = loadImage("./imgs/money.png");
  merchantImg = loadImage("./imgs/merchantHeigth150.png");
  boatImg = loadImage("./imgs/boatHeigth200.png");
}

function setup() {
  firstPlayer = new Player(50, 50, playerImg);
  merchant = new Merchant(50, 400, merchantImg);
  boat = new Boat(1400, 750, boatImg);
  backgroundTest = new backgroundImage(0, 0, backgroundImageTest);
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
  backgroundTest.draw();
  firstPlayer.update();
  firstPlayer.draw();
  merchant.draw();
  boat.draw();
  for (let i = 0; i < buildingsAdded.length; i++) {
    buildingsAdded[i].draw();
  }

  if (firstPlayer.x > canvasWidth) {
    backgroundTest.x = -500;
    firstPlayer.x = 600;
    merchant.x -= 500;
    for (let i = 0; i < buildingsAdded.length; i++) {
      buildingsAdded[i].x -= 500;
    }
  } else if (firstPlayer.y > canvasHeigth) {
    backgroundTest.y = -505;
    firstPlayer.y = 50;
    merchant.y = 10;
    boat.x = 200;
    boat.y = 400;
  } else if (firstPlayer.x < 0 && backgroundTest.x !== 0) {
    backgroundTest.x = 0;
    firstPlayer.x = canvasWidth - 100;
    merchant.x = 50;
  } else if (firstPlayer.y < 0 && backgroundTest.y !== 0) {
    backgroundTest.y = 0;
    firstPlayer.y = canvasHeigth - 100;
    merchant.x = 50;
    merchant.y = 400;
  }

  if (dialogueVisible) {
    textSize(fontSize); // Set the font size
    text(dialogueText, canvasWidth / 2, canvasHeigth / 2);
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

function mouseMoved() {
  // Check if the mouse is inside the image's boundaries
  if (
    mouseX >= merchant.x &&
    mouseX <= merchant.x + merchantImg.width &&
    mouseY >= merchant.y &&
    mouseY <= merchant.y + merchantImg.height
  ) {
    // The mouse was clicked on the image
    // You can add your code here to handle the image click event
    //console.log("Image clicked!");
    const dialogue = document.getElementById("dialogueMerchant");
    dialogue.innerHTML = "Hola, Milburn, ¿cómo puedo ayudarte?";
    dialogueText = "Hola, Milburn, ¿cómo puedo ayudarte?";
    dialogueVisible = true;
  } else if (
    mouseX >= boat.x &&
    mouseX <= boat.x + boatImg.width &&
    mouseY >= boat.y &&
    mouseY <= boat.y + boatImg.height
  ) {
    // The mouse was clicked on the image
    // You can add your code here to handle the image click event
    //console.log("Image clicked!");
    dialogueText = "Haz clic para pescar";
    dialogueVisible = true;
  } else {
    dialogueVisible = false;
  }
}

function mousePressed() {
  if (
    mouseX >= boat.x &&
    mouseX <= boat.x + boatImg.width &&
    mouseY >= boat.y &&
    mouseY <= boat.y + boatImg.height
  ) {
    console.log("Pesca");
  }
}

//TEST 