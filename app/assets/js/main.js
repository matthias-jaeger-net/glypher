/*
*  glypher is a typography experiments
*
*  @author Matthias Jäger, Graz 2018
*  Documentation: https://github.com/matthias-jaeger-net/glypher/
*  Rendering with p5js: http://p5js.org/
*/

const SIDEBAR = 250;

let glypher, font, inputGlypher, selectParticle, selectDeformertype,
rangeFontsize, rangeParticlesize, rangeSamplerate,
rangeSpread, rangeSamplerange, preloader;

function preload() {
  callGoogleFontApi();
  createUserinterface();
}

function setup() {
  preloader.remove();
  createCanvas(window.innerWidth-SIDEBAR, window.innerHeight);
  glypher = new Glypher();
}

function draw() {
  noLoop();
  background(255);
  glypher.updateValues();
  glypher.render();
}
