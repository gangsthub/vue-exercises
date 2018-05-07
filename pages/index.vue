<template>
    <section class="container white">
        <div class="mb-3"><img src="images/cover.jpg" alt="Jumbo image"></div>
        <h1 class="subheading"><a
            href="https://github.com/gangsthub/vue-exercises"
            target="_blank"
            rel="noopener noreferer"
        >
            https://github.com/gangsthub/vue-exercises
        </a></h1>
        <p class="subheading my-4">
            1️⃣ Go to the first exercise:
            <nuxt-link
                tag="span"
                class="ibm subheading c-p primary--text"
                :to="{
                    path: `/hello-world`
                }"
            >/hello-world</nuxt-link>
        </p>
    </section>
</template>

<script>

import setHustonText from '~/mixins/setHustonText';

export default {
    name: 'Home',
    head() {
        return {
            title: 'Home',
            meta: [
                {
                    name: 'description',
                    content: 'This is the interactive Vue course were in wich you do the own course by ' +
                        'coding with Vue.js',
                    hid: 'description'
                }
            ]
        };
    },
    data() {
        return {
            hustonHtml: 'Nothing to see here, go to the first exercise'
        }
    },
    mixins: [ setHustonText ],
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
