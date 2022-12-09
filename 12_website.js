// Http Server
import http from "http";
import fs from "fs";

const port = process.env.PORT || 8080;

// Create HTTP server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url); // To get endpoint of url

    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>Introduction to Dharmitkumar</h1><p>I am technophile who loves to write clean code in optimise way.');
    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>About Dharmitkumar</h1><p>This is about page</p>');
    } else if (req.url == '/hello') {
        res.statusCode = 200;
        const data = fs.readFileSync('13_index.html');
        res.end(data.toString());
    } else {
        // res.harry(); // To crash the server
        res.statusCode = 404;
        res.end('<h1>Page was not found on this server...</h1>');
    }


});

// Prints a log once the server starts listening
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
})