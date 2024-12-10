export default function Logo({ size }: { size: string }) {
  return (
    <span
      style={{ fontSize: `${size}px` }}
      className='font-logo absolute'
    >
      rotnroll
    </span>
  );
}
