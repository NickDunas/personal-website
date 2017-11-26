import Vue from 'vue';
import VueHead from 'vue-head';
import Router from 'vue-router';
import Intro from '@/components/pages/Intro';
import Portfolio from '@/components/pages/Portfolio';
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
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
});
