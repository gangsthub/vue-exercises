import {
    mount,
    createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import Hello from '~/pages/exercise-1-hello-world/index.vue';
import store from '../../../fixtures/store';

describe('Home /', () => {
    let localVue;

    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(Vuetify);
        localVue.use(Vuex);
    });

    it('renders Hello world page', () => {
        const wrapper = mount(Hello, {
            localVue: localVue,
            store: store(),
            stubs: ['nuxt-link', 'the-satelite']
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
        expect(wrapper.vm.$el).toMatchSnapshot();
    });

    afterAll(() => {
        localVue.destroy();
    });
});
