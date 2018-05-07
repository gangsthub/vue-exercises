<template>
    <div>
        There's nothing here yet (delete me)
        <!-- 🚀 Insert it here ⬇. And delete that ↖ -->
    </div>
</template>

<script>
import setHustonText from '~/mixins/setHustonText';
import { hustonText } from './hustonText'
export default {
    name: 'emojis',
    data() {
        return {
            hustonHtml: hustonText
        }
    },
    mixins: [ setHustonText ],
}
</script>
