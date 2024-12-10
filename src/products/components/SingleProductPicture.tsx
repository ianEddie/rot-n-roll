import Logo from '@ui/Logo';

interface Props {
  name: string;
  image: any;
}

export default function SingleProductPicture({ name, image }: Props) {
  return (
    <div className='flex flex-col flex-grow items-center justify-between h-full relative'>
      <h3 className='h-[40%] w-full flex justify-center items-center overflow-hidden relative'>
        <Logo size='140' />
      </h3>
      <picture className='flex justify-center items-center flex-grow px-1'>
        <img
          loading='lazy'
          src={image.src}
          alt={`Image of ${name}`}
          className='h-auto w-full object-cover aspect-auto'
        />
      </picture>
    </div>
  );
}
