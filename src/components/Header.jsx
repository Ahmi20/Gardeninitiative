import React from 'react';
import { Clapperboard } from 'lucide-react';

const Header = ({ onNavigate }) => {
  const handleNav = (page, hash) => (e) => {
    e.preventDefault();
    onNavigate(page);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="soft-nav" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '0.75rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" onClick={handleNav('home')} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-text-main)', cursor: 'pointer' }}>
          <div style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', borderRadius: '12px', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Clapperboard size={22} color="#fff" />
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Garden Collective
            <span style={{ fontSize: '0.65rem', fontWeight: 600, background: 'rgba(229,169,59,0.1)', color: 'var(--color-primary)', padding: '0.2rem 0.5rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Film & TV Training
            </span>
          </span>
        </a>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="#about" onClick={handleNav('home', '#about')} style={{ color: 'var(--color-text-muted)', fontWeight: 500, fontSize: '0.9rem' }}>About</a>
          <a href="#structure" onClick={handleNav('home', '#structure')} style={{ color: 'var(--color-text-muted)', fontWeight: 500, fontSize: '0.9rem' }}>Structure</a>
          <a href="#pricing" onClick={handleNav('home', '#pricing')} style={{ color: 'var(--color-text-muted)', fontWeight: 500, fontSize: '0.9rem' }}>Funding & Grants</a>
          <a href="#supporters" onClick={handleNav('home', '#supporters')} style={{ color: 'var(--color-text-muted)', fontWeight: 500, fontSize: '0.9rem' }}>Supporters</a>
          <a href="#contact" onClick={handleNav('home', '#contact')} style={{ color: 'var(--color-text-muted)', fontWeight: 500, fontSize: '0.9rem' }}>Contact</a>
          <button onClick={() => { onNavigate('apply'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', color: '#060607' }}>Apply Now</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
