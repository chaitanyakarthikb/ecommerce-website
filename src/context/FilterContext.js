import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useProductContext } from "./ProductContext";
import FilterReducer from "../reducer/FilterReducer";
import {
  FILTER_CATEGORY,
  FILTER_PRODUCTS,
  GET_SORTING_VALUE,
  LOAD_PRODUCTS,
  RESET_CATEGORY,
  SET_CATEGORY,
  SET_FILTER_PRODUCTS,
  SET_FILTER_TEXT,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  SET_SORTING_VALUE,
  SET_TOGGLE_VIEW,
  SORT_PRODUCTS,
  TOGGLE_GRID_VIEW,
  TOGGLE_LIST_VIEW,
} from "./Constants";

export const FilterContext = createContext();
const initialState = {
  filter_products : [],
  all_products : [],
  grid_view : true,
  sorting_value:"lowest",
  filter:{
    text:"",
    category:"",
  }
}
export const FilterContextProvider = ({ children }) => {
  const productsContext = useProductContext();
  const {products} = productsContext?.state;
  const [state,dispatch] = useReducer(FilterReducer,initialState);

  const updateFiltersAndSort = () => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: FILTER_CATEGORY });
    sortProducts();
  };

  const setCategory = (category) => {
    dispatch({ type: SET_CATEGORY, payload: category });
  };


  useEffect(() => {
    if (products.length > 0) {
      dispatch({ type: LOAD_PRODUCTS, payload: products });
    }
  }, [products]);


  useEffect(() => {
    if (products.length > 0) {
      updateFiltersAndSort();
    }
  }, [state.filter.text, state.sorting_value, products, state.filter.category]);

  const setGridView = ()=>{
    return dispatch({type:SET_GRID_VIEW})
  }

  const setListView = ()=>{
    return dispatch({type:SET_LIST_VIEW})
  }

  const setSortingValue = (query)=>{
    return dispatch({type:SET_SORTING_VALUE,payload:query})
  }

  const setFilterText = (val)=>{
    return dispatch({type:SET_FILTER_TEXT,payload:val})
  }

  const sortProducts = ()=>{
    return dispatch({ type: SORT_PRODUCTS });
  }

  const resetCategory = ()=>{
    return dispatch({type:RESET_CATEGORY});
  }
 


  return (
    <FilterContext.Provider value={{...state,setGridView,setListView,setSortingValue,setFilterText,sortProducts,setCategory,resetCategory}}>
      {children}
    </FilterContext.Provider>
  );
}; 

export const useFilterContext = ()=>{
  return useContext(FilterContext);
}
