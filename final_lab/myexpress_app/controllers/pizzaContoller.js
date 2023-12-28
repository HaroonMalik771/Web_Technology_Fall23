const Pizza = require('../models/pizzaModel')

exports.addPizzaForm = (req, res) => {
    res.render('pizzas/add');
};

exports.createPizza = async (req, res) => {
    const newPizza = new Pizza(req.body);
    await newPizza.save();
    res.redirect('/pizzas');
};

exports.listPizzas = async (req, res) => {
    const pizzas = await Pizza.find();
    res.render('pizzas/list', { pizzas });
};

exports.editPizzaForm = async (req, res) => {
    const pizza = await Pizza.findById(req.params.id);
    res.render('pizzas/edit', { pizza });
};

exports.updatePizza = async (req, res) => {
    await Pizza.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/pizzas');
};

exports.deletePizza = async (req, res) => {
    await Pizza.findByIdAndDelete(req.params.id);
    res.redirect('/pizzas');
};
