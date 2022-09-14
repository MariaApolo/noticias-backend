const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { validateUser } = require('../../middlewares/validators/userValidator');
const userController = require('../../controllers/UserController');

const { User } = require('../../db'); //obtengo modelo output

router.post('/register', validateUser, userController.register);
router.post('/login',userController.login);
module.exports = router;
