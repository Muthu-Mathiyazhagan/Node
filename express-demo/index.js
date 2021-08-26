const express = require('express'); // It will return a function

app.get('/', (req, res) => {
    res.send('Hello world.! using Node Monitor');
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




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port # ${port}...`));