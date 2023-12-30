const net = require("net");

const client = new net.Socket();

client.connect(4221, "localhost", () => {
  console.log("Connected to the server!");

  const httpRequest =
    "GET /abcd HTTP/1.1 \r\n Host: localhost:4221 \r\n User-Agent: My Client";

  client.write(httpRequest);

  client.on("data", (data) => {
    console.log(data.toString());
    // client.write(data)

    // client.end();
  });

  client.on("close", () => {
    console.log("Disconnected from server!");
  });
});
