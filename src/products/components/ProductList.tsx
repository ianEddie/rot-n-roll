import SingleProduct from './SingleProduct';
import { useProducts } from '@products/hooks/useProducts';

export default function ProductList() {
  const { filteredProducts } = useProducts();

  return (
    <div className='w-full flex-grow grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 '>
      {filteredProducts.map((product) => (
        <SingleProduct
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
