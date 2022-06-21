// production config
const merge = require("webpack-merge").merge;
const resolve = require("path").resolve;
const TerserJSPlugin = require("terser-webpack-plugin");

const plugins = require("./plugins");
const commonConfig = require("./common");

const prodConfig = merge(commonConfig, {
  mode: "production",
  target: ["web", "es5"],
  output: {
    filename: "js/bundle.[contenthash].min.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/",
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin({})],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devtool: "source-map",
  externals: {
    react: "React",
    // "react-dom": "ReactDOM", // form-builder
    // moment: 'moment', // form-builder
    // antd: 'antd', // form-builder
  },
  plugins: [plugins.miniCssExtractPlugin],
});

module.exports = prodConfig;
