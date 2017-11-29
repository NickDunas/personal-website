// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

/**
 * Load font-awesome icons
 */
import 'vue-awesome/icons/twitter';
import 'vue-awesome/icons/github';
import 'vue-awesome/icons/linkedin';
import Icon from 'vue-awesome/components/Icon';

Vue.component('icon', Icon);

Vue.config.productionTip = false;

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
