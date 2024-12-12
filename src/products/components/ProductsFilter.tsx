import { useProducts } from '@products/hooks/useProducts';
import style from '../styles/button.module.css';

export default function ProductsFilter() {
  const { collections, selected, handleFilter } = useProducts();
  return (
    <div className='flex flex-grow justify-end gap-5'>
      <button
        className={`${style.button} ${selected === null ? style.selected : ''}`}
        aria-pressed={selected === null}
        onClick={() => handleFilter(null)}
      >
        Todo
      </button>
      {collections.map((collection) => (
        <button
          key={collection}
          className={`${style.button} ${
            selected === collection ? style.selected : ''
          }`}
          aria-pressed={selected === collection}
          onClick={() => handleFilter(collection)}
        >
          {collection}
        </button>
      ))}
    </div>
  );
}
