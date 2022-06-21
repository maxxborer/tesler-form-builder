// development config
const merge = require("webpack-merge").merge;
const resolve = require("path").resolve;

const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const devServerConfig = require("./config/devServer").devServerConfig;
const commonConfig = require("./common");

const devConfig = merge(commonConfig, {
  mode: "development",
  target: "web",
  output: {
    filename: "[name].[fullhash].js",
    path: resolve(__dirname, "../../dist"),
    publicPath: undefined,
  },
  devServer: devServerConfig,
  // devtool: "cheap-module-source-map",
  devtool: "inline-source-map", // form-builder
  plugins: [new ReactRefreshPlugin()],
});

module.exports = devConfig;
