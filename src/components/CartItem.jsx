import React from "react";
import styled from "styled-components";
import ToggleQuantity from "./ToggleQuantity";
import { FormatPrice } from "../helpers/FormatPrice";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  let { name, image, quantity, price } = item;
  let cartContext = useCartContext();
  const { toggleQuantity, deleteItem } = cartContext;
  // let ToggleQuantity = () => {};
  const handleToggleQuantity = (id, quantity) => {
    toggleQuantity(id, quantity);
  };

  const handleDelete = (id) => {
    deleteItem(id);
  };
  return (
    <Wrapper className="grid grid-five-column margin-top-bottom">
      <div className="item-with-image">
        <img src={image} />
        <p>{name}</p>
      </div>
      <div className="item cart-hide">
        <p>{<FormatPrice price={price} />}</p>
      </div>

      <div className="item">
        <p>
          <ToggleQuantity
            quantity={quantity}
            increaseQuantity={() => handleToggleQuantity(item.id, quantity + 1)}
            decreaseQuantity={() => handleToggleQuantity(item.id, quantity - 1)}
          />
        </p>
      </div>
      <div className="item cart-hide">
        <p className="">
          <FormatPrice price={price * quantity} />
        </p>
      </div>
      <div className="item">
        <RiDeleteBin5Fill
          onClick={() => handleDelete(item.id)}
          size={"2rem"}
          className="remove_icon"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    width: 50%;
  }

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .cart-hide {
      display: none;
    }
  }
`;

export default CartItem;
