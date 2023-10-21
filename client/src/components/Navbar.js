import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
               
                    <Link to="/" className=" navbar-brand ">Hassan Khan</Link>
                

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbardata">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className=" collapse navbar-collapse navmargin " id="navbardata">
                        <ul className="navbar-nav ml-auto text-center">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="products" className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="contact" className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="cart" className="nav-link">Cart</Link>
                            </li>
                        </ul>

                    </div>
                </div>
        </nav> 

</>

    )
}

export default Navbar