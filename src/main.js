import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import NewList from './components/NewList.vue'
import MyRatings from './components/MyRatings.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/newList', component: NewList },
    { path: '/myRatings', component: MyRatings }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})




