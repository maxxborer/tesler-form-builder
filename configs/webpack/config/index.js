var alias = require("./alias");
var devServer = require("./devServer");
var externals = require("./externals");
var sassResources = require("./sassResources");

module.exports = { ...alias, ...devServer, ...externals, ...sassResources };
