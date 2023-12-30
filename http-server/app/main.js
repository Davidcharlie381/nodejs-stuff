// Stage 1

// Task: 
// Send a 200 OK response. Responses lines are separated by \r\n

const net = require("net");

const server = net.createServer((socket) => {
  socket.write("HTTP/1.1 200 0K \r\n\r\n");

  socket.on("close", () => {
    socket.end();
    server.close();
  });
});

server.listen(4221, "localhost");
