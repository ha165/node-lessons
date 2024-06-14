// load http module

const http = require('http');

//create http server

http.createServer((request, response) => {

    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write('<h1>Hello world</h1>');
    response.end();
}).listen(2000);