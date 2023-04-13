const fs = require("fs");
const path = require("path");
const usersPath = path.join(__dirname, "../db/users.json");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const {Users} = require("../database/models");
const { request } = require("https");


let userController = {
  
  getUsers: () => {
    return JSON.parse(fs.readFileSync(usersPath, "utf-8"));
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

        img: "default-icom.png"
 
    })

    res.redirect("/");
    } catch (error) {
      res.json({error})
  }
  
  },
  login: (req, res) => {
    res.render("login");
  },

  loginProcess: (req, res) => {
    let users = userController.getUsers();
    let user = users.find((user) => user.email == req.body.email);
    

    if (user) {
      let check = bcrypt.compareSync(req.body.password, user.password);

      if (check) {
        delete user.password;
        req.session.userLogged = user;
        
        if (req.body.remember) {
          res.cookie("remember", user, { maxAge: 60000 });
        }
        res.redirect("/user/profile");
      }
    } else {
      return res.render("login", {
        errors: { msg: "Email o contraseña incorrectos." },
      });
    }

  },

  profile: (req, res) => {
    let users = userController.getUsers();
    let user = users.find((usuario) => usuario.id == req.session.userLogged.id);

    return res.render("userProfile", { user });
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie('remember');
    return res.redirect('/');
  },

  editProfile: (req, res) => {
    let users = userController.getUsers();
    let user = users.find((usuario) => usuario.id == req.session.userLogged.id);

    res.render("editProfile", { user });
  },

  editProcess: (req, res) => {
    let users = userController.getUsers();
    let user = users.find((usuario) => usuario.id == req.session.userLogged.id);
    let image = req.file ? req.file.filename : user.img;
    
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.gender = req.body.gender || user.gender;
    user.bornDate = req.body.bornDate || user.bornDate;
    user.dni = req.body.dni || user.dni;
    user.phone = req.body.phone || user.phone;
    user.img = image;

    fs.writeFileSync(usersPath, JSON.stringify(users, null, " "));
    
    delete user.password;

    // req.session.userLogged = user;
    if(req.cookies.remember){
      res.clearCookie('remember');
      res.cookie(
        "remember",
        user,
        { maxAge: 60000 }
      )
    }
    
    // console.log("session",req.session.userLogged);

    return res.render("userProfile", {user});
  },
};

module.exports = userController;
