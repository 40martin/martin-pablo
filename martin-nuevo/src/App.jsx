import './App.css';
import CartWidget from './components/CartWidget';
import Footer from './components/Footer';
import Fotos from './components/Fotos';
import Fotos2 from './components/Fotos2';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Error404 from './components/Error404';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';
import Checkout from './components/Checkout';
import Gracias from './components/Gracias';




function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <NavBar />
          <CartWidget />
          <Routes>
          <Route path={"/"} element={<Fotos />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/category/:id"} element={<Fotos2 />} />
          <Route path={"/*"} element={<Error404 />} />
          <Route path={"/gracias/:orderId"} element={<Gracias />} />
          <Route path={"/checkout"} element={<Checkout />} />  
          </Routes>
          <ItemListContainer />
          <ItemDetailContainer />
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
      
    </div>
  );
}

export default App;
