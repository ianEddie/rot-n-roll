import { motion } from 'framer-motion';

export default function IronMaidenIcon() {
  const src =
    'https://res.cloudinary.com/dz1exvwhg/image/upload/t_eddie-45/v1734634230/eddie_fuhozr.webp';
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      loading='lazy'
      src={src}
      height='45'
      width='45'
      alt='Eddie the head'
      className='aspect-square grayscale-[50%] drop-shadow-lg'
    />
  );
}
