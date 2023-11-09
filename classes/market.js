class Market {
    constructor(x, y, marketImg) {
      this.x = x;
      this.y = y;
      this.marketImg = marketImg;
    }
  
    draw() {
      image(this.marketImg, this.x, this.y);
    }
  }