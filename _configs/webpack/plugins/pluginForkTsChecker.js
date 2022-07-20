const { join } = require("path");

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const { isDev, rootDir } = require("../utils/env");

const config = {
  async: isDev,
  typescript: {
    configFile: join(rootDir, "/tsconfig.json"),
  },
  // eslint: { enabled: true, files: "../src/**/*.{ts,tsx,js,jsx,json}" },
};

exports.forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin(config);
