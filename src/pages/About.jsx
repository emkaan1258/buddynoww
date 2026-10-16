
import { Check } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { CallButton, Container } from '../components/ui.jsx';

const services = [
  'Plumbing — leaks, drains, water heaters, fixtures, and repairs',
  'Electrical — outlets, lighting, panels, wiring, and troubleshooting',
  'Lawn care — mowing, trimming, and seasonal cleanups',
  'Home tech — TV, internet, home theater, and security cameras',
  'Cameras, cabling, and low-voltage installations',
  'Friendly, around-the-clock phone support',
];

const differences = [
  {
    title: 'Fast when you need it',
    text: 'Home tech never breaks at a convenient time, so our lines are open 24/7.',
  },
  {
    title: 'People you can trust',
    text: 'Every technician on our team is trusted and highly trained.',
  },
  {
    title: 'No surprise bills',
    text: 'You hear the price up front and approve it before any work begins. What we quote is what you pay.',
  },
];

export default function About() {
  return (
    <>
      <PageHero
        crumb="About"
        title="Real people, ready to help"
        lead="Buddynoww LLC takes the stress out of home repairs with our team of pros, one call away."
      />

      <section className="bg-[#eef1fc] py-12 sm:py-16 lg:py-20">
        <Container className="max-w-5xl">
          <div className="mx-auto max-w-3xl space-y-7 text-sm leading-6 text-[#34436d]">
            <div>
              <h2 className="mb-3 font-display text-xl font-bold tracking-tight text-[#07132f] sm:text-2xl">
                Helping homeowners get their homes working again
              </h2>

              <p>
                Buddynoww started with a simple frustration: when something in
                your home stops working — a pipe is leaking, the power’s out,
                the lawn’s overgrown, or the Wi-Fi keeps dropping — finding the
                right person to fix it is harder than it should be. You end up
                juggling phone menus, waiting on hold, and hoping whoever shows
                up actually knows what they’re doing.
              </p>

              <p className="mt-3">
                We built Buddynoww to take that stress off your plate. One
                phone call connects you to a real coordinator who listens,
                figures out exactly what you need, and sends one of our
                technicians.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl font-bold tracking-tight text-[#07132f] sm:text-2xl">
                What we help with
              </h2>

              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <Check
                      size={16}
                      className="mt-1 shrink-0 text-[#315cff]"
                    />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-display text-xl font-bold tracking-tight text-[#07132f] sm:text-2xl">
                How we’re different
              </h2>

              <div className="space-y-4">
                {differences.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-display text-base font-bold text-[#07132f]">
                      {item.title}
                    </h3>
                    <p className="mt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#dce2f5] border-l-2 border-l-[#ffad27] bg-white px-4 py-4">
              <p>
                <strong className="text-[#07132f]">
                  A quick note on how we work:
                </strong>{' '}
                Buddynoww LLC is a home services company with its team. Our
                technicians carry out the work — and we stay with you until
                it’s resolved.
              </p>
            </div>

            <div className="pt-1">
              <h2 className="mb-2 font-display text-xl font-bold tracking-tight text-[#07132f] sm:text-2xl">
                Get in touch
              </h2>
              <p>
                Have a question or ready to book?{' '}
                <a
                  href="/contact"
                  className="font-medium text-[#244dff] hover:underline"
                >
                  Reach out to our team
                </a>{' '}
                or call us any time — we’re here to help.
              </p>

              <div className="flex justify-center pt-4">
                <CallButton />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}