const { Op, Model } = require("sequelize");

const {
  Products,
  Images,
  VehicleTypes,
  CarModels,
  Colors,
  GasTypes,
  Brands,
} = require("../database/models");

const wordFormatter = require('../../wordFormatter.js')

let productControllers = {
 
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

  productEdit: async (req, res) => {
    try {
      let brands = await Brands.findAll();
      let models = await CarModels.findAll();
      let colors = await Colors.findAll();
      let gasType = await GasTypes.findAll();
      let vehicleTypes = await VehicleTypes.findAll();
      let transmissions = ['Manual','Automatico'];
      let doors = [3,5];
      let product = await Products.findByPk(req.params.id, {
        include: {
          all: true,
          nested: true,
          attributes: { exclude: ["id"] },
        }
      });
      
      res.render("products/edit", { car: product, brands,models,colors,gasType,vehicleTypes,transmissions,doors });
    } catch (error) {
      res.json({
        metadata: {
          mensaje: "No se encontro el producto",
        },
        error,
      });
    }
  },
    productUpdate: async (req, res) => {
    try {
      let product = await Products.findByPk(req.params.id);
      await product.update({
          year:req.body.year,
          km:req.body.km,
          price: req.body.price,
          doors: req.body.doors,
          transmission: req.body.transmission,
          manufacturingYear: req.body.manufacturingYear,
          equipment:req.body.equipment,
        },
        {
          where: {
            id: req.params.id
          } 
        }
      ) 
      return res.redirect("/products/detail/" + product.id);
      
    } catch (error) {
      res.json({
        metadata: {
          mensaje: "No se pudo editar el producto",
        },
        error,
      });
    }
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

  create: async (req, res) => {
    try {
      let brands = await Brands.findAll();
      let models = await CarModels.findAll();
      let colors = await Colors.findAll();
      let gasType = await GasTypes.findAll();
      let vehicleTypes = await VehicleTypes.findAll();
      let transmissions = ['Manual','Automatico'];
      let doors = [3,5];
      res.render("products/create",{brands,models,colors,gasType,vehicleTypes,transmissions,doors});

    } catch (error) {
      res.json({
          metadata: {
            mensaje: "No se encontro el producto",
          },
          error,
      });
    }   
  },
  upload: async (req, res) => {
    try {
      
      let {
        model_id,
        nuevaMarca,
        nuevoModelo,
        year,
        km,
        color_id,
        nuevoColor,
        price,
        img,
        vehicleType_id,
        gasType_id,
        manufacturingYear,
        transmission,
        doors,
        equipment,
      } = req.body;


      if(model_id == 0){ //Selecion otro en Input Marca

          // Peticion a BD para saber si la marca se repite
          let marca = await Brands.findOne({
            where: {
              name: wordFormatter(nuevaMarca)
            }
          });


          // Si la Marca no se repite se Crea
          if(!marca){
            marca = await Brands.create({
              name: wordFormatter(nuevaMarca)
            })
          } 

          // Peticion a BD para saber si el Modelo se repite //(con la misma Marca)
          let modelo = await CarModels.findOne({
            where: {
              name: wordFormatter(nuevoModelo),
              // model_id: marca.id
            }
          });


          // Si el Modelo no se repite se Crea
          if(!modelo){
            modelo = await CarModels.create({
              name : wordFormatter(nuevoModelo),
              brand_id: marca.id
            })
          }

          model_id = modelo.id
      } 


      if (color_id == 0){ //Selecion otro en Input color
        // Peticion a BD para saber si el color existe
        let color = await Colors.findOne({
          where: {
            name: wordFormatter(nuevoColor)
          }
        });


        // Si el Color no se repite se Crea
        if(!color){
          color = await Colors.create({
            name: wordFormatter(nuevoColor)
          })
        }

        color_id = color.id
      }


      let product = {
        model_id,
        year,
        km,
        color_id,
        price,
        img,
        vehicleType_id,
        gasType_id,
        manufacturingYear,
        transmission,
        doors,
        equipment,
      };

      
      Products.create(product)
        .then((response)=>{
         let id = response.id;
         
         let imgProduct = []
         let listaImagenes= req.files
         listaImagenes.forEach(img => {
           let dataImg = {
             product_id:id,
             name: img.filename
           }
           imgProduct.push(dataImg)
           
         });
         Images.bulkCreate(imgProduct);
        })

      return res.redirect ('/products')

    } catch (error) {
      res.json({
        metadata: {
          mensaje: "Lista productos inaccesible",
        },
        error,
      });
    }
  },
 
   delete: async (req, res) => {
    try{
      await Products.destroy({
        where: {
          id: req.params.id
        }
      })
      res.redirect("/products");
    } catch (error) {
      res.json({
        metadata: {
          mensaje: "No se pudo eliminar el producto",
        },
        error,
    });
    }
  },
};

module.exports = productControllers;


