const EventEmitter = require('events'); // EventEmitter is a Class
const emitter = new EventEmitter(); // So Creating an Object to Use its Methods

// Register a Listener 
emitter.on('messageLogged', function () {
    console.log("Listener Called");
})

emitter.emit('messageLogged'); // Raising an Event named 'messageLogged'

