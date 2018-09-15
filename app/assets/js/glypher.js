class Glypher {
  constructor() {
    this.updateValues();
    this.particles = [];
  }

  updateValues() {
    // Get data from DOM input fields
    this.letter = inputGlypher.value();
    this.fontsize = rangeFontsize.value();
    this.spread = rangeSpread.value();
    this.radius = rangeParticlesize.value();
    this.sample = rangeSamplerate.value();
    this.deformer = selectDeformertype.value();
    // Calculate position and size properties
    this.offset = this.centerPosition();
    this.points = this.calcPoints();

    this.particles = this.setParticles();

    this.rotation = rangeRotation.value();
    this.deformation = rangeDeformer.value();
  }

  centerPosition() {
    // The coordiantes of a letter start on the baseline
    let offset = {};
    // Retrieve bounds from the global font object
    let bounds = font.textBounds(this.letter, 0, 0, this.fontsize);
    // Centering the letter on the screen
    if (bounds.h == -bounds.y) {
      // No ascenders or descenders
       offset.x = (width - bounds.w) / 2;
       offset.y =  bounds.h + (height - bounds.h) / 2;
    } else {
      // Letter has a descender or ascender
       offset.x = (width - bounds.w) / 2;
       offset.y =  -bounds.y + (height-bounds.h)/2;
    }
    return offset;
  }

  calcPoints() {
    const t = this.letter;
    const x = this.offset.x;
    const y = this.offset.y;
    const s = this.fontsize;
    const options = {
      sampleFactor: this.sample,
      //simplifyThrashold: 0
    };
    return font.textToPoints(t, x, y, s, options);
  }

  setParticles() {
    const particleSet = [];
    for (let i = 0; i < this.points.length; i++) {
      const coord = {
        x: this.points[i].x,
        y: this.points[i].y
      }
      // Considering a trinagle as default
      particleSet.push(new Particle(coord, 3, 50, this.rotation));
    }
    return particleSet;
  }

  render() {
    let i = 0, n = 0;
    for (let p of this.particles) {
      if (this.deformer == "random") {
        p.position.x += random(-this.deformation, this.deformation);
        p.position.y += random(-this.deformation, this.deformation);
      } else if (this.deformer == "noise") {
        p.position.x += noise(n) * this.deformation;
        n += 0.3;
      } else if (this.deformer == "sine") {
        p.position.x += sin(i) * this.deformation;
        p.position.x += sin(i) * this.deformation;
      }
      p.render();
      i++;
    }
  }
}
