<template>
  <div class="container mx-auto py-6 flex-1 flex items-center">
    <div class="flex flex-col">
      <div class="my-4 text-4xl text-semibold text-blue">
        Hiya, I'm Nick, a Full-stack Developer!
      </div>

      <div class="my-4 text-grey-darker text-3xl font-thin">
        I enjoy building web applications using
        <vue-typer :text='["Laravel", "Vue.js", "Angular", "Webpack"]'></vue-typer>.
      </div>

      <div class="my-4 flex">
        <router-link class="rounded-lg shadow-lg block p-4 bg-blue hover:bg-blue-dark border-b-4 border-blue-darker text-white text-lg" to="/work">
          Have a look at my work so far!
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    data () {
      return {
        msg: 'Message'
      }
    },
    head: {
      title: {
        inner: 'Drop me a line!'
      }
    }
  }
</script>

<style scoped>
</style>