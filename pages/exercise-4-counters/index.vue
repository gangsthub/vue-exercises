<template>
    <section class="container">
        <back-button></back-button>
        <div v-html="hustonHtml"></div>
        <!-- 🚀 Add the button components -->
    </section>
</template>

<script>

import { hustonText } from './hustonText';
import setHustonText from '~/mixins/setHustonText';
import callingHuston from '~/mixins/callingHuston';
import backButton from '~/mixins/backButton';

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
    mixins: [ setHustonText, callingHuston, backButton ],
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
