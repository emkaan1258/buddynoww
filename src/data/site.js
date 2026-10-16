
import nichePlumbing from '../images/niche-plumbing.jpg';
import nicheElectrical from '../images/niche-electrical.jpg';
import nicheLawn from '../images/niche-lawn.jpg';
import nicheTech from '../images/niche-tech.jpg';

// Original website images
const BASE = 'https://buddynoww.com/images';

export const PHONE = {
  href: 'tel:+18172543805',
  label: '+1 (817) 254-3805',
};

export const EMAIL = 'hello@buddynoww.com';
export const ADDRESS = '5007 Toftrees Dr, Arlington, TX 76016';

// All images in one object — no duplicate declaration
export const IMAGES = {
  hero: `${BASE}/hero-wide.jpg`,
  cta: `${BASE}/cta-wide.jpg`,

  // Local downloaded images
  cardPlumbing: nichePlumbing,
  plumbingHero: nichePlumbing,

  cardElectrical: nicheElectrical,
  electricalHero: nicheElectrical,

  cardLawn: nicheLawn,
  lawnHero: nicheLawn,

  cardHometech: nicheTech,
  hometechHero: nicheTech,
};

export const NAV = [
  { label: 'How it works', hash: '#how' },
  { label: 'Services', hash: '#services' },
  { label: 'Why us', hash: '#why' },
  { label: 'Contact', to: '/contact.html' },
];

export const STEPS = [
  {
    n: '01',
    icon: 'phone',
    title: 'Tell us the problem',
    text: "Call and describe what's going on. Our coordinator listens and pinpoints exactly what you need.",
  },
  {
    n: '02',
    icon: 'users',
    title: 'We match a specialist',
    text: "We send one of our specialists who's right for the job — and confirm the price before anything starts.",
  },
  {
    n: '03',
    icon: 'check',
    title: 'Problem solved',
    text: "Your pro shows up, gets it done, and you're back up and running — with support a phone call away.",
  },
];

export const SERVICES = [
  {
    slug: 'plumbing',
    path: '/plumbing.html',
    icon: 'droplet',
    title: 'Plumbing',
    image: IMAGES.cardPlumbing,
    hero: IMAGES.plumbingHero,
    blurb: 'Leaks, clogs, water heaters and more — dependable help when you need it.',
    chips: ['Leak repair', 'Drain cleaning', 'Water heaters'],
    pageTitle: 'Plumbing help, one call away',
    lead: 'Leaks, clogs, water heaters and more — our plumbing team is ready to help.',
    intro: "From a dripping faucet to a burst pipe, our plumbing team handles it all. Call and we'll confirm the price before any work begins.",
    items: [
      ['Leak detection & repair', 'Find and stop leaks before they cause damage.'],
      ['Drain & sewer cleaning', 'Clear stubborn clogs and slow drains.'],
      ['Water heater service', 'Install, repair, or replace your water heater.'],
      ['Faucets, sinks & toilets', 'Fixture installs, swaps, and repairs.'],
      ['Pipe repair & repiping', 'Fix damaged pipes or upgrade old plumbing.'],
      ['Emergency plumbing', 'Urgent help when things go wrong, any hour.'],
    ],
  },
  {
    slug: 'electrical',
    path: '/electrical.html',
    icon: 'zap',
    title: 'Electrical',
    image: IMAGES.cardElectrical,
    hero: IMAGES.electricalHero,
    blurb: 'Safe, professional electrical work, from outlets and lighting to panel upgrades.',
    chips: ['Outlets & lighting', 'Wiring', 'Panel upgrades'],
    pageTitle: 'Electrical help, one call away',
    lead: 'Outlets, lighting, wiring and panel upgrades — done safely.',
    intro: "From a dead outlet to a panel upgrade, our electrical team is ready to help. We'll confirm the price before any work begins.",
    items: [
      ['Outlets & switches', 'Install, replace, and repair outlets and switches.'],
      ['Lighting', 'Indoor and outdoor lighting installs and upgrades.'],
      ['Wiring & rewiring', 'Safe, code-conscious wiring for your home.'],
      ['Panel upgrades', 'Upgrade or replace your electrical panel.'],
      ['Troubleshooting', 'Track down flickering lights and tripping breakers.'],
      ['Electrical service calls', 'Get help diagnosing electrical problems.'],
    ],
  },
  {
    slug: 'lawn-care',
    path: '/lawn-care.html',
    icon: 'sprout',
    title: 'Lawn Care',
    image: IMAGES.cardLawn,
    hero: IMAGES.lawnHero,
    blurb: 'Keep your yard sharp with mowing, trimming, and seasonal cleanups.',
    chips: ['Mowing', 'Trimming', 'Cleanups'],
    pageTitle: 'Lawn care, one call away',
    lead: 'Mowing, trimming and seasonal cleanups — a yard you can be proud of.',
    intro: "Whether it's a one-time cleanup or regular upkeep, our lawn care team keeps your yard looking its best. We'll confirm the price before work begins.",
    items: [
      ['Mowing', 'Clean, even cuts on your schedule.'],
      ['Trimming & edging', 'Sharp edges along beds, walks, and fences.'],
      ['Seasonal cleanups', 'Leaves, debris, and spring or fall refresh.'],
      ['Hedge & shrub care', 'Shape and tidy hedges and shrubs.'],
      ['Weed control', 'Keep beds and lawns clear of weeds.'],
      ['Yard haul-away', 'We take the clippings and debris with us.'],
    ],
  },
  {
    slug: 'hometech',
    path: '/hometech.html',
    icon: 'monitor',
    title: 'Home Tech',
    image: IMAGES.cardHometech,
    hero: IMAGES.hometechHero,
    blurb: 'TV, internet, home theater, and security — set up and working right.',
    chips: ['TV & internet', 'Home theater', 'Security'],
    pageTitle: 'Home tech, one call away',
    lead: 'TV, internet, home theater and security — set up and working right.',
    intro: "From a wall-mounted TV to a security camera system, our home tech team gets it working right. We'll confirm the price before work begins.",
    items: [
      ['TV mounting & setup', 'Mount and connect your TV the right way.'],
      ['Internet & Wi-Fi', 'Fix dead zones and set up reliable networks.'],
      ['Home theater', 'Sound, screens, and cabling that work together.'],
      ['Security cameras', 'Install and configure cameras and doorbells.'],
      ['Cabling', 'Clean, tidy cable runs and wall plates.'],
      ['Smart home setup', 'Connect and configure your smart devices.'],
    ],
  },
];