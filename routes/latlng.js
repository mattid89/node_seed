var express = require('express');
var router = express.Router();
var { verifyToken } = require('../services/jwt');

router.use('/', function (req, res, next) {
  try {
    const decodedData = verifyToken(req, res, next);
    if (res.err)
      res.status(403).send(res.err);
    else {
      console.log(decodedData);
      next();
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  // TODO: METODO PARA TRAER LAS COORDENADAS
  res.send('respuesta de la consulta de los mapas...');
});

module.exports = router;
