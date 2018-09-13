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

  const domElement = document.getElementById("selectFontfamily");
  const key =  "AIzaSyATc460rTq2EDcUlkNs1fH4SWnSs1zM8vI";
  const url = "https://www.googleapis.com/webfonts/v1/webfonts?key=";

  loadJSON(url+key, "jsonp", function (data) {
    for (let font of data.items) {
      domElement.innerHTML += "<option value=" + font.files.regular +  ">" + font.family + "</option>";
    }
  }, function () {
    console.log("Error loading fonts");
  });

  font = loadFont("assets/fonts/Cormorant_Garamond/CormorantGaramond-Bold.ttf");
  createUserinterface();
}

function setup() {
  preloader.html("Document ready");

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
