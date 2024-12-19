export default function MegadethIcon() {
  const src =
    'https://res.cloudinary.com/dz1exvwhg/image/upload/t_vic-45/v1733943371/megadeth-icon_mzdnaw.webp';

  return (
    <img
      loading='lazy'
      height='45'
      width='45'
      src={src}
      alt='Vic Rattlehead'
      className='aspect-square drop-shadow-lg'
    />
  );
}
