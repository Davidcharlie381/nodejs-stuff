// @ts-check

const fs = require("fs")
// console.log(fs);

const buf = fs.readFileSync(process.argv[2]);
const str = buf.toString()

const split = str.split("\n")

console.log(split.length - 1)