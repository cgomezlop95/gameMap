class Bar {
  constructor(x, y, tavernImg) {
    this.x = x;
    this.y = y;
    this.tavernImg = tavernImg;
  }

  draw() {
    image(this.tavernImg, this.x, this.y);
  }
}
