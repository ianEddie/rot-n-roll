import IronMaidenIcon from '@products/icons/IronMaidenIcon';
import MegadethIcon from '../icons/MegadethIcon';
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
  const hasMegadeth = collection === 'Megadeth';
  return (
    <div className='font-primary h-full flex flex-col items-center justify-between py-5 px-3 gap-5'>
      {/* INFO */}
      <p className='h-1/2 uppercase flex justify-between flex-col text-center text-balance'>
        <strong>{collection}</strong>
        <span className='font-medium h-[40%] w-full flex items-center justify-center lg:text-[12px] text-[10px]'>
          "{name}"
        </span>
        <span className='font-medium'>({year})</span>
        <Available available={available} />
      </p>
      {/* ICON */}
      <picture className='w-full flex justify-center items-center h-[20%]'>
        {hasMegadeth ? <MegadethIcon /> : <IronMaidenIcon />}
      </picture>
      {/* LOGO */}
      <div className='w-full flex justify-center items-center relative h-[10%]'>
        <Logo size='lg:text-[60px] text-[34px]' />
      </div>
    </div>
  );
}
