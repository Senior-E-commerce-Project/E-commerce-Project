import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAllProducts from './components/UserAllProducts.jsx';
import UserNav from './components/UserNav.jsx'
import UserElectronics from './components/UserElectronics.jsx';
import UserClothes from './components/UserClothes.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserAllProducts />} />
          <Route path="/Clothes" element={<UserClothes/>} />
          <Route path="/Electronics" element={<UserElectronics/>} />
   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
