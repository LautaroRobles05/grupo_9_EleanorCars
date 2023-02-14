const fs = require('fs');
const path = require('path');
const autosPath = path.join(__dirname, '../db/cars.json');

let productControllers = {

  getCars: () => {
    return JSON.parse(fs.readFileSync(autosPath, 'utf-8'));
  },

  list: (req, res) => {
    res.render('products/list', {
      title: 'Listado de productos',
      carsList: productControllers.getCars()
    });
  },

  productEdit: (req, res) => {
    let autoId = req.params.id;
        let auto = productControllers.getCars().find(auto => auto.id == autoId);
        
        res.render('products/edit', {
            title: 'Mi auto',
            car: auto
        });
  },
  productUpdate: (req, res) => {
    let autoId = req.params.id;
    let cars = productControllers.getCars();

    cars.forEach((auto, index) => {
        if (auto.id == autoId) {        
        
            auto.price = Number(req.body.price);
 
            cars[index] = auto;
        }
    });
    console.log(req.body);
    fs.writeFileSync(autosPath, JSON.stringify(cars, null, ' '));
    
    res.redirect('/products');
},


  productDetail: (req, res) => {
    let autoId = req.params.id;
    let auto = productControllers.getCars().find(auto => auto.id == autoId);
   
    res.render("products/detail",{auto});
  },

  productCart: (req, res) => {
    res.render("products/cart");
  },

 
  create:(req, res) => {
    res.render("products/create");
  },
  upload:(req, res) => {
    let newAuto = req.body;
    let listaAutos = productControllers.getCars();

    let images = [];
        
    if (req.files) {
        req.files.forEach(file => {
            images.push(
                file.filename
            );
        });
    } else {
      console.log('alo else')
        images=("mustang2.png");
    }


    let auto = {
      id: Date.now(),
      maker: newAuto.maker,
      model: newAuto.model,
      img: images,
      year: newAuto.year,
      color: newAuto.color,
      price: Number(newAuto.price)
    }
    
    listaAutos.push(auto);
    
    fs.writeFileSync(autosPath, JSON.stringify(listaAutos, null, ' '));

    res.redirect("/products");
  },

  delete:(req, res) => {
    let autoId = req.params.id;
    let auto = productControllers.getCars().filter(auto => auto.id != autoId);

    fs.writeFileSync(autosPath, JSON.stringify(auto, null, ' '));
    res.redirect("/products");
  }
}

module.exports = productControllers;