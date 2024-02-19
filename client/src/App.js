import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contect from "./pages/Contect";
import Singleproduct from "./components/Singleproduct";
import Cart from './pages/Cart';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';
import Register from './pages/Register';

axios.defaults.baseURL="http://localhost:8000"

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contect' element={<Contect />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Register />} />
        <Route path='/singlproduct/:id' element={<Singleproduct />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
