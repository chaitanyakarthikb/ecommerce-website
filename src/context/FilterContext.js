import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useProductContext } from "./ProductContext";
import FilterReducer from "../reducer/FilterReducer";
import { GET_SORTING_VALUE, SET_FILTER_PRODUCTS, SET_GRID_VIEW, SET_LIST_VIEW, SET_SORTING_VALUE, SET_TOGGLE_VIEW, SORT_PRODUCTS, TOGGLE_GRID_VIEW, TOGGLE_LIST_VIEW } from "./Constants";

export const FilterContext = createContext();
const initialState = {
  filter_products : [],
  all_products : [],
  grid_view : true,
  sorting_value:"lowest"
}
export const FilterContextProvider = ({ children }) => {
  const productsContext = useProductContext();
  const {products} = productsContext?.state;


  const [state,dispatch] = useReducer(FilterReducer,initialState);

  useEffect(()=>{
    sortProducts();
  },[state.sorting_value,products])

  const setGridView = ()=>{
    return dispatch({type:SET_GRID_VIEW})
  }

  const setListView = ()=>{
    return dispatch({type:SET_LIST_VIEW})
  }

  const getSortingValue = (query)=>{
    return dispatch({type:SET_SORTING_VALUE,payload:query})
  }
  const sortProducts = ()=>{
    return dispatch({type:SORT_PRODUCTS,payload:products})
  }
 


  return (
    <FilterContext.Provider value={{...state,setGridView,setListView,getSortingValue,sortProducts}}>
      {children}
    </FilterContext.Provider>
  );
}; 

export const useFilterContext = ()=>{
  return useContext(FilterContext);
}
