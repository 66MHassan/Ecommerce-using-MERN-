import React from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import '../App.css'

const CartAmount = ({amount,setIncreasing,setDecreasing}) => {

  return (
    <div className='col-2 d-flex' >
    <i onClick={()=>setDecreasing()}><AiOutlineMinus /></i>
    <p >{amount}</p>
    <i onClick={()=>setIncreasing()}><AiOutlinePlus /></i>
    </div>
  )
}

export default CartAmount