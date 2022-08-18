const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const safePostCssParser = require("postcss-safe-parser");
const ESLintPlugin = require("eslint-webpack-plugin");
const MonacoPlugin = require("monaco-editor-webpack-plugin");
const postcssNormalize = require("postcss-normalize");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

const hasJsxRuntime = (() => {
  if (process.env.DISABLE_NEW_JSX_TRANSFORM === "true") {
    return false;
  }

  try {
    require.resolve("react/jsx-runtime");
    return true;
  } catch (e) {
    return false;
  }
})();

const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: "css-loader",
      options: {
        importLoaders: 3,
        modules: {
          mode: "local",
          localIdentName: '[local]--[hash:base64:5]',
        },
        ...cssOptions,
      },
    },
    {
      loader: require.resolve("postcss-loader"),
      options: {
        // ident: "postcss",
        postcssOptions: {
          plugins: [
            require("postcss-flexbugs-fixes"),
            require("postcss-preset-env")({
              autoprefixer: { flexbox: "no-2009" },
              stage: 3,
            }),
            require("autoprefixer"),
            postcssNormalize(),
          ],
        },
        sourceMap: true,
      },
    },
    { loader: require.resolve('scoped-css-loader') },
  ];
  if (preProcessor) {
    loaders.push(
      {
        loader: require.resolve("resolve-url-loader"),
        options: {
          sourceMap: true,
          root: path.resolve(__dirname, "..", "src"),
        },
      },
      {
        loader: require.resolve(preProcessor),
        options: { sourceMap: true },
      }
    );
  }
  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, "..", "src"),
  entry: "./index.tsx",
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "./index.js",
    publicPath: "/",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".less", ".css"],
    modules: ["node_modules"],
  },
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.(js|mjs)$/,
        exclude: /@babel(?:\/|\\{1,2})runtime/,
        loader: require.resolve("babel-loader"),
        options: {
          babelrc: false,
          configFile: false,
          compact: false, // FALSE
          presets: [[require.resolve("babel-preset-react-app/dependencies"), { helpers: true }]],
          plugins: ["babel-plugin-react-scoped-css"],
          cacheDirectory: true,
          cacheCompression: false, // FALSE
          sourceMaps: true,
          inputSourceMap: true,
        },
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: getStyleLoaders({
          importLoaders: 2,
          sourceMap: true,
        }),
        // Remove this when webpack adds a warning or an error for this.
        sideEffects: true,
      },
      // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
      // using the extension .module.css
      {
        test: cssModuleRegex,
        use: getStyleLoaders({
          importLoaders: 2,
          sourceMap: true,
        }),
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: getStyleLoaders(
          {
            importLoaders: 4,
            sourceMap: true,
          },
          "sass-loader"
        ),
        // Remove this when webpack adds a warning or an error for this.
        sideEffects: true,
      },
      // Adds support for CSS Modules, but using SASS
      // using the extension .module.scss or .module.sass
      {
        test: sassModuleRegex,
        use: getStyleLoaders(
          {
            importLoaders: 4,
            sourceMap: true,
          },
          "sass-loader"
        ),
      },
      {
        test: lessRegex,
        exclude: lessModuleRegex,
        use: [
          ...getStyleLoaders({
            importLoaders: 4,
            sourceMap: true,
          }),
          {
            loader: require.resolve("less-loader"),
            options: {
              sourceMap: true,
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      // Adds support for CSS Modules, but using less
      // using the extension .module.scss or .module.less
      {
        test: lessModuleRegex,
        use: [
          ...getStyleLoaders({
            importLoaders: 4,
            sourceMap: true,
          }),
          {
            loader: require.resolve("less-loader"),
            options: {
              sourceMap: true,
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        loader: require.resolve("file-loader"),
        exclude: [
          /\.(js|jsx|ts|tsx|mjs)$/,
          /\.html$/,
          /\.json$/,
          /\.(less|css|config|variables|overrides)$/,
        ],
        options: {
          name: "static/[name].[ext]",
          publicPath: "/",
          emitFile: false,
        },
      },
      // ** STOP ** Are you adding a new loader?
      // Make sure to add the new loader(s) before the "file" loader.
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./TeslerFormBuilder.css",
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorOptions: {
        parser: safePostCssParser,
        map: {
          inline: false,
          annotation: true,
        },
      },
      cssProcessorPluginOptions: {
        preset: [
          "default",
          {
            discardComments: { removeAll: true },
          },
        ],
      },
      canPrint: true,
    }),
    new MonacoPlugin({
      languages: ["json"],
    }),
    new ESLintPlugin({
      extensions: ["js", "mjs", "jsx", "ts", "tsx"],
      formatter: require.resolve("react-dev-utils/eslintFormatter"),
      eslintPath: require.resolve("eslint"),
      failOnError: true,
      context: path.resolve(__dirname, "..", "src"),
      cache: true,
      cacheLocation: path.resolve(__dirname, "..", "node_modules/.cache/.eslintcache"),
      cwd: path.resolve(__dirname, ".."),
      resolvePluginsRelativeTo: path.resolve(__dirname, ".."),
      baseConfig: {
        extends: [require.resolve("eslint-config-react-app/base")],
        rules: {
          ...(!hasJsxRuntime && {
            "react/react-in-jsx-scope": "error",
          }),
        },
      },
    }),
  ],
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM",
    },
  },
};
