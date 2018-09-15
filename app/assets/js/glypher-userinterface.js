const createUserinterface = function() {
  inputGlypher = select("#inputGlypher");
  inputGlypher.input(redraw);

  rangeFontsize = select("#rangeFontsize");
  rangeFontsize.input(redraw);

  rangeParticlesize = select("#rangeParticlesize");
  rangeParticlesize.input(redraw);

  rangeSamplerate = select("#rangeSamplerate");
  rangeSamplerate.input(redraw);

  selectDeformertype = select("#selectDeformertype");
  selectDeformertype.input(redraw);

  rangeDeformer = select("#rangeDeformer");
  rangeDeformer.input(redraw);

  rangeSpread = select("#rangeSpread");
  rangeSpread.input(redraw);

  rangeSamplerate = select("#rangeSamplerate");
  rangeSamplerate.input(redraw);

  selectFontfamily = select("#selectFontfamily");
  selectFontfamily.input(function() {
    font = loadFont(this.value(), function() {
      redraw();
    });
  });

  rangeBackgroundR = select("#rangeBackgroundR");
  rangeBackgroundR.input(redraw);

  rangeBackgroundG = select("#rangeBackgroundG");
  rangeBackgroundG.input(redraw);

  rangeBackgroundB = select("#rangeBackgroundB");
  rangeBackgroundB.input(redraw);

  buttonSave.addEventListener("click", function () {
    saveCanvas(canvas, "glypher", "jpg");
  });

  rangeFillR = select("#rangeFillR");
  rangeFillR.input(redraw);

  rangeFillG = select("#rangeFillG");
  rangeFillG.input(redraw);

  rangeFillB = select("#rangeFillB");
  rangeFillB.input(redraw);

  rangeFillA = select("#rangeFillA");
  rangeFillA.input(redraw);


  rangeStrokeR = select("#rangeStrokeR");
  rangeStrokeR.input(redraw);

  rangeStrokeG = select("#rangeStrokeG");
  rangeStrokeG.input(redraw);

  rangeStrokeB = select("#rangeStrokeB");
  rangeStrokeB.input(redraw);

  rangeStrokeA = select("#rangeStrokeA");
  rangeStrokeA.input(redraw);

  rangeStrokeweight = select("#rangeStrokeweight");
  rangeStrokeweight.input(redraw);

  rangeRotation = select("#rangeRotation");
  rangeRotation.input(redraw);
}
