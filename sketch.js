let buildingsAdded = [];
let canvasWidth = 1100;
let canvasHeigth = 715;
let hungerUpdate = 100;
let sleepUpdate = 100;
let socialUpdate = 100;
let moneyUpdate = 1000;
let numberOfConstructions = 0;
let dialogueText = "";
let dialogueVisible = false;
let fontSize = 25;
let gameOver = false;
let restartButton;

function preload() {
  backgroundImg = loadImage("./imgs/newTest-1600-1105.jpg");
  playerImg = loadImage("./imgs/playerHeigth150.png");
  towerImg = loadImage("./imgs/tower200.png");
  houseImg = loadImage("./imgs/houseHeigth200.png");
  castleImg = loadImage("./imgs/medievalCastlecut.png");
  tavernImg = loadImage("./imgs/tavernHeigth180.png");
  moneyImg = loadImage("./imgs/money.png");
  merchantImg = loadImage("./imgs/merchantHeigth150.png");
  monkImg = loadImage("./imgs/monk130.png");
  boatImg = loadImage("./imgs/boatHeigth200.png");
  marketImg = loadImage("./imgs/market200.png");
  monasteryImg = loadImage("./imgs/monastery200.png");
  boat2Img = loadImage("./imgs/boat2-200.png");
  ownHouseImg = loadImage("./imgs/myHouse.png");
  bankImg = loadImage("./imgs/bank150.png");
}

function setup() {
  firstPlayer = new Player(50, 50, playerImg);
  merchant = new Merchant(50, 400, merchantImg);
  monk = new Merchant(1100, 600, monkImg);
  boat = new Boat(400, 800, boatImg);
  boat2 = new Boat(800, 700, boat2Img);
  market = new Market(600, 350, marketImg);
  monastery = new Monastery(1200, 600, monasteryImg);
  myHouse = new ownHouse(420, 140, ownHouseImg);
  bank = new Bank(910, 0, bankImg);
  background = new backgroundImage(0, 0, backgroundImg);
  moneyIcon = new Money(700, 400, moneyImg);
  const gameContainer = select("#canvas");
  canvas = createCanvas(canvasWidth, canvasHeigth);
  canvas.parent(gameContainer);
  restartButton = createButton("Restart");
  restartButton.position(width / 2 - 50, height / 2);
  restartButton.hide();
  restartButton.mousePressed(startNewGame);
}

function draw() {
  background.draw();
  if (!gameOver) {
    firstPlayer.update();
    firstPlayer.draw();
    merchant.draw();
    monk.draw();
    boat.draw();
    boat2.draw();
    market.draw();
    monastery.draw();
    myHouse.draw();
    bank.draw();
    for (let i = 0; i < buildingsAdded.length; i++) {
      buildingsAdded[i].draw();
    }
    //MOVIMIENTO POR LOS 4 LADOS//
    if (firstPlayer.x >= canvasWidth - 200) {
      firstPlayer.x = canvasWidth - 200;
      if (
        background.x >= canvasWidth - backgroundImg.width + 4 &&
        keyIsDown(RIGHT_ARROW)
      ) {
        background.x -= 5;
        merchant.x -= 5;
        monk.x -= 5;
        boat.x -= 5;
        boat2.x -= 5;
        market.x -= 5;
        monastery.x -= 5;
        myHouse.x -= 5;
        bank.x -= 5;
        for (let i = 0; i < buildingsAdded.length; i++) {
          buildingsAdded[i].x -= 5;
        }
      }
    }

    if (firstPlayer.x < 10) {
      firstPlayer.x = 10;
      if (background.x < 0 && keyIsDown(LEFT_ARROW)) {
        background.x += 5;
        merchant.x += 5;
        monk.x += 5;
        boat.x += 5;
        boat2.x += 5;
        market.x += 5;
        monastery.x += 5;
        myHouse.x += 5;
        bank.x += 5;
        for (let i = 0; i < buildingsAdded.length; i++) {
          buildingsAdded[i].x += 5;
        }
      }
    }

    if (firstPlayer.y >= canvasHeigth - 200) {
      firstPlayer.y = canvasHeigth - 200;
      if (
        background.y >= canvasHeigth - backgroundImg.height &&
        keyIsDown(DOWN_ARROW)
      ) {
        background.y -= 5;
        merchant.y -= 5;
        monk.y -= 5;
        boat.y -= 5;
        boat2.y -= 5;
        market.y -= 5;
        monastery.y -= 5;
        myHouse.y -= 5;
        bank.y -= 5;
        for (let i = 0; i < buildingsAdded.length; i++) {
          buildingsAdded[i].y -= 5;
        }
      }
    }

    if (firstPlayer.y < 10) {
      firstPlayer.y = 10;
      if (background.y < 0 && keyIsDown(UP_ARROW)) {
        background.y += 5;
        merchant.y += 5;
        monk.y += 5;
        boat.y += 5;
        boat2.y += 5;
        market.y += 5;
        monastery.y += 5;
        myHouse.y += 5;
        bank.y += 5;
        for (let i = 0; i < buildingsAdded.length; i++) {
          buildingsAdded[i].y += 5;
        }
      }
    }
    //MOVIMIENTO POR LOS 4 LADOS//

    if (dialogueVisible) {
      fill(255);
      textSize(fontSize); // Set the font size
      textAlign(CENTER, CENTER); // Center the text
      text(dialogueText, canvasWidth / 2, canvasHeigth / 2);
    }

    if (hungerUpdate <= 0 || sleepUpdate <= 0 || socialUpdate <= 0) {
      gameOver = true;
    }
  } else {
    fill(255);
    textSize(40);
    text("Game Over", 200, 300);
    restartButton.show();
  }
}

setInterval(function () {
  hungerUpdate -= 10;
  const hunger = document.getElementById("hunger");
  hunger.innerHTML = `${hungerUpdate}`;
  sleepUpdate -= 10;
  const sleep = document.getElementById("sleep");
  sleep.innerHTML = `${sleepUpdate}`;
  socialUpdate -= 10;
  const social = document.getElementById("social");
  social.innerHTML = `${socialUpdate}`;
}, 10000);

function startNewGame() {
  firstPlayer.x = 50;
  firstPlayer.y = 50;
  background.x = 0;
  background.y = 0;
  merchant.x = 50;
  merchant.y = 400;
  boat.x = 400;
  boat.y = 800;
  hungerUpdate = 100;
  hunger.innerHTML = `${hungerUpdate}`;
  sleepUpdate = 100;
  sleep.innerHTML = `${sleepUpdate}`;
  socialUpdate = 100;
  social.innerHTML = `${socialUpdate}`;
  gameOver = false;
  restartButton.hide();
  clear();
  buildingsAdded = [];
}
