import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/product/ItemListContainer";
import ItemDetailContainer from "./components/detail/ItemDetailContainer";
import NavBar from "./components/navBar/NavBar";
import FooterContainer from "./components/footer/FooterContainer";
import HomeContainer from "./components/home/HomeContainer";

import './App.css';
import CartContainer from "./components/cart/CartContainer";


function App() {
  return (
    <div className="container--fluid bg--colors">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route 
            exact
            path="/" 
            element={<HomeContainer />} 
          />
          <Route 
            exact
            path="/categoria/:idCategory" 
            element={<ItemListContainer heading='Productos'/>} 
          />
          <Route 
            exact
            path="/detalle/:idDetail" 
            element={<ItemDetailContainer />} 
          />
          <Route 
            exact
            path="/cart" 
            element={<CartContainer />} 
          />
        </Routes>
        <FooterContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;