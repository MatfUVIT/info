let http = require('http')
let url = require('url');

http.createServer(onRequest).listen(8888);
console.log('Server has started');

function onRequest(request, response){
  let pathName = url.parse(request.url).pathname;
  console.log(pathName);
  prikazStrane(response);
}

function prikazStrane(response){
  response.writeHead(200);
  response.write('Veb server koristi node.js i dogadjaje');
  response.end();
}
