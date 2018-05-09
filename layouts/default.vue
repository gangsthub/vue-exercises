<template>
    <v-app>
        <v-navigation-drawer
            :mini-variant.sync="miniVariant"
            :clipped="clipped"
            v-model="drawer"
            fixed
            app
        >
            <v-list>
                <v-list-tile>
                    <v-list-tile-action @click.stop="miniVariant = !miniVariant">
                        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
                    </v-list-tile-action>
                </v-list-tile>
                <v-list-tile
                    router
                    :to="item.to"
                    :key="i"
                    v-for="(item, i) in items"
                    exact
                >
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title" :title="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed app :clipped-left="clipped">
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
             <v-tooltip left>
                 <v-btn
                    icon
                    slot="activator"
                    @click="callToHuston(true)"
                    color="primary"
                >
                    <v-icon>live_help</v-icon>
                </v-btn>
                <span>This is Huston</span>
            </v-tooltip>
        </v-toolbar>
        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>
        <v-navigation-drawer
            temporary
            :right="true"
            :value="hustonOpen"
            v-observe-visibility="onVisibilityChanged"
            fixed
        >
            <huston-wrapper></huston-wrapper>
        </v-navigation-drawer>
        <v-footer app>
            <my-footer/>
        </v-footer>
    </v-app>
</template>

<script>
import MyFooter from '~/components/Footer';
import HustonWrapper from '~/components/HustonWrapper';
import { mapGetters, mapActions } from 'vuex';

export default {
    transition: 'page',
    data() {
        return {
            clipped: false,
            drawer: true,
            items: [
                { icon: 'home', title: 'Mission Control (Home)', to: '/' },
                { icon: 'apps', title: 'Exercise 1 - Hello world', to: '/exercise-1-hello-world' },
                { icon: 'list', title: 'Exercise 2 - Blog', to: '/exercise-2-blog' },
                { icon: 'tag_faces', title: 'Exercise 3 - Listing!', to: '/exercise-3-emojis' },
                {
                    icon: 'trending_up',
                    title: 'Exercise 4 - Counters!',
                    to: '/exercise-4-counters'
                },
            ],
            miniVariant: false,
            right: true,
            title: 'Vue exercises'
        };
    },
    computed: {
        ...mapGetters(['hustonOpen'])
    },
    methods: {
        ...mapActions(['callToHuston']),
        onVisibilityChanged(isVisible) {
            if (process.browser) {

                if (isVisible !== this.hustonOpen) {
                    this.callToHuston(isVisible);
                }

            }
        },
    },
    components: {
        HustonWrapper,
        MyFooter
    }
};
</script>

<style scoped>
.page-enter-active, .page-leave-active {
  transition: opacity .2s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
