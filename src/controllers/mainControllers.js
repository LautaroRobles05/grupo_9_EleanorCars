

let mainController = {
  home: (req, res) => {
    res.render("index");
  },
  productDetail: (req, res) => {
    res.render("products/productDetail");
  },
  productEdit: (req, res) => {
    res.render("products/productEdit");
  },
  productCart: (req, res) => {
    res.render("user/productCart");
  },
  register: (req, res) => {
    res.render("register");
  },
  login: (req, res) => {
    res.render("login");
  },
  notFound: (req, res) => {
    res.render("notFound");
  } 
};

module.exports = mainController;
