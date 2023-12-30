// @ts-check

const fs = require("fs")

module.exports = function(dirName, extName, callback) {
    fs.readdir(dirName, callback)
}