import { Link } from 'react-router-dom';

export function LogoMark({ className = 'h-[38px] w-[38px]' }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-[11px] bg-brand shadow-[0_6px_16px_-4px_rgba(47,77,224,0.6)] ${className}`}>
      <svg viewBox="0 0 24 24" className="h-[62%] w-[62%]" fill="none" aria-hidden="true">
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H12l-4.2 3.6c-.5.4-1.3.1-1.3-.6V16h0A2.5 2.5 0 0 1 4 13.5z" fill="#fff" />
        <path d="M12.8 5.2 8.6 11h2.9l-.6 4.3 4.3-5.9h-3z" fill="#ffb536" />
      </svg>
    </span>
  );
}

export default function Logo({ to = '/', dark = false, className = '' }) {
  return (
    <Link to={to} className={`flex items-center gap-3 ${className}`} aria-label="Buddynoww home">
      <LogoMark />
      <span className={`font-display text-[26px] font-extrabold leading-none tracking-[-0.05em] ${dark ? 'text-navy' : 'text-white'}`}>
        Buddy<span className={dark ? 'text-brand' : 'text-amber'}>noww</span>
      </span>
    </Link>
  );
}
