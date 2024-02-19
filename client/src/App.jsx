import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellerHome from './components/SellerHome.jsx';
import SellerCreateProduct from './components/SellerCreateProduct.jsx';
import About from './components/About.jsx';
import Cart from './components/Cart.jsx';
import Favorite from './components/Favorite.jsx'
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<SellerHome />} />
          <Route path="/SellerCreateProduct" element={<SellerCreateProduct />} />
          <Route path="/About" element={<About />} />
          <Route path="/cart"element={<Cart/>}/>
          <Route path="/favorite" element={<Favorite/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
