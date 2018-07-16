import {
    mount,
    createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import Home from '~/pages/index.vue';
import store from '../../../fixtures/store';

describe('Home /', () => {
    let localVue;

    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(Vuetify);
        localVue.use(Vuex);
    });

    it('renders home page', () => {
        const wrapper = mount(Home, {
            localVue: localVue,
            store: store(),
            stubs: ['nuxt-link']
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
        expect(wrapper.vm.$el).toMatchSnapshot();
    });
});
