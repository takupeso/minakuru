const state = {
  userInfo: []
}

// getters
const getters = {
  getUserInfo: function (state) {
    return state.userInfo;
  }
}

// actions
const actions = {
  updateUserInfo (context, userInfo) {
    context.commit('updateUserInfo', userInfo);
  }
}

// mutations
const mutations = {
  updateUserInfo(state, getUserInfo) {
    state.userInfo = getUserInfo;
    console.log('mutations:'+state.userInfo.userId)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
