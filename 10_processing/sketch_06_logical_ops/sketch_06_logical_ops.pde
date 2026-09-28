// LOGICAL OPERATORS

void setup() {
  size(1280, 720);
}

void draw() {
  background(0);
  stroke(255);
  fill(175);

  // check mouse_pos and light up square if inside
  if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50) {
    if (mouseY > height / 2 - 50 && mouseY < height / 2 + 50) {
      fill(255);
    }
  } else {
    fill(175);
  }

  rectMode(CENTER);
  square(width / 2, height / 2, 100);
}
