let http = require('http'); 

http.createServer(function (request, response) { 
    response.writeHead(200, { 'Content-type': 'text/plan' }); 
    response.write('Napravljeni veb servers koristi node.js'); 
    response.end(); 
    console.log("---");
    console.log(request);
} ).listen(7000);