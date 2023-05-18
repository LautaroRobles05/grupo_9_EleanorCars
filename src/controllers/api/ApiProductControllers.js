const {
  Products,
  VehicleTypes,
  CarModels,
  Brands,
} = require("../../database/models");
//const { Op } = require("sequelize");
const Sequelize = require("sequelize");


module.exports = {
  list: async (req, res) => {
    try {
      let products = await Products.findAll({
        include: {
          all: true,
          nested: true,
          attributes: { exclude: ["id"] },
        },
        limit: 20,
      });

      res.json({
        metadata: {
          resultado: 201,
          mensaje: "Lista productos obtenida satisfactoriamente",
        },
        products,
      });
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

  last: async (req, res) => { //consulta a la db por el ultimo producto creado
    try {
      const lastProduct = await Products.findOne({
        order: [['createdAt', 'DESC']]
      });
  
      res.json(({
        metadata: {
          resultado: 200,
          mensaje: "Consulta de ultimo producto creado exitosa!",
        },
        lastProduct,
      }))
    } catch (error) {
      res.json(error);
    }
  },
 
  getModel: async (req,res) => {
    try {
      let products = await Brands.findByPk(req.params.id, {
        include: {
          all: true,
        }
         
      });

      res.json(
        products
      );

    } catch (error) {
      res.json(error)
    }

  },
  
  count: async (req, res) => { //metodo para consulta de cantidad de productos
    try {
      let products = await Products.count()
      console.log(products)
      res.json(({
        metadata: {
          resultado: 200,
          mensaje: "Consulta de cantidad de productos exitosa!",
        },
        products,
      }))

    } catch (error) {
      res.json(error)
    }
  },

  categories1: async (req,res) => {
    let categorias = await VehicleTypes.findAll()
    res.json(({
      metadata: {
        resultado: 200,
        mensaje: "Consulta de cantidad de categorias exitosa!",
      },
      data: {
        categorias
      },
    }))
  },

  categories: async (req, res) => { //metodo para consulta de cantidad de categorias
    try {
      let categories = await VehicleTypes.count()
      console.log(categories)
      res.json(({
        metadata: {
          resultado: 200,
          mensaje: "Consulta de cantidad de categorias exitosa!",
        },
        categories,
      }))

    } catch (error) {
      res.json(error)
    }
  },

  countTypes: async (req, res) => { //metodo para consulta de cantidad de productos segun tipo de vehículo
  
    try {

      let categoriesCount = await VehicleTypes.count()
      let productos = await Products.findAll()
      let productsCount = await Products.count()
      let types = await VehicleTypes.findAll({
        include: {
          all: true,
          
        },
      })
      let objeto = {}
    
      types.forEach(types => {
        objeto[types.tipo] = {
          id: types.id,
          tipo: types.tipo,
          productCount: types.products.length,
        }
      })
      
      objeto.count = productsCount
      objeto.categories = categoriesCount
      objeto.products = productos

      res.json(objeto)

    } catch (error) {
      res.json(error)
    }

},

  upload: async (req, res) => {
    try {
      let {
        model_id,
        year,
        km,
        color_id,
        price,
        vehicleType_id,
        gasType_id,
        manufacturingYear,
        transmission,
        doors,
        equipment,
      } = req.body;

      let product = {
        model_id,
        year,
        km,
        color_id,
        price,
        vehicleType_id,
        gasType_id,
        manufacturingYear,
        transmission,
        doors,
        equipment,
      };

      await Products.create(product);

      res.json({
        metadata: {
          resultado: 200,
          mensaje: "Creacion de producto exitosa",
        },
        product,
      });
    } catch (error) {
      res.json({
        metadata: {
          mensaje: "Lista productos inaccesible",
        },
        error,
      });
    }
  },
  detail: async (req, res) => {
      try{
        let product = await Products.findByPk(req.params.id, {
            attributes: { 
              exclude: ["createdAt", "deletedAt"] 
            },
            include: {
                all: true,
                nested: true,
                attributes: { exclude: ["id", "createdAt", "deletedAt"] },
            }
        });
        return res.json(product)
    } catch (error) {
        res.json({
            metadata: {
              mensaje: "No se encontro el producto",
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
      res.json({msg: 'producto borrado'})
    } catch (error) {
      res.json({
        metadata: {
          mensaje: "No se pudo eliminar el producto",
        },
        error,
    });
    }
  },
  productEdit: async (req, res) => {
    try {
      let product = await Products.findByPk(req.params.id);
      await product.update({
        
        year:req.body.year,
        km:req.body.km,
        price:req.body.price,
        equipment:req.body.equipment,

      })
      res.json({msg: 'producto actualizado'})

    } catch (error) {
      res.json({
        metadata: {
          mensaje: "No se pudo editar el producto",
        },
        error,
    });
    }
  },
};
