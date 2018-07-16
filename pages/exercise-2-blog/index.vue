<template>
    <v-layout column class="container">
        <back-button></back-button>
        <v-flex xs12 sm8 offset-sm2>
            <v-container fluid grid-list-lg>
                <v-layout row wrap>
                    <v-flex
                        v-for="post in posts"
                        :key="post.id"
                        md6
                        class="post"
                    >
                        <!-- BTW, the posts are actual links -->
                        <v-card
                            nuxt
                            hover
                            :to="{
                                path: `/exercise-2-blog/${ post.id }`,
                                param: post.id
                            }"
                        >
                            <v-card-title primary-title>
                                <div class="headline primary--text">{{ post.title }}</div>
                            </v-card-title>
                            <v-card-text>
                                <!-- 🚀 Insert it here ⬇ -->
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
import backButton from '~/mixins/backButton';

import { hustonText } from './hustonText';

import setHustonText from '~/mixins/setHustonText';
import callingHuston from '~/mixins/callingHuston';

export default {
    name: 'Blog',
    head () {
        return {
            title: 'Blog'
        }
    },
    data() {
        return {
            posts: [],
            hustonHtml: hustonText
        }
    },
    asyncData ({ app }) {
        return app.$axios.$get('/api/posts').then((data) => {
            return { posts: data };
        })
    },
    mixins: [ setHustonText, callingHuston, backButton ],
}
</script>

