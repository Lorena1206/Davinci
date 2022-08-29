var express = require("express");
var router = express.Router();
var database = require("../../database/mysql");

router.post("/", function (req, res, next) {
  let data = req.body;
  let dataSplit = data.data
    .replace(/[\r]/g, " ")
    .replace(/[\n]/g, "")
    .split(" ");
  let datosInsercion = [];
  if (dataSplit.length == 0)
    res.send("No se encontraron registros para cargar");

  for (let i = 0; i < dataSplit.length; i++) {
    let rowArray = dataSplit[i].split(",");
    let row = {
      nombre: rowArray[0],
      telefono: rowArray[1],
      descripcion: rowArray[2],
      direccion: rowArray[3],
    };
    datosInsercion.push(row);
  }
  console.log(datosInsercion);

  /**
   * Inicio insercion en base de datos
   */
  for (let i = 0; i < datosInsercion.length; i++) {
    let element = datosInsercion[i];
    let query = `INSERT INTO campanas_crm (nombre,telefono,descripcion,direccion) VALUES ('${element.nombre}', '${element.telefono}', '${element.descripcion}', '${element.direccion}')`;
    database.query(query, (error, results) => {
      if (error) {
        res.send({ error: "Error al insertar registro" });
      }

      if (i == datosInsercion.length - 1) {
        res.send({
          resultado: "Proceso exitoso, id final " + results.insertId,
        });
      }
    });
  }
  /**
   * Fin insercion en base de datos
   */
});

module.exports = router;
