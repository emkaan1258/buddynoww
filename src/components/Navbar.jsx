import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { Container } from './ui.jsx';
import { NAV, PHONE } from '../data/site.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const linkClass = `font-medium transition-colors ${solid ? 'text-[#4a5278] hover:text-navy' : 'text-white hover:text-amber'}`;
  const href = (item) => (item.to ? item.to : `/${item.hash}`);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? 'bg-[#e2e4ef]/90 shadow-sm backdrop-blur-md' : 'bg-transparent'}`}>
      <Container className="flex h-[72px] items-center justify-between sm:h-[88px]">
        <Logo dark={solid} />
        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.label} to={href(item)} className={`text-[17px] ${linkClass}`}>{item.label}</Link>
          ))}
          <a href={PHONE.href} className="inline-flex h-[52px] items-center gap-2.5 rounded-full bg-amber px-8 font-mono text-base font-bold tracking-wide text-navy shadow-amber transition hover:-translate-y-0.5 hover:brightness-105">
            <Phone className="h-[18px] w-[18px]" strokeWidth={1.8} /> Call us
          </a>
        </nav>
        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl lg:hidden ${solid ? 'text-navy' : 'text-white'}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>
      <div id="mobile-menu" className={`overflow-hidden bg-[#e2e4ef] transition-[max-height] duration-300 lg:hidden ${open ? 'max-h-[420px]' : 'max-h-0'}`}>
        <nav className="flex flex-col gap-1 px-5 pb-6 pt-2" aria-label="Mobile">
          {NAV.map((item) => (
            <Link key={item.label} to={href(item)} className="rounded-xl px-3 py-3 text-lg font-medium text-navy hover:bg-white/60">{item.label}</Link>
          ))}
          <a href={PHONE.href} className="mt-3 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-amber font-mono font-bold text-navy shadow-amber">
            <Phone className="h-[18px] w-[18px]" strokeWidth={1.8} /> Call us
          </a>
        </nav>
      </div>
    </header>
  );
}
