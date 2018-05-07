<template>
    <div class="w80p pa-4">
        <v-list class="transparent">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-icon class="grey lighten-1 white--text">person</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-sub-title>
                    <div class="body-1 mb-3">{{ post.author }}</div>
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
        </v-list>
        <div class="display-2 mb-3">{{ post.title }}</div>
        <div class="body-1 respect-line-breaks mt-3">{{ post.content }}</div>
        <!-- 🚀 There is no exercise to be done in this page, go to emojis! -->
    </div>
</template>

<script>

import setHustonText from '~/mixins/setHustonText';

export default {
    name: 'blog-post',
    head () {
        return {
            title: `Post: ${ this.post.title }`
        }
    },
    data() {
        return {
            post: {
                title: '',
                extract: '',
                content: '',
                author: '',
            },
            hustonHtml: 'Nothing here, you can go to the next exercise! 😊'
        }
    },
    asyncData ({ params, error, app }) {
        return app.$axios.$get('/api/posts/' + params.post)
            .then((res) => {
                return { post: res }
            })
            .catch((e) => {
                error({ statusCode: 404, message: 'Post not found' })
            })
    },
    mixins: [ setHustonText, /* not calling huston here, but setting the text */ ],
}
</script>

<style scoped>
.w80p {
    width: 80%;
}
@media screen and (max-width: 1024px) {
    .w80p {
        width: 100%;
    }
}
.respect-line-breaks {
    white-space: pre-line;
}
</style>
