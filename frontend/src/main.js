import Vue from 'vue'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import router from './router'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'
import StarRating from 'vue-star-rating'

Vue.component('star-rating', StarRating);

Vue.config.productionTip = false
Vue.use(Vuetify)

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
