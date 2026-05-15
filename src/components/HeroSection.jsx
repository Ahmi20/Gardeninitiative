import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '5rem', background: 'linear-gradient(180deg, #eef5ee 0%, var(--color-bg-deep) 100%)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Soft decorative blobs */}
      <div style={{ position: 'absolute', top: '-5%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(126,183,127,0.15) 0%, transparent 70%)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(212,163,115,0.1) 0%, transparent 70%)', borderRadius: '50%' }}></div>
      <div className="leaf-decoration" style={{ top: '15%', right: '8%', transform: 'rotate(25deg)' }}>🌿</div>
      <div className="leaf-decoration" style={{ bottom: '20%', left: '5%', transform: 'rotate(-15deg)', fontSize: '6rem' }}>🌱</div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1.25rem', background: 'rgba(91,140,90,0.08)', borderRadius: '50px', border: '1px solid rgba(91,140,90,0.15)', color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '2rem', letterSpacing: '1px' }}>
            <Leaf size={14} /> THE GARDEN COLLECTIVE
          </div>
          
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 700, lineHeight: 1.15, color: 'var(--color-text-main)' }}>
            Planting Seeds for <br/>
            <span className="text-gradient" style={{ fontSize: '4rem' }}>Brighter Futures</span>
          </h1>
          
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto', lineHeight: 1.8 }}>
            We are the Garden Collective — a workforce initiative training members from underrepresented communities to become skilled, confident media professionals. No experience needed. Just heart.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
              Start Your Journey <ArrowRight size={18} style={{ marginLeft: '0.25rem' }} />
            </a>
            <a href="#about" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
              Learn More
            </a>
          </div>

          {/* Trust indicators */}
          <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            {[
              { num: 'Free', label: 'Program' },
              { num: '24hr', label: 'Response Time' },
              { num: '100%', label: 'Support Included' }
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
