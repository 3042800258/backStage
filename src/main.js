import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'lib-flexible/flexible'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
