const fs = require('fs');

// Sync Method
// const files = fs.readdirSync('./');
console.log(fs.readdirSync('./'));
console.log('\n\n');

// Async Method
fs.readdir('.l/', function (err, filesAsync) {
    if (err) console.log("Error " + err);
    else console.log(filesAsync);

})