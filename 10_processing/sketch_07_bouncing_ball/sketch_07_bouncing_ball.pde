float shapeX;
float shapeY;
float speedX;
float speedY;
float direction;

float paddleY;

boolean going;

void setup() {
  size(1280, 720);
  shapeX = width / 2;
  shapeY = height / 2;
  speedX = 5;
  speedY = 5;
  direction = 1;

  paddleY = height - 100;
}

void mousePressed() {
  going = !going; // toggle between true/false on click
}

void draw() {
  background(0);

  circle(shapeX, shapeY, 50);
  rect(mouseX, paddleY, 150, 30);

  // wall collision
  if (shapeX <= 0 || shapeX >= width) {
    speedX = speedX * -direction;
  }

  if (shapeY <= 0 || shapeY >= height) {
    speedY = speedY * -direction;
  }
  
  // paddle collision
  if (shapeY + 25 >= paddleY && shapeY - 25 <= paddleY + 30 && shapeX >= mouseX && shapeX <= mouseX + 150) {
    speedY *= -direction;
  }

  // top collision
  if (shapeY <= 25) {
    speedY *= -direction;
  }

  // move on click
  if (going) {
    shapeX = shapeX + speedX;
    shapeY = shapeY + speedY;
  }
}
