var common = require("./common");

Object.keys(common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === common[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return common[key];
    },
  });
});

var svg = require("./svg");

Object.keys(svg).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === svg[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return svg[key];
    },
  });
});

var styles = require("./styles");

Object.keys(styles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === styles[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return styles[key];
    },
  });
});
