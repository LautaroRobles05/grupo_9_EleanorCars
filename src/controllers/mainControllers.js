

let mainController = {
  home: (req, res) => {
    res.render("index");
  },
  productDetail: (req, res) => {
    res.render("productDetail");
  },
  productCart: (req, res) => {
    res.render("productCart");
  },
  productEdit: (req, res) => {
    res.render("productEdit");
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
