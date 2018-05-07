<template>
    <v-layout column>
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
                                path: `/blog/${ post.id }`,
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
import setHustonText from '~/mixins/setHustonText';

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
            hustonHtml: 'Now is your turn!<br>' +
                        '<br>- Add an element with the class <code>body-1</code> that contains ' +
                        'the <code>post.extract</code> property were our rocket is<br>' +
                        '<br><b>Hint</b>: should be similar markup as the title'
        }
    },
    asyncData ({ app }) {
        return app.$axios.$get('/api/posts').then((data) => {
            return { posts: data };
        })
    },
    mixins: [ setHustonText ],
}
</script>

