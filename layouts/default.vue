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
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed app :clipped-left="clipped">
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                icon
                @click.stop="rightDrawer = !rightDrawer"
            >
                <v-icon>menu</v-icon>
            </v-btn>
        </v-toolbar>
        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>
        <v-navigation-drawer
            temporary
            :right="true"
            v-model="rightDrawer"
            fixed
        >
        </v-navigation-drawer>
        <v-footer app>
            <my-footer/>
        </v-footer>
    </v-app>
</template>

<script>
import MyFooter from '~/components/Footer';

export default {
    data() {
        return {
            clipped: false,
            drawer: true,
            items: [
                { icon: 'apps', title: 'Home', to: '/' },
                { icon: 'list', title: 'Exercise 1 - Blog', to: '/blog' },
                { icon: 'tag_faces', title: 'Exercise 2 - Listing!', to: '/emojis' },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vue exercises'
        };
    },
    components: {
        MyFooter
    }
};
</script>