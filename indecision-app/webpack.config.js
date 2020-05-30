// Mention entry -> output

const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    // give absolute path
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
};
