const { Op, Model } = require("sequelize");
const { validationResult } = require("express-validator");
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

  findBrand: async (req,res)=>{
    try {
      let search = req.query.search
      const products = await Products.findAll({
        include: [{
          association: 'model',
          attributes:['name'],
          where:{
            id:{[Op.not]: null }
          },
          include:[{
            association:'brand',
            attributes:['name'],
            where:{
              name:{ [Op.like]: `%${search}%`}
            }
          }]

        },
        {association: 'productImages'}
      ],

      });
      if(products.length){
        res.render("products/list", {carsList: products});
      }else{
        res.render("notFound")
      }
      //return res.json({products})
    } catch (error) {
      res.json({
        metadata: {
          mensaje: "No se encontro el producto",
        },
        error,
      })
    }
  },


  findProduct: async (req, res) => {
    try {
  
      let {tipo, brand_id, model_id} = req.body;

      tipo = parseInt(tipo)
      brand_id = parseInt(brand_id)
      model_id = parseInt(model_id)

      // console.log('\n\n\n%cPARAMETROS BUSQUEDA -----------------','color:red');
      // console.log(tipo);
      // console.log(brand_id);
      // console.log(model_id);

      let condiciones = {}

      if(tipo){
        condiciones.vehicleType_id = tipo
      }

      if(brand_id){
        condiciones['$model.brand_id$'] = brand_id
      }

      if(model_id){
        condiciones['$model.id$'] = model_id
      }

      let products = await Products.findAll({
        where : {
          ...condiciones,
        },
        include: [
          {
            model: CarModels,
            as: 'model',
            include:[{
              association: 'brand'
            }]
          },
          {association: 'vehicleType'},
          {association: 'gasType'},
          {association: 'color'},
          {association: 'productImages'},
        ], 
      })

   

    // return res.json(products);

     if (products.length > 0){
      res.render("products/list", {carsList: products})
     } else {
      res.render("notFound")
     }
    } catch (error) {
      // return res.json(error)
      res.render('notFound')
    }
  },

  productEdit: async (req, res) => {
    try {
      let brands = await Brands.findAll();
      let models = await CarModels.findAll();
      let colors = await Colors.findAll();
      let gasType = await GasTypes.findAll();
      let vehicleTypes = await VehicleTypes.findAll();
      let images = await Images.findOne({
        where: {
          product_id: req.params.id
        }
      });
      
      let transmissions = ['Manual','Automatico'];
      let doors = [3,5];
      let product = await Products.findByPk(req.params.id, {
        include: {
          all: true,
          nested: true,
          attributes: { exclude: ["id"] },
        }
      })
      res.render("products/edit", { car: product, brands,models,colors,gasType,vehicleTypes,transmissions,doors, images });
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
  
      let resultValidation = validationResult(req);
      
      if (!resultValidation.isEmpty()) {

        let brands = await Brands.findAll();
      let models = await CarModels.findAll();
      let colors = await Colors.findAll();
      let gasType = await GasTypes.findAll();
      let vehicleTypes = await VehicleTypes.findAll();
      let images = await Images.findOne({
        where: {
          product_id: req.params.id
        }
      });
      
      let transmissions = ['Manual','Automatico'];
      let doors = [3,5];
      let product = await Products.findByPk(req.params.id, {
        include: {
          all: true,
          nested: true,
          attributes: { exclude: ["id"] },
        }
      })

        return res.render("products/edit", {
          errors: resultValidation.mapped(),
          oldBody: req.body,
          car: product, 
          brands,
          models,
          colors,
          gasType,
          vehicleTypes,
          transmissions,
          doors,
          images
        });
      }


      let product = await Products.findByPk(req.params.id);
      await product.update({
          model_id: req.body.model_id,
          vehicleType_id:req.body.vehicleType_id,
          gasType_id:req.body.gasType_id,
          color_id:req.body.color_id,
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

    //verificacion de carga de imagenes
    if (req.files.length != 0) {
      Images.destroy({
        where: {
          product_id: req.params.id
        }
      })
      let imgProduct = []
      let listaImagenes= req.files
      listaImagenes.forEach(img => {
        let dataImg = {
          product_id:req.params.id,
          name: img.filename
        }
        imgProduct.push(dataImg)
        
      });
      Images.bulkCreate(imgProduct);  
    }  

      
     
       
      
      
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

      

      
      if(product){

        let products = await Products.findAll({
          include: {
            all: true,
            nested: true,
            attributes: { exclude: ["id"] },
          },
          where: {
            vehicleType_id: product.vehicleType_id, 
            id: {[Op.ne]: product.id}
           },
        
          limit: 5
        })
        
        product.productImages = product.productImages.slice(0,4);

        return res.render("products/detail", { auto: product, recomendedCars: products });
     } else {
      return res.render("notFound")
     }

    } catch (error) {
        res.json({
            metadata: {
              mensaje: "No se encontro el producto",
            },
            error,
        });
    }
  },

  reserve: async (req, res) => {
    try {
      let producto = await Products.findByPk(req.params.id, {
        include: [
          {association: 'model', attributes: ["name"], include: [{association: 'brand', attributes: ["name"]}]},
          // {association: 'state', attributes: ["name"]},
          // {association: 'gender', attributes: ["name"]},
        ]
      })
      // return res.json(producto)
      res.render('products/reserve', {producto})
    } catch (error) {
      
    }
    
  },

  reserveConfirm: async (req, res) => {
    res.render("products/reserveConfirm")
  },
 

  productCart: (req, res) => {
    res.render("products/cart");
  },

  create: async (req, res) => {
    try {
      let brands = await Brands.findAll({
        order: [['name', 'ASC']]
      });
      let models = await CarModels.findAll({
        order: [['name', 'DESC']]
      });
      let colors = await Colors.findAll({
        order: [['name', 'ASC']]
      });
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
      
      let resultValidation = validationResult(req);
      
      if (!resultValidation.isEmpty()) {

        let brands = await Brands.findAll();
        let models = await CarModels.findAll();
        let colors = await Colors.findAll();
        let gasType = await GasTypes.findAll();
        let vehicleTypes = await VehicleTypes.findAll();

        let transmissions = ['Manual','Automatico'];
        let doors = [3,5];
       
        return res.render("products/create", {
          errors: resultValidation.mapped(),
          oldBody: req.body,
          brands,
          models,
          colors,
          gasType,
          vehicleTypes,
          transmissions,
          doors
        });
      }

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


      if(model_id == 0){ //Selecion opción ¨Otro¨ (este llega con value = 0) en Input Marca

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
         if(imgProduct.length){
           Images.bulkCreate(imgProduct);
         }else{
          Images.create({ 
            product_id:id,
            name: "image-missing.jpg"
          })
         }
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


