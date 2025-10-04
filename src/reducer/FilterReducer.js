import {
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
} from "../context/Constants";

const FilterReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let arr = action.payload.map((el)=>el.price);
      let max = Math.max(...arr);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filter: {
          ...state.filter,
          maxPrice:max,
          price:max,
        },
      };
    case SET_GRID_VIEW:
      return {
        ...state,
        grid_view: true,
      };
    case SET_LIST_VIEW:
      return {
        ...state,
        grid_view: false,
      };
    case SET_SORTING_VALUE:
      return {
        ...state,
        sorting_value: action.payload,
      };
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
      return {
        ...state,
        filter_products: finalArray,
      };
    case SET_FILTER_TEXT:
      return {
        ...state,
        filter: {
          ...state.filter,
          text: action.payload,
        },
      };
    case FILTER_PRODUCTS:
      let { text, category, price } = state.filter;
      let filteredProducts = [...state.all_products];
      if (text) {
        let filterText = state.filter.text;
        filterText = filterText.toLowerCase();
        filteredProducts = filteredProducts.filter((el) => {
          return el.name.toLowerCase().includes(filterText);
        });
      }
      if (category) {
        let filtercategory = state.filter.category;
        filtercategory = filtercategory.toLowerCase();
        filteredProducts =  filteredProducts.filter((el) => {
          return el.category.toLowerCase().includes(filtercategory);
        });
      }
      if (price) {
        let maxPrice = state.filter.price;
        maxPrice = parseInt(maxPrice);
        filteredProducts = filteredProducts.filter((el) => {
          return el.price / 100 <= maxPrice/100;
        });
       
      }
      return {
        ...state,
        filter_products: filteredProducts,
      };
    case SET_CATEGORY:
      return {
        ...state,
        filter: {
          ...state.filter,
          category: action.payload,
        },
      };
    case RESET_CATEGORY:
      return {
        ...state,
        filter: {
          ...state.filter,
          category: "",
        },
      };

    case SET_PRICE:
      return {
        ...state,
        filter: {
          ...state.filter,
          price: action.payload,
        },
      };
  }
  return state;
};

export default FilterReducer;
