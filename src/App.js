import CartContainer from "./components/cart/CartContainer";
import CartContextProvider from "./context/CartContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemListContainer from "./components/product/ItemListContainer";
import ItemDetailContainer from "./components/detail/ItemDetailContainer";
import NavBar from "./components/navBar/NavBar";
import FooterContainer from "./components/footer/FooterContainer";
import HomeContainer from "./components/home/HomeContainer";

import './App.css';


function App() {
  return (
    <div className="container--fluid bg--colors">
      <CartContextProvider>
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
              element={<ItemListContainer heading='Producto Filtrado'/>} 
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
            <Route
              path="*"
              element={<Navigate replace to="/" />}
            />
          </Routes>
          <FooterContainer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;