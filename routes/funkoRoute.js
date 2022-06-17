const express = require('express');
const Funko = require('../models/funko');
const router = express.Router();

router.get("/23", (req, res) => {
    res.send("Tu endpoint esta corriendo correctamente");
  });

  router.get("/funkos", async (req, res) => {
    const { top } = req.query;
    try {
      const funkos = top
        ? await Funko.find({ top })
        : await Funko.find({});
      const returnFunkos = funkos.map((elem) => {
        return {
          id: elem._id,
          nombre: elem.nombre,
          precio: elem.precio,
          coleccion: elem.coleccion,
          descripcion: elem.descripcion,
          imagen: elem.imagen,
          top: elem.top
        };
      });
      res.json(returnFunkos);
    } catch (error) {
      res.status(500).json({
        msg: "Error loading data from Database",
      });
    }
  });
  

  module.exports = router;