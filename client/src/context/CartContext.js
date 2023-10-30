import { createContext, useReducer } from "react";
import reducer from "../reducer/CartReducer"

export const CartContext=createContext();
const initialState={
    cart:[],
}

export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    // function for Add item to Cart 
    const addToCart=(id,amount,singleProduct)=>{
        dispatch({type:"ADD_TO_CART",payload:{id,amount,singleProduct}})
    }

    // function for remove item from cart
    const removeItem=(id)=>{

        dispatch({type:'REMOVE_ITEM',payload:id})
    }

    return <CartContext.Provider value={{...state,addToCart,removeItem}}>{children}</CartContext.Provider>
}

