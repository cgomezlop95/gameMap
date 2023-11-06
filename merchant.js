class Merchant {
  constructor(x, y, merchantImg) {
    this.x = x;
    this.y = y;
    this.merchantImg = merchantImg;
  }

  draw() {
    image(this.merchantImg, this.x, this.y);
  }
}
