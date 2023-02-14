const fs = require("fs");
const path = require("path");
const autosPath = path.join(__dirname, "../db/cars.json");
const products = JSON.parse(fs.readFileSync(autosPath, "utf-8"));

let productControllers = {
  
  list: (req, res) => {
    res.render("products/list", {carsList: products,});
  },

  productEdit: (req, res) => {
    let autoId = req.params.id;
    let auto = products.find(auto => auto.id == autoId);

    res.render("products/edit", {car: auto});
  },
  productUpdate: (req, res) => {
    let autoId = req.params.id;
    let auto = products.find(auto => auto.id == autoId);
    let image = req.file ? req.file.filename : auto.image;
    

    auto.maker = req.body.maker || auto.maker;
		auto.price = Number(req.body.price)|| auto.price;
		auto.model = req.body.model|| auto.model;
		auto.year = req.body.year|| auto.year;
		auto.doors = req.body.doors|| auto.doors;
		auto.image = image

    fs.writeFileSync(autosPath, JSON.stringify(products, null, " "));

    res.redirect("/products");
  },

  productDetail: (req, res) => {
    let autoId = req.params.id;
    let auto = products.find((auto) => auto.id == autoId);

    res.render("products/detail", { auto });
  },

  productCart: (req, res) => {
    res.render("products/cart");
  },

  create: (req, res) => {
    res.render("products/create");
  },
  upload: (req, res) => {
    let newAuto = req.body;
    let images = [];

    if (req.files) {
      req.files.forEach((file) => {
        images.push(file.filename);
      });
    } else {
      console.log("alo else");
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
    let auto = products.filter((auto) => auto.id != autoId);

    fs.writeFileSync(autosPath, JSON.stringify(auto, null, " "));
    res.redirect("/products");
  },
};

module.exports = productControllers;
