export default function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }) {
  return (
    <p className="text-xs tracking-[0.25em] uppercase font-bold text-[#5865f2] mb-4">
      {children}
    </p>
  );
}
