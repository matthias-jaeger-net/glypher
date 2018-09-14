function callGoogleFontApi() {

  let domElement = select("#selectFontfamily");

  loadJSON("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyATc460rTq2EDcUlkNs1fH4SWnSs1zM8vI",
    "jsonp",
    function (data) {
      let opts = "";
      for (let font of data.items) {
        let str = "" + font.files.regular;
        let loc = str.slice(5);
        console.log();
        opts += "<option value=" + loc  +  ">" + font.family + "</option>";
      }
      domElement.html(opts);
      font = loadFont(data.items[0].files.regular);
    },
    function () {
      console.log("Error loading fonts");
  });

}
