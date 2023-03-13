const fs = require("fs");
const path = require("path");
const autosPath = path.join(__dirname, "../db/cars.json");

let productControllers = {
  getProducts: () => {
    let products = JSON.parse(fs.readFileSync(autosPath, "utf-8"));
    return products;
  },

  list: (req, res) => {
    let products = productControllers.getProducts();
    res.render("products/list", {carsList: products});
  },

  productEdit: (req, res) => {
    let products = productControllers.getProducts();
    let autoId = req.params.id;
    let auto = products.find(auto => auto.id == autoId);

    res.render("products/edit", {car: auto});
  },

  productUpdate: (req, res) => {
    let products = productControllers.getProducts();
    let autoId = req.params.id;
    let auto = products.find(auto => auto.id == autoId);
    let image = req.files ? req.files[0].filename : auto.img[0];


    auto.maker = req.body.maker || auto.maker;
		auto.price = Number(req.body.price)|| auto.price;
		auto.model = req.body.model|| auto.model;
		auto.year = req.body.year|| auto.year;
		auto.doors = req.body.doors|| auto.doors;
		auto.img = image;


    fs.writeFileSync(autosPath, JSON.stringify(products, null, " "));

    res.redirect("/products/detail/" + autoId);
  },

  productDetail: (req, res) => {
    let products = productControllers.getProducts();
    let autoId = req.params.id;
    let auto = products.find((auto) => auto.id == autoId);

    let recomendedCars = []

    for(let i = 0; i < 3; i++){
      recomendedCars.push(products[Math.floor(Math.random() * products.length)])
    }

    res.render("products/detail", { auto, recomendedCars });
  },

  productCart: (req, res) => {
    res.render("products/cart");
  },

  create: (req, res) => {
    res.render("products/create");
  },

  upload: (req, res) => {
    let products = productControllers.getProducts();
    let newAuto = req.body;
    let images = [];

    if (req.files) {
      req.files.forEach((file) => {
        images.push(file.filename);
      });
    } else {
      images = "mustang2.png";
    }

    let auto = {
      id: Date.now(),
      maker: newAuto.maker,
      model: newAuto.model,
      img: images,
      year: newAuto.year,
      color: newAuto.color,
      price: Number(newAuto.price),
    };

    products.push(auto);

    fs.writeFileSync(autosPath, JSON.stringify(products, null, " "));

    res.redirect("/products");
  },

  delete: (req, res) => {
    let autoId = req.params.id;
    let products = productControllers.getProducts();
    let auto = products.filter((auto) => auto.id != autoId);

    fs.writeFileSync(autosPath, JSON.stringify(auto, null, " "));
    res.redirect("/products");
  },
};

module.exports = productControllers;
