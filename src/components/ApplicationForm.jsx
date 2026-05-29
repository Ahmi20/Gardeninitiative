import React, { useState } from 'react';
import { Send, ExternalLink, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

const ApplicationForm = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
      if (!accessKey) {
        throw new Error("Web3Forms access key is not configured.");
      }

      // 1. Send email via Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          subject: formData.subject,
          message: formData.content,
          from_name: "Garden Collective Contact Form"
        })
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send email.");
      }

      // 2. Try to save to Supabase as a backup (optional)
      if (import.meta.env.VITE_SUPABASE_URL) {
        try {
          await supabase
            .from('contact_messages')
            .insert([
              {
                name: formData.name,
                subject: formData.subject,
                content: formData.content
              }
            ]);
        } catch (dbErr) {
          console.warn("Supabase backup save failed:", dbErr);
        }
      }

      alert('Thank you for reaching out. Your message has been sent successfully!');
      setFormData({ name: '', subject: '', content: '' });
    } catch (err) {
      console.error(err);
      alert('We had trouble sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
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

            <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}>
              <Send size={16} /> {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
