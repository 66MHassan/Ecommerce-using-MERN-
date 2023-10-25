import React, { useContext, useState,useEffect } from 'react'
import { FilterContext } from '../context/FilterContext';

import ProductCard from './ProductCard';


const ProductList = (props) => {
  const {filterProducts}=useContext(FilterContext);

  // const [filteredData,setFilteredData]=useState([])
  //   const{productData}=useContext(AppContext);
  //   const quantity=productData.length;
  //   props.totalProds(quantity);
  //   useEffect(() => {
  //     const fil = productData.filter((item) => item.category === props.name);
  //     setFilteredData(fil);
  //   }, [productData, props.name]);
  if (!filterProducts) {
    return <p>Loading...</p>; // or any loading indicator
  }
    
  return (
  <>
    <div className="container-fluid ">
        <div  className="container ">
          <div className="row">
            { filterProducts.map((data, index) => (
              <div className="col-md-4 " key={index}>
                <ProductCard {...data} />
              </div>
            ))}
          </div>
        </div>
        </div>
        
        </>
  )
}

export default ProductList