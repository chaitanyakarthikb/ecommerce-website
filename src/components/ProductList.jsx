import React from "react";
import { useFilterContext } from "../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = ({ products }) => {
  const temp = useFilterContext();
  const { grid_view, filter_products } = temp;

  if (grid_view === true) {
    return <GridView products={filter_products} />;
  } else {
    return <ListView products={filter_products} />;
  }
};

export default ProductList;
