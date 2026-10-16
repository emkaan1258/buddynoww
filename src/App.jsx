import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import ServicePage from './pages/ServicePage.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Legal from './pages/Legal.jsx';
import { SERVICES } from './data/site.js';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        {SERVICES.map((s) => (
          <Route key={s.slug} path={s.path} element={<ServicePage slug={s.slug} />} />
        ))}
        <Route path="/about.html" element={<About />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="/privacy.html" element={<Legal doc="privacy" />} />
        <Route path="/terms.html" element={<Legal doc="terms" />} />
        <Route path="/refund.html" element={<Legal doc="refund" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
