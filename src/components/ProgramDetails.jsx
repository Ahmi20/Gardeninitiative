import React, { useState } from 'react';
import { BookOpen, Users, Briefcase, Heart, Video, Sliders, Shield, Award, Play } from 'lucide-react';

const ProgramDetails = () => {
  const [activeTrack, setActiveTrack] = useState('production-office');

  const features = [
    { icon: <BookOpen size={28} />, title: 'Workforce Initiative', desc: 'Standardized vocational training built for New Jersey residents seeking a sustainable, high-growth career path.' },
    { icon: <Video size={28} />, title: 'Hands-on Production', desc: 'Practical, on-the-job style learning using professional gear, camera rigs, lighting tools, and industry standard software.' },
    { icon: <Briefcase size={28} />, title: 'Career Placement', desc: 'Graduate with credentials, a professional portfolio, and a direct listing on the state’s official crew directory.' },
  ];

  const prerequisite = {
    title: 'Mandatory Prerequisite: Script to Screen',
    subtitle: 'Introduction to the Film Industry',
    desc: 'Before tracking into a specialization, all students must complete this foundational course. It covers the production process from concept to distribution, set safety, terminology, and professional expectations.',
    modules: [
      {
        num: 1,
        title: 'How to be a Production Assistant',
        details: [
          'Daily PA responsibilities (Debunking the myths of being a PA)',
          'Set workflow and office logistics'
        ]
      },
      {
        num: 2,
        title: 'Set Etiquette',
        subtitle: 'The Set is your Family - Know Your Role in The Family',
        details: [
          'Understand the set (family) hierarchy (Director, Assistant Director, Producers, etc.)',
          'Punctuality is Key: “If you are early, you are on time; if you are on time, you are late; if you are late, you are fired!”',
          'Quiet on Set and maintaining professional distance from talent',
          'The Hands-Off Policy: What it is and what it entails',
          'Professional communication and maintaining set order'
        ]
      },
      {
        num: 3,
        title: 'Set Operations and Communications',
        details: [
          'How to use the walkie-talkies on and off set',
          'Set Language, terminology, and learning the chain of command',
          'Quick thinking, problem solving, and making yourself useful'
        ]
      },
      {
        num: 4,
        title: 'Camera Operations Basic',
        details: [
          'Equipment set up, take down, and gear transportation',
          'How to position elements on set and handle production gear properly'
        ]
      }
    ]
  };

  const tracks = [
    {
      id: 'production-office',
      title: 'Track A: Production Office & Management',
      shortTitle: 'Production Management',
      icon: <Users size={20} />,
      color: 'var(--color-primary)',
      bgColor: 'rgba(229, 169, 59, 0.08)',
      modules: [
        {
          num: 5,
          title: 'Story Development & Screenwriting Basics',
          details: [
            'Story structure and formatting basics',
            'Scene writing and dialogue techniques',
            'How to Pitch'
          ]
        },
        {
          num: 6,
          title: 'Casting Fundamentals',
          details: [
            'What casting is, why it is important, and how it works',
            'Setting up auditions and selecting/managing talent (approvals and rejections)',
            'Why casting decisions impact the project'
          ]
        },
        {
          num: 7,
          title: 'Storyboarding & Visual Planning',
          details: [
            'Translating scripts into visuals (bringing words on the page onto the big screen)',
            'Shot planning and working with Directors'
          ]
        },
        {
          num: 8,
          title: 'Production Design Basics',
          details: [
            'Set design basics and fundamentals',
            'Creating visual tone, props, wardrobe, SFX, and environment'
          ]
        },
        {
          num: 9,
          title: 'Producing & Project Management',
          details: [
            'Budget Awareness and project scheduling',
            'Coordinating teams and bringing projects together'
          ]
        }
      ]
    },
    {
      id: 'post-production',
      title: 'Track B: Post-Production Finishing',
      shortTitle: 'Post-Production',
      icon: <Sliders size={20} />,
      color: 'var(--color-secondary)',
      bgColor: 'rgba(200, 122, 83, 0.08)',
      modules: [
        {
          num: 10,
          title: 'Video Editing Basics',
          subtitle: 'How to tell the story after it’s been filmed',
          details: [
            'Editing workflows and story pacing',
            'Knowledge on when to cut scenes and what scenes to cut (Director’s cut bonus)'
          ]
        },
        {
          num: 11,
          title: 'Sound Design & Audio Editing',
          details: [
            'The relevance of sound and dialogue cleanup',
            'Music selection and audio balancing'
          ]
        },
        {
          num: 12,
          title: 'Color & Visual Finishing',
          details: [
            'Color correction standards',
            'Mood and tone through color grading',
            'Finalizing visuals'
          ]
        },
        {
          num: 13,
          title: 'Intro to VFX',
          details: [
            'What VFX is, basic applications, and when to use it',
            'Real-world workflows'
          ]
        },
        {
          num: 14,
          title: 'Production Simulator',
          details: [
            'Applying learning to practice in a mini production set',
            'Role rotation (PA, camera operator, director, etc.)'
          ]
        },
        {
          num: 15,
          title: 'Career Pathways & Industry Navigation',
          details: [
            'Registering for unions and job boards (like njproductionguide.org)',
            'Career options in film and choosing your lane',
            'How to get hired, get paid, and networking basics',
            'Interview/Resume preparedness and building your reputation'
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
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About the <span className="text-gradient">Workforce Initiative</span></h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '750px', margin: '0 auto 2rem auto', fontSize: '1.1rem', lineHeight: 1.8 }}>
            The Garden Collective is a New Jersey workforce development initiative. Our mission is to build a standardized local talent pipeline to service the Garden State's rapidly growing film and television industry. 
          </p>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
            We provide a path to sustainable, high-growth production careers for individuals seeking a fresh start, at-risk community members, and those currently lacking professional training or opportunities. We bridge the gap by placing our graduates directly onto active sets and regional productions through our partner network.
          </p>

          {/* Program Schedule Strip */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', marginTop: '2.5rem', padding: '1.5rem 2rem', background: 'rgba(229,169,59,0.04)', border: '1px solid rgba(229,169,59,0.1)', borderRadius: 'var(--radius-lg)' }}>
            {[
              { icon: '🕣', label: 'Daily Schedule', value: '8:30 AM – 6:00 PM' },
              { icon: '📅', label: 'Days Per Week', value: '5 Days' },
              { icon: '⏱️', label: 'Program Length', value: '8 Weeks' },
            ].map(item => (
              <div key={item.label} style={{ textAlign: 'center', minWidth: '140px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.35rem' }}>{item.icon}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>{item.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginTop: '0.15rem' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          {features.map(f => (
            <div key={f.title} className="card interactive-panel" style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(229,169,59,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto', color: 'var(--color-primary)' }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>{f.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Program Structure — Script to Screen & Specialization Tracks */}
        <div id="structure" style={{ marginBottom: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-divider"></div>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>Program Structure</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
              Standardized training from prep to post, modeled after industry-best standards
            </p>
          </div>

          {/* Prerequisite section */}
          <div className="card" style={{ padding: '3rem', marginBottom: '4rem', borderLeft: '5px solid var(--color-primary)', background: 'linear-gradient(135deg, rgba(229,169,59,0.04), rgba(7,7,8,0.4))' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', background: 'rgba(229,169,59,0.1)', padding: '0.25rem 0.75rem', borderRadius: '50px', letterSpacing: '0.5px' }}>
                CORE REQUIREMENT
              </span>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', fontWeight: 500 }}>
                Prerequisite Course (Modules 1–4)
              </span>
            </div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
              {prerequisite.title}
            </h3>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-secondary)', marginBottom: '1.25rem', fontWeight: 500 }}>
              {prerequisite.subtitle}
            </h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '700px' }}>
              {prerequisite.desc}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {prerequisite.modules.map((m, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
                  <div style={{ display: 'inline-block', fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-primary)', background: 'rgba(229,169,59,0.08)', padding: '0.15rem 0.5rem', borderRadius: '50px', marginBottom: '0.75rem' }}>
                    MODULE {m.num}
                  </div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>{m.title}</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {m.details.map((d, i) => (
                      <li key={i} style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', gap: '0.4rem', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--color-primary)', marginTop: '2px' }}>•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Tracks Toggle and View */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>Specialization Tracks</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
              Select a specialized track to view advanced training modules
            </p>

            {/* Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              {tracks.map(p => (
                <button
                  key={p.id}
                  onClick={() => setActiveTrack(p.id)}
                  className="btn"
                  style={{
                    background: activeTrack === p.id ? p.color : 'var(--color-bg-surface)',
                    color: activeTrack === p.id ? '#060607' : 'var(--color-text-muted)',
                    border: `1.5px solid ${activeTrack === p.id ? p.color : 'rgba(255, 255, 255, 0.08)'}`,
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

            {/* Active Track Modules List */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
              {tracks.find(p => p.id === activeTrack).modules.map((m, idx) => (
                <div
                  key={idx}
                  className="card interactive-panel"
                  style={{
                    padding: '2rem',
                    borderLeft: `5px solid ${tracks.find(p => p.id === activeTrack).color}`,
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: tracks.find(p => p.id === activeTrack).color,
                      background: tracks.find(p => p.id === activeTrack).bgColor,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '50px',
                      letterSpacing: '0.5px'
                    }}>
                      MODULE {m.num}
                    </span>
                    {m.subtitle && (
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontWeight: 600 }}>
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
                        <span style={{ color: tracks.find(p => p.id === activeTrack).color, marginTop: '4px', fontWeight: 'bold' }}>•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Funding & Sustainability (Pricing) Section */}
        <div id="pricing" style={{ marginBottom: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-divider"></div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Funding & Sustainability</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>How we support the program and keep it accessible</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            {/* Price Card */}
            <div className="card interactive-panel" style={{ padding: '2.5rem 2rem', borderTop: '4px solid var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Program Cost</h3>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-primary)', margin: '1rem 0' }}>
                  $0
                </div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Our workforce development initiative is <strong>100% Tuition-Free</strong> for qualified New Jersey residents. There are no hidden fees or equipment costs.
                </p>
              </div>
              <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem', color: 'var(--color-text-light)', fontSize: '0.85rem' }}>
                * Funded through public/private grants and sponsorships
              </div>
            </div>

            {/* Sustainability Card */}
            <div className="card interactive-panel" style={{ padding: '2.5rem 2rem', borderTop: '4px solid var(--color-secondary)' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', fontFamily: 'var(--font-display)' }}>Sustainability Model</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Our program model aligns rigorous technical training with real-world industry demand to maintain long-term sustainability.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-secondary)' }}>•</span>
                  <span><strong>Grants & Subsidies</strong>: Sustained by state, federal, and foundation grants focused on vocational job creation and arts initiatives.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-secondary)' }}>•</span>
                  <span><strong>Production Partnerships</strong>: Partnering with film, television, and commercial production companies to place graduates in paid roles.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-secondary)' }}>•</span>
                  <span><strong>Co-Op Referral Revenue</strong>: Production companies refer jobs to our pool of trained, ready crew, creating a self-sustaining cycle of work and revenue.</span>
                </li>
              </ul>
            </div>

            {/* Registered Apprenticeship */}
            <div className="card interactive-panel" style={{ padding: '2.5rem 2rem', borderTop: '4px solid var(--color-primary)' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', fontFamily: 'var(--font-display)' }}>Apprenticeship Pathway</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                The training is built to function as an industry-aligned apprenticeship program. We coordinate hands-on learning with professional development:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-primary)' }}>•</span>
                  <span><strong>Union Readiness</strong>: Curriculum aligned with core competencies required by regional crew unions and guilds.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-primary)' }}>•</span>
                  <span><strong>Official Registry</strong>: Direct enrollment to state film production boards and networks like <i>njproductionguide.org</i>.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-primary)' }}>•</span>
                  <span><strong>Production Placement</strong>: Graduates step directly into industry roles, earning competitive day rates.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Partners & Supporters */}
        <div id="supporters" style={{ textAlign: 'center' }}>
          <div className="section-divider"></div>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }}>Our Supporters</h2>
          <div className="card" style={{ padding: '3rem 2rem', background: 'linear-gradient(135deg, rgba(229, 169, 59, 0.03), rgba(200, 122, 83, 0.05))', maxWidth: '650px', margin: '0 auto' }}>
            <Heart size={36} color="var(--color-accent)" style={{ marginBottom: '1.25rem', display: 'inline-block' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>Want to Support the Garden Collective?</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
              We are actively looking for media professionals, production companies, and community sponsors to help power our workforce initiative. Get in touch to learn how you can partner with us.
            </p>
            <a href="#contact" className="btn btn-primary interactive-btn" style={{ padding: '0.875rem 2rem', color: '#060607' }}>
              Become a Supporter
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgramDetails;
