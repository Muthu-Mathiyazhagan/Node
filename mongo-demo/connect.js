const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/inter')
    .then(() => {

        console.log("Connected to the db");
        mongoose.connection.close(() => {
            console.log("Connection Closed Successfully ! ");
        });
    })
    .catch((err) => console.error("Error In Connecting to Database", err));

