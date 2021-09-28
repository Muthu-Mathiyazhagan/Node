const EventEmitter = require('events');
const emmitter = new EventEmitter();

// Register a Listener
emmitter.on('logging', function (eventArg) {
    console.log("Event Data: Age in Months :", eventArg.age * 12);
});

// Raising an Event
emmitter.emit('logging', { name: "muthu", age: 28 });