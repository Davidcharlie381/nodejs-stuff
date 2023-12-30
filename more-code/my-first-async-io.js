// @ts-check

const fs = require("fs");


fs.readFile(process.argv[2], "utf-8", function (err, data) {
  if (err) {
    throw new Error("Failed to read file");
  }
  console.log(data.split("\n").length - 1)
});

