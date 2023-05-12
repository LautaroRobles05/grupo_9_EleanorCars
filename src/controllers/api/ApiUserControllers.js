const { Users } = require("../../database/models");

module.exports = {
  count: async (req, res) => {  //metodo para consulta de cantidad de usuarios

    try {
      let users = await Users.count();
      console.log(users);
      res.json({
        metadata: {
          resultado: 200,
          mensaje: "Consulta de cantidad de usuarios exitosa!",
        },
        users,
      });
    } catch (error) {
      res.json(error);
    }
  },

  last: async (req, res) => { //consulta a la db por el ultimo usuario creado
    try {
      const lastUser = await Users.findOne({
        order: [['createdAt', 'DESC']]
      });
  
      res.json(({
        metadata: {
          resultado: 200,
          mensaje: "Consulta de ultimo usuario creado exitosa!",
        },
        lastUser,
      }))
    } catch (error) {
      res.json(error);
    }
  },

};
