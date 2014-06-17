var net = require('net');

var sockets = [];

var server = net.createServer(function(socket) {
  sockets.push(socket);

  socket.setEncoding('utf-8');
  socket.on('data', function(data) {
    writeToAll(data);
  });
});

server.listen(3000, '127.0.0.1');

function writeToAll(data) {
  sockets.forEach(function(socket) {
    socket.write(data);
  });
}
