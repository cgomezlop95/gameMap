class invisibleRectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    noFill(); // Set the fill color to transparent
    //stroke(0);       // Set the stroke color to black (you can change this if needed)
    //strokeWeight(2);  // Set the stroke weight (thickness) if you want an outline
    rect(this.x, this.y, this.width, this.height);
  }
}
