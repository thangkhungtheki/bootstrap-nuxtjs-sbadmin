import io from 'socket.io-client'

const socket = io('http://192.168.2.134:5000',{
    withCredentials: true,
    extraHeaders: {
          "my-custom-header": "abcd"
    }
})

export default socket