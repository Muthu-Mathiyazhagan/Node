const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Hello World");
        res.end();
    }
    if (req.url === '/muthu') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

// server.on('connection', (socket) => {
//     console.log("socket");

// })
server.listen(3000);
console.log("Listening to 3000");