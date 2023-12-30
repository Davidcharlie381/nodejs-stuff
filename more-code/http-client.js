const http = require("http")

http.get(process.argv[2], function(resp) {

    resp.setEncoding("utf-8")

    resp.on("error", (error) => {
        console.log(error)
    })
    resp.on("data", (data) => {
        console.log(data)
    })
    
})