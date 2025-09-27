import React, { useContext } from "react";
import styled from "styled-components";



const Products = () => {
  return <h1>Hello world, this is my products page</h1>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
