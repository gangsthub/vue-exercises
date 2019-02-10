<template>
    <section class="container">
        <div v-html="hustonHtml"></div>

        <!-- 🚀 Add the button components here ⬇ -->

    </section>
</template>

<script>

import { hustonText } from './hustonText';
import setHustonText from '~/mixins/setHustonText';
import callingHuston from '~/mixins/callingHuston';

export default {
    name: 'Counters',
    head() {
        return {
            title: 'Counters',
        };
    },
    data() {
        return {
            hustonHtml: hustonText
        };
    },
    mixins: [ setHustonText, callingHuston ],
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
