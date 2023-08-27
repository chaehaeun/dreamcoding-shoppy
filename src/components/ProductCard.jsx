import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, image, title, category, price } = product;

  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className="overflow-hidden transition-all rounded-lg shadow-md cursor-pointer hover:scale-105"
    >
      <img className="w-full" src={image} alt={title} />
      <div className="flex items-center justify-between px-2 mt-2 text-lg">
        <h3 className="truncate">{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p className="px-2 mb-2 text-gray-600">{category}</p>
    </li>
  );
};

export default ProductCard;
