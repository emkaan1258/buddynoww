import { Phone } from 'lucide-react';
import { PHONE } from '../data/site.js';

export function CallButton({ children = 'Call us now', size = 'lg', className = '' }) {
  const sizes = size === 'lg' ? 'h-[52px] px-7 text-base sm:h-[60px] sm:px-9 sm:text-[17px]' : 'h-11 px-6 text-sm';
  return (
    <a
      href={PHONE.href}
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-amber font-display font-bold tracking-[-0.02em] text-navy shadow-amber transition hover:-translate-y-0.5 hover:brightness-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40 ${sizes} ${className}`}
    >
      <Phone className="h-5 w-5" strokeWidth={1.8} />
      {children}
    </a>
  );
}

export function Eyebrow({ children, tone = 'amber', className = '' }) {
  const color = tone === 'amber' ? 'text-amber bg-amber' : 'text-brand bg-brand';
  const [text, line] = color.split(' ');
  return (
    <div className={`flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] sm:text-xs ${text} ${className}`}>
      <span className={`h-[2px] w-7 ${line}`} />
      {children}
    </div>
  );
}

export function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-site px-5 sm:px-8  ${className}`}>{children}</div>;
}
