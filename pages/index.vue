<template>
    <section class="container white">
        <div class="mb-3"><img src="images/cover.jpg" alt="Jumbo image"></div>
        <div class="pl-3">
            <h3 class="subheading">Repo: <a
                href="https://github.com/gangsthub/vue-exercises"
                target="_blank"
                rel="noopener noreferer"
            >
                https://github.com/gangsthub/vue-exercises
            </a></h3>
            <p class="subheading mt-4">
                1️⃣ Go to the first exercise:
                <nuxt-link
                    tag="span"
                    class="ibm subheading c-p primary--text"
                    :to="{
                        path: `/exercise-1-hello-world`
                    }"
                >/exercise-1-hello-world</nuxt-link>
            </p>
            <p class="subheading">
                2️⃣ Remember that you have the "help button"
                <v-btn
                    icon
                    slot="activator"
                    @click="callToHuston(true)"
                    color="info"
                >
                    <v-icon>live_help</v-icon>
                </v-btn>
                available on the
                top right corner for every exercise.
            </p>
            <p class="subheading">
                ️3️⃣ Enjoy!
            </p>
        </div>
    </section>
</template>

<script>
import { mapActions } from 'vuex';

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
            hustonHtml: 'Nothing to see here, go to the first exercise! :)'
        }
    },
    mixins: [ setHustonText ],
    methods: {
        ...mapActions(['callToHuston']),
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
