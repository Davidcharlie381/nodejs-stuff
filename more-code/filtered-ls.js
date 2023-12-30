// @ts-check

const fs = require("fs")
fs.readdir(process.argv[2], function (err, list) {
    if (err) {
        throw new Error("Failed to read")
    }

    let ext = process.argv[3]
    const filtered = list.filter((item) => item.includes(`.${ext}`))
    filtered.forEach(item => console.log(item))
})