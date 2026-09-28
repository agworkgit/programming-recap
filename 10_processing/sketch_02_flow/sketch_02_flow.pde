// FLOW BASICS

// Built-in variables (mouseX, mouseY, width, height)

// Defined once and doesn't change
void setup() {
  // canvas
  size(640, 360);
  // canvas bg
  background(0, 100, 255);
}

// Loops inside the block (double rendered animation)
void draw() {
  // circle

  noStroke();
  fill(200, 200, 200, 25);
  circle(width / 2, height / 2, 50);
}

void mousePressed() {
  // draw again when mouse is pressed
  background(0, 100, 255);
}
