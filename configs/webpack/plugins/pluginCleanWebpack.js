const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  cleanOnceBeforeBuildPatterns: [
    "**/*",
    "!profile.json",
    "!tsconfig.tsbuildinfo",
  ],
};

module.cleanWebpackPlugin = new CleanWebpackPlugin(config);
