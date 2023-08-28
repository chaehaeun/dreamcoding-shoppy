import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getProducts as fetchProducts, addNewProduct } from "../api/firebase";

const useProducts = () => {
  const queryClient = useQueryClient();

  const productsQuery = useQuery(["products"], fetchProducts, {
    staleTime: 1000 * 60,
  });

  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]), // 새로운 제품이 추가되면 products 쿼리를 다시 불러옴
    }
  );

  return { productsQuery, addProduct };
};

export default useProducts;
