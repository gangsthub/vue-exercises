<template>
    <div>
        <div class="title mb-3">{{ post.title }}</div>
        <div class="body-1 mb-3">{{ post.author }}</div>
        <div class="body-1 respect-line-breaks">{{ post.content }}</div>
    </div>
</template>

<script>
export default {
    name: 'blog-post',
    data() {
        return {
            post: {
                title: '',
                extract: '',
                content: '',
                author: '',
            }
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
    head () {
        return {
            title: `Post: ${ this.post.title }`
        }
    }
}
</script>

<style scoped>
.respect-line-breaks {
    white-space: pre-line;
}
</style>
