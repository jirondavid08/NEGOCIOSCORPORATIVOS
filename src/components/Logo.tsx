export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 60 44" fill="none" className="h-8 w-auto shrink-0" aria-hidden>
        <path d="M2 44V18L18 10V44H2Z" fill="currentColor" />
        <path d="M21 44V4L39 0V44H21Z" fill="currentColor" />
        <path d="M42 44V16L58 10V44H42Z" fill="currentColor" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-semibold tracking-wide">
          NEGOCIOS CORPORATIVOS
        </span>
        <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.25em] opacity-70">
          Bienes Raíces Comerciales
        </span>
      </span>
    </span>
  );
}
