import { useStore } from '@products/store/products-store';
import { useState, useMemo } from 'react';

export function useProducts() {
  // GET THE FUNCTIONS FROM STORE
  const { allProducts, filterByCollection, filteredProducts } = useStore();
  // CREATE A LOCAL STATE FOR SELECT A COLLECTION
  const [selected, setSelected] = useState<string>('Todos');
  // GET THE COLLECTIONS
  const collections = useMemo(
    () => [...new Set(allProducts.map((product) => product.collection))],
    [allProducts]
  );
  // FUNCTION TO FILTER THE PRODUCTS BY COLLECTION
  const handleFilter = (collection: string) => {
    setSelected(collection);
    filterByCollection(collection);
  };
  // RETURN
  return {
    filteredProducts,
    collections,
    handleFilter,
    selected
  };
}
