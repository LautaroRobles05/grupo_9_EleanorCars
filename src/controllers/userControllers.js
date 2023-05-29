
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
          attributes: ['name'] 
        }, {
          association: 'role',
          attributes: ['name'] 
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

    

    let response = await Users.create({
        name: req.body.firstName,

        lastName: req.body.lastName,
        
        email: req.body.email,

        password: bcrypt.hashSync(req.body.password, 10),

        nickname: req.body.nickname,

        rol_id: 1,
    })

    await UserImages.create({
      name: "default-icon.png",
      user_id: response.id
    })

    res.redirect("/user/login");
    } catch (error) { //Errores BD

      //return res.json(error)


      let resultValidation = validationResult(req);
      
      let listaErrores  = error.errors.map((error)=>{
        let errorFormateado = {
          value : req.body[error.path],
          msg: error.message,
          param: error.path,
          location: 'body',
        }
        
        return errorFormateado;
      });

      resultValidation.errors = listaErrores;

      return res.render("register", {
        errors: resultValidation.mapped(),
        oldBody: req.body,
      });
      
    }
  },

  login: (req, res) => {
    res.render("login");
  },

  loginProcess: async (req, res) => {
    try {
      let usuario = await Users.findOne({
        include: [{
          association: 'img',
          attributes: {
            include: ['name'] //spread operator de timestamps linea 9
          }
        }],
        where:{email:req.body.email}
      })
      if (usuario) {
        let check = bcrypt.compareSync(req.body.password, usuario.password);
        
        if (check) {
          delete usuario.password;
          req.session.userLogged = usuario;
          
          if (req.body.remember) {
            res.cookie("remember", usuario, { maxAge: 60000 });
          }
          res.redirect("/user/profile/" + usuario.id);
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
          // where:{email:req.session.userLogged.email}
          where:{id: req.params.id}
        })
       
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
          // where: { email:req.session.userLogged.email }
            where: { id: req.params.id }
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
      let user = req.params.id
      
      if(req.file){ 
        await UserImages.destroy({
          where: {
            user_id: user
          }
        })
        await UserImages.create({
          name: req.file.filename,
          user_id: user
        })
      }
      
       await Users.update({

        name: req.body.name, 
        lastName: req.body.lastName ,
        state_id: req.body.state,
        gender_id: req.body.gender,
        bornDate: req.body.bornDate,
        dni: req.body.dni,
        phone: req.body.phone,
      },
      {
        where: {
          id: user
        }
      })
      
      return res.redirect("/user/profile/" + user);
    } catch (error) {
      res.json({error})
    }
  },
  delete: async (req, res) => {
    try{
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
        res.redirect("/");
      } else {
        res.redirect("/user/list")
      }
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
