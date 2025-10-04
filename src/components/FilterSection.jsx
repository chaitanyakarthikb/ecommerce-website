import React, { useState } from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/FilterContext";
import { FormatPrice } from "../helpers/FormatPrice";

const getUniqueCategories = (products) => {
  let set = new Set();
  if (products.length > 0) {
    products.map((el) => set.add(el.category));
  }
  return set;
};
const FilterSection = () => {
  const filterContext = useFilterContext();

  const {
    setFilterText,
    all_products,
    setCategory,
    resetCategory,
    filter,
    setPrice,
  } = filterContext;
  let { price, text, category, maxPrice } = filter;
  price = price || 0;
  text = text || "";
  maxPrice = maxPrice || 0;
  category = category || "";
  const uniqueCategories = getUniqueCategories(all_products);
  const uniqueCategoriesArr = ["all", ...uniqueCategories];
  const handleInputChange = (e) => {
    let value = e.target.value;
    setFilterText(value);
  };

  const handleOnClick = (el) => {
    if (el === "all") {
      resetCategory();
    } else {
      setCategory(el);
    }
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <Wrapper>
      <input
        placeholder="search"
        value={text}
        onChange={(e) => handleInputChange(e)}
      />
      <div className="categories--section">
        <h3>Categories</h3>
        {/* <p onClick={() => resetCategory()}>All</p> */}
        {uniqueCategoriesArr.map((el) => {
          return (
            <p
              className={
                el === category
                  ? "active"
                  : "" || (el === "all" && category === "" ? "active" : "")
              }
              onClick={() => handleOnClick(el)}
              key={el.id}
            >
              {el}
            </p>
          );
        })}
      </div>

      <div className="price--filter">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          min={0}
          max={maxPrice}
          value={price}
          onChange={(e) => handlePriceChange(e)}
        />
      </div>
    </Wrapper>
  );
};

export default FilterSection;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-transform: capitalize;

  .categories--section {
    margin-top: 15px;
  }

  .active {
    text-decoration: underline;
  }

  .categories--section h3 {
    margin-bottom: 10px;
  }

  .categories--section p:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .price--filter input {
    margin: 0.5rem 0 1rem 0;
    padding: 0;
    box-shadow: none;
    cursor: pointer;
  }

  .price--filter {
    margin-top: 25px;
  }

  .price--filter h3 {
    margin-bottom: 5px;
  }
`;
