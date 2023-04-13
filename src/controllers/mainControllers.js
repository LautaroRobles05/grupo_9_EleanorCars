const fs = require("fs");
const { required } = require("nodemon/lib/config");
const path = require("path");
const {VehicleTypes, CarModels, Brands, Products} = require("../database/models");
const { log } = require("console");
const autosPath = path.join(__dirname, "../db/cars.json");

let mainController = {
  getProducts: () => {
    let products = JSON.parse(fs.readFileSync(autosPath, "utf-8"));
    return products;
  },

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
      let vehicleTypes = await VehicleTypes.findAll({
    });
      let brands = await Brands.findAll({
    });
      let models = await CarModels.findAll({
    });

    res.render("index", {
      recomendedCars, vehicleTypes, brands, models
    });
    } catch (error) {
      res.json({error})
    }
  },

  register: (req, res) => {
    res.render("register");
  },
  login: (req, res) => {
    res.render("login");
  },
  notFound: (req, res) => {
    res.render("notFound");
  },
};

module.exports = mainController;
