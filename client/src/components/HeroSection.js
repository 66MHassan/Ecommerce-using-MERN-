// src/components/Hero.js

import React from 'react';

const HeroSection = ({name,para}) => {
  return (
    <section className=" hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Welcome to {name}</h1>
            <p>{para}</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
          <div className="col-md-6">
            <img
              src="images/landing.webp"
              alt="E-commerce Hero"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
