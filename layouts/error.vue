<template>
    <section class="container transparent">
        <div class="bg A0"></div>
        <div class="layout column centered align-center justify-center">
            <h1 class="title monts white--text shadow">
                ERROR {{ error.statusCode }}
            </h1>
            <h2 class="white--text shadow">
                {{ error.message }}
            </h2>
            <nuxt-link class="button white--text shadow" to="/">
                Go to Home
            </nuxt-link>
        </div>
    </section>
</template>
<script>
export default {
    head() {
        return {
            // <link href="https://fonts.googleapis.com/css?family=Montserrat:900" rel="stylesheet">
            title: 'Error...',
            link: [
                {
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: 'https://fonts.googleapis.com/css?family=Montserrat:900s&text=EORTypeor%201234567890',
                    hid: 'Montserrrat'
                }
            ]
        };
    },
    props: ['error']
};
</script>

<style scoped>
.A0 {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.bg {
    background-image: url('~static/images/retro-bg.png');
    background-position: 20% center;
    background-size: cover;
    z-index: 0;
}
.monts {
    font-family: 'Montserrat', sans-serif;
}
.centered {
    z-index: 1;
    position: relative;
    min-height: 60vh;
}
.title {
    font-size: 5rem !important;
}
.button {
    display: block;
    margin-top: 50px;
}
.shadow {
  text-shadow: 1px 3px 4px rgba(251, 157, 244, 0.3),
                0 0 6px rgba(251, 157, 244, 0.2),
                0 0 10px #fb9df4,
                0 0 15px rgba(251, 157, 244, 0.2),
                0 0 30px rgba(247, 59, 233, 0.6),
                0 0 35px rgba(251, 157, 244, 0.5),
                0 0 40px rgba(176, 28, 165, 0.7);
}
</style>
