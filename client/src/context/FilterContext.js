import { createContext, useContext, useEffect, useReducer } from "react";
import AppContext from "./Product";
import reducer from "../reducer/filterReducer"

 export const FilterContext=createContext();
 const initialState={
    filterProducts:[],
    allProducts:[],
    sortingValue:"lowest"
 }
    
 
 export const FilterProvider = ({ children }) => {
    const { productData } = useContext(AppContext);
  
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const sortIt = (e) => {
      let userClick = e.target.value;
      dispatch({ type: "GET_VALUE", payload: userClick });
    };
  
    useEffect(() => {
      dispatch({ type: "SORTING_PRODUCTS" });
    }, [productData, state.sortingValue]);
  
    useEffect(() => {
      dispatch({ type: "FILTER_PRODUCTS", payload: productData });
    }, [productData]);
  
    return <FilterContext.Provider value={{ ...state, sortIt }}>{children}</FilterContext.Provider>;
  };
 
  
  
  
  
  
  
  





    