<template>
  <div class="w-full rounded overflow-hidden shadow-md">
    <div class="relative">
      <div class="absolute pin-r pin-b my-6 mx-4">
        <a v-show="checkUrl(website)" :href="website" target="_blank" class="text-sm text-white mx-1 rounded border-b-2 border-blue-dark px-3 py-1 shadow bg-blue-light hover:bg-blue hover:text-white">
          View
        </a>
        <a v-show="checkUrl(demo)" :href="demo" target="_blank" class="text-sm text-white mx-1 rounded border-b-2 border-blue-dark px-3 py-1 shadow bg-blue-light hover:bg-blue hover:text-white">
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
      <a :href="tagLink(tag)" target="_blank" v-for="tag in tags" class="inline-block bg-grey-lightest shadow rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 my-1 items-center">
        <img :src="tagLogo(tag)" class="h-4 mr-1" :alt="tag"> {{ tag }}
      </a>
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
    },
    methods: {
      checkUrl (url) {
        const regex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
        return regex.test(url);
      },
      tagLogo (tag) {
        return require(`@/assets/img/stack/${tag.toLowerCase()}.png`);
      },
      tagLink (tag) {
        const name = tag.toLowerCase();
        const links = [
          {'name': 'laravel', 'url': 'https://laravel.com'},
          {'name': 'jquery', 'url': 'https://jquery.com'},
          {'name': 'bootstrap', 'url': 'https://getbootstrap.com'},
          {'name': 'angular', 'url': 'https://angular.io'},
          {'name': 'git', 'url': 'https://git-scm.com/'},
          {'name': 'threejs', 'url': 'https://threejs.org/'}
        ];

        return links.find((item) => {
          return item.name === name;
        }).url;
      }
    }
  }
</script>

<style scoped>
</style>