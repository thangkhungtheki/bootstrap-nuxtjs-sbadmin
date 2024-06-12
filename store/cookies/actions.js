export default {
    nuxtServerInit({ commit }, { req }) {
    const token = this.$cookies.get('auth_token');

    if (token) {
      commit('SET_TOKEN', token);
    }
  },
  login({ commit }, token) {
    this.$cookies.set('auth_token', token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 ngày
    });
    commit('SET_TOKEN', token);
  },
  logout({ commit }) {
    this.$cookies.remove('auth_token');
    commit('SET_TOKEN', null);
  },
  onlogin({commit}, token){
    commit("SET_TOKEN", token)
  }
}