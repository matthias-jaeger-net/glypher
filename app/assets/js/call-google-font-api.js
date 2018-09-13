
const domElement = document.getElementById("selectFontfamily");
const key =  "AIzaSyATc460rTq2EDcUlkNs1fH4SWnSs1zM8vI";
const url = "https://www.googleapis.com/webfonts/v1/webfonts?key=";

const google_font_api = fetch(url + key)
.then(function(response) {
    return response.json();
  }).then(function(fonts) {
    for (let font of fonts.items) {
      domElement.innerHTML += "<option value=" + font.files.regular +  ">" + font.family + "</option>";
  }
});
