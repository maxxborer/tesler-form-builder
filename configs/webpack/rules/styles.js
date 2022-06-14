const { arrayFilterEmpty } = require("../utils/helpers");

const {
  cssLoader,
  cssLoaderItems,
  cssModulesSupportLoaderItems,
  lessLoader,
  miniCssExtractLoader,
  postCssLoader,
  resolveUrlLoader,
  sassLoaderItems,
} = require("./useLoaderRuleItems");

/** css **/
const cssRule = {
  test: /\.css$/,
  use: [miniCssExtractLoader, cssLoader, postCssLoader],
};

/** less **/
exports.cssRule = cssRule;
const lessModulesRule = {
  test: /\.module.less$/,
  use: arrayFilterEmpty([
    ...cssModulesSupportLoaderItems,
    postCssLoader,
    resolveUrlLoader,
    lessLoader,
  ]),
};
exports.lessModulesRule = lessModulesRule;
const lessRule = {
  test: /\.less$/,
  exclude: /\.module.less$/,
  use: arrayFilterEmpty([
    ...cssLoaderItems,
    postCssLoader,
    resolveUrlLoader,
    lessLoader,
  ]),
};
exports.lessRule = lessRule;
const lessRules = [lessModulesRule, lessRule];

/** sass **/
exports.lessRules = lessRules;
const sassModulesRule = {
  test: /\.module\.s([ca])ss$/,
  use: arrayFilterEmpty([
    ...cssModulesSupportLoaderItems,
    postCssLoader,
    resolveUrlLoader,
    ...sassLoaderItems,
  ]),
};
exports.sassModulesRule = sassModulesRule;
const sassRule = {
  test: /\.s([ca])ss$/,
  exclude: /\.module.scss$/,
  use: arrayFilterEmpty([
    ...cssLoaderItems,
    postCssLoader,
    resolveUrlLoader,
    ...sassLoaderItems,
  ]),
};
exports.sassRule = sassRule;
const sassRules = [sassModulesRule, sassRule];
exports.sassRules = sassRules;
