const { join } = require("path");

const CopyPlugin = require("copy-webpack-plugin");

const { rootDir } = require("../utils/env");

const config = {
  patterns: [
    {
      from: join(rootDir, "./public"),
      to: "public",
    },
  ],
};

exports.copyPlugin = new CopyPlugin(config);
