import React from "react";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";

const SHIPPING = 3000;

const MyCart = () => {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce((acc, cur) => acc + parseInt(cur.price) * cur.quantity, 0);

  return (
    <section className="flex flex-col p-8">
      <p className="pb-4 text-2xl font-bold text-center border-b border-gray-300">
        내 장바구니
      </p>
      {!hasProducts && <p>장바구니가 비어있습니다.</p>}
      {hasProducts && (
        <>
          <ul className="p-4 px-8 mb-8 border-b border-gray-300">
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <div className="flex items-center justify-between px-2 mb-6 md:px-8 lg:px-16">
            <PriceCard text="상품 총액" price={totalPrice} />
            <BsFillPlusCircleFill className=" shrink-0" />
            <PriceCard text="배송액" price={SHIPPING} />
            <FaEquals className=" shrink-0" />
            <PriceCard text="결제 예정 금액" price={totalPrice + SHIPPING} />
          </div>
          <Button>주문하기</Button>
        </>
      )}
    </section>
  );
};

export default MyCart;
