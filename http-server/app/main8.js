// Stage 4

// Task:
// Send content which should be the subpath of request
// E.g /echo/<sub-path> should send <sub-path>

const fs = require("fs");
const net = require("net");

const clients = [];

const server = net.createServer((socket) => {
  clients.push(socket);

  console.log(`Client ${clients.length} connected!`);

  socket.on("data", (data) => {
    // Get first line and destructure

    const [method, path, version] = data.toString().split("\r\n")[0].split(" ");

    const subPath = path.split("/")[2];

    if (path === "/" && method === "GET") {
      socket.write("HTTP/1.1 200 0K \r\n");
    } else if (method === "GET" && subPath) {
      if (path.split("/")[1] === "files") {
        fs.readFile(`./files/${subPath}`, "utf8", (err, data) => {
          if (err) {
            socket.write(`HTTP/1.1 404 File ${subPath} Not Found \r\n`);
          } else {
            socket.write(
              `HTTP/1.1 200 0K \r\n Content-Type: text/plain \r\n Content-Length: ${subPath.length} \r\n \r\n ${data}`
            );
          }
        });
      } else {
        socket.write(
          `HTTP/1.1 200 0K \r\n Content-Type: text/plain \r\n Content-Length: ${subPath.length} \r\n \r\n ${subPath}`
        );
      }
    } else if (method === "GET" && !subPath && path.length > 1) {
      socket.write(
        `HTTP/1.1 200 0K \r\n Content-Type: text/plain \r\n Content-Length: ${
          path.length
        } \r\n \r\n ${path.split("/")[1]}`
      );
    } else if (method === "POST") {
      if (path.split("/")[1] === "files") {
        // fs.writeFile()
        fs.writeFile(`./files/${subPath}`, "utf8", (err, data) => {
          if (err) {
            socket.write(`HTTP/1.1 400 File ${subPath} Not Created \r\n`);
          } else {
            socket.write(
              `HTTP/1.1 201 Created \r\n Content-Type: text/plain \r\n Content-Length: ${subPath.length} \r\n \r\n ${data}`
            );
          }
        });
      } else {
        socket.write(
          `HTTP/1.1 200 0K \r\n Content-Type: text/plain \r\n Content-Length: ${subPath.length} \r\n \r\n ${subPath}`
        );
      }
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
