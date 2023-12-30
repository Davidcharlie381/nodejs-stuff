// Stage 3

// Task:
// Send a 200 OK response if the path is / and 404 Not Found if it's another path

const net = require("net");

const server = net.createServer((socket) => {
  console.log("Client connnected!");

  socket.on("data", (data) => {
    const [method, path, version] = data.toString().split("\r\n")[0].split(" ");

    console.log(data.toString());

    if (path === "/" && method === "GET") {
      socket.write("HTTP/1.1 200 0K \r\n\r\n");
    } else {
      socket.write("HTTP/1.1 404 Not Found \r\n\r\n");
    }

    // console.log(data.toString());
  });
  socket.on("close", () => {
    socket.end();
    server.close();
  });
});

server.listen(4221, "localhost");
