export default function SectionDivider({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`h-10 md:h-16 w-full ${className}`}
    />
  );
}
