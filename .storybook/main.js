module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    {
      name: 'storybook-preset-less',
      options: {
        lessLoaderOptions: {
          sourceMap: true,
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      }
    },
  ],
  "framework": "@storybook/react",
}
