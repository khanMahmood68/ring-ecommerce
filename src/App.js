import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Home from './Components/Home';
import ProductDetails from './Components/ProductDetails';
import Shop from './Components/Shop';
import Navbar from './Components/Navbar';


function App() {
  return ( 
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
