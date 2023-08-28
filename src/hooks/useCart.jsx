import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { addOrUpdateToCart, getCart, removeFromCart } from "../api/firebase";
import { useAuth } from "../context/AuthContext";

const useCart = () => {
  const { uid } = useAuth();
  const queryClient = useQueryClient();

  const cartQuery = useQuery(["carts", uid || ""], () => getCart(uid), {
    enabled: !!uid, // uid가 있을 때만 쿼리를 불러옴
  });

  const addOrUpdateItem = useMutation(
    (product) => addOrUpdateToCart(uid, product),
    {
      onSuccess: () => queryClient.invalidateQueries(["carts", uid]), // 장바구니에 제품이 추가되면 carts 쿼리를 다시 불러옴
    }
  );

  const removeItem = useMutation((id) => removeFromCart(uid, id), {
    onSuccess: () => queryClient.invalidateQueries(["carts", uid]), // 장바구니에서 제품이 삭제되면 carts 쿼리를 다시 불러옴
  });

  return { cartQuery, addOrUpdateItem, removeItem };
};

export default useCart;
