<template>
  <div class="container mx-auto py-6 flex-1 text-grey-dark">
    <div class="text-3xl border-b border-grey-light my-4 pb-2">
      <span class="text-blue">#</span> Bio
      <span class="text-xl font-thin text-blue italic">a quick intro</span>
    </div>

    <div class="rounded bg-white shadow p-6 border-l-4 border-grey-light">
      <p class="py-2 leading-normal text-lg">
        My name is Nick Dunas, I am {{ age() }} years old and I live in Thessaloniki, Greece.
      </p>

      <p class="py-2 leading-normal text-lg">
        I hold an M.Eng. in Civil Engineering from the Polytechnic department of the Aristotle University of Thessaloniki, specializing in steel structures. Having worked in Greece as a site engineer for a significant amount of time, I got the opportunity to work in Germany as an industrial steel structural engineer and a steel detailer as well.
      </p>

      <p class="py-2 leading-normal text-lg">
        Nevertheless, technology was always my passion. I am a self-taught web programmer and I have been a freelancer web designer and web developer for many years.
      </p>

      <p class="py-2 leading-normal text-lg">
        In 2014, I decided to quit my job as a Structural Engineer, in Germany, and I decided to make a turn in my career, following my hobby and passion, web development.
      </p>
    </div>

    <div class="text-3xl border-b border-grey-light my-4 pb-2 pt-4">
      <span class="text-blue">#</span> Stack
      <span class="text-xl font-thin text-blue italic">technologies that I am familiar with</span>
    </div>

    <div class="rounded bg-white shadow p-6 border-l-4 border-grey-light">
      <div class="py-2 table">
        <div v-for="pack in stack" class="table-row">
          <div class="table-cell text-blue-dark text-semibold">
            {{ pack.title }}
          </div>
          <div class="table-cell">
            <a :href="tagLink(tag)" target="_blank" v-for="tag in pack.tags" class="inline-block bg-grey-lightest shadow rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 my-1 items-center">
              <img :src="tagLogo(tag)" class="h-4 mr-1" :alt="tag"> {{ tag }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="text-3xl border-b border-grey-light my-4 pb-2 pt-4">
      <span class="text-blue">#</span> Milestones
      <span class="text-xl font-thin text-blue italic">most significant moments in my career</span>
    </div>

    <div class="rounded bg-white shadow p-6 border-l-4 border-grey-light">
      <div class="py-2 table">
        <div v-for="milestone in milestones" class="table-row">
          <div class="table-cell text-blue-dark text-semibold">
            {{ milestone.start }} - {{ milestone.end }}
          </div>
          <div class="table-cell">
            {{ milestone.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        stack: [
          {
            title: 'Frontend',
            language: 'Javascript',
            tags: [
              'Angular', 'VueJs', 'TypeScript', 'ES6', 'jQuery'
            ]
          },
          {
            title: 'CSS',
            language: 'CSS',
            tags: [
              'Bootstrap', 'TailwindCSS', 'Bulma'
            ]
          },
          {
            title: 'Backend',
            language: 'PHP',
            tags: [
              'Laravel'
            ]
          },
          {
            title: 'Tools',
            language: '',
            tags: [
              'git'
            ]
          },
          {
            title: 'Various',
            language: 'Software',
            tags: [
              'Photoshop'
            ]
          }
        ],
        milestones: [
          {
            start: '06/2017',
            end: '11/2017',
            text: 'Working remotely for Expivi, as a Full-Stack Developer.'
          },
          {
            start: '10/2016',
            end: 'Now',
            text: 'Working full-time for my 2nd startup, aBroker - Real Estate Manager, as a Full-Stack Developer.'
          },
          {
            start: '10/2014',
            end: 'Now',
            text: 'Working full-time for my 1st startup, Ecwix Engineering - Optimized Structural Design, as a Full-Stack Developer.'
          },
          {
            start: '2011',
            end: '2014',
            text: 'Working full-time as a Civil Structural Engineer.'
          },
          {
            start: '2010',
            end: '2004',
            text: 'Studied Civil Engineering.'
          },
          {
            start: '2000',
            end: 'Now',
            text: 'Working as a freelancer Full-stack Developer.'
          }
        ]
      };
    },
    methods: {
      age () {
        const date = new Date();
        return date.getFullYear() - 1986;
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
          {'name': 'typescript', 'url': 'https://www.typescriptlang.org/'},
          {'name': 'es6', 'url': 'https://angular.io'},
          {'name': 'git', 'url': 'https://git-scm.com/'},
          {'name': 'threejs', 'url': 'https://threejs.org/'},
          {'name': 'tailwindcss', 'url': 'https://threejs.org/'},
          {'name': 'bulma', 'url': 'https://bulma.io/'},
          {'name': 'photoshop', 'url': 'https://adobe.com/'}
        ];
        const link = links.find((item) => {
          return item.name === name;
        });

        return (link) ? link.url : '';
      }
    }
  }
</script>

<style scoped>
</style>