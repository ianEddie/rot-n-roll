import { useProducts } from '@products/hooks/useProducts';

export default function ProductsFilter() {
  const { filterByCollection, collections } = useProducts();
  return (
    <div className='flex flex-grow justify-end gap-5 '>
      <button
        className='bg-zinc-950 px-4 py-1 text-zinc-50 font-title font-medium shadow-md  border border-transparent transition-all duration-300 hover:bg-zinc-50 hover:text-zinc-950 hover:shadow-md hover:shadow-zinc-950/50 hover:border hover:border-zinc-800 '
        onClick={() => filterByCollection(null)}
      >
        Todo
      </button>
      {collections.map((collection) => (
        <button
          className='bg-zinc-950 px-4 py-1 text-zinc-50 font-title font-medium shadow-md shadow-transparent border border-transparent transition-all duration-300 hover:bg-zinc-50 hover:text-zinc-950  hover:shadow-md hover:shadow-zinc-950/40 hover:border hover:border-zinc-800'
          key={collection}
          onClick={() => filterByCollection(collection)}
        >
          {collection}
        </button>
      ))}
    </div>
  );
}
