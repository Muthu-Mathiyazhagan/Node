const fs = require('fs');

// Sync Method
// const files = fs.readdirSync('./');
console.log(fs.readdirSync('./'));

// Async Method
fs.readdir('./', function (err, filesAsync) {
    if (err) console.log("Error " + err);
    else console.log(filesAsync);

})