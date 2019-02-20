/*Lloyd Ogbonna
*February 18, 2019
*COSC 484
*Assignment 3
*/

var http = require('http');

http.createServer(function (response) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello Node World!');
  res.end();
}).listen(3000);

console.log('Server running at http//localhost:3000');