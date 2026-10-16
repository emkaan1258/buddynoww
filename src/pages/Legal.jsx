
import PageHero from '../components/PageHero.jsx';
import { CallButton, Container } from '../components/ui.jsx';
import { EMAIL, ADDRESS, PHONE } from '../data/site.js';

const DOCS = {
  privacy: {
    title: 'Privacy Policy',
    crumb: 'Privacy Policy',
    lead: 'Your privacy matters. Here’s how we handle your information.',
    updated: 'August 2, 2026',
    intro:
      'This Privacy Policy explains how Buddynoww LLC (“Buddynoww,” “we,” “us,” or “our”) collects, uses, and protects information when you visit our website or contact us for service. By using our website or services, you agree to the practices described here.',
    sections: [
      {
        title: 'Information we collect',
        text: 'We collect information you provide directly and information gathered automatically when you use our site:',
        bullets: [
          'Contact details — information you share when you call or email us, such as your name, phone number, email address, and service address.',
          'Service details — information about the help you request, so we can match you with the right technician.',
          'Usage data — collected automatically, such as your device type, browser, and pages viewed, through cookies and similar technologies.',
        ],
      },
      {
        title: 'How we use your information',
        bullets: [
          'To respond to your inquiries and coordinate the services you request.',
          'To send one of our technicians to carry out the work.',
          'To confirm pricing, schedule visits, and follow up on completed jobs.',
          'To improve our website, services, and customer support.',
          'To comply with legal obligations and prevent fraud or misuse.',
        ],
      },
      {
        title: 'How we share information',
        text: 'We share your information only as needed to provide our service. This includes sharing relevant details with the technician or team assigned to your request, and with trusted vendors who help us operate (such as hosting or communication tools). We do not sell your personal information. We may disclose information if required by law or to protect our rights and the safety of others.',
      },
      {
        title: 'Cookies',
        text: 'Our website may use cookies and similar technologies to keep the site working properly and to understand how it is used. You can control cookies through your browser settings; disabling them may affect some features.',
      },
      {
        title: 'Data security',
        text: 'We take reasonable measures to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
      },
      {
        title: 'Your choices',
        text: 'You may request access to, correction of, or deletion of the personal information we hold about you by contacting us using the details below. You may also opt out of promotional messages at any time.',
      },
      {
        title: 'Children’s privacy',
        text: 'Our services are intended for adults. We do not knowingly collect personal information from children under 13.',
      },
      {
        title: 'Changes to this policy',
        text: 'We may update this Privacy Policy from time to time. Changes take effect when posted on this page with a revised “Last updated” date.',
      },
    ],
  },

  terms: {
    title: 'Terms & Conditions',
    crumb: 'Terms & Conditions',
    lead: 'The terms that govern your use of Buddynoww’s website and services.',
    updated: 'August 2, 2026',
    intro:
      'These Terms & Conditions (“Terms”) govern your use of the Buddynoww LLC website and services. By accessing our website or requesting service, you agree to these Terms. Please read them carefully.',
    sections: [
      {
        title: 'About our service',
        text: 'Buddynoww LLC is a home services company that employs its trained technicians, providing plumbing, electrical, lawn care, and home tech services. Buddynoww LLC performs the work directly with its employed technicians.',
      },
      {
        title: 'Requesting service',
        bullets: [
          'When you contact us, we gather details about your request and match you with a suitable technician.',
          'Any price we quote will be confirmed with you before work begins. You are free to accept or decline.',
          'Scheduling depends on technician availability in your area.',
        ],
      },
      {
        title: 'Pricing and payment',
        text: 'Fees for services are communicated to you in advance. You agree to pay the amounts you approve for the services you request. Any applicable deposit or service fee will be disclosed before you commit.',
      },
      {
        title: 'Your responsibilities',
        bullets: [
          'Provide accurate information about your location and the issue you need resolved.',
          'Ensure safe and reasonable access for the technician to perform the work.',
          'Use our website and services lawfully and not attempt to disrupt or misuse them.',
        ],
      },
      {
        title: 'Our technicians',
        text: 'Services are performed by Buddynoww LLC’s technicians. We stand behind the work our team delivers.',
      },
      {
        title: 'Disclaimers',
        text: 'Our website and services are provided “as is” without warranties of any kind, express or implied, to the fullest extent permitted by law. We do not guarantee that the site will always be available, uninterrupted, or error-free.',
      },
      {
        title: 'Limitation of liability',
        text: 'To the fullest extent permitted by law, Buddynoww LLC shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services.',
      },
      {
        title: 'Intellectual property',
        text: 'All content on this website, including text, graphics, logos, and design, is the property of Buddynoww LLC or its licensors and may not be used without permission.',
      },
      {
        title: 'Changes to these Terms',
        text: 'We may update these Terms from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the updated Terms.',
      },
      {
        title: 'Governing law',
        text: 'These Terms are governed by the laws of the State of Texas, without regard to its conflict of law principles.',
      },
    ],
  },

  refund: {
    title: 'Refund Policy',
    crumb: 'Refund Policy',
    lead: 'Clear, fair terms for refunds and cancellations.',
    updated: 'August 2, 2026',
    intro:
      'We want you to feel confident when you use Buddynoww. This Refund Policy explains how refunds work for payments made to Buddynoww LLC for our services.',
    sections: [
      {
        title: 'Deposits & service fees',
        text: 'If you paid a deposit or service fee and we are unable to schedule your service, that amount is fully refundable. If you cancel before our technician is dispatched, you are also eligible for a full refund of any such fee.',
      },
      {
        title: 'Cancellations',
        bullets: [
          'Cancel before our technician is dispatched: full refund of any deposit or fee.',
          'Cancel after a technician has been dispatched or work has begun: fees may be partially refundable depending on the stage of service.',
        ],
      },
      {
        title: 'Completed work',
        text: 'If you’re not fully satisfied with work our team has completed, contact us and we’ll make it right — whether that means correcting the work or arranging a fair refund.',
      },
      {
        title: 'Not satisfied?',
        text: 'If something isn’t right, let us know as soon as possible. We take feedback seriously and will work with you and the technician to make it right.',
      },
      {
        title: 'How to request a refund',
        text: 'To request a refund, contact us by phone or email with your name, service address, and a brief description of the issue. Approved refunds are typically processed within 5–10 business days to your original payment method.',
      },
      {
        title: 'Changes to this policy',
        text: 'We may update this Refund Policy from time to time. Changes take effect when posted on this page.',
      },
    ],
  },
};

export default function Legal({ doc = 'privacy' }) {
  const d = DOCS[doc] || DOCS.privacy;

  return (
    <>
      <PageHero
        crumb={d.crumb}
        title={d.title}
        lead={d.lead}
      />

      <section className="bg-[#eef1fc] px-4 py-10 sm:py-14 lg:py-16">
        <Container className="max-w-3xl">
          <article className="text-sm leading-6 text-[#34436d]">
            <span className="mb-5 inline-flex rounded-full border border-[#dce2f5] bg-white px-3 py-1 text-[10px] font-medium tracking-wide text-[#586789]">
              Last updated: {d.updated}
            </span>

            <p className="mb-6">{d.intro}</p>

            <div className="space-y-6">
              {d.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-2 font-display text-lg font-bold leading-6 tracking-tight text-[#07132f] sm:text-xl">
                    {section.title}
                  </h2>

                  {section.text && <p>{section.text}</p>}

                  {section.bullets && (
                    <ul className="mt-2 space-y-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#315cff]"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <section className="mt-6">
              <h2 className="mb-2 font-display text-lg font-bold text-[#07132f] sm:text-xl">
                Contact us
              </h2>
              <p>
                Questions about this policy? Email{' '}
                <a
                  className="font-medium text-[#244dff] hover:underline"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                </a>
                , call us at{' '}
                <a
                  className="font-medium text-[#244dff] hover:underline"
                  href={PHONE.href}
                >
                  {PHONE.label}
                </a>
                , or write to us at {ADDRESS}.
              </p>
            </section>

            {doc === 'refund' && (
              <div className="mt-5 flex justify-center">
                <CallButton />
              </div>
            )}
          </article>
        </Container>
      </section>
    </>
  );
}