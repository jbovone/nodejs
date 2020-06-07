const http = require('http')
const fs = require('fs')

const server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    const myResponse = fs.createReadStream('./index.html', 'utf8')
    myResponse.pipe(response)
    //response.end('This is My Server')
})

server.listen(3000, '127.0.0.1' || process.env.PORT)
console.log('im Listening')