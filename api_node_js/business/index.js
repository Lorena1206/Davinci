var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Entro peticion');
  res.send("Entro correctamente");
});


module.exports = router;
