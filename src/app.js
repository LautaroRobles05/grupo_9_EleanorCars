
const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require('method-override');


app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const mainRoutes = require('./routes/mainRoutes')
const productRoutes = require('./routes/productRoutes')

const PORT = 3009;

app.set('view engine','ejs');

app.set('views', './src/views');

app.use(express.static("./public")); 

app.use('/', mainRoutes);
app.use('/products', productRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto http://localhost:${PORT}`);
});
