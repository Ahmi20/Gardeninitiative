import React from 'react';
import { Sprout } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--color-bg-base)', borderTop: '1px solid rgba(91,140,90,0.08)', padding: '3.5rem 0 1.5rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem', marginBottom: '2.5rem' }}>
          
          <div style={{ maxWidth: '320px' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>
              <div style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', borderRadius: '10px', padding: '5px', display: 'flex' }}>
                <Sprout size={18} color="#fff" />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>
                Garden Collective
              </span>
            </a>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>
              A workforce initiative training members from underrepresented communities to become skilled media professionals.
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: '0.75rem', fontSize: '0.95rem', fontFamily: 'var(--font-primary)', fontWeight: 600, color: 'var(--color-text-main)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li><a href="#about" style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>About the Program</a></li>
              <li><a href="#structure" style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Program Structure</a></li>
              <li><a href="#contact" style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Contact Us</a></li>
              <li><a href="#contact" style={{ color: 'var(--color-primary)', fontSize: '0.875rem', fontWeight: 600 }}>Apply Now</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '0.75rem', fontSize: '0.95rem', fontFamily: 'var(--font-primary)', fontWeight: 600, color: 'var(--color-text-main)' }}>Connect</h4>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {['IG', 'TW', 'LI'].map(s => (
                <a key={s} href="#" style={{ color: 'var(--color-text-muted)', padding: '0.5rem 0.75rem', background: 'var(--color-bg-deep)', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, transition: 'all 0.2s' }}>
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', color: 'var(--color-text-light)', fontSize: '0.8rem', borderTop: '1px solid rgba(91,140,90,0.06)', paddingTop: '1.5rem' }}>
          &copy; {new Date().getFullYear()} Garden Collective. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
