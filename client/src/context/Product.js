import {createContext, useEffect, useReducer} from "react";
import axios from "axios";
import reducer from "../reducer/prodReducer"


const AppContext=createContext();
const Api = "https://api.pujakaitem.com/api/products";


const intialstate={
    isLoading:false, 
    isError:false,
    productData:[],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct:{}
}
const Provider = ({children})=>{
    const[state,dispatch]=useReducer(reducer,intialstate);

const getProducts=async(url)=>
    {
        dispatch({type:"SET_LOADING"})
        try{
        const res=await axios.get(url)
        const productData=await res.data;
        console.log(productData)
        dispatch({type:"MY_DATA",payload:productData});
         
    } catch (error) {
        dispatch({type:"API_ERROR"})
        
    }
}

const getSingleProduct=async(url)=>{
    dispatch({type:"SINGLE_LOADING"})
    try {
        const res=await axios.get(url);
        const singleProduct=await res.data;
        dispatch({type:"SINGLE_PRODUCT",payload:singleProduct})
    } catch (error) {
        dispatch({type:"SINGLE_PRODUT_ERROR"})
        
    }
}
    useEffect(()=>{
        getProducts(Api)
    },[])
    return (<AppContext.Provider value={{ ...state ,getSingleProduct,getProducts}}>{children}</AppContext.Provider>);

}

export {Provider }
export default AppContext;