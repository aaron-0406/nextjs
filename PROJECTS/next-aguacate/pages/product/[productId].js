import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter();

  return <div>This is the Product page: {productId}</div>;
};

export default ProductItem;
