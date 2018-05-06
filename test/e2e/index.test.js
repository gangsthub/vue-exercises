import { resolve } from 'path';
import {
    Nuxt,
    Builder,
} from 'nuxt';
import { JSDOM } from 'jsdom';
import test from 'ava';
import { nuxtConfig } from '../../nuxt.config';

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null;

// Init Nuxt.js and create a server listening on localhost:4000
test.before(async() => {
    const config = {
        ...nuxtConfig,
        dev: false,
        rootDir: resolve(__dirname, '../..'),
    };
    nuxt = new Nuxt(config);
    await new Builder(nuxt).build();
    await nuxt.listen(3000, 'localhost');
}, 100);

// Example of testing only generated html
test('Route / exists and renders HTML', async t => {
    const context = {};
    const { html } = await nuxt.renderRoute('/', context);
    t.true(html.includes('Hello world!</div>'));
});

// Example of testing via dom checking
test('Route / exists and checks that comments were uncommented', async t => {
    const context = {};
    const { html } = await nuxt.renderRoute('/', context);
    const { window } = new JSDOM(html).window;
    const element = window.document.querySelector('.about-coding-style');
    t.not(element, null);
});

// Close server and ask nuxt to stop listening to file changes
test.after('Closing server and nuxt.js', t => {
    nuxt.close();
});
