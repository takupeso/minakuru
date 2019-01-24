import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import userInfo from './modules/userInfo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userInfo: userInfo
  },
  strict: true,
  plugins: [createPersistedState({
    key: 'minakuru',
    paths: ['userInfo.userInfo'],
    storage: window.sessionStorage
})]
})
