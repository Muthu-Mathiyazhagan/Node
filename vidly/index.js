const express = require('express'); // This will return a function
const app = express(); // we are taking express function to 'app' as Name Conversion
const Joi = require('joi'); // Joi will return a Class. So, We are Using Pascal Name Conversion

app.use(express.json()); // This is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code

// Setting ENV port as 3000 and Listening to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port # ${port}...`));

// Creating an Object Array for Genere 
const genres = [
    {
        id: 1,
        name: 'folk'
    }
];

// GET method for Get All Genres
app.get('/api/genres', (req, res) => {
    res.send(JSON.stringify(genres));
});

// GET method for get one Particular Genere using its ID
app.get('/api/genres/:id', (req, res) => {
    // Checking with DB/Array Either Requested id Available Or Not
    const genere = genres.find(g => g.id === parseInt(req.params.id));

    // if requested ID not available Returning 400 Status as bad Request
    if (!genere) return res.status(400).send('The Given ID was Not Available.!');

    // If Available Returning the requested data
    res.send(genere);
});

// POST method to post a new genere with DB/Array
app.post('/api/genres', (req, res) => {
    //  Validating User Input (Never Ever Trust User Input and Always Validate)
    const { error } = validateGenere(req.body);
    if (error) return res.send(error.details[0].message);

    // If input is Valid , Add the Data to DB/Array
    const genere = {
        id: genres.length + 1,
        name: req.body.name
    };
    // Push genere to Genres Object Array
    genres.push(genere);
    // return All  data to user
    res.send(genres);

});

// PUT method to Update The Name 
app.put('/api/genres/:id', (req, res) => {

    //  Check With DB/Array
    const genere = genres.find(g => g.id === parseInt(req.params.id));
    // Return 400 if Data Not Available
    if (!genere) return res.status(400).send('The Given ID was Not Available.!');

    // Validate
    const { error } = validateGenere(req.body);
    if (error) return res.send(error.details[0].message);

    // Update if No Error
    genere.name = req.body.name;

    // Return the Updated Date
    res.send(genere);
});

// DELETE method To Delete the Given Id by the Request
app.delete('/api/genres/:id', (req, res) => {
    // Check with DB/Array for requested id
    const genere = genres.find(g => g.id === parseInt(req.params.id));
    // Return 400 if Data Not Available
    if (!genere) return res.status(400).send('The Given ID was Not Available.!');

    // If the request is Correct then Delete that ID from Array
    const index = genres.indexOf(genere);
    genres.splice(index, 1);

    // Return Deleted Data
    res.send(genere);


});

// Reusable Function to Validate the Input / Request
function validateGenere(genere) {
    const schema = Joi.object({
        name: Joi.string().min(3).required().alphanum() // 'name' is required , minumum Length 3,and It must be String and No Specail Char Allowed
    });

    // return schema.validate({ name: genere.name});
    return schema.validate(
        {
            name: genere.name
        }
    );

}


