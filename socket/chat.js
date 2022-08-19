module.exports = (server, socket) => {
  // emit an event
  socket.emit('client:connected', 'Success connected. Your socket id ' + socket.id);

  // send an event to all connected client except the sender
  socket.broadcast.emit('notification', 'Notification from server')

  const send = (payload) => {
    // socket.join(payload.to);
    socket.to(payload.to).emit('new:message', payload.message);
  };

  // listen/subscribe to an event
  socket.on("chat:send", send);
}

/**
 * client.on('notification', callback);
 * 
 * server.emit('notification', dataNotif);
 */