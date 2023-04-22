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
})

const upload = multer({storage});

module.exports = upload;