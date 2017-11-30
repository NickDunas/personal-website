<template>
  <div class="container px-3 md:px-0 mx-auto flex-1 my-6">
    <div v-for="list in lists">
      <div class="text-3xl text-grey-dark border-b border-grey-light my-4 pb-2">
        <span class="text-blue">#</span> {{ list.title }}
        <span class="text-xl font-thin text-blue">{{ list.subtitle }}</span>
      </div>

      <div class="flex flex-wrap -mx-4 items-center mb-4">
        <div class="md:w-1/2 lg:w-1/3 px-4" v-for="project in list.projects">
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
  </div>
</template>

<script>
  import ProjectCard from '@/components/layout/ProjectCard';

  export default {
    data () {
      return {
        lists: [
          {
            title: 'Personal',
            subtitle: 'projects',
            projects: [
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
                  'jQuery',
                  'threejs',
                  'Bootstrap',
                  'git'
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
                  'jQuery',
                  'Bootstrap',
                  'git'
                ]
              }
            ]
          },
          {
            title: 'Participating',
            subtitle: 'projects',
            projects: [
              {
                name: 'expivi',
                title: 'Expivi',
                tagLine: 'Innovation in virtual experience',
                start: 'July 2017',
                end: 'November 2017',
                description: 'The next generation online 3D product configurator platform.',
                website: 'http://www.expivi.com',
                demo: '',
                tags: [
                  'Laravel',
                  'Angular',
                  'Bootstrap',
                  'git'
                ]
              }
            ]
          }
        ],
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