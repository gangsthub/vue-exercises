import {
    mount,
    createLocalVue
} from '@vue/test-utils';
import Vuetify from 'vuetify';
import Home from '~/pages/index.vue';

describe('Home /', () => {
    let localVue;

    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(Vuetify);
    });

    it('renders home page', () => {
        const wrapper = mount(Home, {
            localVue: localVue,
        });
        expect(wrapper.find('h1.subheading').exists()).toBe(true);
    });
});
