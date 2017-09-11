const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log("new user");

  socket.emit('newMessage', {
     from: 'Admin',
     text: 'welcome to chat room',
     createdAt:new Date().getTime()
     });

     socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'new user joined',
        createdAt:new Date().getTime()
       });

  socket.on('createMessage', (message) =>{
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
       text: message.text,
       createdAt:new Date().getTime()

     });
    // socket.broadcast.emit('newMessage', {
    //    from: message.from,
    //    text: message.text,
    //   createdAt:new Date().getTime()
    //   });
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });
});

server.listen(port, () => {
  console.log(`server running on ${port} ` );
})
