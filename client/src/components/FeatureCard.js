import React from 'react';
import "../App.css"
import { Link } from 'react-router-dom';
import CurrencyFormater from './CurrencyFormater';

const FeatureCard = (data) => {
    const{id,name,image,price,category}=data;
    return (
      <Link to={`/single/${id}`}>
        <div className="card out" >
          
          <img src={image} className="card-img-top" alt={name} />
          <div className="card-body" style={{ position: 'absolute', bottom: '0', background: 'rgba(0, 0, 0, 0.7)', width: '100%', padding: '10px', color: '#fff', transition: 'background 0.3s' }}>
            <h5 className="card-title" style={{ marginTop: '0' }}>{name}</h5>
            <p className="card-text">Category: {category}</p>
            <p className="card-text">Price:    {<CurrencyFormater price={price} />}</p>
          </div>
        </div>
        </Link>
      );
}

export default FeatureCard