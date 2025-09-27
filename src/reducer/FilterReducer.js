import { SET_FILTER_PRODUCTS } from "../context/Constants";

const FilterReducer = (state,action)=>{
  switch(action.type){
    case SET_FILTER_PRODUCTS:
      return {
        ...state,
        filter_products:[...action.payload],
        all_products:[...action.payload],
      }
  }
  return state;
  
}

export default FilterReducer;