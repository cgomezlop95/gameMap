class invisibleRectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  isColliding(firstPlayer) {
    return (
      this.x < firstPlayer.x + baseImg.width &&
      this.x + this.w > firstPlayer.x &&
      this.y < firstPlayer.y + baseImg.height &&
      this.y + this.h > firstPlayer.y
    );
  }

  draw() {
    noFill(); // Set the fill color to transparent
    noStroke(); // Remove the border
    rect(this.x, this.y, this.w, this.h);
  }
}
