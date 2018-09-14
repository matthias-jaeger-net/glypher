const callGoogleFontApi = function () {
  const href = "https://www.googleapis.com/webfonts/v1/webfonts?";
  const key = "key=AIzaSyATc460rTq2EDcUlkNs1fH4SWnSs1zM8vI";
  const query = href + key;
  const selectFontfamily = select("#selectFontfamily");

  this.error = function () {
    console.log("Error loading fonts");
  };

  this.success = function (data) {
    // Store a random font to begin
    const randomElement = floor(random(0, data.items.length));
    font = loadFont(data.items[randomElement].files.regular.slice(5));

    // Remove http: because of mixed content error
    let options = "";
    for (let font of data.items) {
      let str = "" + font.files.regular;
      options += "<option value=" + str.slice(5)  +  ">" + font.family + "</option>";
    }
    selectFontfamily.html(options);
  }

  loadJSON(query, "jsonp", this.success, this.error);
}
