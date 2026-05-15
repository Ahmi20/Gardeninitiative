import React, { useState } from 'react';
import { Send, ExternalLink, ArrowRight } from 'lucide-react';

const ApplicationForm = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    content: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out. We will get back to you soon!');
    setFormData({ name: '', subject: '', content: '' });
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--color-bg-base)' }}>
      <div className="container">
        
        {/* Apply CTA */}
        <div className="card interactive-panel" style={{ maxWidth: '750px', margin: '0 auto 4rem auto', padding: '3rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(91,140,90,0.05), rgba(212,163,115,0.05))', border: '1px solid rgba(91,140,90,0.12)' }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>Ready to Grow With Us?</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem auto', lineHeight: 1.7 }}>
            Take the first step toward your new career. After we receive your application, our team will reach out to you within 48 hours.
          </p>
          <button onClick={() => { onNavigate('apply'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
            Start Your Application <ArrowRight size={18} style={{ marginLeft: '0.25rem' }} />
          </button>
        </div>

        {/* Contact Form */}
        <div className="card" style={{ maxWidth: '550px', margin: '0 auto', padding: '2.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="section-divider"></div>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Get in Touch</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Questions? We'd love to hear from you.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="soft-input" 
                required 
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="soft-input" 
                required 
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Message</label>
              <textarea 
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="soft-input" 
                rows="4" 
                required 
                style={{ resize: 'vertical' }}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
