// app.js
const express = require('express');
const app = express();
const port = 5000;
const data =require('./data')
const cors= require('cors')

// Define a route

app.use(cors())
app.get('/', (req, res) => {
    res.json(data);
});




app.get('/about', (req, res) => {
    res.json({
        name: 'Hello, about',
        email: 'harsh sharma',
        password: 'efbjebfjlbaef'
    });
});




// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
