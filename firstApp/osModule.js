const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var upTime = os.uptime();

console.log("Total Memory : " + totalMemory);
console.log("Free Memory : " + freeMemory);
console.log("Up Time in Minutes : " + upTime / 60);
console.log(`Up Time is : ${upTime}`);

module.exports.totalMemory = os;