// const { createApp } = require('vue');
// import App from "./App.vue";

import Vue from 'vue'
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import router from './router';
import Dialog from './components/Dialog';
// const app = createApp(App);

library.add(faRocketchat);
library.add(faSignOutAlt);
library.add(faTimes);
library.add(faCircle);
library.add(faExchangeAlt);
library.add(faExclamationTriangle);
library.add(faCheckCircle);
library.add(faBars);
// app.component('base-dialog', Dialog);
// app.component('font-awesome-icon', FontAwesomeIcon);
// app.use(router);
// app.mount('#app');
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
// createApp(App).mount("#app");
