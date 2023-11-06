class Money {
  constructor(x, y, moneyImg) {
    this.x = x;
    this.y = y;
    this.moneyImg = moneyImg;
  }

  update() {}

  draw() {
    image(this.moneyImg, this.x, this.y);
  }
}
