const express = require("express");
const path = require("path");
const app = express();
const PORT = 3009;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/index.html"));
});

app.get("/productDetail", (req, res) => {
  res.sendFile(path.resolve("./views/productDetail.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve("./views/login.html"));
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto",PORT);
});