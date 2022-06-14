// development config
const { merge } = require("webpack-merge");
const { resolve } = require("path");

const commonConfig = require("./common");
const { devServerConfig } = require("./config/devServer");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  target: "web",
  output: {
    filename: "[name].[fullhash].js",
    path: resolve(__dirname, "../../dist"),
    publicPath: undefined,
  },
  devServer: devServerConfig,
  devtool: "cheap-module-source-map",
  // devtool: "inline-source-map", // form-builder
  plugins: [new ReactRefreshPlugin()],
});
