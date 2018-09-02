function renderGlypher() {

  background(200);


  letter = glypherInput.value();
  spread = spreadSlider.value();
  fontsize = glypherSize.value();
  let type = glypherType.value();
  radius = glypherRadius.value();


  bounds = font.textBounds(letter, 0, 0, fontsize);

  // Centering the letter on the screen:
  if (bounds.h == -bounds.y) {
     // Letter has no ascenders or descenders
     xoff = (width - bounds.w) / 2;
     yoff =  bounds.h + (height - bounds.h) / 2;
  } else {
     // Letter has a descender or ascender
     xoff = (width - bounds.w) / 2;
     yoff =  -bounds.y + (height-bounds.h)/2;
  }
  points = font.textToPoints(letter, xoff, yoff, fontsize);
   for (let a = 0; a < 10; a++) {
     for (let i = 0; i < points.length; i++) {
        // Calculate x and position. Add a random spread
        let x = points[i].x + random(-spread, spread);
        let y = points[i].y + random(-spread, spread);
        if(type == "points") {
          point(x, y);
        } else if(type == "lines") {
          line(x, y, x + radius, y + radius);
        } else {
          ellipse(x, y, radius, radius);
      }
     }
   }
}
