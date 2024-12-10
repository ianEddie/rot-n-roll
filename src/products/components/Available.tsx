export default function Available({ available }: { available: boolean }) {
  const isAvailable = available === true;
  return (
    <small className='uppercase mt-5 text-sm font-semibold'>
      {isAvailable ? (
        <span>Ya disponible</span>
      ) : (
        <span>Disponible pronto</span>
      )}
    </small>
  );
}
