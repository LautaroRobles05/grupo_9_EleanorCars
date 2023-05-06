const {
  Products,
  VehicleTypes,
  CarModels,
  Brands,
} = require("../../database/models");
//const { Op } = require("sequelize");

module.exports = {
  list: async (req, res) => {
    try {
      let products = await Products.findAll({
        include: {
          all: true,
          nested: true,
          attributes: { exclude: ["id"] },
        },
        attributes: { exclude: ["id"] },
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
 
  prueba: async (req,res) => {
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
            include: {
                all: true,
                nested: true,
                attributes: { exclude: ["id"] },
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
  }
};
