import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/FilterContext";

const getUniqueCategories = (products) => {
  let set = new Set();
  if (products.length > 0) {
    products.map((el) => set.add(el.category));
  }
  return set;
};
const FilterSection = () => {
  const filterContext = useFilterContext();
  const { setFilterText, all_products, setCategory, resetCategory, filter } =
    filterContext;
  let { category } = filter;
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

  return (
    <Wrapper>
      <input placeholder="search" onChange={(e) => handleInputChange(e)} />
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
`;
