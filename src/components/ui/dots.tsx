export default function Dots({
  count,
  className,
}: {
  count: number;
  className?: string;
}) {
  return (
    <p className={`text-2xl my-0 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <span key={index}>&#x2022;</span>
      ))}
    </p>
  );
}
