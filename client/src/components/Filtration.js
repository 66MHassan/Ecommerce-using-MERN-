import React, { useState } from 'react'
import {AiOutlineDown} from "react-icons/ai"
import "../App.css"

const Filtration = (props) => {
    // const [data,setData]=useState("")
    // const handlevalue=(event)=>{
    //     setData(event.target.value)
    // }
    // props.filterIt(data)
  return (
    <>
    {/* Search by Category */}
              <div className="input-group">
                {/* <select className="form-control" value={data} onChange={handlevalue}>
                  <option value="AllCategories">All Categories
                  </option>
                  
                  <option value="mobile">Mobile </option>
                  <option value="laptop">Laptop</option>
                  <option value="pc">PC</option>
                  <option value="Accessories">Accessories</option>
                  <option value="watch">Watch</option> */}
                  {/* Add more categories here */}
                {/* </select> */}
                </div>
                </>
  )
}

export default Filtration