const fs = require('fs')

const dataStream = fs.createReadStream(__dirname + '/holaMundo.txt', 'utf8')

/*** createReadsStream inherits from EVENTS emmitter and has a built-in event called 'data': ***/

const writeStream = fs.createWriteStream(__dirname + '/writeStream.txt')

/** mounting the listener */
/*
dataStream.on('data', (chunk) => {
    console.log(chunk, 'chunk')
    writeStream.write(chunk)
})
*/
/** simplifed */
dataStream.pipe(writeStream)
