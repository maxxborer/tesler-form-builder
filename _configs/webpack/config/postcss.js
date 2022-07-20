/**
 * @see https://github.com/postcss/postcss
 */
const { isProd } = require("../utils/env");
const { arrayFilterEmpty } = require("../utils/helpers");

module.exports = () => {
  const plugins = arrayFilterEmpty(
    ["autoprefixer", isProd ? "cssnano" : false].filter(Boolean),
  );
  return {
    plugins,
  };
};
