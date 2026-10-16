import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo.jsx';
import { Container } from './ui.jsx';
import { ADDRESS, EMAIL, PHONE, SERVICES } from '../data/site.js';

const COMPANY = [
  ['About us', '/about.html'],
  ['Contact', '/contact.html'],
  ['Privacy policy', '/privacy.html'],
  ['Terms & conditions', '/terms.html'],
  ['Refund policy', '/refund.html'],
];

function PaymentBadges() {
  const base = 'flex h-7 w-[45px] items-center justify-center rounded-[5px]';
  return (
    <div className="mt-6 flex gap-2" aria-label="Accepted cards">
      <span className={`${base} bg-white font-display text-[9px] font-extrabold italic text-[#1a1f71]`}>VISA</span>
      <span className={`${base} bg-white`} aria-label="Mastercard">
        <svg viewBox="0 0 28 18" className="h-[18px] w-7"><circle cx="10" cy="9" r="7" fill="#eb001b" /><circle cx="18" cy="9" r="7" fill="#f79e1b" fillOpacity=".9" /></svg>
      </span>
      <span className={`${base} bg-[#016fd0] text-[7px] font-extrabold text-white`}>AMEX</span>
      <span className={`${base} gap-px bg-white text-[5px] font-extrabold text-navy`}>DISCOVER<i className="h-2 w-2 rounded-full bg-[#f76f20]" /></span>
    </div>
  );
}

const head = 'mb-5 font-display text-[15px] font-bold tracking-[-0.02em] text-white';
const link = 'text-[15px] text-[#9aa6d6] transition hover:text-white';

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-[#9aa6d6]">
      <Container className="pb-8 pt-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
          <div>
            <Logo className="[&>span:last-child]:text-[22px]" />
            <p className="mt-5 max-w-[340px] text-[15px] leading-relaxed">
              On-demand home services from Buddynow LLC. Our team of pros handles your plumbing, electrical, lawn care, and home tech — one call away.
            </p>
            <PaymentBadges />
          </div>
          <div>
            <h4 className={head}>Services</h4>
            <ul className="space-y-3.5">
              {SERVICES.map((s) => (
                <li key={s.slug}><Link className={link} to={s.path}>{s.title === 'Lawn Care' ? 'Lawn care' : s.title === 'Home Tech' ? 'Home tech' : s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={head}>Company</h4>
            <ul className="space-y-3.5">
              {COMPANY.map(([label, to]) => (<li key={to}><Link className={link} to={to}>{label}</Link></li>))}
            </ul>
          </div>
          <div>
            <h4 className={head}>Contact</h4>
            <ul className="space-y-4 text-[15px]">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-amber" strokeWidth={1.8} />{ADDRESS}</li>
              <li><a href={PHONE.href} className="flex gap-3 hover:text-white"><Phone className="h-[18px] w-[18px] shrink-0 text-amber" strokeWidth={1.8} />{PHONE.label}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="flex gap-3 hover:text-white"><Mail className="h-[18px] w-[18px] shrink-0 text-amber" strokeWidth={1.8} />{EMAIL}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-[13px] text-[#6f7aa6] sm:flex-row sm:justify-between">
          <p>© 2026 Buddynow LLC. All rights reserved.</p>
          <p>Buddynow LLC provides home services through our team.</p>
        </div>
      </Container>
    </footer>
  );
}
