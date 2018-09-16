module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname = "/dist",
    publicPath: "/",
    filname: "bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  }
};
