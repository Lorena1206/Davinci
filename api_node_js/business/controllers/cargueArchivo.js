var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  let data = req.body
  let dataSplit = data.data.replace(/[\r]/g, " ").replace(/[\n]/g, "").split(" ");
  let datosInsercion = [];
  if(dataSplit.length==0)
    res.send("No se encontraron registros para cargar");

  for(let i = 0 ; i < dataSplit.length; i++){
    let rowArray = dataSplit[i].split(',');
    let row = {
      nombre:rowArray[0],
      descripcion:rowArray[1],
      telefono:rowArray[2],
      direccion:rowArray[3]
    }
    datosInsercion.push(row)
     // llamado a la base de datos para persistir
  }
  console.log(datosInsercion)
  console.log(datosInsercion.length)
  res.send({"resultado":"exitoso"});
});

module.exports = router;