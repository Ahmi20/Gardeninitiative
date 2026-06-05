import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '5rem', background: 'linear-gradient(180deg, #101014 0%, var(--color-bg-deep) 100%)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Soft decorative blobs */}
      <div style={{ position: 'absolute', top: '-5%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(229,169,59,0.08) 0%, transparent 70%)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(200,122,83,0.05) 0%, transparent 70%)', borderRadius: '50%' }}></div>
      
      {/* Light beams representing production spotlights */}
      <div style={{ position: 'absolute', top: '10%', left: '-10%', width: '300px', height: '600px', background: 'linear-gradient(45deg, rgba(229,169,59,0.03) 0%, transparent 70%)', transform: 'rotate(-30deg)', transformOrigin: 'top left', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', top: '5%', right: '-15%', width: '400px', height: '700px', background: 'linear-gradient(-45deg, rgba(200,122,83,0.03) 0%, transparent 70%)', transform: 'rotate(25deg)', transformOrigin: 'top right', pointerEvents: 'none' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1.25rem', background: 'rgba(229,169,59,0.08)', borderRadius: '50px', border: '1px solid rgba(229,169,59,0.15)', color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '2rem', letterSpacing: '1px' }}>
            <Leaf size={14} /> THE GARDEN COLLECTIVE
          </div>
          
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 700, lineHeight: 1.15, color: 'var(--color-text-main)' }}>
            Planting Seeds for <br/>
            <span className="text-gradient" style={{ fontSize: '4rem' }}>Production Careers</span>
          </h1>
          
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '650px', margin: '0 auto 2.5rem auto', lineHeight: 1.8 }}>
            We are the Garden Collective — a New Jersey workforce initiative and entertainment production company. We train at-risk individuals and those seeking a fresh start to become skilled, disciplined media professionals. No experience needed.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem', color: '#060607' }}>
              Start Your Journey <ArrowRight size={18} style={{ marginLeft: '0.25rem' }} />
            </a>
            <a href="#about" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
              Learn More
            </a>
          </div>
 
          {/* Trust indicators */}
          <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            {[
              { num: 'Free', label: 'Program Cost' },
              { num: 'New Jersey', label: 'Local Focus' },
              { num: '100%', label: 'Placement Support' }
            ].map(item => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>{item.num}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginTop: '0.25rem' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
