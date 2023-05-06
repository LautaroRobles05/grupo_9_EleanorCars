const { body } = require("express-validator");

const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ //expresión regular para validar la contraseña


const rules = [
  body("firstName")
    .isLength({ min: 2 })
    .withMessage("Por lo menos necesito 2 caracteres")
    .bail()
    .isString()
    .withMessage("No puede tener numeros"),
  body("lastName")
    .isLength({ min: 2 })
    .withMessage("Por lo menos necesito 2 caracteres")
    .bail()
    .isString()
    .withMessage("No puede tener numeros"),
  body("email")
    .notEmpty().withMessage("Ingresa un email").bail()
    .isEmail().withMessage("Debe tener formato de email"),  
  body("nickname")
    .isLength({ min: 4 })
    .withMessage("Por lo menos necesito 4 caracteres"),
  body("password")
  .isLength({ min: 8 })
    .withMessage("Por lo menos necesito 8 caracteres")
    .bail()
    .custom((value, {req}) => {
      return regex.test(value)
    })
    .withMessage ('La contraseña deberá tener letras mayúsculas, minúsculas, un número y un carácter especial'),
  body("confirmPassword")
    .custom((value,{ req })=>{
      return value === req.body.password
    })
    .withMessage("Las contraseñas deben coincidir")
    .bail(),
];


module.exports = rules;