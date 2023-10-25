import React, { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

const Sort = () => {
    const{filterProducts,sortIt}=useContext(FilterContext)

    const productsCount = filterProducts ? filterProducts.length : 0;
  return (
    <>
    <div className="row mb-3 ml-3">
            <div className="col-5 mt-4 ">
              <h5>{`${productsCount}:Producds Avaible`}</h5>
              
            </div>
            <div className="col-6 mt-3">
            <div className="card-body">
              {/* Category Selection */}
              <select className="form-control" onClick={sortIt}>
                <option value="feature">Features</option>
                <option value="a-z">a-z ( Sort )</option>
                <option value="z-a">z-a ( Sort )</option>
                <option value="lowest">Lowest-Price</option>
                <option value="highest">Highest-Price</option>
                 {/* Add more categories here  */}
               </select>
               </div>
            </div>
          </div>
            
    </>
  )
}

export default Sort