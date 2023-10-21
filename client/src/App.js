import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Home';
import Products from './Products';
import About from './About';
import Contact from './Contact';
import Single from './Single';
import Cart from './Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './ErrorPage';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/single/:id' element={<Single />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='*' element={<ErrorPage />}></Route>
    </Routes>
    <Footer />

    </BrowserRouter>
    
    </>
    
  )
}

export default App;