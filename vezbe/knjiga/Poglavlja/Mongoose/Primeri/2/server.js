// Node.js packages

// For creating a server
const http = require('http');

// Custom modules

// Our module which sets up routing 
// and incoming requests handling
const app = require('./app');

// Creating the server and running it on port 300
const server = http.createServer(app);
const port = 3000
server.listen(port);

// Prints a message in the terminal
// once the server is active
server.once('listening', function () {
    console.info(`Started the server on http://localhost:${port}`);
});