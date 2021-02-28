const {Router} = require('express')
const bitcoinRoute = require('./bitcoin');

router = Router();
router.use('/bitcoin', bitcoinRoute)
//Aqui podrian ir otras rutas que use el router.

module.exports = router; 