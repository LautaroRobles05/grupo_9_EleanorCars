
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const {Users, Genders, States, UserImages} = require("../database/models");
const  ValidationError  = require("../errors/ValidationError");

let timestamps = ['createdAt', 'deletedAt']

let userController = {
  
  list: async (req,res)=>{
    try {
      let users = await Users.findAll({
        include: [{
          association: 'img',
          attributes: {
            include: ['name'] //spread operator de timestamps linea 9
          }
        }],
        limit: 20
      });

      res.render("users/list",{users});
    } catch (error) {
      res.json({error});
    }
  },

  register: (req, res) => {
    res.render("register");
  },

  processRegister: async(req, res) => {
    //return res.send(req.body);
    try {
      let resultValidation = validationResult(req);
      
     if (!resultValidation.isEmpty()) {
      return res.render("register", {
        errors: resultValidation.mapped(),
        oldBody: req.body,
      });

    }
    await Users.create({
        name: req.body.firstName,

        lastName: req.body.lastName,
        
        email: req.body.email,

        password: bcrypt.hashSync(req.body.password, 10),

        nickname: req.body.nickname,

        rol_id: 1,
    })

    res.redirect("/user/login");
    } catch (error) {
      res.json({error});
    }
  },

  login: (req, res) => {
    res.render("login");
  },

  loginProcess: async (req, res) => {
    try {
      let usuario = await Users.findOne({
        where:{email:req.body.email}
      })
      if (usuario) {
        let check = bcrypt.compareSync(req.body.password, usuario.password);
        
        if (check) {
          delete usuario.password;
          req.session.userLogged = usuario;

          console.log('BUSCANDO EL ROL', usuario.rol_id);
          
          if (req.body.remember) {
            res.cookie("remember", usuario, { maxAge: 60000 });
          }
          res.redirect("/user/profile");
        } else {
          throw new ValidationError('Email o contraseña incorrectos')
        }
      } else {
        throw new ValidationError('Email o contraseña incorrectos')
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.render("login", {
            errors: { msg: error.message },
         });
      }
      res.json({error})
    }
  },

  profile: async (req, res) => {
    try {
        let user = await Users.findOne({
          include: [{
            association: 'gender',
            attributes: {
              include: ['name'] //spread operator de timestamps linea 9
            }
          },{
            association: 'state',
            attributes: {
              include: ['name'] //spread operator de timestamps linea 9
            }
          },
          {
            association: 'img',
            attributes: {
              include: ['name'] //spread operator de timestamps linea 9
            }
          }],
          where:{email:req.session.userLogged.email}
        })
        // console.log('sesion de profile', user)
        return res.render('users/profile', { user });
      } catch (error) {
        res.json({error})
      }
    },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie('remember');
    return res.redirect('/');
  },

  editProfile: async (req, res) => {
      try{
        let user = await Users.findOne({
          include: [{
            association: 'gender',
            attributes: {
              exclude: timestamps //array timestamps linea 9
            }},
            {
            association: 'state',
            attributes: {
              exclude: timestamps //array timestamps linea 9
            }},
            {
            association: 'img',
            attributes: {
              include: ['name']
            }
          }],
          where: { email:req.session.userLogged.email }
        })

        let generos = await Genders.findAll({
          attributes: {
            exclude: timestamps //array timestamps linea 9
          }
        })

        let provincias = await States.findAll({
          attributes: {
            exclude: timestamps //array timestamps linea 9
          }
        })

        res.render ("users/edit", { user, generos , provincias});
      } catch (error) {
        res.json({error})
      }
      
  },

  editProcess: async (req, res) => {
    try {
      let user = req.session.userLogged
      // console.log('hola soy el usuario', user)
      if(req.file){ 
        await UserImages.destroy({
          where: {
            user_id: user.id
          }
        })
        await UserImages.create({
          name: req.file.filename,
          user_id: user.id
        })
      }
      
       await Users.update({

        name: req.body.name || user.name,
        lastName: req.body.lastName || user.lastName,
        // puede llegar a romper por conflictos en db con email repetido (revisar)
        state_id: req.body.state || (user.state ? user.state.id : null),
        gender_id: req.body.gender || (user.gender ? user.gender.id : null),
        bornDate: req.body.bornDate || user.bornDate,
        dni: req.body.dni || user.dni,
        phone: req.body.phone || user.phone,
      },
      {
        where: {
          id: user.id
        }
      })
      
      // let user = {
      //   name: req.body.name || oldSession.name,
      //   lastName: req.body.lastName || oldSession.lastName,
      //   // puede llegar a romper por conflictos en db con email repetido (revisar)
      //   state_id: req.body.state || (oldSession.state ? oldSession.state.id : null),
      //   gender_id: req.body.gender || (oldSession.gender ? oldSession.gender.id : null),
      //   bornDate: req.body.bornDate || oldSession.bornDate,
      //   dni: req.body.dni || oldSession.dni,
      //   phone: req.body.phone || oldSession.phone,
      //   img: image
      // }

      delete user.password;

      if(req.cookies.remember){
        res.clearCookie('remember');
        res.cookie(
          "remember",
          user,
          { maxAge: 60000 }
        )
      }
      return res.redirect("/user/profile");
    } catch (error) {
      res.json({error})
    }
  },
  delete: async (req, res) => {
    try{
      await Users.destroy({
        where: {
          id: req.params.id
        }
      })
      req.session.destroy();
      res.clearCookie('remember');
      res.redirect("/");
    } catch (error) {
      res.json({
        metadata: {
          mensaje: "No se pudo eliminar el usuario",
        },
        error,
    });
    }
  }
}

module.exports = userController;
