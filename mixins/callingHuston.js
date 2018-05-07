export default {
  mounted() {
      // There's actually a cleaner way to do this called
      // https://github.com/linusborg/portal-vue
      // but for the purpouse of the xourse, this method will make it.
      if (process.browser) {
          this.$store.dispatch('callToHuston', true);
      }
  },
};
