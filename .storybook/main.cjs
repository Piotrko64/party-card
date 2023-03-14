module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "storybook-addon-react-router-v6",
        "storybook-react-i18next",
    ],
    staticDirs: ["../public"],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-vite",
    },
    features: {
        storyStoreV7: true,
    },
};
