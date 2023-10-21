import React from 'react'
import "./products.css"

const Products = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Left Column */}
        <div className="col-md-3">
          {/* Category and Search Functionality */}
          <div className="card">
            <div className="card-body">
              {/* Category Selection */}
              <select className="form-control">
                <option value="">All Categories</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                {/* Add more categories here */}
              </select>
              <br />
              {/* Search Functionality */}
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search by Company" />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-9">
          {/* Top Row */}
          <div className="row mb-3">
            <div className="col-md-6">
              <h2>Total Products: 100</h2>
            </div>
            <div className="col-md-6">
              {/* Search by Category */}
              <div className="input-group">
                <select className="form-control">
                  <option value="">All Categories</option>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                  {/* Add more categories here */}
                </select>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Product Cards */}
          <div className="row">
            {/* Example Product Cards */}
            <div className="col-md-4">
              <div className="card">
                <img src="product_image1.jpg" alt="Product 1" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Product 1</h5>
                  <p className="card-text">$50.00</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>

            {/* Add more product cards here */}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Products;