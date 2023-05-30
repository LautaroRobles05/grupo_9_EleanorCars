const { Users, UserImages } = require("../../database/models");



module.exports = {
  session: (req,res)=>{
   // console.log('holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',req.session)
    //res.json(req.session.userLogged)
  },
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
          img: "http://localhost:3009/images/users/" + user.img.name
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
  },

  userDelete: async (req, res) => {
    try {
      await UserImages.destroy({
        where: {
          user_id: req.params.id
        }
      })
      await Users.destroy({
          where: {
              id: req.params.id
          }
      })

      if (req.session.userLogged.id == req.params.id) {
        req.session.destroy();
        res.clearCookie('remember');
      }
      
      res.status(200).json({
          status: 200,
          data: true
      });
  } catch (error) {
      console.log(error);
      res.json(error);
  }

  }

};
