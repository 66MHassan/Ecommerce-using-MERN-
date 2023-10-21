import React from 'react'
import "./home.css"
import HeroSection from './components/HeroSection'
import 'bootstrap/dist/css/bootstrap.min.css';
import ServicesSection from './components/ServiceSection';
import ProductSection from './components/ProductSection';


const Home = () => {
  return ( <>
    <HeroSection name="Our E-commerce Store" para="Discover the latest products at great prices."/>
    <ProductSection />
    <ServicesSection />
    </>
  )
}

export default Home;