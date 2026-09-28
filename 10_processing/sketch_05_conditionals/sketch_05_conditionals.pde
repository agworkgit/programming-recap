// CONDITIONALS

// if (condition) {
// exec the code block
// }

float shapeX;
float shapeY;
float direction;
float speed;

void setup() {
  size(1280, 720);
  shapeX = width / 2;
  shapeY = height / 2;
  direction = 1;
  speed = 5;
}

void draw() {
  background(0);

  // Shape shift
  if (shapeX < 320) {
    circle(shapeX, shapeY, 50);
  } else if (shapeX < 640) {
    square(shapeX, shapeY, 50);
  } else if (shapeX < 960) {
    rect(shapeX, shapeY, 100, 50);
  } else {
    stroke(255);
    strokeWeight(20);
    line(shapeX, shapeY, shapeX + 50, shapeY);
  }

  // Collision
  if (shapeX > width - 25) {
    direction = -1;
  } else if (shapeX < 0 + 25) {
    direction = 1;
  }

  shapeX += speed * direction;
}
