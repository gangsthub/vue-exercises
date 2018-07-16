<template>
    <div class="px-3">
        <v-btn
            v-if="!thisPageIsExluded && $nuxt.$router.name !== 'index'"
            @click="dontShowAgain"
        >
            Dont show again
        </v-btn>
        <span v-else class="grey--text">Won't be shown again by default&nbsp;</span>
        <span :class="{
            'grey--text': thisPageIsExluded
        }">on this page</span>
    </div>
</template>

<script>
import isPageExcluded from '~/mixins/isPageExcluded';

export default {
    name: 'DontShowAgain',
    methods: {
        dontShowAgain() {
            this.$store.dispatch('addToWontShowAgainPages', this.$nuxt.$route.name);
        }
    },
    mixins: [ isPageExcluded ]
};
</script>
