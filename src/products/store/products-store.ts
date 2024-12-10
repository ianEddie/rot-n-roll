import { create } from 'zustand';
import type { Product, Products } from '@products/types';
import { PRODUCTS_DATA } from '@products/data/products-data';

type Store = {
  allProducts: Products;
  filteredProducts: Products;
  filterByCollection: (collection: string | null) => void;
};

export const useStore = create<Store>()((set) => ({
  allProducts: PRODUCTS_DATA,
  filteredProducts: PRODUCTS_DATA,
  filterByCollection: (collection) => {
    set((state) => ({
      filteredProducts: collection
        ? state.allProducts.filter(
            (product) => product.collection === collection
          )
        : state.allProducts
    }));
  }
}));
