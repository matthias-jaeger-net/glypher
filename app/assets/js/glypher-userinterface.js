function createUserinterface() {
  inputGlypher = select("#inputGlypher");
  inputGlypher.changed(redraw);

  selectParticle = select("#selectParticle");
  selectParticle.changed(redraw);

  rangeFontsize = select("#rangeFontsize");
  rangeFontsize.changed(redraw);

  rangeParticlesize = select("#rangeParticlesize");
  rangeParticlesize.changed(redraw);

  rangeSamplerate = select("#rangeSamplerate");
  rangeSamplerate.changed(redraw);

  selectDeformertype = select("#selectDeformertype");
  selectDeformertype.changed(redraw);

  rangeSpread = select("#rangeSpread");
  rangeSpread.changed(redraw);

  rangeSamplerate = select("#rangeSamplerate");
  rangeSamplerate.changed(redraw);
}
