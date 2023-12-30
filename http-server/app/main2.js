// Stage 2

// Task: 
// Send a 200 OK response when the client sends data


const net = require("net");

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    socket.write("HTTP/1.1 200 0K \r\n\r\n");

    console.log(data.toString());
  });
  socket.on("close", () => {
    socket.end();
    server.close();
  });
});

server.listen(4221, "localhost");
