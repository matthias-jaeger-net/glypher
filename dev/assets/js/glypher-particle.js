class Particle {
  constructor (coord, polycount, rotation) {
    this.polycount = polycount;
    this.position = createVector(coord.x, coord.y);
    this.radius = rangeSpread.value();
    this.rotation = rotation;
  }
  render () {
    let x = this.position.x;
    let y = this.position.y;
    let r = this.polycount;
    let angle = TWO_PI / rangeParticlesize.value();

    push();
    translate(x, y);
    rotate(map(this.rotation, 0, 1, 0, TAU));
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = cos(a) * this.radius;
      let sy = sin(a) * this.radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
    pop();
  }
}
