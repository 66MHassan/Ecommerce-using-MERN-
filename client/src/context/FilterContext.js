import { createContext, useContext, useEffect, useReducer } from "react";
import AppContext from "./Product";
import reducer from "../reducer/filterReducer"

 export const FilterContext=createContext();
 const initialState={
    filterProducts:[],
    allProducts:[],
    sortingValue:"lowest",
    category:"All",
    filters:{
      text: "",
    },

 }
    
 
 export const FilterProvider = ({ children }) => {
    const { productData } = useContext(AppContext);
  
    const [state, dispatch] = useReducer(reducer, initialState);
  
    //sorting portion
    const sortIt = (e) => {
      let userValue = e.target.value;
      dispatch({ type:"GET_VALUE", payload:userValue})
    };
    useEffect(() => {
      
      dispatch({ type: "SORTING_PRODUCTS",payload:productData});
      
    }, [productData, state.sortingValue]);

    // Search by name
    const filterIt=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
    return dispatch({type:"FILTER_VALUE",payload:{name,value}})
    }

    useEffect(() => {
      dispatch({type:"FILTER_PROD"})
    }, [state.filters]);

    //filter by Category wise
    const filterCate=(e)=>{
      let value=e.target.value;
    return dispatch({type:"FILTER_CATEGORY_VALUE",payload:value})
    }

    useEffect(() => {
      dispatch({type:"FILTER_CATEGORY"})
    }, [state.category]);
  
// To Clear filters 
   const clearIt=()=>{
    dispatch({type:"CLEAR_FILTER"})
   }
    
  
    useEffect(() => {
      dispatch({ type: "FILTER_PRODUCTS", payload: productData });
    }, [productData]);
  
    return <FilterContext.Provider value={{ ...state, sortIt ,filterIt,filterCate,clearIt}}>{children}</FilterContext.Provider>;
  };
 
  
  
  
  
  
  
  





    