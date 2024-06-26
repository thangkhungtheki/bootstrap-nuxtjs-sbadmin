import io from 'socket.io-client'

const socket = io(process.env.SOCKET_URL,{
    withCredentials: true,
    Headers: {
          "my-custom-header": "abcd"
    }
})

export default socket