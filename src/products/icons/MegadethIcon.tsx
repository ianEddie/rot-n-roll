import { motion } from 'framer-motion';
export default function MegadethIcon() {
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: 'spring',
        visualDuration: 1.2,
        bounce: 0.4
      }}
      loading='lazy'
      src='https://res.cloudinary.com/dz1exvwhg/image/upload/v1733943371/megadeth-icon_mzdnaw.webp'
      alt='Megadeth Icon'
      className='w-14 h-auto aspect-auto drop-shadow-lg'
    />
  );
}
