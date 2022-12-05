module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  core: {
    builder: "@storybook/builder-vite", // 👈 The builder enabled here.
  },
  framework: "@storybook/react",
  async viteFinal(config) {
    return {
      ...config,
      define: {
        ...config.define,
        global: "window",
      },
      // esbuild: {
      //   ...config.esbuild,
      //   jsxInject: `import React from 'react'`,
      // },
    };
  },
};
