import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import CurrencyFormater from './components/CurrencyFormater'
import CartAmount from './components/CartAmount'
import {FaTrash} from "react-icons/fa"

const Cart = () => {
  const {cart,removeItem}=useContext(CartContext);

  // Code for increasing and Decreasing Amount
  const setIncreasing=()=>{
    // amount<stock ? setAmount(amount+1):setAmount(stock);
  }
  const setDecreasing=()=>{
    // amount>1 ? setAmount(amount-1):setAmount(1);
  }

  

  return (
    <>
    <div className="container">
      <h2>Shopping Cart</h2>
      <div className="row text-center">
        <div className="col-3 pr-5">Item</div>
        <div className="col-2">Price</div>
        <div className="col-2">Quantity</div>
        <div className="col-2">Subtotal</div>
        <div className="col-3">Remove Item</div>
      </div>
      <hr />

      {cart.map((item) => (
        <div key={item.id} className="row mt-4 text-center">
          <div className="col-3">
              <div className="row ">
            <div className='col-4'>
            <img className='img-fluid' src={item.image} alt={item.id} />
            </div>
            <div className="col-1">{item.name}</div>
            </div>
          </div>
          <div className="col-2 mt-2"><CurrencyFormater price={item.price}/></div>
          <div className="col-2 mt-2 text-center">
    
            <CartAmount amount={item.amount} setIncreasing={setIncreasing} setDecreasing={setDecreasing}/>
            </div>
          <div className="col-2 mt-2"><CurrencyFormater price={item.price* item.amount}/></div>
          <div className="col-3 mt-2 ">
            
            <FaTrash onClick={() => removeItem(item.id)}
              className="text-danger text-center"/>
          </div>
        </div>
      ))}
    </div>
    
    </>
  )
}

export default Cart