const events = require('events')
const util = require('util')

const Person = function (names) {
    this.name = names
}
util.inherits(Person, events.EventEmitter)

const fab = new Person('Fabricio')
const juli = new Person('Julian')
const adri = new Person('Adriana')
const persons = [fab, juli, adri]

persons.forEach(person => person.on('speak', (mensaje) => {
    console.log(person.name, 'dice hola', mensaje)
}))

//fab.emit('speak', 'r/a')

persons.forEach(person => person.emit('speak', 'r/a'))
console.log(util)