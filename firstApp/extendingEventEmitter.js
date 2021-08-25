const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.on('logged', (eventArg) => {
    console.log("Listener Called: \n Named as ", eventArg.name, " is From ", eventArg.from);
});

logger.log("How are You Node Js?");


