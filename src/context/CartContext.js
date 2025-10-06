import { createContext, useContext, useReducer } from "react";
import CartReducer from "../reducer/CartReducer";
import { ADD_TO_CART } from "./Constants";

const CartContext = createContext();

const initialState = {
  cart:[],
  total_items:"",
  shipping_fee: 50000,
  total_amount:""
}

export const CartContextProvider = ({ children }) => {
  const [state,dispatch] = useReducer(CartReducer,initialState);

  const addToCart = (item,quantity)=>{
    let payloadObj = {
      item,
      quantity
    }
    return dispatch({type:ADD_TO_CART,payload:payloadObj});
  }
  return (
    <CartContext.Provider value={{...state,addToCart}}>
      {children}
    </CartContext.Provider>
  );
}; 

export const useCartContext = ()=>{
  return useContext(CartContext);
}