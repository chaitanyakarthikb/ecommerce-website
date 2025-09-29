import { GET_SORTING_VALUE, SET_FILTER_PRODUCTS, SET_GRID_VIEW, SET_LIST_VIEW, SET_TOGGLE_VIEW, SORT_PRODUCTS, TOGGLE_GRID_VIEW, TOGGLE_LIST_VIEW } from "../context/Constants";

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
    case GET_SORTING_VALUE:
      return{
        ...state,
        sorting_value:action.payload,
      }
    case SORT_PRODUCTS:
      let tempArray = [...action.payload];
      console.log(tempArray);
      let finalArray;
      if (state.sorting_value === "lowest") {
        finalArray = tempArray.sort((a, b) => a.price - b.price);
      } else if (state.sorting_value === "highest") {
        finalArray = tempArray.sort((a, b) => b.price - a.price);
      } else if (state.sorting_value === "a-z") {
        finalArray = tempArray.sort((a, b) => a.name.localeCompare(b.name));
      } else if (state.sorting_value === "z-a") {
        finalArray = tempArray.sort((a, b) => b.name.localeCompare(a.name));
      }
      return{
        ...state,
        filter_products:finalArray
      }
    
  }
  return state;
  
}

export default FilterReducer;