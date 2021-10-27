const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/inter')
    .then(() => {

        console.log("Connected to the db");

    })
    .catch((err) => console.error("Error In Connecting to Database", err));


saveCourse();
async function saveCourse() {

    // A document schema is a JSON object that allows you to define the shape and content of documents and embedded documents in a collection.
    const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: { type: Date, default: Date.now },
        isPublished: { type: Boolean, default: false }

    });

    //  Models are fancy constructors compiled from Schema definitions. 
    // An instance of a model is called a document.
    // Models are responsible for creating and reading documents from the underlying MongoDB database.

    const Course = mongoose.model('Course', courseSchema);
    const course = new Course({
        name: "Node JS Course",
        author: "Muthu",
        tags: ['node', 'backend'],
        isPublished: true
    });

    // course.save((result) => {
    //     console.log(result);
    //     mongoose.connection.close(() => {
    //         console.log("Connection Closed Successfully ! ");
    //     });
    // });

    let result = await course.save();
    // result = null;
    console.log(result);
    if (result) {
        mongoose.connection.close(() => {
            console.log("Connection Closed Successfully ! ");
        });
    }

}





