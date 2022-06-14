var alias = require("./alias");

Object.keys(alias).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === alias[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return alias[key];
    },
  });
});

var devServer = require("./devServer");

Object.keys(devServer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === devServer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return devServer[key];
    },
  });
});

var externals = require("./externals");

Object.keys(externals).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === externals[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return externals[key];
    },
  });
});

var sassResources = require("./sassResources");

Object.keys(sassResources).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === sassResources[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return sassResources[key];
    },
  });
});
