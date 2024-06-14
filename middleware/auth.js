export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.cookies.token) {
    // const path = context.route.path
    
    store.state.cookies.beforePath = 'hahahah'
    redirect('/login')
  }
}
