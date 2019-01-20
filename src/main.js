import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import category from './utils/category'
import prefecture from './utils/prefecture'
import formTime from './utils/form-time'
import store from './store'

Vue.config.productionTip = false
Vue.mixin(category)
Vue.mixin(prefecture)
Vue.mixin(formTime)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
