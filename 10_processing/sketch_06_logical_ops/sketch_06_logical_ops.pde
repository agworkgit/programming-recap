// LOGICAL OPERATORS

float squareBright = 0;

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
      squareBright = 255;
    }
  }
  fill(squareBright);

  rectMode(CENTER);
  square(width / 2, height / 2, 100);

  // fade brigtness when mouse leaves square
  squareBright -= 5;
}

// frameRate(num) sets how fast the loop runs
