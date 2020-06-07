const fs = require('fs')
/*** crear o borrar directorios ***/
try {
    fs.mkdirSync("./newDir")
} catch{
    fs.rmdirSync("./newDir")
}
/*** leer y asignar archivos a variables ***/
const readme = fs.readFileSync('./readMe.txt', 'utf8')
console.log(readme)

/*** escribir un archivo ***/
fs.writeFileSync('./holaMundo.txt', readme)

/** borrar archivos **/
fs.unlink('holaMundo.txt') 
