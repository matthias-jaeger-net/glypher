class Glypher {
  constructor() {
    this.updateValues();
  }

  updateValues() {
    // Get data from DOM input fields
    this.letter = glypherInput.value();
    this.fontsize = glypherSize.value();
    this.type = glypherType.value();
    this.spread = spreadSlider.value();
    this.radius = glypherRadius.value();
    this.sample = rangeSample.value();

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
    for (let a = 0; a < 10; a++) {
      for (let i = 0; i < points.length; i++) {
         let x = points[i].x;
         let y = points[i].y;
         point(x, y);
      }
    }
  }

  render() {
    textFont(font);
    textSize(this.fontsize);
    text(this.letter, this.offset.x, this.offset.y);
    this.renderType();
  }
}
