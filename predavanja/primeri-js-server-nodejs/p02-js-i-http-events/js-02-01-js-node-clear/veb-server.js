let http = require('http')

http.createServer(onRequest).listen(8888);
console.log('Server has started');

function onRequest(request, response){
  response.writeHead(200);
  response.write('Veb server koristi node.js i dogadjaje');
  response.end();
}