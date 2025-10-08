import { SET_API_ERROR, SET_LOADING, SET_PRODUCTS_DATA, SET_SINGLE_PRODUCT, SET_SINGLE_PRODUCT_LOADING } from "../context/Constants";

const productsReducer = (state,action)=>{

  switch(action.type){
    case SET_PRODUCTS_DATA:
      const featuredProducts = action.payload.filter((element)=>element.featured===true);
      return{
        ...state,
        featuredProducts: featuredProducts,
        isLoading:false,
        isError:false,
        products:action.payload,
      }
    case SET_API_ERROR:
      return {
        ...state,
        isLoading:false,
        isError:true,
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading:true,
      }
    case SET_SINGLE_PRODUCT_LOADING:
      return {
        ...state,
        isSingleProductLoading:true,
      }
    case SET_SINGLE_PRODUCT:
      const singleProduct = state.products.find((el)=>el.id === action.payload);
      return {
        ...state,
        isSingleProductLoading:!singleProduct,
        singleProduct:singleProduct,
      }
    default:
      return state;
      
  }
}

export default productsReducer;