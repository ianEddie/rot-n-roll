import MegadethIcon from '../assets/megadeth-icon.webp';
import Available from './Available';
import Logo from '@ui/Logo';

interface Props {
  collection: string;
  name: string;
  available: boolean;
  year: number;
}

export default function SingleProductInfo({
  collection,
  name,
  available,
  year
}: Props) {
  return (
    <div className='font-primary h-full w-[30%] flex flex-col items-center justify-between py-5 px-3 gap-5'>
      <p className='h-1/2 uppercase flex flex-col text-center text-balance'>
        <strong className=''>{collection}</strong>
        <span className='font-medium h-[40%] flex items-center text-[12px]'>
          "{name}"
        </span>
        <span className='font-medium'>({year})</span>
        <Available available={available} />
      </p>
      <img
        src={MegadethIcon.src}
        alt={`${collection} icon`}
        className='h-auto w-[80%] aspect-[1/1] grayscale-[10%]'
      />
      <div className='w-full flex justify-center items-center relative h-[10%]'>
        <Logo size='60' />
      </div>
    </div>
  );
}
