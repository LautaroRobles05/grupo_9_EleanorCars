const fs = require("fs");
const path = require("path");
const autosPath = path.join(__dirname, "../db/cars.json");
const { Op } = require("sequelize");

const {
  Products,
  VehicleTypes,
  CarModels,
  Brands,
} = require("../database/models");

let productControllers = {
  // getProducts: () => {
  //   let products = JSON.parse(fs.readFileSync(autosPath, "utf-8"));
  //   return products;
  // },

  // list: (req, res) => {
  //   let products = productControllers.getProducts();
  //   res.render("products/list", {carsList: products});
  // },
  list: async (req, res) => {
    try {
      let products = await Products.findAll({
        include: {
          all: true,
          nested: true,
          attributes: 
          { exclude: ["id"] },
        },
      
        limit: 20,
      });

      res.render("products/list", {carsList: products});
    } catch (error) {
      res.json({
        metadata: {
          mensaje: "Lista productos inaccesible",
        },
        error,
      });
    }

    //res.render("products/list", {carsList: products});
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
  
    let image = req.files[0] ? req.files[0].filename : auto.img;
    // if(auto && req.files[0].filename) {
    //   fs.unlinkSync(path.join(__dirname, "../../public/images/products/" + auto.img));
    // }
    
    
    auto.maker = req.body.maker || auto.maker;
		auto.price = Number(req.body.price)|| auto.price;
		auto.model = req.body.model|| auto.model;
		auto.year = req.body.year|| auto.year;
		auto.doors = req.body.doors|| auto.doors;
		auto.img = image
    
    
    fs.writeFileSync(autosPath, JSON.stringify(products, null, " "));

    res.redirect("/products/detail/" + autoId);
  },
  productDetail: async (req, res) => {
  
    try{
      let product = await Products.findByPk(req.params.id, {
        include: {
            all: true,
            nested: true,
            attributes: { exclude: ["id"] },
        }
      });
      let products = await Products.findAll({
        include: {
          all: true,
          nested: true,
          attributes: 
          { exclude: ["id"] },
        },
        where: {
          vehicleType_id: product.vehicleType_id, 
          id: {[Op.ne]: product.id}
         },
      
        limit: 5
      })
     return res.render("products/detail", { auto: product, recomendedCars:products });
    } catch (error) {
        res.json({
            metadata: {
              mensaje: "No se encontro el producto",
            },
            error,
        });
    }
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

    if (req.files[0]) {
      req.file.forEach((file) => {
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
