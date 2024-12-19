interface Props {
  collection: string;
  name: string;
}

export default function SingleProductDescription({ collection, name }: Props) {
  return (
    <div className='border-x border-zinc-600 h-full flex flex-col items-center justify-between text-center pt-7 pb-2 px-2 font-alternative relative overflow-hidden'>
      <span
        style={{
          transform: 'rotate(360deg)',
          writingMode: 'vertical-lr',
          textOrientation: 'sideways'
        }}
        className='lg:text-[28px] text-[24px] lg:pl-1 pl-0 flex justify-center items-center'
      >
        {collection}
      </span>
      <span
        style={{
          transform: 'rotate(360deg)',
          writingMode: 'vertical-lr',
          textOrientation: 'sideways'
        }}
        className='lg:text-[22px] text-[20px] truncate h-1/2 text-end'
      >
        {name}
      </span>
    </div>
  );
}
