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
        error
      });
    }
  });

  router.get("/funkoOne", async (req, res) => {
    const { id } = req.query;
    try {
      const funko =  await Funko.findOne({ _id: id })
        
      const returnFunko = 
         {
          id: funko._id,
          nombre: funko.nombre,
          precio: funko.precio,
          coleccion: funko.coleccion,
          descripcion: funko.descripcion,
          imagen: funko.imagen,
          top: funko.top
        };

        console.log('id:', id)
        console.log(returnFunko)

      res.json(returnFunko);
    } catch (error) {
      res.status(500).json({
        msg: "Error loading data from Database",
        error
      });
    }
  });
  

  module.exports = router;