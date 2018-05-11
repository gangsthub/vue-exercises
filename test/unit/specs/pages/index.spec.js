import {
    mount,
    createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import Home from '~/pages/index.vue';

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
        });
        expect(wrapper.find('.title').exists()).toBe(true);
    });
});
