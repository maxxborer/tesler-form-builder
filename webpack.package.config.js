const path = require("path");
const resolve = require("resolve");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const safePostCssParser = require("postcss-safe-parser");
const ESLintPlugin = require("eslint-webpack-plugin");
const MonacoPlugin = require("monaco-editor-webpack-plugin");
const postcssNormalize = require("postcss-normalize");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
const ForkTsCheckerWebpackPlugin = require("react-dev-utils/ForkTsCheckerWebpackPlugin");
const typescriptFormatter = require("react-dev-utils/typescriptFormatter");

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
        importLoaders: 2,
        modules: {
          mode: "local",
          localIdentName: "[name]__[local]",
        },
        ...cssOptions,
      },
    },
    {
      loader: require.resolve("postcss-loader"),
      options: {
        ident: "postcss",
        plugins: () => [
          require("postcss-flexbugs-fixes"),
          require("postcss-preset-env")({
            autoprefixer: { flexbox: "no-2009" },
            stage: 3,
          }),
          postcssNormalize(),
        ],
        sourceMap: true,
      },
    },
  ].filter(Boolean);
  if (preProcessor) {
    loaders.push(
      {
        loader: require.resolve("resolve-url-loader"),
        options: {
          sourceMap: true,
          root: path.resolve(__dirname, "src"),
        },
      },
      {
        loader: require.resolve(preProcessor),
        options: { sourceMap: true },
      },
    );
  }
  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.tsx",
  output: {
    path: __dirname + "/dist",
    filename: "./index.js",
    publicPath: "/",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: ["node_modules"],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
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
          compact: true, // FALSE
          presets: [[require.resolve("babel-preset-react-app/dependencies"), { helpers: true }]],
          cacheDirectory: true,
          cacheCompression: true, // FALSE
          sourceMaps: true,
          inputSourceMap: true,
        },
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: getStyleLoaders({
          importLoaders: 1,
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
          importLoaders: 1,
          sourceMap: true,
          modules: {
            getLocalIdent: getCSSModuleLocalIdent,
          },
        }),
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: getStyleLoaders(
          {
            importLoaders: 3,
            sourceMap: true,
          },
          "sass-loader",
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
            importLoaders: 3,
            sourceMap: true,
            modules: {
              getLocalIdent: getCSSModuleLocalIdent,
            },
          },
          "sass-loader",
        ),
      },
      {
        test: lessRegex,
        exclude: lessModuleRegex,
        use: [
          ...getStyleLoaders({
            importLoaders: 3,
            sourceMap: true,
          }),
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
        // Remove this when webpack adds a warning or an error for this.
        sideEffects: true,
      },
      // Adds support for CSS Modules, but using less
      // using the extension .module.scss or .module.less
      {
        test: lessModuleRegex,
        use: [
          ...getStyleLoaders({
            importLoaders: 3,
            sourceMap: true,
            modules: {
              getLocalIdent: getCSSModuleLocalIdent,
            },
          }),
          {
            loader: "less-loader",
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
        exclude: [/\.(js|jsx|ts|tsx|mjs)$/, /\.html$/, /\.json$/, /\.(less|css|config|variables|overrides)$/],
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
    new ForkTsCheckerWebpackPlugin({
      typescript: resolve.sync("typescript", {
        basedir: path.resolve(__dirname, "node_modules"),
      }),
      async: false,
      checkSyntacticErrors: true,
      // resolveModuleNameModule: process.versions.pnp ? `${__dirname}/pnpTs.js` : undefined,
      // resolveTypeReferenceDirectiveModule: process.versions.pnp ? `${__dirname}/pnpTs.js` : undefined,
      tsconfig: path.resolve(__dirname, "tsconfig.json"),
      reportFiles: [
        // This one is specifically to match during CI tests,
        // as micromatch doesn't match
        // '../cra-template-typescript/template/src/App.tsx'
        // otherwise.
        "../**/src/**/*.{ts,tsx}",
        "**/src/**/*.{ts,tsx}",
        "!**/src/**/__tests__/**",
        "!**/src/**/?(*.)(spec|test).*",
        "!**/src/setupProxy.*",
        "!**/src/setupTests.*",
      ],
      silent: true,
      // The formatter is invoked directly in WebpackDevServerUtils during development
      formatter: typescriptFormatter,
    }),
    new MiniCssExtractPlugin({
      filename: "./TeslerFormBuilder.css",
    }),
    // new ExtractTextPlugin("TeslerFormBuilder.css"),
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
      context: path.resolve(__dirname, "src"),
      cache: true,
      cacheLocation: path.resolve(__dirname, "node_modules/.cache/.eslintcache"),
      cwd: __dirname,
      resolvePluginsRelativeTo: __dirname,
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
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
  node: {
    module: "empty",
    dgram: "empty",
    dns: "mock",
    fs: "empty",
    http2: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty",
  },
};
