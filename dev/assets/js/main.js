/*
*  glypher is a typography experiment
*
*  Author: Matthias Jäger, Graz 2018
*  Documentation: https://github.com/matthias-jaeger-net/glypher/
*/

const SIDEBAR = 250;

let glypher, font;
let inputGlypher;
let rangeFontsize, rangeParticlesize, rangeSamplerate,rangeSpread, rangeSamplerange;
let rangeBackgroundR, rangeBackgroundG, rangeBackgroundB;
let rangeFillR, rangeFillG, rangeFillB, rangeFillA;
let rangeStrokeR, rangeStrokeG, rangeStrokeB, rangeStrokeA, rangeStrokeweight;
let selectEffects, rangeDeformer;

const buttonSave = document.getElementById("buttonSave");
const preloader = document.getElementById("loading");

let canvas;

function preload() {
  callGoogleFontApi();
  createUserinterface();
}

function setup() {
  canvas = createCanvas(window.innerWidth-SIDEBAR, window.innerHeight);
  glypher = new Glypher();
  preloader.style.display = "none";
}

function draw() {
  noLoop();
  background(rangeBackgroundR.value(), rangeBackgroundG.value(), rangeBackgroundB.value());
  fill(rangeFillR.value(), rangeFillG.value(), rangeFillB.value(), rangeFillA.value());
  stroke(rangeStrokeR.value(), rangeStrokeG.value(), rangeStrokeB.value(), rangeStrokeA.value());
  strokeWeight(rangeStrokeweight.value());
  glypher.updateValues();
  glypher.render();
}
