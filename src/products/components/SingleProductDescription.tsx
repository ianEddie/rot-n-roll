import { motion } from 'framer-motion';

interface Props {
  collection: string;
  name: string;
}

export default function SingleProductDescription({ collection, name }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='border-x border-zinc-600 h-full flex flex-col items-center justify-between text-center pt-7 pb-2 px-2 font-alternative relative overflow-hidden'
    >
      <span
        style={{
          transform: 'rotate(360deg)',
          writingMode: 'vertical-lr',
          textOrientation: 'sideways'
        }}
        className='text-[32px] pl-2 '
      >
        {collection}
      </span>
      <span
        style={{
          transform: 'rotate(360deg)',
          writingMode: 'vertical-lr',
          textOrientation: 'sideways'
        }}
        className='text-[22px] truncate h-1/2 text-end'
      >
        {name}
      </span>
    </motion.div>
  );
}
