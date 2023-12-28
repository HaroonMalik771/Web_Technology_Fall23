const validatePizza = (req, res, next) => {

    if (!req.body.name || req.body.name.length < 3) {
        return res.redirect('/pizzas/add');
    }
    next();
};

module.exports = validatePizza;
