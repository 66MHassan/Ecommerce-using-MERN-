import React, { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

const Filter = () => {
  const{ 
    filters:{text},
    filterIt,filterCate,clearIt}=useContext(FilterContext)

    const buttonStyle = {
      padding:"5px",
      background: "none",
      border: 'none',
    };
  return (
    <>
    <div className='mt-3'>
      <form onSubmit={(e)=>e.preventDefault()}>
      <input type="text" name="text" value={text} onChange={filterIt} placeholder='SEARCH'/>
      </form>

      <div className='col-2 mt-3'>
        <button style={buttonStyle} value='All' onClick={filterCate} > All </button>
        <button style={buttonStyle} value='mobile' onClick={filterCate} >Mobile</button>
        <button style={buttonStyle} value='laptop' onClick={filterCate} > Laptop</button>
        <button style={buttonStyle} value='computer' onClick={filterCate} >Computer</button>
        <button style={buttonStyle} value='accessories' onClick={filterCate} >Accessories</button>
        <button style={buttonStyle} value='watch' onClick={filterCate} >Watches</button>
      </div>
    </div>
    <div className="btn btn-danger mt-4" onClick={clearIt}>Cleat Filter</div>
    </>
  )
}

export default Filter