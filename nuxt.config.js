const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

// <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
// <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
// <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
// <link rel="manifest" href="/site.webmanifest">
// <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        titleTemplate: '%s – Vue Exercises',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' },
            { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#da532c' },
            { hid: 'theme-color', name: 'theme-color', content: '#fafafa' },
        ],
        link: [
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
            },
            { rel: 'apple-touch-icon', sizes: '180x180', href: 'images/favicons/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'images/favicons/favicon-32x32.png?v=2' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'images/favicons/favicon-16x16.png?v=2' },
            { rel: 'manifest', href: 'images/favicons/site.webmanifest' },
            { rel: 'mask-icon', color: '#5bbad5', href: 'images/favicons/safari-pinned-tab.svg' },
        ]
    },
    /*
    ** Global CSS
    */
    css: [
        '~/assets/css/main.css',
        { src: '~/assets/stylus/app.styl', lang: 'styl' },
        { src: '~/assets/scss/main.scss', lang: 'scss' },
    ],
    /*
    ** Add axios globally
    */
    build: {
        vendor: [
            'babel-polyfill',
            'vuetify'
        ],
        /*
        ** Run ESLINT on save
        */
        extractCSS: true,
        babel: {
            // https://github.com/nuxt/nuxt.js/issues/3199
            presets() {
                if (process.server) return null; // Use default
                return [
                    ['vue-app', {
                        targets: {
                            chrome: 40,
                            edge: 9,
                            firefox: 40,
                            ie: 9,
                            safari: 7
                        }
                    }]
                ];
            }
        },
        extend(config) {
            // const alias = config.resolve.alias = config.resolve.alias || {};
            // alias['three-extras'] = path.join(__dirname, 'node_modules/three/examples/js/');
            if (process.server) {
                config.externals = [
                    nodeExternals({
                        whitelist: [/^vuetify/]
                    })
                ];
            }
            // Run ESLINT on save
            if (process.client) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });

                // TODO: webpackHotUpdate is not defined: https://github.com/webpack/webpack/issues/6693
                config.hotMiddleware = {
                    ...config.hotMiddleware,
                    plugins: [
                        ...config.hotMiddleware.plugins,
                        new webpack.HotModuleReplacementPlugin(),
                    ]
                };
            }
        }
    },
    plugins: [
        '~/plugins/vuetify.js', // can't have the no-ssr, sorry
        {
            src: '~/plugins/intersection-observer.js',
            ssr: false
        },
        {
            src: '~/plugins/persisted-state.js',
            ssr: false
        }
    ],
    modules: [
        '@nuxtjs/axios',
    ],
    axios: {
        baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
    },
};
