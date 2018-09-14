/*
*  glypher is a typography experiment
*
*  @author Matthias Jäger, Graz 2018
*  Documentation: https://github.com/matthias-jaeger-net/glypher/
*  Rendering with p5js: http://p5js.org/
*/

const SIDEBAR = 250;

let glypher, font, inputGlypher, selectParticle, selectDeformertype,
rangeFontsize, rangeParticlesize, rangeSamplerate,
rangeSpread, rangeSamplerange, rangeBackground, preloader;

let canvas;

const buttonSave = document.getElementById("buttonSave");


function preload() {
  callGoogleFontApi();
  createUserinterface();
}

function setup() {
  canvas = createCanvas(window.innerWidth-SIDEBAR, window.innerHeight);
  glypher = new Glypher();
  preloader.remove();
}

function draw() {
  noLoop();
  background(rangeBackground.value());
  glypher.updateValues();
  glypher.render();
}
