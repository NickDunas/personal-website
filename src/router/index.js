import Vue from 'vue';
import VueHead from 'vue-head';
import Router from 'vue-router';
import Intro from '@/components/pages/Intro';
import Work from '@/components/pages/Work';
import Notes from '@/components/pages/Notes';
import Bio from '@/components/pages/Bio';
import Contact from '@/components/pages/Contact';

Vue.use(VueHead);
Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/notes',
      name: 'Notes',
      component: Notes
    },
    {
      path: '/bio',
      name: 'Bio',
      component: Bio
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
});
