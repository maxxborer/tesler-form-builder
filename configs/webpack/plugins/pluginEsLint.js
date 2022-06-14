const { join } = require("path");

const ESLintPlugin = require("eslint-webpack-plugin");

const { rootDir } = require("../utils/env");

const config = {
  context: join(rootDir, "/src"),
  extensions: ["js", "jsx", "ts", "tsx"],
};

exports.esLintPlugin = new ESLintPlugin(config);
