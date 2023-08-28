import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useCart from "../hooks/useCart";

const ICON_CLASS =
  'className="mx-1 transition-all cursor-pointer hover:text-brand hover:scale-105"';

const CartItem = ({ product }) => {
  const { addOrUpdateItem, removeItem } = useCart();
  const { id, image, title, option, quantity, price } = product;

  const handlePlus = () =>
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handleDelete = () => removeItem.mutate(id);
  return (
    <li className="flex items-center justify-between my-2">
      <img className="w-24 rounded-lg md:w-48" src={image} alt={title} />
      <div className="flex justify-between flex-1 ml-4">
        <div className="basis-3/5">
          <p className="text-lg">{title}</p>
          <p className="text-xl font-bold text-brand">{option}</p>
          <p>₩{price}</p>
        </div>
        <div className="flex items-center text-2xl">
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare onClick={handlePlus} className={ICON_CLASS} />
          <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
