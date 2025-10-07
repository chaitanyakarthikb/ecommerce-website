import { createContext, useContext, useReducer } from "react";
import CartReducer from "../reducer/CartReducer";
import { ADD_TO_CART, CLEAR_CART, DELETE_ITEM, SET_TO_CART } from "./Constants";

const CartContext = createContext();

const initialState = {
  cart:[],
  total_items:"",
  shipping_fee: 5000,
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
  const toggleQuantity = (id,quantity)=>{
    let payloadObj = {
      id,
      quantity,
    }
    return dispatch({type:SET_TO_CART,payload:payloadObj});
  }

  const deleteItem = (id)=>{
    return dispatch({type:DELETE_ITEM,payload:id});
  }

  const clearCart = ()=>{
    return dispatch({type:CLEAR_CART})
  }
  return (
    <CartContext.Provider value={{...state,addToCart,toggleQuantity,deleteItem,clearCart}}>
      {children}
    </CartContext.Provider>
  );
}; 

export const useCartContext = ()=>{
  return useContext(CartContext);
}