import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from './vuetify-colors';

// https://vuetifyjs.com/
// https://github.com/nuxt/nuxt.js/tree/master/examples/with-vuetify
Vue.use(Vuetify, {
    theme: {
        primary: '#ff4d91',
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
    }
});
