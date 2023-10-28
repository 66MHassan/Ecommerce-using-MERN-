import React, { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

const Filter = () => {
  const{ 
    filters:{text},
    filterIt,filterCate}=useContext(FilterContext)

    const buttonStyle = {
      background: "none",
      border: 'none',
    };
  return (
    <>
    <div className='mt-3'>
      <form onSubmit={(e)=>e.preventDefault()}>
      <input type="text" name="text" value={text} onChange={filterIt} placeholder='SEARCH'/>
      </form>

      <div className='col-2'>
        <button style={buttonStyle} value='All' onClick={filterCate} > All </button>
        <button style={buttonStyle} value='mobile' onClick={filterCate} >Mobile</button>
        <button style={buttonStyle} value='laptop' onClick={filterCate} > Laptop</button>
        <button style={buttonStyle} value='computer' onClick={filterCate} >Computer</button>
        <button style={buttonStyle} value='acessories' onClick={filterCate} >Accessories</button>
        <button style={buttonStyle} value='watches' onClick={filterCate} >Watches</button>
      </div>
    </div>
    </>
  )
}

export default Filter