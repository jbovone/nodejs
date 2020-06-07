const fs = require('fs')
///non blocking code

fs.mkdir('./asyncFs', function () {
    fs.readFile('./readMe.txt', 'utf8', function (error, data) {
        fs.writeFile('./asyncFs/writeMeFAST.txt', data, function () {
            console.log('soy primero?')
        })
    })
})
console.log('soy segundo?')


setTimeout(() => {
    fs.unlink('./asyncFs/writeMeFAST.txt', function () {
        fs.rmdir('./asyncFs', () => { })
    })
}, 5000)