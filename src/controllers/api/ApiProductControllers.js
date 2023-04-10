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

      // console.log(products);

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
      res.json({msg: 'archivo borrado'})
    } catch (error) {
      res.json({
        metadata: {
          mensaje: "No se pudo eliminar el producto",
        },
        error,
    });
    }
  }
};
