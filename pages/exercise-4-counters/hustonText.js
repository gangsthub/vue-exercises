// hiding this here to leave the page cleaner for the exercises
// but you dont NEED to put text in Vue or Nuxt like this.
// You can use Markdown with some plugins
// Just making use of Javascript to leave cleaner the exercise page
// There is a better way of doing this, actually, https://github.com/linusborg/portal-vue
// I'll add it to my ToDo list

export const hustonText =

`🎵 Numbers on the Board! 🎵
<br><br>
It's a very common example: We are going to build a <b>counter</b> component: (We are going to go step by step)
<br><br>
<ol class="mb-3 indented-list">
    <li class="mb-3">
        Create a component called <code>CounterButton</code> under the <code>/components</code> directory
    </li>
    <li class="mb-3">
        The button should display a number and on every <code>@click</code> should increase by one (+1).
    </li>
    <li class="mb-3">
        You can use the <code>&lt;v-btn&gt;&lt;/v-btn&gt;</code> from <em>Vuetify</em> to make it look like the
        <em>Material Design Spec</em> or a regular <code>button</code>.
    </li>
    <li class="mb-3">
        <code>import</code> it on this page (Exercise 4). And include the button twice in the page!
        If you did it right, each button should have it's own state. If you need any help making them displaying
        increments separatedly or you don't know what I'm talking about, you have the explanation at:
        <a href="https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function"
        target="_blank" rel="noopener noreferer"
        class="break"
        >https://vuejs.org/v2/guide/components.html</a>
    </li>
</ol>
<p>They should look like this if you used <em>Vuetify</em>'s button components:</p>
<img class="dashed-border" src="/images/buttons.png">
`;
