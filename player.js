const letterT = 84;
const letterH = 72;
const letterC = 67;
const letterB = 66;

class Player {
  constructor(x, y, baseImg, seaImg) {
    this.x = x;
    this.y = y;
    this.baseImg = baseImg;
    this.seaImg = seaImg;
    this.playerImg = this.baseImg;
  }

  update() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 10;
    }

    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 10;
    }

    if (keyIsDown(UP_ARROW)) {
      this.y -= 10;
    }

    if (keyIsDown(DOWN_ARROW)) {
      this.y += 10;
    }

    if (keyIsDown(letterT)) {
      buildTower();
    }

    if (keyIsDown(letterH)) {
      buildHouse();
    }

    if (keyIsDown(letterC)) {
      buildCastle();
    }

    if (keyIsDown(letterB)) {
      buildBar();
    }
  }

  draw() {
    image(this.playerImg, this.x, this.y);
  }
}

function buildTower() {
  for (let i = 0; i < buildingsAdded.length; i++) {
    if (
      buildingsAdded[i].x === firstPlayer.x - 110 &&
      buildingsAdded[i].y === firstPlayer.y
    ) {
      console.log("A tower is already built at this position");
      return;
    }
  }

  if (!myInvisibleRectangle.isColliding(firstPlayer)) {
    const newTower = new Tower(firstPlayer.x - 110, firstPlayer.y, towerImg);
    buildingsAdded.push(newTower);
    updateConstructions();
  }
}

function buildHouse() {
  for (let i = 0; i < buildingsAdded.length; i++) {
    if (
      buildingsAdded[i].x === firstPlayer.x - 110 &&
      buildingsAdded[i].y === firstPlayer.y
    ) {
      console.log("A house is already built at this position");
      return;
    }
  }

  if (!myInvisibleRectangle.isColliding(firstPlayer)) {
    const newHouse = new House(firstPlayer.x - 110, firstPlayer.y, houseImg);
    buildingsAdded.push(newHouse);
    updateConstructions();
  }
}

function buildCastle() {
  for (let i = 0; i < buildingsAdded.length; i++) {
    if (
      buildingsAdded[i].x === firstPlayer.x - 110 &&
      buildingsAdded[i].y === firstPlayer.y
    ) {
      console.log("A castle is already built at this position");
      return;
    }
  }

  if (!myInvisibleRectangle.isColliding(firstPlayer)) {
    const newCastle = new Castle(firstPlayer.x - 110, firstPlayer.y, castleImg);
    buildingsAdded.push(newCastle);
    updateConstructions();
  }
}

function buildBar() {
  for (let i = 0; i < buildingsAdded.length; i++) {
    if (
      buildingsAdded[i].x === firstPlayer.x - 220 &&
      buildingsAdded[i].y === firstPlayer.y
    ) {
      console.log("A bar is already built at this position");
      return;
    }
  }
  if (!myInvisibleRectangle.isColliding(firstPlayer)) {
    const newBar = new Bar(firstPlayer.x - 220, firstPlayer.y, tavernImg);
    buildingsAdded.push(newBar);
    updateConstructions();
  }
}

function updateConstructions() {
  moneyUpdate -= 10;
  const money = document.getElementById("money");
  money.innerHTML = `${moneyUpdate}`;
  document.getElementById("moneyBox").style.width = `${moneyUpdate}%`;
}
