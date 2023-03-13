const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let multerRoutes = req.originalUrl.includes('product') ? 'products' : 'user';
        let pathImg = path.join(__dirname, `../../public/images/${multerRoutes}`);
        cb(null, pathImg);
    },
    filename: (req, file, cb) => {
        let multerRoutes = req.originalUrl.includes('product') ? 'products' : 'user';
        let nameImg = `${multerRoutes}-${Date.now()}-${path.extname(file.originalname)}`; 

        cb(null, nameImg );
    }
})

const upload = multer({storage});

module.exports = upload;