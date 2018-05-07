const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'Vue Exercises',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
            }
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
    ],
    modules: [
        '@nuxtjs/axios',
    ],
    axios: {
        baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
    }
};
