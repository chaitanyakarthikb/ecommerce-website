import { FILTER_PRODUCTS, GET_SORTING_VALUE, LOAD_PRODUCTS, SET_FILTER_PRODUCTS, SET_FILTER_TEXT, SET_GRID_VIEW, SET_LIST_VIEW, SET_SORTING_VALUE, SET_TOGGLE_VIEW, SORT_PRODUCTS, TOGGLE_GRID_VIEW, TOGGLE_LIST_VIEW } from "../context/Constants";

const FilterReducer = (state,action)=>{
  switch(action.type){
    case LOAD_PRODUCTS:
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
    case SET_SORTING_VALUE:
      return{
        ...state,
        sorting_value:action.payload,
      }
    case SORT_PRODUCTS:
      let tempArray = [...state.filter_products];
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
      console.log("🚀 ~ FilterReducer ~ finalArray:", finalArray)
      return{
        ...state,
        filter_products:finalArray
      }
    case SET_FILTER_TEXT:
      return{
        ...state,
        filter:{
          ...state.filter,
          text:action.payload
        }
      }
    case FILTER_PRODUCTS:
      let filterText = state.filter.text;
      filterText = filterText.toLowerCase();
      let initalProducts = [...state.all_products];
      let arr = initalProducts.filter((el)=>{
        return el.name.toLowerCase().includes(filterText);
      })
      return{
        ...state,
        filter_products:arr,
      }
    
  }
  return state;
  
}

export default FilterReducer;