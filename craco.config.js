const CracoLessPlugin = require("craco-less");

module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */,
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const newConfig = { ...webpackConfig };
      newConfig.resolve.symlinks = false;
      return newConfig;
    },
  },
};
