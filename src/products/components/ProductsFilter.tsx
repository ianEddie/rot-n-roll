import { useProducts } from '@products/hooks/useProducts';

export default function ProductsFilter() {
  const { filterByCollection, collections } = useProducts();
  return (
    <div className='flex flex-grow justify-end gap-5'>
      <button
        className='bg-zinc-950 px-4 py-1 text-zinc-50 font-title'
        onClick={() => filterByCollection(null)}
      >
        Todo
      </button>
      {collections.map((collection) => (
        <button
          className='bg-zinc-950 px-4 py-1 text-zinc-50 font-title'
          key={collection}
          onClick={() => filterByCollection(collection)}
        >
          {collection}
        </button>
      ))}
    </div>
  );
}
