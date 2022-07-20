// const arrayFilterEmpty = array => array.filter(x => !!x);

// const cssModulesSupportLoaderItems = [
//   miniCssExtractLoader,
//   typingsCssModulesLoader,
//   {
//     loader: "css-loader",
//     options: {
//       esModule: false,
//       modules: {
//         exportLocalsConvention: "camelCaseOnly",
//         localIdentName: "[local]__[contenthash:base64:5]",
//       },
//     },
//   },
// ];

// const lessLoader = {
//   loader: "less-loader",
//   options: {
//     sourceMap: true,
//     lessOptions: {
//       javascriptEnabled: true,
//     },
//   },
// };
const CracoLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          /**
           * Fix source map of external dependencies (including @tesler-ui/core)
           *
           * TODO: Remove when https://github.com/facebook/create-react-app/pull/8227 released
           */
          {
            test: /\.(js|css)$/,
            use: ["source-map-loader"],
            enforce: "pre",
          },
          {
            plugin: CracoLessPlugin,
            options: {
              lessLoaderOptions: {
                lessOptions: {
                  // modifyVars: { "@primary-color": "#1DA57A" },
                  javascriptEnabled: true,
                },
              },
            },
          },
          // {
          //   test: /\.module.less$/,
          //   use: arrayFilterEmpty([...cssModulesSupportLoaderItems, lessLoader]),
          // },
          // {
          //   test: /\.less$/,
          //   exclude: /\.module.less$/,
          //   use: arrayFilterEmpty([lessLoader]),
          // },
        ],
      },
      /**
       * Only relevant when applying some dependecies (e.g. @tesler-ui/core) via symlinks,
       * so if you are not working on fixing @tesler-ui/core it can safely be removed
       *
       * TODO: Revise after https://github.com/facebook/create-react-app/pull/7993
       */
      resolve: {
        symlinks: false,
      },
    },
  },
};
