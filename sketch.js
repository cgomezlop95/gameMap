let buildingsAdded = [];
let canvasWidth = 1100; //Anterior: 900
let canvasHeigth = 600;

let hungerUpdate = 100;
let hygieneUpdate = 100;
let socialUpdate = 100;

let numberOfConstructions = 0;
let dialogueText = "";
let dialogueVisible = false;
let fontSize = 25;

//Game over functionality
let gameOver = false;
let restartButton;

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
  boat = new Boat(400, 800, boatImg);
  backgroundTest = new backgroundImage(0, 0, backgroundImageTest);
  moneyIcon = new Money(700, 400, moneyImg);
  createCanvas(canvasWidth, canvasHeigth);
  //Game over functionality:
  restartButton = createButton("Restart");
  restartButton.position(width / 2 - 50, height / 2);
  restartButton.hide();
  restartButton.mousePressed(startNewGame);
}

function buildTower() {
  const newTower = new Tower(firstPlayer.x - 110, firstPlayer.y, towerImg);
  buildingsAdded.push(newTower);
  updateConstructions();
}

function buildHouse() {
  const newHouse = new House(firstPlayer.x - 110, firstPlayer.y, houseImg);
  buildingsAdded.push(newHouse);
  updateConstructions();
}

function buildCastle() {
  const newCastle = new Castle(firstPlayer.x - 110, firstPlayer.y, castleImg);
  buildingsAdded.push(newCastle);
  updateConstructions();
}

function buildBar() {
  const newBar = new Bar(firstPlayer.x - 210, firstPlayer.y, tavernImg);
  buildingsAdded.push(newBar);
  updateConstructions();
}

function draw() {
  backgroundTest.draw();
  if (!gameOver) {
    firstPlayer.update();
    firstPlayer.draw();
    merchant.draw();
    boat.draw();
    for (let i = 0; i < buildingsAdded.length; i++) {
      buildingsAdded[i].draw();
    }
    //MOVIMIENTO POR LOS 4 LADOS//
    if (firstPlayer.x >= canvasWidth - 200) {
      firstPlayer.x = canvasWidth - 200;
      if (
        backgroundTest.x >= canvasWidth - backgroundImageTest.width &&
        keyIsDown(RIGHT_ARROW)
      ) {
        backgroundTest.x -= 5;
        merchant.x -= 5;
        boat.x -= 5;
        for (let i = 0; i < buildingsAdded.length; i++) {
          buildingsAdded[i].x -= 5;
        }
      }
    }

    if (firstPlayer.x < 10) {
      firstPlayer.x = 10;
      if (backgroundTest.x < 0 && keyIsDown(LEFT_ARROW)) {
        backgroundTest.x += 5;
        merchant.x += 5;
        boat.x += 5;
        for (let i = 0; i < buildingsAdded.length; i++) {
          buildingsAdded[i].x += 5;
        }
      }
    }

    if (firstPlayer.y >= canvasHeigth - 200) {
      firstPlayer.y = canvasHeigth - 200;
      if (
        backgroundTest.y >= canvasHeigth - backgroundImageTest.height &&
        keyIsDown(DOWN_ARROW)
      ) {
        backgroundTest.y -= 5;
        merchant.y -= 5;
        boat.y -= 5;
        for (let i = 0; i < buildingsAdded.length; i++) {
          buildingsAdded[i].y -= 5;
        }
      }
    }

    if (firstPlayer.y < 10) {
      firstPlayer.y = 10;
      if (backgroundTest.y < 0 && keyIsDown(UP_ARROW)) {
        backgroundTest.y += 5;
        merchant.y += 5;
        boat.y += 5;
        for (let i = 0; i < buildingsAdded.length; i++) {
          buildingsAdded[i].y += 5;
        }
      }
    }
    //MOVIMIENTO POR LOS 4 LADOS//

    if (dialogueVisible) {
      textSize(fontSize); // Set the font size
      text(dialogueText, 300, 300);
    }

    if (hungerUpdate <= 0 || hygieneUpdate <= 0 || socialUpdate <= 0) {
      gameOver = true;
    }
  } else {
    // Display the "Game Over" message when the game is over
    fill(255);
    textSize(40);
    text("Game Over", 200, 300);
    restartButton.show();
  }
}

function updateConstructions() {
  const constructionsElement = document.getElementById("constructions");
  numberOfConstructions += 1;
  constructionsElement.innerHTML = `${numberOfConstructions}`;
}

setInterval(function () {
  //console.log("Este mensaje se repetirá cada 10 segundo.");
  hungerUpdate -= 10;
  const hunger = document.getElementById("hunger");
  hunger.innerHTML = `${hungerUpdate}`;
  hygieneUpdate -= 10;
  const hygiene = document.getElementById("hygiene");
  hygiene.innerHTML = `${hygieneUpdate}`;
  socialUpdate -= 10;
  const social = document.getElementById("social");
  social.innerHTML = `${socialUpdate}`;
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
    //const dialogue = document.getElementById("dialogueMerchant");
    //dialogue.innerHTML = "Hola, Milburn, ve al puerto a pescar";
    dialogueText = "Hola, Milburn, deberías ir al puerto a pescar";
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
    dialogueText = "Haz clic en el barco para recoger la pesca";
    dialogueVisible = true;
  } else {
    dialogueVisible = false;
  }
}

//¿Cómo recuperar hunger, hygiene y social, al hacer clic en elementos?

function mousePressed() {
  if (
    mouseX >= boat.x &&
    mouseX <= boat.x + boatImg.width &&
    mouseY >= boat.y &&
    mouseY <= boat.y + boatImg.height
  ) {
    //console.log("Pesca");
    hungerUpdate += 100; //Al hacer clic, gano 100 puntos en vida/alimento
    hunger.innerHTML = `${hungerUpdate}`;
  }
}

function startNewGame() {
  hungerUpdate = 100;
  hygieneUpdate = 100;
  socialUpdate = 100;
  gameOver = false;
  restartButton.hide();
  clear();
}
