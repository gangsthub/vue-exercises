import isPageExcluded from '~/mixins/isPageExcluded';

export default {
    mixins: [ isPageExcluded ],
    mounted() {
        // To open the right drawer on demand
        if (process.browser && !this.thisPageIsExluded) {
            this.$store.dispatch('callToHuston', true);
        }
    },
};
