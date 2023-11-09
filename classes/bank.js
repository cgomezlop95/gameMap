class Bank {
    constructor(x, y, bankImg) {
      this.x = x;
      this.y = y;
      this.bankImg = bankImg;
    }
  
    draw() {
      image(this.bankImg, this.x, this.y);
    }
  }