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
    path: resolve(__dirname, "../../dist"),
    filename: 'TeslerFormBuilder.js',
    library: 'TeslerFormBuilder',
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true
  },
  resolve: {
    alias: {
      'react': resolve(__dirname, './node_modules/react'),
      'react-dom': resolve(__dirname, './node_modules/react-dom'),
    }
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
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
  plugins: [plugins.miniCssExtractPlugin],
});

module.exports = prodConfig;
