import { motion, AnimatePresence } from 'framer-motion';
import SingleProduct from './SingleProduct';
import { useProducts } from '@products/hooks/useProducts';

export default function ProductList() {
  const { filteredProducts } = useProducts();

  return (
    <div className='w-full flex-grow grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10'>
      <AnimatePresence>
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SingleProduct product={product} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
