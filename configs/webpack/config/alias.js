const { join } = require("path");
const { rootDir } = require("../utils/env");

exports.aliasItems = {
  "@src": (0, join)(rootDir, "/src"),
  "@images": (0, join)(rootDir, "/src/images"),
  "@styles": (0, join)(rootDir, "/src/styles"),
  "@components": (0, join)(rootDir, "/src/components"),
};
