
// index.js

const express = require('express');
const app = express();
const carsRoutes = require('./routes/carsRoutes');
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

// Routes for cars
app.use('/api/cars', carsRoutes);

// Start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
