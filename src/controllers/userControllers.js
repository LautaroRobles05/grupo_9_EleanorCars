
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const {Users, Genders} = require("../database/models");
const  ValidationError  = require("../errors/ValidationError");

let timestamps = ['createdAt', 'deletedAt']

let userController = {
  
  register: (req, res) => {
    res.render("register");
  },

  processRegister: async(req, res) => {
    //return res.send(req.body);
    try {
      let resultValidation = validationResult(req);
      
     if (!resultValidation.isEmpty()) {
      console.log(resultValidation)
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

        img: "default-icon.png"
 
    })

    res.redirect("/user/login");
    } catch (error) {
      res.json({error})
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
     // console.log(usuario)
      if (usuario) {
        let check = bcrypt.compareSync(req.body.password, usuario.password);
        
        if (check) {
          delete usuario.password;
          req.session.userLogged = usuario;
          
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
            // all: true,
            // nested: true,
            association: 'gender',
            attributes: {
              exclude: ['id', ...timestamps] //spread operator de timestamps linea 9
            }
          }],
          where:{email:req.session.userLogged.email}
        })
        return res.render('userProfile', { user });
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
            }
          }],
          where: { email:req.session.userLogged.email }
        })

        let generos = await Genders.findAll({
          attributes: {
            exclude: timestamps //array timestamps linea 9
          }
        })
        res.render ("editProfile", { user, generos });
      } catch (error) {
        res.json({error})
      }
      
  },

  editProcess: async (req, res) => {
    // try {
      let user = req.session.userLogged
      // let image = req.file ? req.file.filename : user.img;

      await Users.update({

        name: req.body.name || user.name,
        lastName: req.body.lastName || user.lastName,
        // puede llegar a romper por conflictos en db con email repetido (revisar)
        gender_id: req.body.gender || (user.gender ? user.gender.id : null),
        bornDate: req.body.bornDate || user.bornDate,
        dni: req.body.dni || user.dni,
        phone: req.body.phone || user.phone,
        // img: image
      },
      {
        where: {
          id: user.id
        }
      })
      console.log(req.body)
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
    // } catch (error) {
    //   res.json({error})
    // }
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
