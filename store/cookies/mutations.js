export default {
    SET_TOKEN(state, token) {
    state.token = token;
  },
    SET_BEFORCE_PATH (state, path){
      state.beforePath = path
    },
    SET_TOKEN_NULL(state) {
    state.token = null;
    }
}