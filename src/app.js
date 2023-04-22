
const express = require("express");
const app = express();
const methodOverride = require('method-override');
const session = require('express-session')
const cookies = require('cookie-parser');


const userSessionMiddleware = require('./middlewares/userSessionMiddleware');



app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookies());
app.use(session({
  secret: "Es re secreto!",
  resave: false,
  saveUninitialized: true
}));
app.use(userSessionMiddleware);


//rutas api
const ApiProductRoutes = require('./routes/api/ApiProductRoutes')
//const ApiUserRoutes = require('./routes/api/ApiUserRoutes')

//rutas 
const mainRoutes = require('./routes/mainRoutes')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes');


const PORT = 3009;

app.set('view engine','ejs');

app.set('views', './src/views');

app.use(express.static("./public")); 

//Rutas Apis
app.use('/api/products', ApiProductRoutes);

//Rutas
app.use('/products', productRoutes);
app.use('/user', userRoutes);
app.use('/', mainRoutes);

app.use((req,res,next) => {
  res.status(404).render('notFound')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto http://localhost:${PORT}`);
});
