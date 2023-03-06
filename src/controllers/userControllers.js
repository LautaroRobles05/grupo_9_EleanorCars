const fs = require("fs");
const path = require("path");
const usersPath = path.join(__dirname, "../db/users.json");
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');


let userController = {
  getUsers: () => {
      return JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
  },

  register: (req, res) => {
    res.render("register");
  },

  processRegister: (req,res) =>{
    //return res.send(req.body);
    
    let resultValidation = validationResult(req);

    if(!resultValidation.isEmpty()){
        return res.render("register", {errors: resultValidation.mapped(), oldBody: req.body})
    }

    let users = userController.getUsers();
    let newUser = {  
        "id": Date.now(),
        "first_name": req.body.firstName,
        "last_name": req.body.lastName,
        "user_name": req.body.userName,
        "email": req.body.email,
        "password": bcrypt.hashSync(req.body.password,10),
        "category": false,
        "imagen": "/profile-icon-png-898.png"
    }
    
    users.push(newUser);
    
    fs.writeFileSync(usersPath, JSON.stringify(users, null, ' '));


    //res.redirect("/");
    res.render("userProfile",{newUser:newUser});
  },
  login: (req, res) => {
    res.render("login");
  },

  loginProcess:(req, res) => {
    let users = userController.getUsers();
    let user = users.find(user => user.email == req.body.email);
    
    if(user){
      let check = bcrypt.compareSync(req.body.password, user.password);
      
      if(check){
        
        delete user.password;
        req.session.userLogged = user;
        return res.redirect('/user/profile');
        
      }
    }
    
    return res.render("login", {errors: {msg:"Email o contraseña incorrectos."} });
      
  },

  profile: (req, res) => {
    return res.render('userProfile', {user : req.session.userLogged})
  },
  editProfile:(req, res) => {
    res.render('editProfile', {user : req.session.userLogged})
  },
  

};

module.exports = userController;