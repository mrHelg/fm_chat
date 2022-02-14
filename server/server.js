const http = require('http');
const SocketServer = require('socket.io');
const app = require('./app');
const {Message} = require('./models');
const {SOCKET_EVENTS} = require('./config');

const server = http.createServer(app);
const io = SocketServer(server);

io.on('connection', socket=>{
  socket.on(SOCKET_EVENTS.NEW_MESSAGE, async (newMessage)=>{
    try {
      console.log(SOCKET_EVENTS.NEW_MESSAGE)
      const saveMessage = await Message.create(newMessage);
      io.emit(SOCKET_EVENTS.NEW_MESSAGE,saveMessage);      
    } catch (error) {
      io.emit(SOCKET_EVENTS.NEW_MESSAGE_ERROR,error);
    }
  })
  socket.on('disconnect', reason=>{
    console.log(reason)
  })
})

server.listen(3000, ()=>{
  console.log('server started')
})
