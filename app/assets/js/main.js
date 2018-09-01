/*
*  glypher
*
*  Is a typography experiment using the delicate path of Claus Eggers Sørensens
*
*  Author
*  Matthias Jäger, Graz 2018
*
*  Documentation:
*  https://github.com/matthias-jaeger-net/glypher/
*
*  Rendering with p5js:
*  http://p5js.org/
*/

// 1. Global Variables
// _____________________________________________________________________________

let canvas;
let letter;

// The p5.font class renders the letter with the specified font and size
let font;
let fontpath = "assets/fonts/Cormorant_Garamond/CormorantGaramond-Bold.ttf";
let fontsize = 800;

// A centered letter on the canvas requires to know the bounds.
// Calling font.textBounds(text, x, y, fontSize) returns a rectangle w, h, x, y
let bounds;

// The origin position of a letter is on the baseline.
// To center its position an offset for x and y is calculated in setup()
let xoff;
let yoff;

// Tracing the path of the given letter to render its points in draw()
// Calling font.textToPoints(text, x, y, fontSize) returns p5.Vector objects
let points = [];

// Common radius for <ellipse> and ellipse()
let radius = 2;

// Random spread from -spread to spread
let spread;
let spreadSlider;

let glypherInput;


// 2. Main program
// _____________________________________________________________________________

function preload() {
   font = loadFont(fontpath);
   modal = select(".modal");
   spreadSlider = select("#spreadSlider");
   glypherInput = select("#glypherInput");

}

function setup() {
   // Creating the outputs
   canvas = createCanvas(window.innerWidth, window.innerHeight);

   // Setup rendering style for the canvas
   noStroke();
   fill(0);



}


function draw() {
   noLoop();
   background(255);
   renderGlypher();
}

function renderGlypher() {
  letter = glypherInput.value();
  spread = spreadSlider.value();

  // Calculate the bounding box
  bounds = font.textBounds(letter, 0, 0, fontsize);

  // Centering the letter on the screen:
  if (bounds.h == -bounds.y) {
     // Letter has no ascenders or descenders
     xoff = (width - bounds.w) / 2;
     yoff =  bounds.h + (height - bounds.h) / 2;
  } else {
     // Letter has a descender or ascender
     xoff = (width - bounds.w) / 2;
     yoff =  -bounds.y + (height-bounds.h)/2;
  }
  points = font.textToPoints(letter, xoff, yoff, fontsize);
   for (let a = 0; a < 70; a++) {
     for (let i = 0; i < points.length; i++) {
        // Calculate x and position. Add a random spread
        let x = points[i].x + random(-spread, spread);
        let y = points[i].y + random(-spread, spread);
        ellipse(x, y, radius * 2);
     }
   }
}

function keyPressed() {
  redraw();
}
