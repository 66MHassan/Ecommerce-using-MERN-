import React from 'react'
import { Link } from 'react-router-dom'
import CurrencyFormater from './CurrencyFormater';

const ProductCard = (data) => {
    const{id,name,image,price,category}=data;
  return (
    //Card for product page 
    <Link to={`/single/${id}`}>
    <div className="container">
  <div className="card out" style={{height:"auto"}}>
    <img src={image} className='img-fluid' alt="Card Image" /> 
    <div className="card-body">
      <p className="card-title">{name}</p>
      <p className='card-text'>price:{<CurrencyFormater price={price} />}</p>

    </div>
  </div>
</div>
</Link>
  )
}

export default ProductCard