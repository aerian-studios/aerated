const path = require("path");

module.exports = {
  stories: ["../src/**/*.story.(tsx|mdx)"],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: { configureJSX: true },
    },
    "@storybook/addon-a11y/register",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      oneOf: [
        {
          test: /\.module\.s?css$/,
          loaders: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 2,
              },
            },
            "resolve-url-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
          include: path.resolve(__dirname, "../"),
        },
        {
          test: /\.s?css$/,
          loaders: [
            "style-loader",
            "css-loader",
            "resolve-url-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
          include: path.resolve(__dirname, "../"),
        },
      ],
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx", ".scss");

    return config;
  },
};
