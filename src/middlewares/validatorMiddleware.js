const { body } = require("express-validator");

const passwordRegex =
  /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

// Usa la regla "matches" para validar la contraseña

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
  body("userName")
    .isLength({ min: 4 })
    .withMessage("Por lo menos necesito 4 caracteres"),
  body("password")
  .isLength({ min: 8 })
    .withMessage("Por lo menos necesito 8 caracteres"),
body("confirmPassword")
      .isLength({ min: 8 })
      .withMessage("Por lo menos necesito 8 caracteres")
      .bail(),
];


module.exports = rules;