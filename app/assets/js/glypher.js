class Glypher {
  constructor() {
    this.updateValues();
  }

  updateValues() {

    // Get data from DOM input fields
    this.letter = inputGlypher.value();
    this.fontsize = rangeFontsize.value();
    this.type = selectParticle.value();
    this.spread = rangeSpread.value();
    this.radius = rangeParticlesize.value();
    this.sample = rangeSamplerate.value();
    this.deformer = selectDeformertype.value();
    this.renderingtype = selectRenderingtype.value();

    // Calculate position and size properties
    this.offset = this.centerPosition();
    this.points = this.calcPoints();
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
        let t = this.letter;
        let x = this.offset.x;
        let y = this.offset.y;
        let s = this.fontsize;
        let options = {
          sampleFactor: this.sample,
          //simplifyThrashold: 0
        };
    return font.textToPoints(t, x, y, s, options);
  }

  renderType() {
    let points = this.points;

    let noiseValue = 0;
      for (let i = 0; i < points.length; i++) {
         let x = points[i].x;
         let y = points[i].y;

         if (this.renderingtype == "gradient") {
           noStroke();
           fill(map(i, 0, points.length, 0 ,255));
         }

         if (this.deformer == "random") {
           x += random(-this.spread, this.spread);
           y += random(-this.spread, this.spread);
         } else if (this.deformer == "noise") {
           x += noise(noiseValue) * this.spread;
           noiseValue += 0.3;
         } else if (this.deformer == "sine") {
           x += sin(i) * this.spread;
           y += sin(i) * this.spread;
         }

         if (this.type == "point") {
           point(x, y);
         } else if (this.type == "ellipse") {
           ellipse(x, y, this.radius, this.radius);
         } else if (this.type == "square") {
           rectMode(CENTER);
           rect(x, y, this.radius, this.radius);
         } else if (this.type == "landscape") {
           line(x, y, x + this.radius, y);
         } else if (this.type == "portrait") {
           beginShape();
           vertex(x, y);
           vertex(x + this.radius, y);
           vertex(x + this.radius, y + this.radius);
           endShape(CLOSE)
         }
      }


    //textFont(font);
    //textSize(this.fontsize);
    //text(this.letter, this.offset.x, this.offset.y);
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
      fill(0)
    }
    this.renderType();
  }
}
