
 const CartReducer = (state,action) => {
    if(action.type==="ADD_TO_CART"){
        const{id,amount,singleProduct}=action.payload;
      
        let cartProduct;
        cartProduct={
          id,
          amount,
          name:singleProduct.name,
          image:singleProduct.image[0].url,
          price:singleProduct.price,
        }
        return{
          ...state,
          cart:[...state.cart,cartProduct]
        }
        
    }

    if(action.type==='REMOVE_ITEM'){
      const updatedCart=state.cart.filter((curElem)=>curElem.id!==action.payload);
      return{
        ...state,
        cart:updatedCart,
      }
    }
  return state;
}

export default CartReducer;