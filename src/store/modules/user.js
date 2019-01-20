const state = {
  user: {}
}

// getters
const getters = {
  getUser: function (state) {
    return state.user;
  }
}

// actions
const actions = {
  updateUser (context, user) {
    context.commit('updateUser', user);
  }
}

// mutations
const mutations = {
  updateUser(state, {getUser}) {
    state.user = getUser;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
