const chat = require('./models/chat');

module.exports = function configureSocketIO(io) {
  io.on('connection', function (socket) {
    socket.emit('messages', chat.getMessages());

    socket.on('newMessage', function (data) {
      console.log(`New message: ${data.author}: ${data.message}`);
      chat.addMessage(data);
        io.emit('messages', chat.getMessages());
      });
    });
}