const { defaultPort } = require("../utils/env");

exports.devServerConfig = {
  client: {
    overlay: false,
  },
  // headers: { "Access-Control-Allow-Origin": "*"},
  historyApiFallback: true,
  hot: true,
  // proxy: _devServierProxy.devServerProxyConfig,
  static: {
    publicPath: "/",
  },
  compress: true,
  port: defaultPort,
};
