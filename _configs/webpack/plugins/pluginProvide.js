/**
 * @example
 *  const config = {
 *       $: 'jquery',
 *  }
 */
const { ProvidePlugin } = require("webpack");

const config = {};

exports.providePlugin = new ProvidePlugin(config);
