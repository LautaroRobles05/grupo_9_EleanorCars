const fs = require("fs");
const path = require("path");
const usersPath = path.join(__dirname, "../db/users.json");
const {validationResult} = require('express-validator');


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
        "first_name": req.body.firstName || "Sin nombre",
        "last_name": req.body.lastName || 0,
        "user_name": req.body.userName || 0,
        "email": req.body.email || 0,
        "password": req.body.password || 0,
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
  profile: (req, res) => {
    res.render('userProfile');
  }

};

module.exports = userController;