import {
    mount,
    createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import Blog from '~/pages/exercise-2-blog/index.vue';
import store from '../../../fixtures/store';

describe('Home /', () => {
    let localVue;

    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(Vuetify);
        localVue.use(Vuex);
    });

    it('renders Blog page', () => {
        const wrapper = mount(Blog, {
            localVue: localVue,
            store: store(),
            stubs: ['nuxt-link']
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
        expect(wrapper.vm.$el).toMatchSnapshot();
    });
});
