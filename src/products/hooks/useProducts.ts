import { useStore } from '@products/store/products-store';
import { useState } from 'react';

export function useProducts() {
  const { allProducts, filterByCollection, filteredProducts } = useStore();
  const [selected, setSelected] = useState<string | null>(null);
  //
  const handleFilter = (collection: string | null) => {
    setSelected(collection);
    filterByCollection(collection);
  };
  //
  const collections = [
    ...new Set(allProducts.map((product) => product.collection))
  ];

  return {
    filteredProducts,
    collections,
    handleFilter,
    selected
  };
}
