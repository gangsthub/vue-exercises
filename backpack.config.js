const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    webpack: (config, options, webpack) => {
        config.entry.main = './server/index.js';
        config.plugins.push(
            new OpenBrowserPlugin({
                url: `http://localhost:${ process.env.PORT || 3000 }`,
                delay: 20000
            })
        );
        return config;
    },
};
