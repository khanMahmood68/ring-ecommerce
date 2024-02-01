import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Home from './Components/Home';
import ProductDetails from './Components/ProductDetails';
import Shop from './Components/Shop';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import ErrorPage from './Components/ErrorPage';
import Footer from './Components/Footer';
import { ShoppingCartProvider } from './Context/ShopingCartContext';


function App() {
  return (
    <ShoppingCartProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </Router>
    </ShoppingCartProvider>
  );
}

export default App;
