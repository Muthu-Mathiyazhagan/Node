const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/inter')
    .then(() => {

        console.log("Connected to the db");
        mongoose.connection.close(() => {
            console.log("Connection Closed Successfully ! ");
        });
    })
    .catch((err) => console.error("Error In Connecting to Database", err));
// A document schema is a JSON object that allows you to define the shape and content of documents and embedded documents in a collection.
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: { type: Boolean, default: false }

});