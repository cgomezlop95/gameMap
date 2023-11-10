class House {
  constructor(x, y, houseImg) {
    this.x = x;
    this.y = y;
    this.houseImg = houseImg;
  }

  draw() {
    image(this.houseImg, this.x, this.y);
  }
}
