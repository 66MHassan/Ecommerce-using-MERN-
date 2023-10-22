import React, { useContext } from 'react'
import AppContext from '../context/Product';
import ProductCard from './ProductCard';


const ProductList = (props) => {
    const{productData}=useContext(AppContext);
    const quantity=productData.length;
    props.totalProds(quantity);
    
  return (
  <>
    <div className="container-fluid ">
        <div  className="container ">
          <div className="row">
            {productData.map((data, index) => (
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