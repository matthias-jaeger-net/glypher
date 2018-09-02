function createUserinterface() {
  inputGlypher = select("#inputGlypher");
  inputGlypher.input(redraw);

  selectParticle = select("#selectParticle");
  selectParticle.input(redraw);

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

}
