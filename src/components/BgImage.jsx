import { useState } from 'react';

// <img> that falls back to a flat navy block if the (possibly guessed) URL 404s.
export default function BgImage({ src, alt = '', className = '' }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`bg-gradient-to-br from-[#1b2a6e] to-navy ${className}`} role="img" aria-label={alt} />;
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />;
}
