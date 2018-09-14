const createUserinterface = function() {
  preloader = select("#loading");

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

  rangeSpread = select("#rangeSpread");
  rangeSpread.input(redraw);

  rangeSamplerate = select("#rangeSamplerate");
  rangeSamplerate.input(redraw);

  selectRenderingtype = select("#selectRenderingtype");
  selectRenderingtype.input(redraw);

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
}
