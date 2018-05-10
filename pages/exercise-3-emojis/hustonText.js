// hiding this here to leave the page cleaner for the exercises
// but you dont NEED to put text in Vue or Nuxt like this.
// You can use Markdown with some plugins
// Just making use of Javascript to leave cleaner the exercise page
// There is a better way of doing this, actually, https://github.com/linusborg/portal-vue
// I'll add it to my ToDo list

export const hustonText = 'Now is your turn!' +
    '<br><br>- Replicate the behaviour of the blog <code>pages/exercise-2-blog/index.vue</code> ' +
    'to list some emojis from the server 😋.' +
    '<br><br>- You can use ' +
    '<a href="https://vuetifyjs.com/en/components/cards" target="blank" rel="noopener noreferer">' +
    '<em>Vuetify</em></a> (wich is the component library based on Material Design that we are using) ' +
    'or plain HTML here.' +
    '<br><br><b>Hint</b>: the endpoint is <code>/api/emojis</code>.' +
    '<br><br><b>Extra points</b>: Leave only the <b>even</b> ones! (using the <code>v-if</code> directive , <code>Array.filter()</code>, ' +
    '<code>Array.reduce()</code>, or anything you come up with): Like this:<br><br>' +
    '<span class="grey--text">1</span> ' +
    '<span class="bold">2</span> ' +
    '<span class="grey--text">3</span> ' +
    '<span class="bold">4</span> ' +
    '<span class="grey--text">5</span> ' +
    '<span class="bold">6</span> ' +
    '<span class="grey--text">7</span> ' +
    '<span class="bold">8</span>...'
;
