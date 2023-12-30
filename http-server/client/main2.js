const net = require("net");

const client = new net.Socket();

client.connect(4221, "localhost", () => {
  console.log("Connected to the server!");

  const httpRequest =
    "GET / HTTP/1.1 \r\n Host: localhost:4221 \r\n User-Agent: curl/7.64.1";

  client.write(httpRequest);

  client.on("data", (data) => {
    console.log(data.toString());
    // client.write(data)

    client.end();
  });

  client.on("close", () => {
    console.log("Disconnected from server!");
  });
});
