class Monastery {
    constructor(x, y, monasteryImg) {
      this.x = x;
      this.y = y;
      this.monasteryImg = monasteryImg;
    }
  
    draw() {
      image(this.monasteryImg, this.x, this.y);
    }
  }