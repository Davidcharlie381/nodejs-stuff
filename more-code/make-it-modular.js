// @ts-check

const myModule = require("./mymodule");
const path = require("path");

myModule(process.argv[2], process.argv[3], function (err, list) {
  let ext = process.argv[3];

  if (err) {
    console.log("Failed.");
  }
  let filtered = list.filter((item) => path.extname(item) === `.${ext}`);
  filtered.forEach((item) => console.log(item));
});
