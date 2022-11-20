import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Slide } from 'vue-burger-menu'

Vue.config.productionTip = false

Vue.component('Slide', Slide)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
