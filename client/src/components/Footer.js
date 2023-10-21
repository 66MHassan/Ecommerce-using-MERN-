// Footer.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h5>Menu</h5>
            <ul className="list-unstyled">
              <li><a href="#" >Home</a></li>
              <li><a href="#" >About</a></li>
              <li><a href="#" >Services</a></li>
              <li><a href="#" >Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Social Links</h5>
            <ul className="list-unstyled">
              <li><a href="#"><i className="fab fa-facebook "></i> Facebook</a></li>
              <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i>LinkedIn </a></li>
              <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-4">
      <h5>Contact Information</h5>
      <p>Email: muhammadhassan662000@gmail.com</p>
      <p>Phone: +92 303 5174766</p>
      <p>Address: Abdara Road, Peshawar, Pakistan</p>
    </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
