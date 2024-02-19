import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import SellerHome from './components/SellerHome.jsx';
import SellerCreateProduct from './components/SellerCreateProduct.jsx';
import About from './components/About.jsx';
import Cart from './components/Cart.jsx';
import Favorite from './components/Favorite.jsx'
=======
import UserAllProducts from './components/UserAllProducts.jsx';
import UserNav from './components/UserNav.jsx'
import UserElectronics from './components/UserElectronics.jsx';
import UserClothes from './components/UserClothes.jsx';
import UserFurniture from './components/UserFurniture.jsx';
import Usercosmetics from './components/UserCosmetics.jsx';
import UserOneProduct from './components/UserOneProducts.jsx';
import UserContact from './components/UserContact.jsx';
import Context from './context.js';
import { useContext, useState } from 'react';

>>>>>>> 3d31a77ba95b4c3fa217abc07b6330078661df22
function App() {
  const userContext = useContext(Context)
  const [query, setQuery] = useState("")
  return (
    <div className="App">
<<<<<<< HEAD
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<SellerHome />} />
          <Route path="/SellerCreateProduct" element={<SellerCreateProduct />} />
          <Route path="/About" element={<About />} />
          <Route path="/cart"element={<Cart/>}/>
          <Route path="/favorite" element={<Favorite/>}/>
        </Routes>
=======
      <BrowserRouter>
      <Context.Provider value= {{query, setQuery}}>

      
        <Routes>
          <Route path="/" element={<UserAllProducts />} />
          <Route path="/Clothes" element={<UserClothes/>} />
          <Route path="/Electronics" element={<UserElectronics/>} />
          <Route path="/Furniture" element={<UserFurniture/>} />
          <Route path="/cosmetics" element={<Usercosmetics/>} />
          <Route path="/details/:ProductName" element={<UserOneProduct/>} />
          <Route path="/Contact" element={<UserContact/>} />
          
   
        </Routes>
        </Context.Provider>
>>>>>>> 3d31a77ba95b4c3fa217abc07b6330078661df22
      </BrowserRouter>
    </div>
  );
}

export default App;
