/*Lloyd Ogbonna
*February 18, 2019
*COSC 484
*Assignment 3
*/

var http = require('http');

http.createServer(function(request,reponse) {
    reponse.writeHead(200);
    reponse.write('<h1>Hello from Node World!</h1>');
    reponse.end();
}).listen(3000);

http.createServer(function(request,reponse){
    reponse.writeHead(200);
    reponse.write('<h1>Goodbye</h1>');
    response.end();
}).listen(3000);

http.createServer(function(request,response){
    response.writeHead(404);
    response.write('<h1>Nothing to see here...</h1>');
    respinse.end();
}).listen(3000);