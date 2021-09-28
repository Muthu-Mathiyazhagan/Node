const log = require('./logger');
const Log = new log();
const totalMemory = require('./osModule');
function sayHello(name) {
    console.log("Hello " + name);
}
sayHello("Muthu");

Log.log("How are You ?");

Log.log("total Memory: " + totalMemory.totalMemory.uptime());
Log.log("total Memory: " + totalMemory.totalMemory.freemem());