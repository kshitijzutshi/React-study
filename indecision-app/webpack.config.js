// Mention entry -> output

const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    // give absolute path
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rule: [
      {
        loader: "babel-loader",
        // On which file to use babel loader regex
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
};
