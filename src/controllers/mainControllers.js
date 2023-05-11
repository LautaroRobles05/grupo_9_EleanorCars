const fs = require("fs");

const path = require("path");
const {VehicleTypes, CarModels, Brands, Products} = require("../database/models");

const autosPath = path.join(__dirname, "../db/cars.json");

let mainController = {


  home: async (req, res) => {
    try {
      let recomendedCars = await Products.findAll({
        include: {
          all: true,
          nested: true,
          attributes: 
          { exclude: ["id"] },
        },
        limit: 5
      });


      let vehicleTypes = await VehicleTypes.findAll({});

      let brands = await Brands.findAll({});

      let models = await CarModels.findAll({});


      res.render("index", {
        recomendedCars, vehicleTypes, brands, models
      });
    } catch (error) {
      res.json({error})
    }
  },

  notFound: (req, res) => {
    res.render("notFound");
  },
};

module.exports = mainController;
