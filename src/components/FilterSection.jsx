import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/FilterContext";

const FilterSection = () => {
  const filterContext = useFilterContext();
  const { setFilterText } = filterContext;
  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFilterText(value);
  };
  return (
    <Wrapper>
      <input placeholder="search" onChange={(e) => handleInputChange(e)} />
    </Wrapper>
  );
};

export default FilterSection;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
