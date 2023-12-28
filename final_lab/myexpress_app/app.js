

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();



mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Routes for Pizzas
const pizzaRoutes = require('./routes/pizzaRoute');
app.use('/pizzas', pizzaRoutes);

// Routes for Users
const userRoutes = require('./routes/userRoute');
app.use('/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});







