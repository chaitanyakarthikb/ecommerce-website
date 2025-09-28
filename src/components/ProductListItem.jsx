import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FormatPrice } from "../helpers/FormatPrice";

const ProductListItem = ({ product }) => {
  const { id, image, name, price, description, category } = product;

  return (
    <Wrapper>
      <div className="img-section">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>
      </div>
      <div className="text-section">
        <h3>{name}</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <p>{description.substring(0, 150) + "..."}</p>
        <NavLink to={`/product/${id}`}>
          <Button className="button-comp" background={"light"} text={"dark"}>
            Read More
          </Button>
        </NavLink>
      </div>

      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 1px;
  border-color: rgb(98 84 243);
  padding: 2rem 1rem;
  margin: 3rem 0;

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .img-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  .text-section {
    max-width: 65%;
  }
  .text-section h3 {
    padding-bottom: 1.5rem;
    text-transform: capitalize;
  }
  .button-comp {
    margin-top: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0.5rem;
    margin: 3rem 0;

    .text-section {
      width: 100%;
    }
    .text-section h3 {
      padding-top: 1.5rem;
    }

    .img-section {
      width: 100%;
    }
  }
`;

export default ProductListItem;
