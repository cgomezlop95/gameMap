const letterT = 84;
const letterH = 72; 
const letterC = 67;
const letterB = 66;

class Player {
  constructor(x, y, playerImg) {
    this.x = x;
    this.y = y;
    this.playerImg = playerImg;
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
      // 84 is the key code for the "T" key
      buildTower();
      //moneyIcon.draw();
    }

    if (keyIsDown(letterH)) {
      // 72 is the key code for the "H" key
      buildHouse();
      //moneyIcon.draw();
    }

    if (keyIsDown(letterC)) {
      // 67 is the key code for the "C" key
      buildCastle();
      //moneyIcon.draw();
    }

    if (keyIsDown(letterB)) {
      // 66 is the key code for the "B" key
      buildBar();
      //moneyIcon.draw();
    }
  }

  draw() {
    image(this.playerImg, this.x, this.y);
  }
}
