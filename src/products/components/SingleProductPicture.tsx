import Logo from '@ui/Logo';
import { motion } from 'framer-motion';

interface Props {
  name: string;
  image: any;
}

export default function SingleProductPicture({ name, image }: Props) {
  return (
    <div className='flex flex-col items-center justify-between h-full relative'>
      <h3 className='h-[40%] w-full flex justify-center items-center overflow-hidden relative'>
        <Logo size='140' />
      </h3>
      <motion.img
        initial={{ rotateY: 180 }}
        animate={{ rotateY: 0 }}
        transition={{
          type: 'spring',
          visualDuration: 1.2,
          bounce: 0.4
        }}
        loading='lazy'
        width='150'
        height='150'
        src={image}
        alt={`Image of ${name}`}
        className={`object-contain w-full h-auto flex-grow px-1 aspect-[1/1]`}
      />
    </div>
  );
}
