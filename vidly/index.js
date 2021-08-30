const express = require('express'); // This will return a function
const app = express(); // we are taking express function to 'app' as Name Conversion
const genres = require('./routes/genres');
app.use(express.json()); // This is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code


app.use('/api/genres', genres);
// Setting ENV port as 3000 and Listening to 3000
// Reading the port from an environment variable
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port # ${port}...`));






