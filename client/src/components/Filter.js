import React, { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

const Filter = () => {
  const{ 
    filters:{text},
    filterIt}=useContext(FilterContext)

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
        <button style={buttonStyle}> All </button>
        <button style={buttonStyle}>Mobile</button>
        <button style={buttonStyle}> Laptop</button>
        <button style={buttonStyle}>Computer</button>
        <button style={buttonStyle}>Accessories</button>
        <button style={buttonStyle}>Watches</button>
      </div>
    </div>
    </>
  )
}

export default Filter