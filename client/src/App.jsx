import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  const userContext = useContext(Context)
  const [query, setQuery] = useState("")
  return (
    <div className="App">
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
      </BrowserRouter>
    </div>
  );
}

export default App;
