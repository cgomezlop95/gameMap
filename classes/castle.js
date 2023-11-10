class Castle {
  constructor(x, y, castleImg) {
    this.x = x;
    this.y = y;
    this.castleImg = castleImg;
  }

  draw() {
    image(this.castleImg, this.x, this.y);
  }
}
