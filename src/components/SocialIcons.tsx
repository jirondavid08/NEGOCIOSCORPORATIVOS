type IconProps = { size?: number; className?: string };

export function FacebookIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.53-1.5H16.7V3.7c-.28-.04-1.25-.12-2.37-.12-2.35 0-3.96 1.44-3.96 4.08V10H7.66v3.1h2.71V21h3.13Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92A1.96 1.96 0 0 0 5.25 3ZM20.5 21v-6.9c0-3.7-1.97-5.42-4.6-5.42-2.12 0-3.06 1.17-3.6 1.99V8.5H8.93c.05 1 0 12.5 0 12.5h3.37v-6.98c0-.37.03-.75.14-1.02.3-.75 1-1.53 2.15-1.53 1.52 0 2.13 1.16 2.13 2.86V21h3.78Z" />
    </svg>
  );
}

export function YoutubeIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.6 7.2s-.2-1.5-.85-2.15c-.8-.85-1.7-.85-2.1-.9C15.8 4 12 4 12 4h-.02s-3.78 0-6.63.15c-.4.05-1.3.05-2.1.9C2.6 5.7 2.4 7.2 2.4 7.2S2.2 8.95 2.2 10.7v1.6c0 1.75.2 3.5.2 3.5s.2 1.5.85 2.15c.8.85 1.86.83 2.33.92 1.7.16 6.42.2 6.42.2s3.8 0 6.65-.16c.4-.05 1.3-.05 2.1-.9.65-.65.85-2.15.85-2.15s.2-1.75.2-3.5v-1.6c0-1.75-.2-3.5-.2-3.5ZM9.9 14.6V8.8l5.4 2.9-5.4 2.9Z" />
    </svg>
  );
}
