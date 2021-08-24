const log = require('./logger');
const totalMemory = require('./osModule');
function sayHello(name) {
    console.log("Hello " + name);
}
sayHello("Muthu");

log("How are You ?");
log("total Memory: " + totalMemory.totalMemory.uptime);