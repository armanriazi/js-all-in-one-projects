require ("core-js/stable");
require("regenerator-runtime/runtime");
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from the server');
}).listen(4001);

console.log('Server is up and running');

export default server;