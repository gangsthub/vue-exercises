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
            link: [
                {
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: 'https://fonts.googleapis.com/css?family=Montserrat:900s&text=EORTypeor%201234567890',
                    hid: 'Montserrrat'
                }
            ]
        }
    },
    props: ['error']
};
</script>

<style scoped lang="scss">
.A0 {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.bg {
    background-image: url('~/images/retro-bg.png');
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
    font-size: 5rem!important;
}
.button {
    display: block;
    margin-top: 50px;
}
.shadow {
    $pink: #fb9df4;
    text-shadow: 1px 3px 4px rgba($pink, .3),
                 0 0 6px rgba($pink, .2),
                 0 0 10px rgba($pink, 1),
                 0 0 15px rgba($pink, .2),
                 0 0 30px rgba(darken($pink, 20), .6),
                 0 0 35px rgba($pink, .5),
                 0 0 40px rgba(darken(desaturate($pink, 20), 40), .7)
                 ;
}
</style>
