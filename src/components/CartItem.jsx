import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { addOrUpdateToCart, removeFromCart } from "../api/firebase";

const CartItem = ({ product, uid }) => {
  const { id, image, title, option, quantity, price } = product;

  const handlePlus = () =>
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handleDelete = () => removeFromCart(uid, id);
  return (
    <li>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{option}</p>
      <div>
        <AiOutlineMinusSquare onClick={handleMinus} />
        <span>{quantity}</span>
        <AiOutlinePlusSquare onClick={handlePlus} />
        <RiDeleteBin5Fill onClick={handleDelete} />
      </div>
    </li>
  );
};

export default CartItem;
