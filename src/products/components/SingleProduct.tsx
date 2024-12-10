import SingleProductInfo from './SingleProductInfo';
import SingleProductDescription from './SingleProductDescription';
import SingleProductPicture from './SingleProductPicture';
import BuyButton from './BuyButton';
import Price from './Price';
import type { Product } from '@products/types';

export default function SingleProduct({ product }: { product: Product }) {
  
  const { name, collection, year, available, image } = product;
  const info = { collection, available, name, year };
  const description = { collection, name };
  const picture = { name, image };

  return (
    <article className='flex flex-col items-end gap-y-1'>
      <Price price={product.price} />
      <div className='flex h-[380px] border border-zinc-800 bg-zinc-200/80 backdrop-blur-[2px]'>
        <SingleProductInfo {...info} />
        <SingleProductDescription {...description} />
        <SingleProductPicture {...picture} />
      </div>
      <BuyButton />
    </article>
  );
}
