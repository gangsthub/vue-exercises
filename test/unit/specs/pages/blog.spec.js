// https: //github.com/piyushchauhan2011/nuxt-with-jest/

import { Nuxt, Builder } from 'nuxt';
import { resolve } from 'path';
import { nuxtConfig } from '~/nuxt.config';

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt;

xdescribe('Blog page', () => {
    // Init Nuxt.js and create a server listening on localhost:4000
    beforeEach(async () => {
        let config = {
            nuxtConfig
        };
        config.rootDir = resolve(__dirname, '../../../../'); // project folder
        config.dev = false; // production build
        nuxt = new Nuxt(config);
        await new Builder(nuxt).build();
        nuxt.listen(3000, 'localhost');
    });

    // Example of testing only generated html
    test('Route /blog exits and render HTML', async () => {
        let context = {};
        const {
            html
        } = await nuxt.renderRoute('/blog', context);
        expect(html.includes('post')).toBeTruthy();
    });

    // Example of testing via dom checking
    test('Route /blog exits and render posts', async () => {
        const window = await nuxt.renderAndGetWindow('http://localhost:3000/blog');
        expect(window.document.querySelectorAll('.post').length).toBeGreaterThan(0);
    });

    // Close server and ask nuxt to stop listening to file changes
    afterEach(() => {
        nuxt.close();
    });
});
