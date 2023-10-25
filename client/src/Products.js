import React, { useContext, useState } from 'react'
import "./products.css"
import Filter from './components/Filter';
import ProductList from './components/ProductList';
import Filtration from './components/Filtration';
import Sort from './components/Sort';

const Products = () => {
  
  
  
  return (
    <div className="container">
      <div className="row">
        {/* Left Column */}
        <div className="col-md-3"> 

          {/* filter Section */}
          <Filter />
          {/* Category and Search Functionality */}
          {/* <div className="card">
            <div className="card-body"> */}
              {/* Category Selection */}
              {/* <select className="form-control">
                <option value="">All Categories</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option> */}
                {/* Add more categories here */}
              {/* </select>
              <br /> */}
              {/* Search Functionality */}
              {/* <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search by Company" />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Right Column */}
        <div className="col-9">
          {/* Top Row */}
          <div className="row mb-3 ml-3">
            <div className="col-12 mt-2">
              <Sort />
            </div>
          </div>

          {/* Bottom Row - Product Cards */}
          <div className="row">
            
            {/* Example Product Cards */}
            <div className="col-md-12">
            {/* <ProductList totalProds={totalProd} name={filterData} /> */}
            <ProductList />
             
              
            </div>


            {/* Add more product cards here */}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Products;