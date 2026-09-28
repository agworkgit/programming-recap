// VARIABLES (global, local)

// Declaring variables (type, name, value);
float circleX;
// Common data types: int, float, string, 

void setup() {
  size(1280, 720);
  
  // Initialising a variable
  circleX = 0;
  
  println("Hello!");
}

void draw() {
  background(0);
  
  noStroke();
  fill(255);
  
  // Using the variable
  circle(circleX, height / 2, 50);
  
  // Incrementing
  circleX = circleX + 1;
  
  println(circleX);
}

void mousePressed() {
  circleX = 0;
}
