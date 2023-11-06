class Tower {
  constructor(x, y, towerImg) {
    this.x = x;
    this.y = y;
    this.towerImg = towerImg;
  }

  draw() {
    image(this.towerImg, this.x, this.y);
  }
}
