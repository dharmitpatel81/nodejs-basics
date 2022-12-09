// Http Server

import http from "http";
import env from 'dotenv';

env.config();

const hostname = "127.0.0.1";
const port = process.env.PORT;
// const port = process.env.PORT || 8080;

// Create HTTP server
const server = http.createServer((req, res) => {

   // console.log(req); 
   console.log(req.url); // To get endpoint of url

   // Set the response HTTP header with HTTP status and Content type
   // res.writeHead(200, {'Content-Type': 'text/plain'});

   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/html');

   // Send the response body "Hello World"
   res.end('<h1>Hi! I am Dharmittkumar</h1><p>I am technophile who loves to write clean code in optimise way.');
});

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
})