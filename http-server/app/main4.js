// Stage 4

// Task:
// Send content which should be the subpath of request
// E.g /echo/<sub-path> should send <sub-path>

const net = require("net");

const server = net.createServer((socket) => {
  console.log("Client connnected!");

  socket.on("data", (data) => {
    // Get first line and destructure

    const [method, path, version] = data.toString().split("\r\n")[0].split(" ");

    console.log(data.toString());

    const subPath = path.split("/")[2];

    if (path === "/" && method === "GET") {
      socket.write("HTTP/1.1 200 0K \r\n");
    } else if (subPath) {
      socket.write(
        `HTTP/1.1 200 0K \r\n Content-Type: text/plain \r\n Content-Length: ${subPath.length} \r\n \r\n ${subPath}`
      );
    } else {
      socket.write("HTTP/1.1 404 Not Found \r\n");
    }

    // console.log(data.toString());
  });
  socket.on("close", () => {
    socket.end();
    server.close();
  });
});

server.listen(4221, "localhost");
