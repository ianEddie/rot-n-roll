import Logo from '@ui/Logo';

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

      <img
        loading='lazy'
        width={image.width}
        height={image.height}
        src={image}
        alt={`Image of ${name}`}
        className={`object-contain flex-grow px-1 `}
      />
    </div>
  );
}
