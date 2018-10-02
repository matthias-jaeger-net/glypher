let canvas;
let colorPicker;
let pickedColor;
let hueColor;
let pickerTarget;
let pickerSize = 255;

let hueBar;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 360, 100, 100);

    colorPicker = createImage(pickerSize, pickerSize);
    hueBar = createGraphics(20, pickerSize);

    pickerTarget = new Target(20, 20);
    hueTarget = new Target(pickerSize + 40, 20, 20);

    for (let h = 0; h < pickerSize; h++) {
        hueBar.stroke(color(h, 100, 100));
        hueBar.line(0, h, 20, h);
    }

    colorPicker.loadPixels();
    for (let px = 0; px < pickerSize; px++) {
      for (let py = 0; py < pickerSize; py++) {
        let sat = map(px, 0, pickerSize, 0, 100);
        let bri = map(py, 0, pickerSize, 0, 100);
        colorPicker.set(py, px, color(hueColor, sat, bri));
      }
    }
    colorPicker.updatePixels();
    colorMode(RGB);
}

function draw() {
  if(pickedColor) {
    background(pickedColor);
  }

  fill(255, 80);
  noStroke();
  rect(0, 0, pickerSize + 20 + 20 + 20 + 20, pickerSize + 20 + 20);
  image(colorPicker, 20, 20);
  image(hueBar, pickerSize + 40, 20);
  pickerTarget.render();
  hueTarget.render();
}

function mousePressed() {
  canvas.loadPixels();
  if (mouseX > 20 && mouseX < 20 + pickerSize) {
    pickedColor = canvas.get(mouseX, mouseY);
    pickerTarget.update(mouseX, mouseY);
  } else if (mouseX > (20 + pickerSize + 20) && mouseX < (20 + pickerSize + 20 + 20)) {
    hueColor = canvas.get(mouseX, mouseY);
    colorPicker
    hueTarget.update(mouseX, mouseY);
  }

}

class Target {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }
  render() {
    noFill();
    stroke(0);
    point(this.pos.x, this.pos.y);
    ellipse(this.pos.x, this.pos.y, 30);
  }
  update(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }
}
