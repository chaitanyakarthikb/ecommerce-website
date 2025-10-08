import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from '../reducer/productsReducer';
import { API_ERROR, PRODUCTS_LOADED_SUCCESFULLY, SET_API_ERROR, SET_LOADING, SET_PRODUCTS_DATA, SET_SINGLE_PRODUCT, SET_SINGLE_PRODUCT_LOADING } from "./Constants";
export const AppContext = createContext();

const initialState = {
    isLoading : true,
    isError : false,
    products : [],
    featuredProducts : [],
    singleProduct : {},
    isSingleProductLoading : false,
  }

export const AppProvider = ({ children }) => {
  // const [products,setProducts] = useState([]);
  
  const [state,dispatch] = useReducer(reducer,initialState);
  const api = "https://api.pujakaitem.com/api/products";

  useEffect(()=>{
      dispatch({type: SET_LOADING})
      fetchApi(api).then((res)=>{
        dispatch({type:SET_PRODUCTS_DATA,payload:res})
      }).catch((err)=>{
        dispatch({type:SET_API_ERROR,payload:err})
      })
  },[]);


  const fetchApi =async(api)=>{
    let res = await fetch(api);
    let resJson = await res.json();
    return resJson;
  }

  const getSingleProduct = (id)=>{
    dispatch({type:SET_SINGLE_PRODUCT_LOADING})
    dispatch({type:SET_SINGLE_PRODUCT, payload:id});
  }
  return <AppContext.Provider value={{state,getSingleProduct}}>{children}</AppContext.Provider>;
};

export const useProductContext=()=>{
  return useContext(AppContext);
}