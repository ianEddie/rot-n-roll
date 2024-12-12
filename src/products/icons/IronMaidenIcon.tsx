import { motion } from 'framer-motion';

export default function IronMaidenIcon() {
  const src =
    'https://res.cloudinary.com/dz1exvwhg/image/upload/v1733949810/pngwing.com_garpav.png';
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: 'spring',
        visualDuration: 1.2,
        bounce: 0.1
      }}
      loading='lazy'
      src={src}
      alt='Eddie the head'
      className='w-12 h-auto aspect-auto grayscale-[50%] drop-shadow-lg'
    />
  );
}
