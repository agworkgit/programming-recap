// DRAWING BASICS

// Function call
size(640, 360);
background(0, 100, 255); // colour over the entire canvas
// command(args)

// Processing layers shapes on top of each other (order matters)

// 2D primitives -> point, line, rect, square, circle, triangle, arc
// Colours (R, G, B) -> background, stroke, fill
// Greyscale -> (black) 0 - 255 (white)
// Transparency (alpha) RGBA -> 0 - 255

// x, y, w, h
strokeWeight(0); // outline thickness
fill(150, 100, 0);
rect(280, 200, 60, 220);
fill(0, 160, 0, 255); // rgba, last arg is transparency (alpha)
circle(310, 120, 200);

noStroke(); // removes stroke
noFill(); // removes fill

// ground
fill(0, 50, 0);
rect(0, 300, 640, 60);

// character

fill(255);
circle(120,180,80);
fill(255);
rectMode(CENTER);
rect(120,220,40,100);
rect(105,280,10,40);
rect(135,280,10,40);
fill(0);
circle(100,180,25);
circle(140,180,25);

// PROCESSING FLOW (setup and draw)
// draw = loop
// setup = once
