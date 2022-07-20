const MonacoPlugin = require("monaco-editor-webpack-plugin");

const config = {
  languages: ["json"],
};

exports.monacoPlugin = new MonacoPlugin(config);
