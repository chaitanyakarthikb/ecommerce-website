import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useProductContext } from "./ProductContext";
import FilterReducer from "../reducer/FilterReducer";
import { SET_FILTER_PRODUCTS, SET_GRID_VIEW, SET_LIST_VIEW, SET_TOGGLE_VIEW, TOGGLE_GRID_VIEW, TOGGLE_LIST_VIEW } from "./Constants";

export const FilterContext = createContext();
const initialState = {
  filter_products : [],
  all_products : [],
  grid_view : true,
}
export const FilterContextProvider = ({ children }) => {
  const productsContext = useProductContext();
  const {products} = productsContext?.state;
  
  const [state,dispatch] = useReducer(FilterReducer,initialState);

  useEffect(()=>{
    dispatch({type:SET_FILTER_PRODUCTS,payload:products});
  },[products]);

  const setGridView = ()=>{
    return dispatch({type:SET_GRID_VIEW})
  }

  const setListView = ()=>{
    return dispatch({type:SET_LIST_VIEW})
  }
 


  return (
    <FilterContext.Provider value={{...state,setGridView,setListView}}>
      {children}
    </FilterContext.Provider>
  );
}; 

export const useFilterContext = ()=>{
  return useContext(FilterContext);
}
