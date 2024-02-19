const express = require("express");
<<<<<<< HEAD
const ShopaholicRoutes = require('./routes/UsersRoute.js')
const database = require ('./database/index.js')
=======

// const ShopaholicRoutes = require('./routes/UsersRoute.js')
const database = require('./database/index.js')
>>>>>>> 3d31a77ba95b4c3fa217abc07b6330078661df22


const authRoutes = require ('../server/routes/authRoute.js')

const RouteUsers = require ('./routes/UsersRoute.js')
const RouteProducts = require ('./routes/ProductsRoute.js')
const RouteCarts = require ('./routes/CartsRoute.js')
const RouteRating = require ('./routes/RatignRoute.js')
const RouteFavorite = require ('./routes/FavoriteRoute.js')
const RouteImages=require('./routes/imgRoute.js')

const PORT = 3000;
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/../client/dist"));
app.use(express.urlencoded({ extended: true }));


app.use('/Users',RouteUsers)
app.use('/Products',RouteProducts)
app.use('/Favorite',RouteFavorite)
app.use('/Rating',RouteRating)
app.use('/Carts',RouteCarts)

app.use('/images',RouteImages)

app.use('/admin',authRoutes)


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});


// database.sync({ force : true , alter: false}).then(() => {
//   console.log('Tables created/updated successfully!');
// }).catch((error) => {
//   console.error('Unable to create/alter tables: ', error);
// });

