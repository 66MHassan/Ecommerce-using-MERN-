
 const CartReducer = (state,action) => {
    if(action.type==="ADD_TO_CART"){
        const{id,amount,singleProduct}=action.payload;
        console.log(id)
        
    }
  return state;
}

export default CartReducer;