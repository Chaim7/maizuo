import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabItem } from 'mint-ui'
Vue.component(Tabbar.name, Tabbar)
Vue.component(Tabbar.name, TabItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
