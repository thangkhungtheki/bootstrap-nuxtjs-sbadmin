import io from 'socket.io-client'

const socket = io('http://127.0.0.1:4500',{
    withCredentials: true,
    Headers: {
          "my-custom-header": "abcd"
    }
})

export default socket