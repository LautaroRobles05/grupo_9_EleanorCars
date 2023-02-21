const fs = require("fs");
const path = require("path");
const autosPath = path.join(__dirname, "../db/cars.json");

let mainController = {
  getProducts: () => {
    let products = JSON.parse(fs.readFileSync(autosPath, "utf-8"));
    return products;
  },

  home: (req, res) => {
    let products = mainController.getProducts();
    let recomendedCars = []

    for(let i = 0; i < 3; i++){
      recomendedCars.push(products[Math.floor(Math.random() * products.length)])
    }

    res.render("index", {
      recomendedCars
    });
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
