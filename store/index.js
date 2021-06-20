export const state = () => ({
    activeclass: "vertical-collpsed",
    menuclosed:true
  })
  
  export const mutations = {
    toggle(state) {
        if(state.activeclass=="vertical-collpsed"){
            state.activeclass="";
        }else{
            state.activeclass="vertical-collpsed";
        }
    },
    menuToggle(state){
        state.menuclosed = state.menuclosed ? false : true;
    }
  }

