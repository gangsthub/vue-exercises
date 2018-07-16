// hiding this here to leave the page cleaner for the exercises
// but you dont NEED to put text in Vue or Nuxt like this.
// You can use Markdown with some plugins
// Just making use of Javascript to leave cleaner the exercise page
// There is a better way of doing this, actually, https://github.com/linusborg/portal-vue
// I'll add it to my ToDo list

export const hustonText =

`Ok, time to make some changes in the UI dinamically.<br><br>
Go to he <code>components/HustonWrapper.vue</code>. You'll see that the image path is being read from the state directly.<br><br>
If you are comming form React.js + Redux experience, this may seem 2 weird 4 ya..., I know.
<br><br>
There is a list of 5 images at <code>static/images/nasa</code>. They are <b>physicists</b>, <b>engineers</b>, <b>mathematicians</b>,
<b>scientists</b> women from Nasa. Their names are:
<br><br>
<ol class="indented-list">
  <li class="mb-3"><a href="https://en.wikipedia.org/wiki/Christine_Darden"
    target="blank" rel="noopener noreferer"
    title="https://en.wikipedia.org/wiki/Christine_Darden"
    >Christine Darden</a></li>
  <li class="mb-3"><a href="https://en.wikipedia.org/wiki/Dorothy_Vaughan"
    target="blank" rel="noopener noreferer"
    title="https://en.wikipedia.org/wiki/Dorothy_Vaughan"
    >Dorothy Vaughan</a></li>
  <li class="mb-3"><a href="https://en.wikipedia.org/wiki/Katherine_Johnson"
    target="blank" rel="noopener noreferer"
    title="https://en.wikipedia.org/wiki/Katherine_Johnson"
    >Katherine Johnson</a></li>
  <li class="mb-3"><a href="https://en.wikipedia.org/wiki/Mary_Jackson_(engineer)"
    target="blank" rel="noopener noreferer"
    title="https://en.wikipedia.org/wiki/Mary_Jackson_(engineer)"
    >Mary Jackson</a></li>
  <li class="mb-3">The last one is one of my favourite rappers,
    <a href="https://es.wikipedia.org/wiki/Kase.O"
      target="blank" rel="noopener noreferer"
      title="https://es.wikipedia.org/wiki/Kase.O"
    >Kase O</a>, hahahaha.</li>
</ol>
<br><br>
Ok, if you want to complete the app, this is your last exercise! 🎉🎉<br><br>
<ul class="indented-list">
  <li class="mb-3">I want you to create an action within Vuex store, that calls a mutation (like a reducer in Redux), that changes
  the state's property <code>hustonTopImage</code> with a given string.</li>
  <li class="mb-3">In every page, use the vue's <a href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram" target="blank"
  rel="noopener noreferer">life hook</a> <code>mounted()</code></li>
  <li class="mb-3">If you dig deeper you will see I'm making the same in <code>mixins/setHustonText.js</code> to keep it DRY. If
  you want to use a mixin, or repeat the code on each page is up to you. But,
  </li>
  <li class="mb-3">the FIVE images must be displayed in each page instead of the astronaut.
  And matching the index of each one. So, on page 1, we should see \`Christine Darden\` and
  for this page in particular, I better see some MCs! 😂😂
  </li>
</ul>
Good luck!
`;
