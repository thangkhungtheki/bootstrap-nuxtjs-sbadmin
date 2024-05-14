export const state = () => ({
    activeclass: "vertical-collpsed",
    menuclosed: true,
    counter: 0
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

}

export const actions = {
    increment(context) {
        context.commit('increment')
    },
    decrement(context) {
        context.commit('decrement')
    },
}

