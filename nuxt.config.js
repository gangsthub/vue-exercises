const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

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
    /**
     * Is Dev
    */
    dev: process.env.NODE_ENV === 'production',
    /*
    ** Add axios globally
    */
    build: {
        transpile: ['vuetify/lib'],
        plugins: [new VuetifyLoaderPlugin()],
        /*
        ** Run ESLINT on save
        */
        extractCSS: true,
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
};
