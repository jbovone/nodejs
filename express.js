
const express = require('express')
const app = express()
const port = 3000
app.get('/', function (request, response) {
    response.send('hello-world-express')
})
app.listen(port, () => console.log('porting'))