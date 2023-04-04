const {Products} = require('../../database/models');
const { Op } = require("sequelize");

module.exports = {

      list: async (req, res) => {

        try {
            let products = await Products.findAll({
                include: { 
                    all: true,
                    nested: true,
                    attributes: {exclude: ['id']}
                },
                attributes: {exclude: ['id']},
                
            });
            
            // console.log(products);

            res.json({
                metadata: {
                    resultado: 201,
                    mensaje: "Lista productos obtenida satisfactoriamente"
                },
                products
            })

        } catch (error) {
            res.json({
                metadata:{
                    mensaje: "Lista productos inaccesible"
                },
                error
            })
        }


        //res.render("products/list", {carsList: products});
      },
    
    //   productEdit: (req, res) => {
    //     let products = productControllers.getProducts();
    //     let autoId = req.params.id;
    //     let auto = products.find(auto => auto.id == autoId);
    
    //     res.render("products/edit", {car: auto});
    //   },
    
    //   productUpdate: (req, res) => {
    //     let products = productControllers.getProducts();
    //     let autoId = req.params.id;
    //     let auto = products.find(auto => auto.id == autoId);
      
    //     let image = req.files[0] ? req.files[0].filename : auto.img;
    //     // if(auto && req.files[0].filename) {
    //     //   fs.unlinkSync(path.join(__dirname, "../../public/images/products/" + auto.img));
    //     // }
        
        
    //     auto.maker = req.body.maker || auto.maker;
    //         auto.price = Number(req.body.price)|| auto.price;
    //         auto.model = req.body.model|| auto.model;
    //         auto.year = req.body.year|| auto.year;
    //         auto.doors = req.body.doors|| auto.doors;
    //         auto.img = image
        
        
    //     fs.writeFileSync(autosPath, JSON.stringify(products, null, " "));
    
    //     res.redirect("/products/detail/" + autoId);
    //   },
    
    //   productDetail: (req, res) => {
    //     let products = productControllers.getProducts();
    //     let autoId = req.params.id;
    //     let auto = products.find((auto) => auto.id == autoId);
    
    //     let recomendedCars = []
    
    //     for(let i = 0; i < 3; i++){
    //       recomendedCars.push(products[Math.floor(Math.random() * products.length)])
    //     }
    
    //     res.render("products/detail", { auto, recomendedCars });
    //   },
    
    //   productCart: (req, res) => {
    //     res.render("products/cart");
    //   },
    
    //   create: (req, res) => {
    //     res.render("products/create");
    //   },
    
    //   upload: (req, res) => {
    //     let products = productControllers.getProducts();
    //     let newAuto = req.body;
    //     let images = [];
    
    //     if (req.files[0]) {
    //       req.file.forEach((file) => {
    //         images.push(file.filename);
    //       });
    //     } else {
    //       images = "mustang2.png";
    //     }
    
    //     let auto = {
    //       id: Date.now(),
    //       maker: newAuto.maker,
    //       model: newAuto.model,
    //       img: images,
    //       year: newAuto.year,
    //       color: newAuto.color,
    //       price: Number(newAuto.price),
    //     };
    
    //     products.push(auto);
    
    //     fs.writeFileSync(autosPath, JSON.stringify(products, null, " "));
    
    //     res.redirect("/products");
    //   },
    
    //   delete: (req, res) => {
    //     let autoId = req.params.id;
    //     let products = productControllers.getProducts();
    //     let auto = products.filter((auto) => auto.id != autoId);
    
    //     fs.writeFileSync(autosPath, JSON.stringify(auto, null, " "));
    //     res.redirect("/products");
    //   },
}
