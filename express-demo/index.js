const express = require('express'); // It will return a function

app.get('/', (req, res) => {
    res.send('Hello world.! using Node Monitor');
});

//  Below GET Request read route Parameter and Return the Same
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port # ${port}...`));