import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify : new Vuetify({
    icons: {
      iconfont: 'mdi',
    },
  }),
  render: h => h(App)
}).$mount('#app')
