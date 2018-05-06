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
                                <!-- TO BE DELETED

                                    Now is your turn!

                                        - Add an element with the class `body-1` that contains the `post.extract` here

                                    **Hint**: should be similar markup as the title

                                -->
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: 'Blog',
    head () {
        return {
            title: 'Blog'
        }
    },
    data() {
        return {
            posts: []
        }
    },
    asyncData ({ app }) {
        return app.$axios.$get('/api/posts').then((data) => {
            return { posts: data };
        })
    },
}
</script>

