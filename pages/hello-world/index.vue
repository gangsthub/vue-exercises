<template>
    <section class="container">
        <div class="satelite-wrapper prel">
            <!-- For the purpouse of a silly animation I added dragging capabilities to this satelite illustration.
            You can omit this comment -->
            <the-satelite></the-satelite>
        </div>

        <div class="title">Hello world!</div>

        <div class="body-1">
            <span v-html="hustonHtml">Nothing here</span>

            <!-- 🚀 Uncomment the code below ⬇ -->

            <!-- <span>If you have this in a second screen, you will see how fast the</span>
            &nbsp;<a href="https://nuxtjs.org/guide#features" target="blank" rel="noopener noreferer">HMR</a>&nbsp;
            <span>works!</span>
            <p class="about-coding-style"> Another thing: I have respected 120 chars per line.
                You can add the rule in your editor too 😋.</p>
            <p><v-icon class="translucent success--text headline">check</v-icon></p> -->


        </div>
    </section>
</template>

<script>

import TheSatelite from '~/components/Satelite.vue';
import setHustonText from '~/mixins/setHustonText';

export default {
    name: 'Hello-world',
    head() {
        return {
            title: 'Home',
            meta: [
                {
                    name: 'description',
                    content: 'First Exercise: also showing that Nuxt has great SEO capabilities here :)!',
                    hid: 'description'
                }
            ]
        };
    },
    data() {
        return {
            hustonHtml: 'Open the app in your <b>editor</b> at <code>pages/index.vue</code>' +
                'and uncomment the code below...<br><br><b>Hint:</b> Search for a space rocket in the code!'
        }
    },
    mixins: [ setHustonText ],
    components: {
        TheSatelite
    }
};
</script>

<style scoped>
.title {
    margin: 30px 0;
}
.satelite-wrapper {
    z-index: 1;
    width: 100%;
    overflow: hidden;
}
</style>
