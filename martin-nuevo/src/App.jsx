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


function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Header />
        <NavBar />
        <CartWidget />
        <Routes>
        <Route path={"/"} element={<Fotos />} />
        <Route path={"/category/:id"} element={<Fotos2 />} />
        <Route path={"/*"} element={<Error404 />} />   
        </Routes>
        <ItemListContainer />
        <ItemDetailContainer />
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;