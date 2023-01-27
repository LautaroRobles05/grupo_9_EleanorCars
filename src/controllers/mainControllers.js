

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
  register: (req, res) => {
    res.render("register");
  },
  login: (req, res) => {
    res.render("login");
  },
};

module.exports = mainController;
