import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useProductContext } from "./ProductContext";
import FilterReducer from "../reducer/FilterReducer";
import {
  CLEAR_FILTERS,
  FILTER_CATEGORY,
  FILTER_ON_PRICE,
  FILTER_PRODUCTS,
  GET_SORTING_VALUE,
  LOAD_PRODUCTS,
  RESET_CATEGORY,
  SET_CATEGORY,
  SET_FILTER_PRODUCTS,
  SET_FILTER_TEXT,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  SET_PRICE,
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
    minPrice:0,
    maxPrice:0,
    price:0,
  }
}
export const FilterContextProvider = ({ children }) => {
  const productsContext = useProductContext();
  const {products} = productsContext?.state;
  const [state,dispatch] = useReducer(FilterReducer,initialState);

  const updateFiltersAndSort = () => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: FILTER_CATEGORY });
    if (state.filter.price && parseInt(state.filter.price) > 0) {
      dispatch({ type: FILTER_ON_PRICE });
    }
    dispatch({ type: SORT_PRODUCTS })
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
  }, [products,state.filter]);

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

  const resetCategory = ()=>{
    return dispatch({type:RESET_CATEGORY});
  }

  const setPrice = (val)=>{
    return dispatch({type:SET_PRICE,payload:val});
  }

  const clearFilters = ()=>{
    return dispatch({type:CLEAR_FILTERS});
  }



  return (
    <FilterContext.Provider value={{...state,setGridView,setListView,setSortingValue,setFilterText,setCategory,resetCategory,setPrice,clearFilters}}>
      {children}
    </FilterContext.Provider>
  );
}; 

export const useFilterContext = ()=>{
  return useContext(FilterContext);
}
