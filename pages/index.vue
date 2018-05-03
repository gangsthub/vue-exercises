<template>
    <section class="container">
        <div class="title">Hello world!</div>

        <div class="body-1">
            <span>
                Open the app in your <b>editor</b> at <code>pages/index.vue</code>
                and uncomment the code below...
            </span>
            <v-icon>keyboard_arrow_down</v-icon>
            <!--
                <span>If you have this in a second screen, you will see how fast the</span>
                <a href="https://nuxtjs.org/guide#features" target="blank" rel="noopener noreferer">HMR</a>
                <span>works!</span>
            -->
            <!--
                <p>
                    Another thing: I have respected 120 chars per line. You can add the rule in your editor too 😋.
                </p>
            -->
        </div>
    </section>
</template>

<script>

export default {
    head() {
        return {
            title: 'Home'
        };
    }
};
</script>

<style scoped>
.title {
    margin: 30px 0;
}
.users {
    list-style: none;
    margin: 0;
    padding: 0;
}
.user {
    margin: 10px 0;
}
</style>
