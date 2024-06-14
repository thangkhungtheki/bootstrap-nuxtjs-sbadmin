export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.cookies?.token) {
    // const path = context.route.path
    
    store.commit('cookies/SET_BEFORCE_PATH', 'hahahaha')
    redirect('/login')
  }
}
