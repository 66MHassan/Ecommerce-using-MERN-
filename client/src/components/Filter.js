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
        <button style={buttonStyle} name='category' value='All' onClick={filterIt} > All </button>
        <button style={buttonStyle} name='category' value='mobile' onClick={filterIt} >Mobile</button>
        <button style={buttonStyle} name='category' value='laptop' onClick={filterIt} > Laptop</button>
        <button style={buttonStyle} name='category' value='computer' onClick={filterIt} >Computer</button>
        <button style={buttonStyle} name='category' value='acessories' onClick={filterIt} >Accessories</button>
        <button style={buttonStyle} name='category' value='watches' onClick={filterIt} >Watches</button>
      </div>
    </div>
    </>
  )
}

export default Filter