const { join } = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const { rootDir } = require("../utils/env");

const config = {
  filename: "index.html",
  inject: true,
  template: join(rootDir, "./src/index.html"),
};

exports.htmlWebpackPlugin = new HtmlWebpackPlugin(config);
