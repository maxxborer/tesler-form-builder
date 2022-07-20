const { babelLoader } = require("./useLoaderRuleItems");

/**
 * Using @svgr/webpack for handling svg files in react components
 * @see https://react-svgr.com/docs/webpack/
 */
// const svgReactComponentURLRule = {
//   test: /\.svg$/i,
//   type: "asset",
//   resourceQuery: /url/, // *.svg?url
// };

const svgReactComponentRule = {
  test: /\.svg$/,
  issuer: /\.[jt]sx?$/,
  use: ["@svgr/webpack"],
  // // resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
  // use: [
  //   babelLoader,
  //   {
  //     loader: "@svgr/webpack",
  //     options: {
  //       babel: false,
  //       icon: true,
  //     },
  //   },
  //   // "url-loader",
  // ],
};

/**
 * Using file-loader for handling svg files
 * @see https://webpack.js.org/guides/asset-modules/
 */
exports.svgReactComponentRule = svgReactComponentRule;
const svgRule = {
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  issuer: {
    not: [/\.[jt]sx$/],
  },
  type: "asset/inline",
  // use: [
  //   "file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]",
  //   "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
  // ],
};
exports.svgRule = svgRule;
const svgRules = [
  // svgReactComponentURLRule,
  svgReactComponentRule,
  svgRule,
];
exports.svgRules = svgRules;
