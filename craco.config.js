const CracoLessPlugin = require("craco-less");
const MonacoPlugin = require("monaco-editor-webpack-plugin");
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */,
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const newConfig = { ...webpackConfig };
      newConfig.output.libraryTarget = "commonjs";
      newConfig.output.filename = "TeslerFormBuilder.js";
      // newConfig.target = "node";
      // newConfig.externals = [nodeExternals()];
      newConfig.resolve.symlinks = false;
      return newConfig;
    },
    plugins: [
      new MonacoPlugin({
        languages: ["json"],
      }),
    ],
  },
};
