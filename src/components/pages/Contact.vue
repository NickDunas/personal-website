<template>
  <div class="flex-1 icons flex items-center">
    <div class="container px-3 md:px-0 mx-auto py-6 flex">
      <div class="flex flex-col">
        <div class="my-4 text-4xl text-semibold text-blue">
          Do you have an awesome idea?
        </div>

        <div class="my-4 text-grey-darker text-3xl font-thin">
          Let's discuss about it!
        </div>

        <div class="my-4 flex">
          <a href="mailto:nntounas@gmail.com" class="rounded-lg shadow-lg block p-4 bg-blue hover:bg-blue-dark border-b-4 border-blue-darker text-white text-lg hover:text-white" to="/work">
            Send me a mail
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: {
        inner: 'Drop me a line!'
      }
    }
  }
</script>

<style scoped>
</style>