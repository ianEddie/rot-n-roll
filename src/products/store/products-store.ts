import { create } from 'zustand';
import type { Products } from '@products/types';
import PRODUCTS_DATA from '@products/data/products-data.json';

type Store = {
  allProducts: Products;
  filteredProducts: Products;
  filterByCollection: (collection: string | null) => void;
};

export const useStore = create<Store>()((set) => ({
  // GET ALL PRODUCTS
  allProducts: PRODUCTS_DATA,
  // GET THE FILTERED PRODUCTS
  filteredProducts: PRODUCTS_DATA,
  // FUNCTION TO FILTER THE PRODUCTS
  filterByCollection: (collection) => {
    set((state) => ({
      filteredProducts:
        collection === 'Todos'
          ? state.allProducts
          : state.allProducts.filter(
              (product) => product.collection === collection
            )
    }));
  }
}));
