import React from "react";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";

const Products = () => {
  const { productsQuery } = useProducts();
  const { data: products, isLoading, error } = productsQuery;

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
