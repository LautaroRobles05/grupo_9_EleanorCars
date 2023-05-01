const { body } = require("express-validator");

const rules = [
    body("brand_id")
        .notEmpty()
        .withMessage('Seleccione un campo')
        .isNumeric()
        .withMessage('Seleccione una marca valida'),
    body("model_id")
        .notEmpty()
        .withMessage('Seleccione un campo')
        .bail()
        .isNumeric()
        .withMessage('Seleccione un modelo valido'),
    body("color_id")
        .notEmpty()
        .withMessage('Seleccione un campo')
        .bail()
        .isNumeric()
        .withMessage('Seleccione un color valido'),
    body("gasType_id")
        .notEmpty()
        .withMessage('Seleccione un campo')
        .bail()
        .isNumeric()
        .withMessage('Seleccione tipo de combustible valido'),
    body("doors")
        .notEmpty()
        .withMessage('Seleccione un campo')
        .bail()    
        .isNumeric()
        .withMessage('Seleccione una cantidad de puertas valida'),
    body("vehicleType_id")
        .notEmpty()
        .withMessage('Seleccione un campo')
        .bail()
        .isNumeric()
        .withMessage('Seleccione un tipo de vehículo valido'),
    body("transmission")
        .notEmpty()
        .withMessage('Seleccione un campo')
        .bail()
        .isString()
        .withMessage('Seleccione un tipo de transmisión valido'),
    body("year")
        .notEmpty()
        .withMessage('Seleccione un campo')
        .bail()
        .isNumeric()
        .withMessage('Seleccione una fecha valida'),
        // .min(2000)
        // .withMessage('El vehículo debe ser mayor o igual al año 2000'),
    body("price")
        .notEmpty()
        .withMessage('Seleccione un campo')
        .bail()
        .isNumeric()
        .withMessage('El precio debe ser un número'),
    body("km")
        .notEmpty()
        .withMessage('Seleccione un campo')
        .bail()
        .isNumeric()
        .withMessage('El km debe ser un número'),
        // .max(150000)
        // .withMessage('No aceptamos kilometrajes mayores a 150.000km'),
    body("manufacturingYear")
        .notEmpty()
        .withMessage('Seleccione un campo')
        .bail()
        .isNumeric()
        .withMessage('Seleccione un tipo de transmisión valido'),
    body("equipment")
        .isString()
        .withMessage("datos inválidos")
        .isLength({min: 20})
        .withMessage('La información del equipamiento no debe ser menor a 20 caracteres'),
];


module.exports = rules;