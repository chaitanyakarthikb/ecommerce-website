import React from "react";
import ProductListItem from "./ProductListItem";

const ListView = ({ products }) => {
  return (
    <>
      {products &&
        products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
    </>
  );
};

export default ListView;
