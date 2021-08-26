const express = require('express'); // It will return a function
const app = express();
app.use(express.json());

const courses = [
    { id: 1, name: 'M-Mongo' },
    { id: 2, name: 'E-Express' },
    { id: 3, name: 'R-React JS' },
    { id: 4, name: 'N-Node JS' }
];

app.get('/', (req, res) => {
    res.send('Hello world.! using Node Monitor');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// Get a course details using Route Parameter ID
app.get('/api/courses/:id', (req, res) => {


    res.send(JSON.stringify(course));

});



//  Below GET Request read route Parameter and Return the Same
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

//  Below GET Request read ROUTE Parameter OBJECT and Return the Same
//  request : http://localhost:3000/api/post/2018/04/29
//  response: {"year":"2018","month":"04","date":"29"}
app.get('/api/post/:year/:month/:date', (req, res) => {

    res.send(req.params);
});
//  Below GET Request read QUERY Parameter Object and Return the Same
//  request  : http://localhost:3000/api/posts/2018/04/29?sortBy=name
//  response : {"sortBy":"name"}
app.get('/api/posts/:year/:month/:date', (req, res) => {
    res.send(req.query);
});



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port # ${port}...`));