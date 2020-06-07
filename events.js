const events = require('events')

/*  *******prepara un evento********    */
const saludarUsuario = new events.EventEmitter()
saludarUsuario.on('saludar', function (mensaje) { //crear evento
    console.log('hello', mensaje)
})
/*  *******prepara otro evento********    */
saludarUsuario.on('despedirse', function (mensaje) {
    console.log('bye', mensaje)
})

/* *********emitir un evento, fire event!********* */
saludarUsuario.emit('saludar', 'pepito')




