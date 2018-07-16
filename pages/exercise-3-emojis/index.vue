<template>
    <div class="container">
        <back-button></back-button>
        There's nothing here yet (delete me)
        <!-- 🚀 Insert it here ⬇. And delete that ↖ -->
    </div>
</template>

<script>
import { hustonText } from './hustonText';
import setHustonText from '~/mixins/setHustonText';
import callingHuston from '~/mixins/callingHuston';
import backButton from '~/mixins/backButton';

export default {
    name: 'emojis',
    head () {
        return {
            title: 'This are my emojis'
        }
    },
    data() {
        return {
            hustonHtml: hustonText
        }
    },
    mixins: [ setHustonText, callingHuston, backButton ],
}
</script>
