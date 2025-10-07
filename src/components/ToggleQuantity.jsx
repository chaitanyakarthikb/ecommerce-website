import React from "react";
import { IoAddOutline } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import styled from "styled-components";

const Wrapper = styled.div`
  user-select: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 18%;

  .button {
    cursor: pointer;
  }
  .quantity {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ToggleQuantity = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <Wrapper>
      <div>
        <RiSubtractLine
          className="button"
          size="2rem"
          onClick={() => decreaseQuantity()}
        />
      </div>
      <div>
        <h3 className="quantity">{quantity}</h3>
      </div>

      <div>
        <IoAddOutline
          className="button"
          size="2rem"
          onClick={() => increaseQuantity()}
        />
      </div>
    </Wrapper>
  );
};

export default ToggleQuantity;
