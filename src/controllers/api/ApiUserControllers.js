const { Users } = require("../../database/models");



module.exports = {
  count: async (req, res) => {  //metodo para consulta de cantidad de usuarios

    try {
      let usersCount = await Users.count();
      let users = await Users.findAll({
        include: [{
          association: 'img',
          attributes: ["name"]
        }]
      });
      // return res.json(users);
      
      let objeto = {}
      
      users.forEach(user => {
        objeto[user.name] = {
          id: user.id,
          name: user.name,
          email: user.email,
          img: user.img
        }
      })
    

      objeto.users = usersCount

      res.json({
        metadata: {
          resultado: 200,
          mensaje: "Consulta de cantidad de usuarios exitosa!",
        },
        objeto,
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

  userDetail: async (req, res) => {
    try {
      let user = await Users.findByPk(req.params.id, {
        attributes: {
          exclude: ["password", "rol_id", "createdAt"]
        },
        include: [
        {association: 'img', attributes: ["name"]},
        {association: 'state', attributes: ["name"]},
        {association: 'gender', attributes: ["name"]},
      ]
      })
      res.json(({
        metadata: {
          resultado: 200,
          mensaje: "Consulta detalle de usuario exitosa!",
        },
        user,
      }))
    } catch (error) {
      res.json({error})
    }
  }

};
