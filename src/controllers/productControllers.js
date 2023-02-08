const fs = require('fs');
const path = require('path');
const autosPath = path.join(__dirname, '../db/cars.json');

let productControllers = {

  getCars: () => {
    return JSON.parse(fs.readFileSync(autosPath, 'utf-8'));
  },
  
  list: (req, res) => {
    res.render('products/list', {
      title: 'Listado de productos',
      carsList: productControllers.getCars()
    });
  },
  productEdit: (req, res) => {
    res.render("products/edit");
  },
  productDetail: (req, res) => {
    res.render("products/detail");
  },
  productCart: (req, res) => {
    res.render("products/cart");
  },
};

module.exports = productControllers;