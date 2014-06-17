var net = require('net');
var readline = require('readline');

var client = new net.Socket();
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

client.connect(3000, '127.0.0.1', function() {
  console.log('connected');
});

client.setEncoding('utf-8');
client.on('data', function(data) {
  console.log(JSON.parse(data));
});

rl.on('line', function(line) {
  client.write(JSON.stringify(line), 'utf-8');
});


