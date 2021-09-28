const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('logged', { name: "Muthu", from: "Kanniseriputhur" });
    }
}


module.exports = Logger;