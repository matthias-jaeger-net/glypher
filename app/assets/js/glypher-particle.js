class Particle {
  constructor (coord, polycount, radius) {
    this.polycount = polycount;
    this.position = createVector(coord.x, coord.y);
    this.radius = radius;
  }
  render () {
    let x = this.position.x;
    let y = this.position.y;
    let r = this.polycount;
    let angle = TWO_PI / rangeParticlesize.value();

    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * rangeSpread.value();
        let sy = y + sin(a) * rangeSpread.value();
        vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}
