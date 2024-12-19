import { useProducts } from '@products/hooks/useProducts';
import style from '../styles/styles.module.css';

export default function ProductsFilter() {
  const { collections, selected, handleFilter } = useProducts();
  return (
    <div className=' flex flex-grow justify-end gap-5'>
      {/* BUTTON FOR SHOW ALL PRODUCTS */}
      <button
        className={`${style.button} ${
          selected === 'Todos' ? style.selected : ''
        }`}
        aria-pressed={selected === 'Todos'}
        onClick={() => handleFilter('Todos')}
      >
        Todo
      </button>
      {/* BUTTONS FOR FILTER BY COLLECTION */}
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
