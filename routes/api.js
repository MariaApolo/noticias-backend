const router = require('express').Router(); //nos traemos el router de express
const apiOutRouter = require('./api/outputs');
const apiUsers = require('./api/users');


router.use('/outputs', apiOutRouter); 
router.use('/users', apiUsers);
module.exports = router;