// var _helpers = require("../utils/helpers");

/**
 * @see https://webpack.js.org/configuration/dev-server/#devserverproxy
 */
// const httpProxyTarget = {
//   port: 80,
//   protocol: "http",
// };
// const httpsProxyTarget = {
//   port: 443,
//   protocol: "https",
// };

exports.devServerProxyConfig = {
  /*
  // Example proxy configuration endpoins
  '/world-time': {
      target: `${httpsProxyTarget.protocol}://worldtimeapi.org:${httpsProxyTarget.port}`,
      pathRewrite: pathRewrite('^/world-time/test', '/api'),
      changeOrigin: true,
      secure: false,
  },
  '/someurl/test': {
      target: `${httpsProxyTarget.protocol}://reqres.in:${httpsProxyTarget.port}`,
      pathRewrite: pathRewrite('^/someurl/test', '/api'),
      changeOrigin: true,
      secure: false,
  },
  */
};
