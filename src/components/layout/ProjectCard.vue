<template>
  <div class="w-full rounded overflow-hidden shadow-lg relative">
    <div class="relative">
      <div class="absolute pin-r pin-b my-6 mx-4">
        <a :href="website" target="_blank" class="text-sm text-white mx-1 rounded border-b-2 border-blue-dark px-3 py-1 shadow bg-blue-light hover:bg-blue">
          View
        </a>
        <a :href="demo" target="_blank" class="text-sm text-white mx-1 rounded border-b-2 border-blue-dark px-3 py-1 shadow bg-blue-light hover:bg-blue">
          Demo
        </a>
      </div>

      <p class="absolute pin-l pin-t mx-4 my-6 text-grey-lightest px-3 py-1 shadow rounded bg-red-light text-sm">
        {{ start }} - {{ end }}
      </p>

      <img :src="this.coverUrl" class="w-full" :alt="title">
    </div>

    <div class="px-6 py-4">
      <div class="flex">
        <div class="pr-4">
          <img :src="this.logoUrl" class="w-16" :alt="title">
        </div>
        <div class="">
          <div class="font-semibold text-grey-darker text-2xl my-2 italic">{{ title }}</div>
          <div class="font-thin text-lg text-grey-darker mb-2 italic">{{ tagLine }}</div>
        </div>
      </div>
      <p class="text-grey-darker text-base mt-2">
        {{ description }}
      </p>
    </div>

    <div class="px-6 py-4 bg-grey-lighter">
      <span v-for="tag in tags" class="inline-block bg-grey-lightest shadow rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 my-1">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'name',
      'title',
      'tagLine',
      'start',
      'end',
      'description',
      'website',
      'demo',
      'tags'
    ],

    computed: {
      coverUrl () {
        return require(`@/assets/img/covers/${this.name}.jpg`);
      },
      logoUrl () {
        return require(`@/assets/img/logos/${this.name}.png`);
      }
    }
  }
</script>

<style scoped>
</style>