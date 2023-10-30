import { createContext, useReducer } from "react";
import reducer from "../reducer/CartReducer"

export const CartContext=createContext();
const initialState={
    cart:[],
}

export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    const addToCart=(id,amount,singleProduct)=>{
        dispatch({type:"ADD_TO_CART",payload:{id,amount,singleProduct}})

    }

    return <CartContext.Provider value={{...state,addToCart}}>{children}</CartContext.Provider>
}

