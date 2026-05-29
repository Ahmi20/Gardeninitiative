import React, { useState } from 'react';
import { BookOpen, Users, Briefcase, Heart, Video, Sliders } from 'lucide-react';

const ProgramDetails = () => {
  const [activePillar, setActivePillar] = useState(1);

  const features = [
    { icon: <BookOpen size={28} />, title: 'Hands-On Training', desc: 'Learn real-world film and media production skills through guided, practical experience.' },
    { icon: <Briefcase size={28} />, title: 'Job Placement', desc: 'We connect graduates directly with employment opportunities in the growing film industry.' },
  ];

  const pillars = [
    {
      id: 1,
      title: 'Pillar One: On-Set Training',
      shortTitle: 'On-Set Training',
      icon: <Video size={20} />,
      color: 'var(--color-primary)',
      bgColor: 'rgba(91,140,90,0.08)',
      modules: [
        {
          num: 1,
          title: 'How to be a Production Assistant',
          details: [
            'Daily PA responsibilities (Debunking the myths of being a PA)',
            'Set workflow'
          ]
        },
        {
          num: 2,
          title: 'Set Etiquette',
          subtitle: 'The Set is your Family - Know Your Role in The Family',
          details: [
            'Understand the set (family) hierarchy (Director, Assistant Director, Producers, etc)',
            'Punctuality is Key: “If you are early, you are on time; if you are on time, you are late; if you are late, you are fired!”',
            'Quiet on Set!',
            'Interacting with Talent and Staying Focused: as a crew member maintain professional distance from the actor and respect the actors and talent',
            'The Hands-Off Policy: What it is and what it entails',
            'Professional communication',
            'Cleaning up & Maintaining Set Order'
          ]
        },
        {
          num: 3,
          title: 'Set Operations and Communications',
          details: [
            'How to use the walkie-talkies on and off set',
            'Set Language and terminology',
            'Learning the chain of command',
            'Quick thinking and problem solving on set',
            'How to make yourself useful on set'
          ]
        },
        {
          num: 4,
          title: 'Camera Operations Basic',
          details: [
            'Equipment set up and take down',
            'Gear transportation to and from set',
            'How to position set',
            'Handling production gear properly'
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Pillar Two: Pre-Production Foundational',
      shortTitle: 'Pre-Production',
      icon: <BookOpen size={20} />,
      color: 'var(--color-accent)',
      bgColor: 'rgba(212,163,115,0.08)',
      modules: [
        {
          num: 5,
          title: 'Story Development & Screenwriting Basics',
          details: [
            'Story structure',
            'Script Formatting basics',
            'Scene writing',
            'Understanding Dialogue',
            'How to Pitch'
          ]
        },
        {
          num: 6,
          title: 'Casting Fundamentals',
          details: [
            'What is casting and why is it important?',
            'How does casting work',
            'Setting up auditions',
            'Selecting the right talent for the right project (how to handle approvals and rejections)',
            'Why casting decisions impact the project'
          ]
        },
        {
          num: 7,
          title: 'Storyboarding & Visual Planning',
          details: [
            'Translating scripts into visuals (how to bring the words on the page onto the big screen)',
            'Shot Planning',
            'Working with Directors'
          ]
        },
        {
          num: 8,
          title: 'Production Design Basics',
          details: [
            'Set design basics and fundamentals',
            'Creating visual tone',
            'Props, wardrobe, sfx, environment'
          ]
        },
        {
          num: 9,
          title: 'Producing & Project Management',
          details: [
            'Budget Awareness!!',
            'Scheduling shoots',
            'Coordinating teams',
            'Bringing a project together'
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Pillar Three: Post Production Foundational',
      shortTitle: 'Post Production',
      icon: <Sliders size={20} />,
      color: 'var(--color-secondary)',
      bgColor: 'rgba(126,183,127,0.08)',
      modules: [
        {
          num: 10,
          title: 'Video Editing Basics',
          subtitle: 'How to tell the story after it’s been filmed',
          details: [
            'Editing workflows',
            'Knowledge on when to cut scenes and what scenes to cut (Director’s cut bonus)',
            'Story Pacing'
          ]
        },
        {
          num: 11,
          title: 'Sound Design & Audio Editing',
          details: [
            'The Relevance of Sound',
            'Dialogue cleanup',
            'Music Selection',
            'Audio balancing'
          ]
        },
        {
          num: 12,
          title: 'Color & Visual Finishing',
          details: [
            'Color correction standards',
            'Mood and tone through colors',
            'Finalizing visuals'
          ]
        },
        {
          num: 13,
          title: 'Intro to VFX',
          details: [
            'What is VFX and why is it important?',
            'Basic applications',
            'When to use VFX',
            'Real-World Application'
          ]
        },
        {
          num: 14,
          title: 'Production Simulator',
          details: [
            'Students will apply their learnings to practice in a mini production set',
            'Role rotation (PA, camera operator, director, etc)'
          ]
        },
        {
          num: 15,
          title: 'Career Pathways & Industry Navigation',
          details: [
            'Register to be part of a Union and Job Board',
            'Show multiple career options in film',
            'How to choose your lane (Guest Speakers from different fields)',
            'How to get hired and how to get paid',
            'Networking basics',
            'Interview/Resume Preparedness',
            'Building your reputation'
          ]
        }
      ]
    }
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

        {/* Program Structure / Curriculum */}
        <div id="structure" style={{ marginBottom: '6rem', textAlign: 'center' }}>
          <div className="section-divider"></div>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>Program Structure</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
            Explore the three core pillars of our film and media workforce training program
          </p>

          {/* Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {pillars.map(p => (
              <button
                key={p.id}
                onClick={() => setActivePillar(p.id)}
                className="btn"
                style={{
                  background: activePillar === p.id ? p.color : 'var(--color-bg-surface)',
                  color: activePillar === p.id ? '#fff' : 'var(--color-text-muted)',
                  border: `1.5px solid ${activePillar === p.id ? p.color : 'rgba(91, 140, 90, 0.2)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.95rem',
                  transition: 'all var(--transition-normal)',
                  borderRadius: '50px',
                  cursor: 'pointer'
                }}
              >
                {p.icon}
                {p.shortTitle}
              </button>
            ))}
          </div>

          {/* Modules List */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            {pillars.find(p => p.id === activePillar).modules.map((m, idx) => (
              <div
                key={idx}
                className="card interactive-panel"
                style={{
                  padding: '2rem',
                  borderLeft: `5px solid ${pillars.find(p => p.id === activePillar).color}`,
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: pillars.find(p => p.id === activePillar).color,
                    background: pillars.find(p => p.id === activePillar).bgColor,
                    padding: '0.25rem 0.75rem',
                    borderRadius: '50px',
                    letterSpacing: '0.5px'
                  }}>
                    MODULE {m.num}
                  </span>
                  {m.subtitle && (
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 600 }}>
                      {m.subtitle}
                    </span>
                  )}
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
                  {m.title}
                </h3>
                <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {m.details.map((detail, dIdx) => (
                    <li key={dIdx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      <span style={{ color: pillars.find(p => p.id === activePillar).color, marginTop: '4px', fontWeight: 'bold' }}>•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>



        {/* Partners & Supporters */}
        <div id="supporters" style={{ textAlign: 'center' }}>
          <div className="section-divider"></div>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }}>Our Supporters</h2>
          <div className="card" style={{ padding: '3rem 2rem', background: 'linear-gradient(135deg, rgba(91,140,90,0.03), rgba(126,183,127,0.05))', maxWidth: '650px', margin: '0 auto' }}>
            <Heart size={36} color="var(--color-accent)" style={{ marginBottom: '1.25rem', display: 'inline-block' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>Want to Support the Garden Collective?</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
              We are actively looking for media professionals, production companies, and community sponsors to help power our workforce initiative. Get in touch to learn how you can partner with us.
            </p>
            <a href="#contact" className="btn btn-primary interactive-btn" style={{ padding: '0.875rem 2rem' }}>
              Become a Supporter
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgramDetails;

