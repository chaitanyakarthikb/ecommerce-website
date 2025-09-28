import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useProductContext } from "./ProductContext";
import FilterReducer from "../reducer/FilterReducer";
import { SET_FILTER_PRODUCTS, SET_GRID_VIEW } from "./Constants";

export const FilterContext = createContext();
const initialState = {
  filter_products : [],
  all_products : [],
  grid_view : true,
}
// helo
export const FilterContextProvider = ({ children }) => {
  const productsContext = useProductContext();
  const {products} = productsContext?.state;
  
  const [state,dispatch] = useReducer(FilterReducer,initialState);

  useEffect(()=>{
    dispatch({type:SET_FILTER_PRODUCTS,payload:products});
  },[products]);

  const setGridView = ()=>{
    return dispatch({tyep:SET_GRID_VIEW})
  }


  return (
    <FilterContext.Provider value={{...state,setGridView}}>
      {children}
    </FilterContext.Provider>
  );
}; 

export const useFilterContext = ()=>{
  return useContext(FilterContext);
}
