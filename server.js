var net = require('net');

var sockets = [];

var server = net.createServer(function(socket) {
  sockets.push(socket);
  socket.num = sockets.length;

  socket.setEncoding('utf-8');
  socket.on('data', function(data) {
    writeToAll(data);
  });

  socket.on('close', function(){
    console.log(this.num + 'disconnected');
    sockets.splice(this.num - 1 ,1);
    console.dir(sockets);
  })
});

server.listen(3000, '127.0.0.1');

function writeToAll(data) {
  sockets.forEach(function(socket) {
    socket.write(data);
  });
}
