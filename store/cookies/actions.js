const Cookies = require('js-cookie') 

export default {
  onlogin({ commit }, token) {
    commit('SET_TOKEN', token)
    Cookies.set('token', token, { expires: 7 }) // expires in 7 days
  },
  initializeAuth({ commit }) {
    const token = localStorage.getItem('token')
    if (token) {
      commit('SET_TOKEN', token)
    }
  },
  logout({ commit }) {
    this.$cookies.remove('auth_token');
    commit('SET_TOKEN', null);
  },
  setBeforcePath({commit}, path){
    commit('SET_BEFORCE_PATH', path)
  }
}