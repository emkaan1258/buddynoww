import { Link } from 'react-router-dom';
import { ArrowRight, Award, Check, ChevronRight, Clock, DollarSign, MessageCircle, Shield } from 'lucide-react';
import { CallButton, Container, Eyebrow } from '../components/ui.jsx';
import BgImage from '../components/BgImage.jsx';
import { ICONS } from '../components/icons.js';
import { IMAGES, SERVICES, STEPS } from '../data/site.js';

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-navy-hero text-white">
      <img src={IMAGES.hero} alt="Smiling Buddynoww technician ready to help" className="absolute inset-0 h-full w-full object-cover object-[70%_center]" fetchpriority="high" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-hero via-navy-hero/85 to-[#1d3a9c]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-hero/90 via-transparent to-navy-hero/40" />

      <Container className="relative flex flex-1 flex-col justify-center pb-44 pt-32 sm:pt-40">
        <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 py-2.5 pl-3 pr-5 text-sm font-semibold backdrop-blur sm:text-base">
          <span className="h-3 w-3 rounded-full bg-amber ring-4 ring-amber/20" />
          Trusted · Experienced · Professional
        </div>
        <h1 className="mt-8 text-[clamp(3rem,8.4vw,6.6rem)] font-extrabold leading-[0.98] tracking-[-0.05em]">
          Home<br />problem?<br /><span className="text-amber">We'll handle it.</span>
        </h1>
        <p className="mt-8 max-w-[560px] text-lg leading-[1.7] text-white/90 sm:text-xl">
          One call and our team is on the way for plumbing, electrical, lawn care, and home tech. Friendly service, done right.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <CallButton />
          <a href="#how" className="inline-flex h-[52px] items-center rounded-full border border-white/20 px-8 font-display text-base font-bold tracking-[-0.02em] transition hover:bg-white/10 sm:h-[60px] sm:text-[17px]">See how it works</a>
        </div>
        <div className="mt-10  flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
           <ul className="flex flex-wrap gap-x-8 gap-y-3 text-base font-medium sm:text-lg">
          {['Experienced technicians', '24/7 support', 'Great rates'].map((t) => (
            <li key={t} className="flex items-center gap-2.5"><Check className="h-5 w-5 text-amber" strokeWidth={2} />{t}</li>
          ))}
        </ul>
         <div className="flex w-full max-w-[460px] items-center gap-5 rounded-[26px] bg-white p-5 text-navy shadow-2xl lg:w-auto">
          <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-2xl bg-[#e8ebfc] text-brand"><Clock className="h-7 w-7" strokeWidth={1.8} /></span>
          <div>
            <p className="font-display text-xl font-extrabold tracking-[-0.03em]">24/7 customer service</p>
            <p className="mt-1 text-[15px] text-[#5b6389]">Real people, whenever you need us</p>
          </div>
        </div>
        </div>
      </Container>

      <Container className="">
       
        <div className="hidden flex-col items-center gap-3 lg:absolute lg:bottom-0 lg:left-1/2 lg:flex lg:-translate-x-1/2">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-white/60">Scroll</span>
          <span className="h-10 w-px animate-pulse bg-white/40" />
        </div>
       
      </Container>
    </section>
  );
}

function TrustStrip() {
  const items = [[Shield, 'Trusted'], [Award, 'Experienced'], [Check, 'Professional'], [Clock, '24/7 support']];
  return (
    <div className="bg-navy">
      <Container className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 py-9 sm:gap-x-16">
        {items.map(([Icon, label]) => (
          <div key={label} className="flex items-center gap-3 text-lg font-semibold text-white">
            <Icon className="h-6 w-6 text-amber" strokeWidth={1.6} />{label}
          </div>
        ))}
      </Container>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how"
  className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-950 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#a77a6e]/40 blur-3xl" />
      <Container className="relative">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-5 text-[clamp(2.4rem,5.6vw,4.4rem)] font-extrabold leading-[1.02] tracking-[-0.05em]">Help in three simple steps</h2>
        <p className="mt-5 text-lg text-white/80 sm:text-xl">No apps, no waiting rooms. Just call, and we take it from there.</p>
        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-[44px]">
          {STEPS.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <article key={s.n} className="relative rounded-[28px] border border-white/15 bg-white/10 p-8 backdrop-blur-sm sm:p-9">
                <p className="font-display text-[56px] font-extrabold leading-none tracking-[-0.04em] text-amber">{s.n}</p>
                <div className="mt-5 h-1 w-9 rounded bg-white/35" />
                <span className="mt-6 flex h-12 w-12 items-center justify-center rounded-[14px] bg-white/15"><Icon className="h-6 w-6" strokeWidth={1.6} /></span>
                <h3 className="mt-6 text-[22px] font-extrabold tracking-[-0.04em]">{s.title}</h3>
                <p className="mt-2 text-[17px] leading-relaxed text-white/75">{s.text}</p>
                {i < STEPS.length - 1 && <ChevronRight aria-hidden="true" className="absolute -right-[34px] top-[88px] hidden h-8 w-8 text-amber md:block" strokeWidth={1.6} />}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <Container>
        <Eyebrow tone="brand">What we do</Eyebrow>
        <h2 className="mt-5 max-w-[620px] text-[clamp(2.4rem,5.6vw,4.4rem)] font-extrabold leading-[1.02] tracking-[-0.05em] text-navy">Four services. One number.</h2>
        <p className="mt-5 text-lg text-[#5b6389]">Whatever your home needs, our team of pros takes care of it — fast.</p>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <Link key={s.slug} to={s.path} className="group flex flex-col overflow-hidden rounded-[28px] border border-brand/10 bg-brand-soft transition hover:-translate-y-1 hover:shadow-xl">
                <BgImage src={s.image} alt={`${s.title} professional at work`} className="h-[200px] w-full object-cover sm:h-[200px]" />
                <div className="flex flex-1 flex-col px-7 pb-8">
                  <span className="-mt-7 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-brand text-white shadow-lg ring-4 ring-brand-soft"><Icon className="h-6 w-6" strokeWidth={1.6} /></span>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-[-0.04em]">{s.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-[#5b6389]">{s.blurb}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.chips.map((c) => <span key={c} className="rounded-full bg-brand-chip px-3.5 py-1.5 text-[13px] font-semibold text-brand">{c}</span>)}
                  </div>
                  <span className="mt-auto flex items-center gap-2 pt-6 text-base font-bold">View services <ArrowRight className="h-4 w-4 text-amber transition group-hover:translate-x-1" strokeWidth={2.2} /></span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function Why() {
  const feats = [
    [Shield, 'Trusted & experienced', 'Our technicians are highly trained and fully equipped to get the job done right.'],
    [MessageCircle, 'Around-the-clock support', 'Real people ready to help by phone and email, 24 hours a day, 7 days a week.'],
    [DollarSign, 'Great rates', 'Quality technical service at minimum rates, confirmed with you before any work begins.'],
  ];
  const stats = [['', '24/7', 'Customer support'], ['6 ', 'areas', 'Home tech specialties'], ['One ', 'call', 'To get started'], ['Fair ', 'rates', 'Confirmed up front']];
  return (
    <section id="why" className="dots relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#2342cf]/40 blur-3xl" />
      <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>Why Buddynoww</Eyebrow>
          <h2 className="mt-5 text-[clamp(2.2rem,4.4vw,3.4rem)] font-extrabold leading-[1.02] tracking-[-0.05em]">Like having a tech-savvy friend on speed dial</h2>
          <ul className="mt-10 space-y-6">
            {feats.map(([Icon, t, d]) => (
              <li key={t} className="flex gap-4">
                <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] border border-white/10 bg-white/5 text-amber"><Icon className="h-5 w-5" strokeWidth={1.7} /></span>
                <div>
                  <h3 className="text-lg font-extrabold tracking-[-0.04em]">{t}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-white/70">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#2f50f0] to-[#1e37b8] p-8 shadow-card sm:p-10">
          <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-amber/40 blur-3xl" />
          <ul className="relative grid grid-cols-2 gap-x-6 gap-y-8">
            {stats.map(([white, orange, label]) => (
              <li key={label}>
                <p className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-none tracking-[-0.05em]">{white}<span className="text-amber">{orange}</span></p>
                <p className="mt-2 text-sm font-medium text-white/80">{label}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-hero py-24 text-center text-white sm:py-28">
      <img src={IMAGES.cta} alt="Technician installing a security camera" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-navy-hero/75" />
      <Container className="relative flex flex-col items-center">
        <Eyebrow>Got a problem? We'll solve it</Eyebrow>
        <h2 className="mt-5 text-[clamp(2.4rem,6vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.05em]">Talk to a real person now</h2>
        <p className="mt-5 max-w-[560px] text-lg text-white/90">Tell us what's going on and we'll take care of the rest. Lines are open 24/7.</p>
        <div className="mt-9"><CallButton /></div>
      </Container>
    </section>
  );
}

export default function Home() {
  return (<><Hero /><TrustStrip /><HowItWorks /><Services /><Why /><CtaBanner /></>);
}
