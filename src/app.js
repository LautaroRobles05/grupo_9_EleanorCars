const { Router } = require("express");
const express = require("express");
const path = require("path");
const app = express();
const mainRoutes = require('./routes/mainRoutes')
const PORT = 3009;

app.set('view engine','ejs');
app.set('views', './src/views');

app.use(express.static("./src/public")); 

app.use(mainRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto http://localhost:${PORT}`);
});
