const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  cleanOnceBeforeBuildPatterns: [
    "**/*",
    "!profile.json",
    "!tsconfig.tsbuildinfo",
  ],
};

exports.cleanWebpackPlugin = new CleanWebpackPlugin(config);
