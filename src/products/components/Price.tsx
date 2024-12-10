export default function Price({ price }: { price: number }) {
  return (
    <div className='flex gap-x-1 items-center bg-zinc-950 text-zinc-50 px-2 py-1 font-title text-xs font-semibold tracking-wider'>
      <span className='text-green-400'>$</span>
      <span>{price}</span>
      <span> ARS </span>
    </div>
  );
}
