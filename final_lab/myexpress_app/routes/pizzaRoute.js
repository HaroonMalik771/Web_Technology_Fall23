const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizzaContoller');
const validatePizza = require('../middlewares/validatePizza');

router.post('/add', validatePizza, pizzaController.createPizza);


router.get('/add', pizzaController.addPizzaForm);
router.get('/', pizzaController.listPizzas);
router.get('/edit/:id', pizzaController.editPizzaForm);
router.post('/update/:id', pizzaController.updatePizza);
router.get('/delete/:id', pizzaController.deletePizza);

module.exports = router;
