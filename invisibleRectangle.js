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
    //stroke(0);       // Set the stroke color to black (you can change this if needed)
    //strokeWeight(2);  // Set the stroke weight (thickness) if you want an outline
    rect(this.x, this.y, this.w, this.h);
  }
}
