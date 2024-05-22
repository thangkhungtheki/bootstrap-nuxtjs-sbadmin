export const state = () => ({
    activeclass: "vertical-collpsed",
    menuclosed: true,
    counter: 0,
    authenticated: false,
    token: null,
    username: '',
    password: ''
})

export const mutations = {
    toggle(state) {
        if (state.activeclass == "vertical-collpsed") {
            state.activeclass = "";
        } else {
            state.activeclass = "vertical-collpsed";
        }
    },
    menuToggle(state) {
        state.menuclosed = state.menuclosed ? false : true;
    },

    increment(state) {
        state.counter++
    },
    
    decrement(state) {
        state.counter--
    },
    setAuthenticated(state, value) {
        state.authenticated = value
    },
    setToken(state, token) {
        state.token = token
    },
    setUsername(state, username){
        state.username = username
    },
    setPassword(state, password){
        state.password = password
    }
}

export const actions = {
    increment(context) {
        context.commit('increment')
    },
    decrement(context) {
        context.commit('decrement')
    },
    login({ commit }) {
        commit('setAuthenticated', true)
        commit('setToken', token)
    },
    logout({ commit }) {
        commit('setAuthenticated', false)
        commit('setToken', null)
    },
    setPassword({ commit }){
        commit('setPassword', password)
    },
    setUsername({ commit }){
        commit('setPassword', username)
    },
}

