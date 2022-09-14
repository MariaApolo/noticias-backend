const router = require('express').Router();
const outputController = require('../../controllers/OutputController')
//const auth = require('../../middlewares/auth/auth');

//ya vienen con el prefijo /api/outputs

const { Output } = require('../../db'); //obtengo modelo output

router.post('/', /*auth,*/ outputController.createOutput);
router.get('/', /*auth,*/ outputController.getOutputs);
router.post('/etiqueta', /*auth,*/ outputController.createEtiqueta);

module.exports = router;