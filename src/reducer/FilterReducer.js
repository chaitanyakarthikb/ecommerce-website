import { SET_FILTER_PRODUCTS, SET_GRID_VIEW, SET_LIST_VIEW, SET_TOGGLE_VIEW, TOGGLE_GRID_VIEW, TOGGLE_LIST_VIEW } from "../context/Constants";

const FilterReducer = (state,action)=>{
  switch(action.type){
    case SET_FILTER_PRODUCTS:
      return {
        ...state,
        filter_products:[...action.payload],
        all_products:[...action.payload],
      }
    case SET_GRID_VIEW:
      return{
        ...state,
        grid_view: true,
      }
    case SET_LIST_VIEW:
      return{
        ...state,
        grid_view: false,
      }
  }
  return state;
  
}

export default FilterReducer;