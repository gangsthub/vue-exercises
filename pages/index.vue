<template>
    <section class="container">
        <div class="satelite-wrapper prel">
            <!-- For the purpouse of a silly animation I added dragging capabilities to this satelite illustration.
            You can omit this comment -->
            <the-satelite></the-satelite>
        </div>

        <div class="title">Hello world!</div>

        <div class="body-1">
            <span>
                Open the app in your <b>editor</b> at <code>pages/index.vue</code>
                and uncomment the code below...
            </span>
            <v-icon class="translucent">keyboard_arrow_down</v-icon>

            <span>If you have this in a second screen, you will see how fast the</span>&nbsp;
            <a href="https://nuxtjs.org/guide#features" target="blank" rel="noopener noreferer">HMR</a>&nbsp;
            <span>works!</span>
            <p class="about-coding-style">
                Another thing: I have respected 120 chars per line. You can add the rule in your editor too 😋.
            </p>


        </div>
    </section>
</template>

<script>

import TheSatelite from '~/components/Satelite.vue';

export default {
    head() {
        return {
            title: 'Home',
            description: 'This is the interactive Vue course were in wich you do the own course by coding with Vue.js'
        };
    },
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
