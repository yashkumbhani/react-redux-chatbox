export default function(io) {
  io.on('connection', function(socket) {
    socket.join('Lobby');
    socket.on('chat', function(user) {
    });

    socket.on('new message', function(msg) {
      socket.broadcast.to(msg.channelID).emit('new bc message', msg);
    });

    socket.on('join channel', function(channel) {
      socket.join(channel.name);
    });
  });
}
