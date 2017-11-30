<template>
  <div class="flex-1 icons flex items-center">
    <div class="container px-3 lg:px-0 mx-auto py-6 flex">
      <div class="flex flex-col">
        <div class="my-4 text-4xl text-semibold text-blue">
          Hiya, I'm Nick, a Full-stack Developer!
        </div>

        <div class="my-4 text-grey-darker text-3xl font-thin">
          I enjoy building web applications using
          <vue-typer :text='["Laravel", "Vue.js", "Angular", "Webpack"]'></vue-typer>.
        </div>

        <div class="my-4 flex">
          <router-link class="rounded-lg shadow-lg block p-4 bg-blue hover:bg-blue-dark border-b-4 border-blue-darker text-white text-lg hover:text-white" to="/work">
            Have a look at my work so far!
          </router-link>
        </div>
      </div>
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
