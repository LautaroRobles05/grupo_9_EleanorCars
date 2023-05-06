const { body, check } = require("express-validator");

const mime = require('mime-types')

const rules = [


    // body('img').custom((value, { req }) => {
    //     if (req.files.length == 0) {
    //         console.log(req.files)
    //         

    //       throw new Error('Debe enviar una imagen');
    //     }
    //     const image = req.files[0].mimetype;
    //     console.log(image)
    //     const allowedFormats = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];
    //     if (!allowedFormats.includes(image)) {
    //      
    //       throw new Error('El formato de la imagen no es válido');
    //     }
    //     
        
    //     // Si llegamos aquí, la imagen es válida
    //    return true;}),
    body("brand_id")
        .notEmpty()
        .withMessage('Seleccione un campo')
        .bail()
        .isNumeric()
        .withMessage('Seleccione una marca valida'),
    body("nuevaMarca").custom((value,{req})=>{
        if (req.body.brand_id==0) {
           if (value.length < 2) {
             throw new Error('El campo debe tener minimo de dos caracteres');
           } 
        }
        return true
        }),
    body("model_id")
        .notEmpty()
        .withMessage('Seleccione un campo')
        .bail()
        .isNumeric()
        .withMessage('Seleccione un modelo valido'),
    body("nuevoModelo").custom((value,{req})=>{
        if (req.body.model_id == 0) {
           if (value.length < 2) {
             throw new Error('El campo debe tener minimo de dos caracteres');
           } 
        }
        return true
        }),
    body("color_id")
        .notEmpty()
        .withMessage('Seleccione un campo')
        .bail()
        .isNumeric()
        .withMessage('Seleccione un color valido'),
    body("nuevoColor").custom((value,{req})=>{
        if (req.body.color_id == 0) {
           if (value.length < 3) {
             throw new Error('El campo debe tener minimo de tres caracteres');
           } 
        }
        return true
        }),
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
        .withMessage('El campo no debe estar vacío')
        .bail()
        .isNumeric()
        .withMessage('Seleccione una fecha valida'),
        // .min(2000)
        // .withMessage('El vehículo debe ser mayor o igual al año 2000'),
    body("price")
        .notEmpty()
        .withMessage('El campo no debe estar vacío')
        .bail()
        .isNumeric()
        .withMessage('El precio debe ser un número'),
    body("km")
        .notEmpty()
        .withMessage('El campo no debe estar vacío')
        .bail()
        .isNumeric()
        .withMessage('El km debe ser un número'),
        // .max(150000)
        // .withMessage('No aceptamos kilometrajes mayores a 150.000km'),
    body("manufacturingYear")
        .notEmpty()
        .withMessage('El campo no debe estar vacío')
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