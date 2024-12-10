import { useStore } from '@products/store/products-store';

export function useProducts() {
  const { allProducts, filterByCollection, filteredProducts } = useStore();
  const collections = [
    ...new Set(allProducts.map((product) => product.collection))
  ];
  return {
    filteredProducts,
    collections,
    filterByCollection
  };
}
