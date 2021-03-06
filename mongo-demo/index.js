const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log("Connected to MongoDB...!"))
    .catch((err) => console.error("Error In Connecting to Database", err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean

});
const Course = mongoose.model('Course', courseSchema);


async function createCourse() {
    const course = new Course({
        name: "React JS",
        author: "Muthu",
        tags: ['React', 'frontend'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}

async function getCourses() {
    const course = await Course
        .find({ author: 'Muthu' })
        .limit(2)
        .sort({ name: 1 })
        .select({ name: -1 });

    console.log(course);

}

getCourses();

// createCourse();



