<template>
  <div class="container mx-auto py-6 flex-1">
    <div class="text-3xl text-grey-dark font-thin border-b border-grey-light mb-6 py-2">
      # Personal projects
    </div>

    <div class="flex flex-wrap -mx-4 items-center">
      <div class="md:w-1/3 px-4" v-for="project in personalProjects">
        <app-project-card
            :name="project.name"
            :title="project.title"
            :tagLine="project.tagLine"
            :start="project.start"
            :end="project.end"
            :description="project.description"
            :website="project.website"
            :demo="project.demo"
            :tags="project.tags"
        ></app-project-card>
      </div>
    </div>
  </div>
</template>

<script>
  import ProjectCard from '@/components/layout/ProjectCard';

  export default {
    data () {
      return {
        personalProjects: [
          {
            name: 'ecwix',
            title: 'Ecwix Engineering',
            tagLine: 'Optimized Structural Design',
            start: 'October 2014',
            end: 'Till now',
            description: 'A SaaS platform for designing steel connections, dedicated to steel structural engineers.',
            website: 'http://www.ecwix.com/en',
            demo: 'https://steel.ecwix.com/register',
            tags: [
              'Laravel',
              'Mysql',
              'jQuery',
              'WebGL',
              'three.js',
              'd3.js',
              'Bootstrap'
            ]
          },
          {
            name: 'abroker',
            title: 'aBroker.gr',
            tagLine: 'Real Estate Manager',
            start: 'October 2016',
            end: 'Till now',
            description: 'A web application for managing real estate listings, dedicated to greek real estate agencies.',
            website: 'http://www.abroker.gr',
            demo: 'https://demo.abroker.gr/login',
            tags: [
              'Laravel',
              'Mysql',
              'jQuery',
              'd3.js',
              'Bootstrap'
            ]
          }
        ]
      };
    },
    head: {
      title: {
        inner: 'Let\'s have a look on stuff that I\'ve build!'
      }
    },
    components: {
      'app-project-card': ProjectCard
    }
  }
</script>

<style scoped>
</style>