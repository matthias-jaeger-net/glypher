/*
*  glypher is a typography experiments
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

let preloader;
let font;
let g;
let inputGlypher;
let selectParticle, selectDeformertype;
let rangeFontsize, rangeParticlesize, rangeSamplerate,  rangeSpread, rangeSamplerange;

function preload() {
  preloader = select("#loading");
  let domElement = select("#selectFontfamily");

  loadJSON("assets/php/loadFonts.php", function (data) {
    let opts = "";
    for (let font of data.items) {
      opts += "<option value=" + font.files.regular +  ">" + font.family + "</option>";
    }
    domElement.html(opts);
  }, function () { console.log("Error loading fonts"); });

  font = loadFont("assets/fonts/Cormorant_Garamond/CormorantGaramond-Bold.ttf");

  createUserinterface();
}

function setup() {
  preloader.remove();
  canvas = createCanvas(window.innerWidth-250, window.innerHeight);
  g = new Glypher();
}

function draw() {
  noLoop();
  background(255);
  g.updateValues();
  g.render();
}
