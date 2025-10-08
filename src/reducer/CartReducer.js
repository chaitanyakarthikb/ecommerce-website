import { ADD_TO_CART, CLEAR_CART, DELETE_ITEM, SET_TO_CART } from "../context/Constants";

const CartReducer = (state,action)=>{
  switch (action.type) {
    case ADD_TO_CART:
      let { item, quantity } = action.payload;
      let { cart } = state;

      let itemCheckingIdx = cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (itemCheckingIdx !== -1) {
        let updatedCart = cart.map((el, idx) => {
          if (idx === itemCheckingIdx) {
            return {
              ...el,
              quantity:el.quantity+quantity,
            };
          }
          return el;
        });

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        let newObj = {
          ...item,
          quantity: quantity,
        };
        return {
          ...state,
          cart: [...state.cart, newObj],
        };
      }
    case SET_TO_CART:
      let id = action.payload.id;
      let targetQuantity = action.payload.quantity;
      let tempCart = state.cart;

      for(let i = 0;i<tempCart.length;i++){
        if(tempCart[i].id === id){
          tempCart[i].quantity = targetQuantity;
        }
      }
      return {
        ...state,
        cart:tempCart,
      }
    case DELETE_ITEM:
      let itemId = action.payload;
      let existingCart = state.cart;
      let newCart = existingCart.filter((el)=>el.id!==itemId);
      return {
        ...state,
        cart:newCart,
      }
    case CLEAR_CART:
      return{
        ...state,
        cart:[],
      }
    default:
      return state;
  }
}

export default CartReducer;