const babelLoader = require("./useLoaderRuleItems").babelLoader;

/**
 * @see https://webpack.js.org/guides/typescript/#loader
 */
exports.typescriptRule = {
  test: /\.tsx?$/,
  loader: "ts-loader",
  options: {
    transpileOnly: true,
  },
  exclude: /node_modules/,
};

/**
 * @see https://webpack.js.org/loaders/babel-loader
 */
exports.javascriptRule = {
  test: /\.(js|jsx)$/,
  use: [babelLoader],
  exclude: /node_modules/,
};

/**
 * @see https://webpack.js.org/loaders/html-loader
 */
exports.htmlRule = {
  test: /\.(html)$/,
  use: {
    loader: "html-loader",
  },
};

/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
exports.imagesRule = {
  test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
  type: "asset/resource",
  use: [
    "file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]",
    "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
  ],
};

/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
exports.fontsRule = {
  test: /\.(woff(2)?|eot|ttf|otf|)$/,
  type: "asset/inline",
};
