import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

import routerConfig from './router'

Vue.use(VueRouter)
Vue.use(VueResource)

// Vue.http.options.root = 'api'
// Vue.http.options.xhr = {credentials: true}

var router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true
}).map(routerConfig)

router.start(App, '#app')
