import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import category from './utils/category'
import prefecture from './utils/prefecture'
import formTime from './utils/form-time'

Vue.config.productionTip = false
Vue.mixin(category)
Vue.mixin(prefecture)
Vue.mixin(formTime)

// Vue.mixin(category)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
