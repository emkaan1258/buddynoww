import { Link } from 'react-router-dom';
import { Container } from './ui.jsx';

export default function PageHero({ image, crumb, title, lead }) {
  return (
    <section className="relative overflow-hidden bg-navy-hero pb-20 pt-36 text-white sm:pb-24 sm:pt-44">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-hero via-navy-hero/85 to-navy-hero/50" />
      <Container className="relative grid justify-center align-middle">
        <nav aria-label="Breadcrumb" className="text-sm text-white/70 flex justify-center">
          <Link to="/" className="hover:text-white">Home</Link> <span aria-hidden="true">/</span> <span className="text-white">{crumb}</span>
        </nav>
        <h1 className="grid justify-center text-center mt-5 max-w-[760px] text-[clamp(2.4rem,6vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.05em]">{title}</h1>
        <div className="grid justify-center text-center">
        {lead && <p className="mt-5 max-w-[620px] text-lg text-white/85 sm:text-xl text-center">{lead}</p>}
        </div>
      </Container>
    </section>
  );
}
