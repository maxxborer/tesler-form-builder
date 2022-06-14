const join = require("path").join;

const mode = process.env.NODE_ENV || "production";
exports.mode = mode;
const isDevServer = process.env.WEBPACK_IS_DEV_SERVER === "true";
exports.isDevServer = isDevServer;
const isProd = mode === "production";
exports.isProd = isProd;
const isDev = !isProd;
exports.isDev = isDev;
const rootDir = join(__dirname, "../../../");
exports.rootDir = rootDir;
const webpackDir = join(__dirname, "../");
exports.webpackDir = webpackDir;
const defaultPort = 3000;
exports.defaultPort = defaultPort;
