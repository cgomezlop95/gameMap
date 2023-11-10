let buildingsAdded = [];
let canvasWidth = 1100;
let canvasHeigth = 715;
let hungerUpdate = 100;
let sleepUpdate = 100;
let socialUpdate = 100;
let moneyUpdate = 100;
let numberOfConstructions = 0;
let dialogueText = "";
let dialogueVisible = false;
let fontSize = 25;
let gameOver = false;
let restartButton;

function preload() {
  backgroundImg = loadImage("./imgs/newTest-1600-1105.jpg");
  baseImg = loadImage("./imgs/playerHeigth150.png");
  towerImg = loadImage("./imgs/tower200.png");
  houseImg = loadImage("./imgs/randomHouseOriginal.png");
  castleImg = loadImage("./imgs/empiresCastle.png");
  tavernImg = loadImage("./imgs/tavernHeigth180.png");
  merchantImg = loadImage("./imgs/merchantHeigth150.png");
  monkImg = loadImage("./imgs/monk130.png");
  boatImg = loadImage("./imgs/boatHeigth200.png");
  marketImg = loadImage("./imgs/market200.png");
  monasteryImg = loadImage("./imgs/monastery200.png");
  boat2Img = loadImage("./imgs/boat2-200.png");
  ownHouseImg = loadImage("./imgs/myHouse.png");
  bankImg = loadImage("./imgs/bank150.png");
  peopleImg = loadImage("./imgs/peopleOriginal100.png");
  seaImg = loadImage("./imgs/seaImg200.png");
}

function setup() {
  firstPlayer = new Player(50, 50, baseImg, seaImg);
  merchant = new Merchant(50, 400, merchantImg);
  monk = new Merchant(1100, 600, monkImg);
  people = new Merchant(1100, 200, peopleImg);
  boat = new Boat(400, 800, boatImg);
  boat2 = new Boat(800, 700, boat2Img);
  market = new Market(600, 350, marketImg);
  monastery = new Monastery(1200, 600, monasteryImg);
  myHouse = new ownHouse(420, 140, ownHouseImg);
  bank = new Bank(910, 0, bankImg);
  myBackground = new backgroundImage(0, 0, backgroundImg);
  myInvisibleRectangle = new invisibleRectangle(
    0,
    800,
    backgroundImg.width,
    320
  );
  const gameContainer = select("#canvas");
  canvas = createCanvas(canvasWidth, canvasHeigth);
  canvas.parent(gameContainer);
  restartButton = createButton("Restart");
  restartButton.position(canvasWidth / 2, canvasHeigth / 2 + 50);
  restartButton.hide();
  restartButton.mousePressed(startNewGame);
  document.getElementById("sleepBox").style.backgroundColor = "green";
  document.getElementById("hungerBox").style.backgroundColor = "green";
  document.getElementById("socialBox").style.backgroundColor = "green";
  document.getElementById("moneyBox").style.backgroundColor = "green";
}

function draw() {
  myBackground.draw();
  myInvisibleRectangle.draw();
  if (!gameOver) {
    firstPlayer.update();
    const objectsToDraw = [
      firstPlayer,
      merchant,
      monk,
      people,
      boat,
      boat2,
      market,
      monastery,
      myHouse,
      bank,
    ];
    objectsToDraw.forEach((object) => object.draw());
    for (let i = 0; i < buildingsAdded.length; i++) {
      buildingsAdded[i].draw();
    }
    //MOVIMIENTO POR LOS 4 LADOS//
    if (firstPlayer.x >= canvasWidth - 200) {
      firstPlayer.x = canvasWidth - 200;
      if (
        myBackground.x >= canvasWidth - backgroundImg.width + 4 &&
        keyIsDown(RIGHT_ARROW)
      ) {
        myBackground.x -= 5;
        merchant.x -= 5;
        monk.x -= 5;
        boat.x -= 5;
        boat2.x -= 5;
        market.x -= 5;
        monastery.x -= 5;
        myHouse.x -= 5;
        bank.x -= 5;
        people.x -= 5;
        myInvisibleRectangle.x -= 5;
        for (let i = 0; i < buildingsAdded.length; i++) {
          buildingsAdded[i].x -= 5;
        }
      }
    }

    if (firstPlayer.x < 10) {
      firstPlayer.x = 10;
      if (myBackground.x < 0 && keyIsDown(LEFT_ARROW)) {
        myBackground.x += 5;
        merchant.x += 5;
        monk.x += 5;
        boat.x += 5;
        boat2.x += 5;
        market.x += 5;
        monastery.x += 5;
        myHouse.x += 5;
        bank.x += 5;
        people.x += 5;
        myInvisibleRectangle.x += 5;
        for (let i = 0; i < buildingsAdded.length; i++) {
          buildingsAdded[i].x += 5;
        }
      }
    }

    if (firstPlayer.y >= canvasHeigth - 200) {
      firstPlayer.y = canvasHeigth - 200;
      if (
        myBackground.y >= canvasHeigth - backgroundImg.height &&
        keyIsDown(DOWN_ARROW)
      ) {
        myBackground.y -= 5;
        merchant.y -= 5;
        monk.y -= 5;
        boat.y -= 5;
        boat2.y -= 5;
        market.y -= 5;
        monastery.y -= 5;
        myHouse.y -= 5;
        bank.y -= 5;
        people.y -= 5;
        myInvisibleRectangle.y -= 5;
        for (let i = 0; i < buildingsAdded.length; i++) {
          buildingsAdded[i].y -= 5;
        }
      }
    }

    if (firstPlayer.y < 10) {
      firstPlayer.y = 10;
      if (myBackground.y < 0 && keyIsDown(UP_ARROW)) {
        myBackground.y += 5;
        merchant.y += 5;
        monk.y += 5;
        people.y += 5;
        boat.y += 5;
        boat2.y += 5;
        market.y += 5;
        monastery.y += 5;
        myHouse.y += 5;
        myInvisibleRectangle.y += 5;
        bank.y += 5;
        for (let i = 0; i < buildingsAdded.length; i++) {
          buildingsAdded[i].y += 5;
        }
      }
    }

    //Check the collision of the player with the sea (invisible rectangle)
    if (myInvisibleRectangle.isColliding(firstPlayer)) {
      firstPlayer.playerImg = firstPlayer.seaImg;
    } else {
      firstPlayer.playerImg = firstPlayer.baseImg;
    }

    //Show the relevant text
    if (dialogueVisible) {
      fill(255);
      textSize(fontSize); // Set the font size
      textAlign(CENTER, CENTER); // Center the text
      text(dialogueText, canvasWidth / 2, canvasHeigth / 2);
    }

    //Game over when one of the parameters is 0 %
    if (
      hungerUpdate <= 0 ||
      sleepUpdate <= 0 ||
      socialUpdate <= 0 ||
      moneyUpdate <= 0
    ) {
      gameOver = true;
    }
  } else {
    fill(255);
    textSize(40);
    text("Game Over", canvasWidth / 2, canvasHeigth / 2);
    restartButton.show();
  }
}

setInterval(function () {
  if (
    hungerUpdate > 0 &&
    sleepUpdate > 0 &&
    socialUpdate > 0 &&
    moneyUpdate > 0
  ) {
    hungerUpdate -= 10;
    const hunger = document.getElementById("hunger");
    hunger.innerHTML = `${hungerUpdate}`;
    document.getElementById("hungerBox").style.width = `${hungerUpdate}%`;

    sleepUpdate -= 10;
    const sleep = document.getElementById("sleep");
    sleep.innerHTML = `${sleepUpdate}`;
    document.getElementById("sleepBox").style.width = `${sleepUpdate}%`;

    socialUpdate -= 10;
    const social = document.getElementById("social");
    social.innerHTML = `${socialUpdate}`;
    document.getElementById("socialBox").style.width = `${socialUpdate}%`;
  }
}, 10000);

function startNewGame() {
  const positions = [
    { object: firstPlayer, x: 50, y: 50 },
    { object: myBackground, x: 0, y: 0 },
    { object: merchant, x: 50, y: 400 },
    { object: boat, x: 400, y: 800 },
    { object: myInvisibleRectangle, x: 0, y: 800 },
    { object: monk, x: 1100, y: 600 },
    { object: boat2, x: 800, y: 700 },
    { object: market, x: 600, y: 350 },
    { object: monastery, x: 1200, y: 600 },
    { object: bank, x: 910, y: 0 },
    { object: people, x: 1100, y: 200 },
    { object: myHouse, x: 420, y: 140 },
  ];
  positions.forEach(({ object, x, y }) => {
    object.x = x;
    object.y = y;
  });
  hungerUpdate = 100;
  hunger.innerHTML = `${hungerUpdate}`;
  sleepUpdate = 100;
  sleep.innerHTML = `${sleepUpdate}`;
  socialUpdate = 100;
  social.innerHTML = `${socialUpdate}`;
  moneyUpdate = 100;
  money.innerHTML = `${moneyUpdate}`;
  document.getElementById("sleepBox").style.width = "100%";
  document.getElementById("hungerBox").style.width = "100%";
  document.getElementById("socialBox").style.width = "100%";
  document.getElementById("moneyBox").style.width = "100%";
  gameOver = false;
  restartButton.hide();
  clear();
  buildingsAdded = [];
}
