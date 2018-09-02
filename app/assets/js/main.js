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
let g;

let inputGlypher,
selectParticle,
rangeFontsize,
rangeParticlesize,
rangeSamplerate,
selectDeformertype,
rangeSpread,
rangeSamplerange;

function preload() {
   font = loadFont("assets/fonts/Cormorant_Garamond/CormorantGaramond-Bold.ttf");
   createUserinterface();
}

function setup() {
   canvas = createCanvas(window.innerWidth-350, window.innerHeight);
   g = new Glypher();
}

function draw() {
  noLoop();
    background(255);
    g.updateValues();
    g.render();
}
