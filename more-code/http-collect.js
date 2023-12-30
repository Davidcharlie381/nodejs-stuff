const http = require("http");

http.get(process.argv[2], function (resp) {
  resp.setEncoding("utf-8");
  resp.on("error", function (err) {
    console.error(err);
  });

  let data;
  resp.on("data", function (chunk) {
    data += chunk;
    console.log(data.length);
    console.log(data);
  });
});
