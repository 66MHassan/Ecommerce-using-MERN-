import  AppContext  from "../context/Product";
import FeatureCard from "./FeatureCard";
import "../App.css"

import React, { useContext } from 'react'

const ProductSection = () => {
    const {isLoading,featureProducts}=useContext(AppContext);
    if(isLoading){
        return <h1>....Loading</h1>
    }
    return (
       <div className="container-fluid mt-5" style={{background:"#D3D3D3"}}>
        <div  className="container py-4">
          <h1>Home Features</h1>
          <div className="row">
            {featureProducts.map((data, index) => (
              <div className="col-md-4 " key={index}>
                <FeatureCard {...data} />
              </div>
            ))}
          </div>
        </div>
        </div>
      );
}

export default ProductSection;