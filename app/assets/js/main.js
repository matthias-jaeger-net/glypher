/*
*  glypher is a typography experiments
*
*  @author Matthias Jäger, Graz 2018
*  Documentation: https://github.com/matthias-jaeger-net/glypher/
*  Rendering with p5js: http://p5js.org/
*/

let glypher, font, inputGlypher, selectParticle, selectDeformertype,
rangeFontsize, rangeParticlesize, rangeSamplerate,
rangeSpread, rangeSamplerange, preloader;

function preload() {
  preloader = select("#loading");
  callGoogleFontApi();
  createUserinterface();
}

function setup() {
  preloader.remove();
  createCanvas(window.innerWidth-250, window.innerHeight);
  glypher = new Glypher();
}

function draw() {
  noLoop();
  background(255);
  glypher.updateValues();
  glypher.render();
}
