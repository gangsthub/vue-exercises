import {
    mapGetters
} from 'vuex';

export default {
    computed: {
        ...mapGetters(['soloMissionPages']),
        thisPageIsExluded() {
            const route = this.$nuxt.$route.name;
            return Array.isArray(this.soloMissionPages) && !!route && this.soloMissionPages.includes(route);
        }
    },
};
