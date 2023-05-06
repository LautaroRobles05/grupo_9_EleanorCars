const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let multerRoutes = req.originalUrl.includes('product') ? 'products' : 'users';
        let pathImg = path.join(__dirname, `../../public/images/${multerRoutes}`);
        cb(null, pathImg);
    },
    filename: (req, file, cb) => {
        let multerRoutes = req.originalUrl.includes('product') ? 'product' : 'user';
        let nameImg = `${multerRoutes}-${uuidv4()}${path.extname(file.originalname)}`; 

        cb(null, nameImg );
    }
});


const fileFilter = function(req, file, cb) {

    let formatos = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif']
    let dato = formatos.includes(file.mimetype)
    
    // Permitir sólo archivos de imagen con extensiones .jpg, .jpeg y .png
    if (dato) {
       
      cb(null, true);
    } else {
        
      cb(null, false);
    }
  }

const upload = multer({storage, fileFilter});

module.exports = upload;