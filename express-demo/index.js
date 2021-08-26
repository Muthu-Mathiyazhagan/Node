const express = require('express'); // It will return a function

app.get('/', (req, res) => {
    res.send('Hello world.! using Node Monitor');
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port # ${port}...`));