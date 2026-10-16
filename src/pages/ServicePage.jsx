
import { Navigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { CallButton, Container } from '../components/ui.jsx';
import { SERVICES } from '../data/site.js';

export default function ServicePage({ slug }) {
  const service = SERVICES.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <PageHero
        image={service.hero}
        crumb={service.title}
        title={service.pageTitle}
        lead={service.lead}
      />

      <section className="bg-[#eef1fc] py-12 sm:py-16 lg:py-20">
        <Container>
          {/* Intro */}
          <div className="flex justify-center text-center">
            <p className="max-w-[720px] text-base leading-7 text-[#5b6389] sm:text-lg sm:leading-8">
              {service.intro}
            </p>
          </div>

          {/* Service cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:gap-7">
            {service.items.map(([title, description], index) => (
              <article
                key={title}
                className="group overflow-hidden rounded-3xl border border-[#d8def7] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Service image */}
                {/* {service.image && (
                  <div className="relative h-48 overflow-hidden bg-[#111d4b] sm:h-56 lg:h-60">
                    <img
                      src={service.image}
                      alt={`${service.title} - ${title}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading={index > 1 ? 'lazy' : 'eager'}
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )} */}

                {/* Card content */}
                <div className="flex items-start gap-4 p-5 sm:p-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2e52f21a] text-[#2e52f2] sm:h-14 sm:w-14">
                    <Check className="h-5 w-5" strokeWidth={2.5} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <h2 className="font-display text-lg font-extrabold tracking-tight text-[#07132f] sm:text-xl">
                      {title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-[#5b6389] sm:text-[15px]">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-10 flex justify-center sm:mt-12">
            <CallButton />
          </div>
        </Container>
      </section>
    </>
  );
}