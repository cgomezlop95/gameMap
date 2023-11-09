class ownHouse {
    constructor(x, y, ownHouseImg) {
      this.x = x;
      this.y = y;
      this.ownHouseImg = ownHouseImg;
    }
  
    draw() {
      image(this.ownHouseImg, this.x, this.y);
    }
  }