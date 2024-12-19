import Logo from '@ui/Logo';

interface Props {
  name: string;
  image: any;
}

export default function SingleProductPicture({ name, image }: Props) {
  return (
    <div className='flex flex-col items-center justify-between h-full relative'>
      <h3 className='h-[40%] w-full flex justify-center items-center overflow-hidden relative'>
        <Logo size='lg:text-[120px] text-[110px]' />
      </h3>
      <img
        loading='lazy'
        width='400'
        height='370'
        src={image}
        alt={`Image of ${name}`}
        className={`object-contain w-full h-auto flex-grow px-1 aspect-[1/1]`}
      />
    </div>
  );
}
