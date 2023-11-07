class Boat {
    constructor(x, y, boatImg) {
      this.x = x;
      this.y = y;
      this.boatImg = boatImg;
    }
  
    draw() {
      image(this.boatImg, this.x, this.y);
    }
  }
  