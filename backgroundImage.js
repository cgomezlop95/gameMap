class backgroundImage {
    constructor(x, y, backgroundImage) {
      this.x = x;
      this.y = y;
      this.backgroundImage = backgroundImage;
    }
  
    draw() {
      image(this.backgroundImage, this.x, this.y);
    }
  }