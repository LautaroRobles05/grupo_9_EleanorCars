let mainController = {
  home: (req, res) => {
    res.render("index");
  },
  register: (req, res) => {
    res.render("register");
  },
  login: (req, res) => {
    res.render("login");
  },
  notFound: (req, res) => {
    res.render("notFound");
  },
};

module.exports = mainController;
