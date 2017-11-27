<template>
  <div class="container mx-auto py-6 flex-1 flex flex-wrap items-center">
    <div class="max-w-sm rounded overflow-hidden shadow-lg relative">
      <div class="absolute pin-r my-6 mx-4">
        <a href="http://www.ecwix.com/en" target="_blank" class="text-sm text-white mx-1 rounded border-b-2 border-blue-dark px-3 py-1 shadow bg-blue-light hover:bg-blue">
          View
        </a>
        <a href="https://steel.ecwix.com/register" target="_blank" class="text-sm text-white mx-1 rounded border-b-2 border-blue-dark px-3 py-1 shadow bg-blue-light hover:bg-blue">
          Demo
        </a>
      </div>
      <img src="~@/assets/img/covers/ecwix.jpg" alt="Ecwix Engineering">
      <div class="px-6 py-4">
        <div class="flex">
          <div class="pr-4">
            <img src="~@/assets/img/logos/ecwix.png" class="w-16" alt="Ecwix Engineering">
          </div>
          <div class="">
            <div class="font-semibold text-grey-darker text-2xl my-2 italic">Ecwix Engineering</div>
            <div class="font-thin text-lg text-grey-darker mb-2 italic">Optimized Structural Design</div>
          </div>
        </div>

        <p class="text-grey-darker text-base mt-2">
          A SaaS platform powering the design of steel structures according to the Eurocode. State of the art technologies are implemented to offer a flexible, easy to use web interface.
        </p>
      </div>
      <div class="px-6 py-4 bg-grey-lighter">
        <span class="inline-block bg-grey-lightest shadow rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 my-1">Laravel</span>
        <span class="inline-block bg-grey-lightest shadow rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 my-1">Mysql</span>
        <span class="inline-block bg-grey-lightest shadow rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 my-1">jQuery</span>
        <span class="inline-block bg-grey-lightest shadow rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 my-1">WebGL</span>
        <span class="inline-block bg-grey-lightest shadow rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 my-1">three.js</span>
        <span class="inline-block bg-grey-lightest shadow rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 my-1">d3.js</span>
        <span class="inline-block bg-grey-lightest shadow rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 my-1">Bootstrap</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: {
        inner: 'Let\'s have a look on stuff that I\'ve build!'
      }
    }
  }
</script>

<style scoped>
</style>