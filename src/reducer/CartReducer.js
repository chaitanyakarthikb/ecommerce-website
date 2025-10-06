import { ADD_TO_CART } from "../context/Constants";

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
  }
}

export default CartReducer;