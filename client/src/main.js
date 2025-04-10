import Vue from 'vue'

import App from './App.vue'
import router from './router'

import store from './store'

import "./index.css";

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
