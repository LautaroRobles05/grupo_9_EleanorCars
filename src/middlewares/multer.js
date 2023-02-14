const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/products'));
    },
    filename: (req, file, cb) => {
        cb(null, `product${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({storage});

module.exports = upload;