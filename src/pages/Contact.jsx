
import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { CallButton, Container } from '../components/ui.jsx';
import { ADDRESS, EMAIL, PHONE } from '../data/site.js';

const field =
  'mt-2 w-full rounded-xl border border-[#dce2f5] bg-white px-4 py-3 text-sm text-[#07132f] outline-none transition placeholder:text-[#8a94b5] focus:border-[#315cff] focus:ring-4 focus:ring-[#315cff]/10';

const cards = [
  {
    title: 'Call us',
    description: 'Available 24/7 for new requests and support.',
    icon: Phone,
    action: 'Tap to call',
    href: PHONE.href,
  },
  {
    title: 'Email',
    description: 'We reply as quickly as we can.',
    icon: Mail,
    action: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    title: 'Address',
    description: ADDRESS,
    icon: MapPin,
    action: '',
    href: null,
  },
];

export default function Contact() {
  const [v, setV] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (key) => (event) => {
    setV((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
    setSent(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!v.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (
      v.phone.trim() &&
      v.phone.replace(/\D/g, '').length < 10
    ) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }

    if (v.message.trim().length < 10) {
      nextErrors.message =
        'Please tell us a little more (at least 10 characters).';
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) return;

    const body = [
      `Name: ${v.name}`,
      `Email: ${v.email}`,
      `Phone: ${v.phone || '-'}`,
      '',
      v.message,
    ].join('\n');

    const mailto =
      `mailto:${EMAIL}?subject=${encodeURIComponent('Website enquiry')}` +
      `&body=${encodeURIComponent(body)}`;

    setSent(true);
    window.location.href = mailto;
  };

  const ErrorText = ({ name }) =>
    errors[name] ? (
      <p className="mt-1 text-xs text-red-600" role="alert">
        {errors[name]}
      </p>
    ) : null;

  return (
    <>
      <PageHero
        crumb="Contact"
        title="Get in touch"
        lead="Call us any time, or drop us a line — we’re here 24/7 to help with your home tech."
      />

      <section className="bg-[#eef1fc] px-4 py-12 sm:py-16 lg:py-20">
        <Container className="max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {cards.map(({ title, description, icon: Icon, action, href }) => {
              const content = (
                <>
                  <span className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#e9edff] text-[#315cff]">
                    <Icon size={19} />
                  </span>

                  <h2 className="font-display text-sm font-bold text-[#07132f]">
                    {title}
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-[#586789]">
                    {description}
                  </p>

                  {action && (
                    <p className="mt-1 text-xs font-semibold text-[#07132f]">
                      {action}
                    </p>
                  )}
                </>
              );

              return (
                <div
                  key={title}
                  className="rounded-2xl border border-[#dce2f5] bg-white p-5 text-center sm:min-h-[148px]"
                >
                  {href ? (
                    <a
                      href={href}
                      className="block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#315cff]"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-7">
            <h2 className="font-display text-xl font-bold tracking-tight text-[#07132f] sm:text-2xl">
              We’d love to hear from you
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#34436d]">
              The fastest way to get help is to call — a real coordinator will
              pick up, listen to what’s going on, and line up the right
              technician for the job. Prefer to write? Send us an email and
              we’ll get right back to you.
            </p>

            <h3 className="mt-4 font-display text-sm font-bold text-[#07132f]">
              Hours
            </h3>
            <p className="mt-1 text-sm text-[#34436d]">
              Phone support is available 24 hours a day, 7 days a week.
            </p>

            <div className="mt-5 rounded-xl border border-[#dce2f5] border-l-2 border-l-[#ffad27] bg-white px-4 py-3.5 text-sm leading-6 text-[#34436d]">
              <strong className="text-[#07132f]">Ready to book?</strong>{' '}
              Have your address and a short description of the issue handy
              when you call — it helps us match the right specialist faster.
            </div>

            <div className="mt-5 flex justify-center">
              <CallButton />
            </div>
          </div>

        
        </Container>
      </section>
    </>
  );
}