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
    this.renderingtype = selectRenderingtype.value();
    // Calculate position and size properties
    this.offset = this.centerPosition();
    this.points = this.calcPoints();

    this.particles = this.setParticles();
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
    let prts = [];

    for (let i = 0; i < this.points.length; i++) {
      let coord = {
        x: this.points[i].x,
        y: this.points[i].y
      }
      prts.push(new Particle(coord, 3, 50));
    }
    return prts;
  }

  renderParticles() {
    let i = 0;
    let n = 0;

    for (let p of this.particles) {

      if (this.renderingtype == "gradient") {
        noStroke();
        fill(map(i, 0, this.points.length, 20, 255), 0, 100, 10);
      }
      if (this.deformer == "random") {
        p.position.x += random(-this.spread, this.spread);
        p.position.x += random(-this.spread, this.spread);
      } else if (this.deformer == "noise") {
        p.position.x += noise(n) * this.spread;
        n += 0.3;
      } else if (this.deformer == "sine") {
        p.position.x += sin(i) * this.spread;
        p.position.x += sin(i) * this.spread;
      }

      p.render();
      i++;
    }
  }

  render() {
    if (this.renderingtype == "wireframe") {
      stroke(0);
      noFill();
    } else if (this.renderingtype == "outline") {
      stroke(0);
      fill(255);
    } else if (this.renderingtype == "solid") {
      noStroke();
      fill(0, 20);
    }
    //this.renderType();
    this.renderParticles();
  }
}
