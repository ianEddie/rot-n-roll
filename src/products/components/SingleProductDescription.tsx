import { motion } from 'framer-motion';
interface Props {
  collection: string;
  name: string;
}

export default function SingleProductDescription({ collection, name }: Props) {
  return (
    <div className='border-x border-zinc-600 h-full flex flex-col items-center justify-between text-center pt-7 pb-2 px-2 font-alternative relative overflow-hidden'>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          transform: 'rotate(360deg)',
          writingMode: 'vertical-lr',
          textOrientation: 'sideways'
        }}
        className='text-[32px] pl-2 '
      >
        {collection}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          transform: 'rotate(360deg)',
          writingMode: 'vertical-lr',
          textOrientation: 'sideways'
        }}
        className='text-[22px] truncate h-1/2 text-end'
      >
        {name}
      </motion.span>
    </div>
  );
}
