import React from 'react';
import { BookOpen, Users, Briefcase, Heart } from 'lucide-react';

const ProgramDetails = () => {
  const features = [
    { icon: <BookOpen size={28} />, title: 'Hands-On Training', desc: 'Learn real-world film and media production skills through guided, practical experience.' },
    { icon: <Briefcase size={28} />, title: 'Job Placement', desc: 'We connect graduates directly with employment opportunities in the growing film industry.' },
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--color-bg-deep)' }}>
      <div className="container">
        
        {/* About the Program */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-divider"></div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About the <span className="text-gradient">Program</span></h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8 }}>
            Founded by a media professional who's walked in your shoes — this program was created because everyone deserves access to opportunity, regardless of background.
          </p>
        </div>

        {/* Feature Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          {features.map(f => (
            <div key={f.title} className="card interactive-panel" style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(91,140,90,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto', color: 'var(--color-primary)' }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Program Structure — Journey Timeline */}
        <div id="structure" style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <div className="section-divider"></div>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>Your Journey</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>An 8-week path from where you are to where you want to be</p>
          </div>

          {/* Total duration banner */}
          <div className="card" style={{ padding: '1.25rem 2rem', textAlign: 'center', marginBottom: '2.5rem', background: 'linear-gradient(135deg, rgba(91,140,90,0.06), rgba(212,163,115,0.04))' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)', letterSpacing: '0.5px' }}>TOTAL PROGRAM LENGTH: </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-text-main)' }}>8 Weeks · Full-Time (8:30 AM – 6:00 PM) · Completely Free</span>
          </div>

          {/* Timeline */}
          <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: '28px', top: '24px', bottom: '24px', width: '2px', background: 'linear-gradient(to bottom, var(--color-secondary), var(--color-primary), var(--color-accent))', borderRadius: '2px' }}></div>

            {[
              { phase: 'Phase 1', weeks: 'Week 1', duration: '1 week', title: 'Orientation & Foundations', desc: 'Meet your cohort, learn about the industry, set personal goals, and complete safety certifications. We assess your needs and connect you with support services.', icon: '🌱', color: 'var(--color-secondary)' },
              { phase: 'Phase 2', weeks: 'Weeks 2–4', duration: '3 weeks', title: 'Core Skills Training', desc: "Hands-on workshops in equipment handling, set operations, lighting, sound, and production workflows. You'll build real skills through guided practice.", icon: '🌿', color: 'var(--color-primary)' },
              { phase: 'Phase 3', weeks: 'Weeks 5–6', duration: '2 weeks', title: 'Specialization & Mentorship', desc: 'Choose a focus area — grip, electric, production assistant, or camera department. Shadow a working professional and get one-on-one mentorship.', icon: '🌳', color: 'var(--color-primary)' },
              { phase: 'Phase 4', weeks: 'Week 7', duration: '1 week', title: 'On-Set Experience', desc: "Work on a real production set alongside your mentor. Apply everything you've learned in a live environment with full support.", icon: '☀️', color: 'var(--color-accent)' },
              { phase: 'Phase 5', weeks: 'Week 8', duration: '1 week', title: 'Career Launch', desc: 'Resume building, interview prep, and direct introductions to hiring partners. You graduate with a certificate, a network, and a plan.', icon: '🎓', color: 'var(--color-accent)' },
            ].map((step, i) => (
              <div key={i} className="interactive-panel" style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', position: 'relative', paddingLeft: '0' }}>
                {/* Timeline node */}
                <div style={{ width: '58px', minWidth: '58px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1.5rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-bg-surface)', border: `2.5px solid ${step.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', zIndex: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    {step.icon}
                  </div>
                </div>
                {/* Content card */}
                <div className="card" style={{ flex: 1, padding: '1.5rem 2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: step.color, background: `${step.color}12`, padding: '0.2rem 0.6rem', borderRadius: '50px', letterSpacing: '0.5px' }}>{step.phase}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', fontWeight: 500 }}>{step.weeks}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', background: 'var(--color-bg-deep)', padding: '0.15rem 0.5rem', borderRadius: '50px' }}>{step.duration}</span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>{step.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners & Supporters */}
        <div id="supporters" style={{ textAlign: 'center' }}>
          <div className="section-divider"></div>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '2rem' }}>Our Supporters</h2>
          <div className="card" style={{ padding: '2.5rem', background: 'linear-gradient(135deg, rgba(91,140,90,0.03), rgba(126,183,127,0.05))' }}>
            <Heart size={32} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 600 }}>Special Thank You To:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
              {[...Array(4)].map((_, i) => (
                <div key={i} style={{ padding: '0.75rem 1rem', background: 'var(--color-bg-deep)', borderRadius: 'var(--radius-sm)', color: 'var(--color-text-muted)', fontSize: '1rem', fontWeight: 500, minHeight: '45px' }}>
                  
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgramDetails;
