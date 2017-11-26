<template>
  <div class="my-8">
    <div class="py-4 text-3xl text-semibold text-blue">
      Hello World, I'm Nick Dunas!
    </div>
    <div class="text-grey-darker text-2xl font-thin">
      I enjoy building web applications using
      <vue-typer :text='["Laravel", "Vue.js", "Angular", "Webpack"]'></vue-typer>.
    </div>
  </div>
</template>

<script>
  import { VueTyper } from 'vue-typer'

  export default {
    name: 'Intro',
    components: {
      VueTyper
    },
    data () {
      return {
      }
    },
    head: {
      title: {
        inner: 'Welcome to my personal website!'
      }
    }
  }
</script>

<style scoped>

</style>
