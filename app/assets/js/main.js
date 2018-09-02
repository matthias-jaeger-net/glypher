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

let font;

let spreadSlider;
let glypherInput;
let glypherSize;
let glypherType;
let glypherRadius;
let rangeSample;

let g;


function preload() {
   font = loadFont("assets/fonts/Cormorant_Garamond/CormorantGaramond-Bold.ttf");
}

function setup() {
   canvas = createCanvas(window.innerWidth-350, window.innerHeight);

   spreadSlider = select("#spreadSlider");
   glypherInput = select("#glypherInput");
   glypherSize = select("#glypherSize");
   glypherType = select("#glypherType");
   glypherRadius = select("#glypherRadius");
   rangeSample = select("#rangeSample");

   g = new Glypher();
}


function draw() {
    background(255);
    g.updateValues();
    g.render();
}
