import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoGrid } from "react-icons/io5";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { useFilterContext } from "../context/FilterContext";
import { MdOutlineGridView } from "react-icons/md";

const Sort = () => {
  const context = useFilterContext();
  const {
    setGridView,
    setListView,
    grid_view,
    filter_products,
    getSortingValue,
    sorting_value,
    sortProducts,
  } = context;

  const handleChange = (e) => {
    getSortingValue(e.target.value);
  };

  useEffect(() => {
    sortProducts();
  }, [sorting_value]);

  return (
    <Wrapper>
      <div className="icons--section">
        <MdOutlineGridView
          onClick={() => setGridView()}
          className={`icon ${grid_view === true ? "active" : ""}`}
          size={"2.5rem"}
        />
        <MdOutlineFormatListBulleted
          onClick={() => setListView()}
          className={`icon ${grid_view === false ? "active" : ""}`}
          size={"2.5rem"}
        />
      </div>
      <div className="total--products">
        <p>{filter_products.length} Total Products</p>
      </div>
      <div className="selection--bar">
        <form action="#">
          <label></label>
          <select onChange={(e) => handleChange(e)}>
            <option value={"lowest"}>Price (lowest)</option>
            <option value={"highest"}>Price (highest)</option>
            <option value={"a-z"}>Price (a-z)</option>
            <option value={"z-a"}>Price (z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  padding: 1rem 1rem;
  justify-content: space-between;
  align-items: center;
  .icons--section .icon {
    cursor: pointer;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .active {
    color: white;
    background: black;
  }
  .total--products,
  .selection--bar {
    user-select: none;
  }
`;

export default Sort;
