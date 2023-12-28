const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    toppings: {
        type: [String],
        required: true,
        validate: {
            validator: (toppings) => toppings.length > 0,
            message: 'At least one topping is required.',
        },
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
});

const Pizza = mongoose.model('Pizzas', pizzaSchema);

module.exports = Pizza;

