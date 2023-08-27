import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "../api/firebase";
import ProductCard from "./ProductCard";

const Products = () => {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery(["products"], getProducts);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>!!</p>}
      <ul className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
};

export default Products;
