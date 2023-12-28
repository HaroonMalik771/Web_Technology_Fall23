const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateUser = require('../middlewares/validateUser');

router.post('/add', validateUser, userController.createUser);


router.get('/add', userController.registerForm);
// router.post('/register', userController.createUser);
router.get('/', userController.listUsers);
router.get('/edit/:id', userController.editUserForm);
router.post('/update/:id', userController.updateUser);
router.get('/delete/:id', userController.deleteUser);

module.exports = router;
