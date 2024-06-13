// 'use client'
const Cookies = require('js-cookie') 

export default async function ({ store }) {
  console.log('>>>Middleware initAuth')
  // if (process.client) {
    const token = Cookies.get('token',)
    if (token) {
      await store.commit('cookies/SET_TOKEN', token)
    }
  // }
}