import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Send, Heart, Shield, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { supabase } from '../lib/supabase';

const labelStyle = { display: 'block', marginBottom: '0.4rem', fontWeight: 500, color: 'var(--color-text-muted)', fontSize: '0.9rem' };
const hintStyle = { display: 'block', fontSize: '0.82rem', color: 'var(--color-text-light)', marginTop: '0.2rem', marginBottom: '0.5rem', fontStyle: 'italic' };
const fieldGap = { display: 'flex', flexDirection: 'column', gap: '1.25rem' };
const reassuranceStyle = { background: 'rgba(91,140,90,0.05)', border: '1px solid rgba(91,140,90,0.12)', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' };

const ApplicationPage = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '', preferredName: '', email: '', phone: '', dateOfBirth: '', city: '',
    employmentStatus: '', employmentOtherDetail: '', lastEmployed: '', currentIncome: '', educationLevel: '',
    hasFilmExperience: 'no', filmExperienceDetail: '', skills: '', resume: '',
    housingStatus: '', transportation: '', hasChildcare: '', hasCriminalRecord: '', criminalRecordDetail: '',
    barriers: '', supportNeeded: [],
    motivation: '', availability: '', startDate: '', referralSource: '', additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const totalSteps = 5;

  // Load saved data on mount
  useEffect(() => {
    const saved = localStorage.getItem('gardenApplicationData');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved application data');
      }
    }
  }, []);

  // Save data on change
  useEffect(() => {
    localStorage.setItem('gardenApplicationData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (name, value) => {
    const current = formData[name];
    const updated = current.includes(value) ? current.filter(v => v !== value) : [...current, value];
    setFormData({ ...formData, [name]: updated });
  };

  const nextStep = () => { if (step < totalSteps) { setStep(step + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); } };
  const prevStep = () => { if (step > 1) { setStep(step - 1); window.scrollTo({ top: 0, behavior: 'smooth' }); } };
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    setIsSubmitting(true);
    setSubmitError('');
    
    // Generate PDF
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Garden Collective Application', 14, 22);
    
    doc.setFontSize(10);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 30);
    
    const tableData = Object.entries(formData).map(([key, value]) => {
      // Format key (e.g. 'fullName' -> 'Full Name')
      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      const formattedValue = Array.isArray(value) ? value.join(', ') : (value || 'N/A');
      return [formattedKey, formattedValue];
    });

    doc.autoTable({
      startY: 35,
      head: [['Field', 'Response']],
      body: tableData,
      theme: 'grid',
      styles: { fontSize: 10, cellPadding: 3 },
      headStyles: { fillColor: [91, 140, 90] }
    });

    const pdfBase64 = doc.output('datauristring');

    try {
      // Check if supabase is configured
      if (!import.meta.env.VITE_SUPABASE_URL) {
        throw new Error("Supabase is not configured yet.");
      }

      const { error } = await supabase
        .from('applications')
        .insert([
          {
            full_name: formData.fullName,
            preferred_name: formData.preferredName,
            email: formData.email,
            phone: formData.phone,
            date_of_birth: formData.dateOfBirth,
            city: formData.city,
            employment_status: formData.employmentStatus === 'other' ? `Other: ${formData.employmentOtherDetail}` : formData.employmentStatus,
            last_employed: formData.lastEmployed,
            current_income: formData.currentIncome,
            education_level: formData.educationLevel,
            has_film_experience: formData.hasFilmExperience === 'yes',
            film_experience_detail: formData.filmExperienceDetail,
            skills: formData.skills,
            housing_status: formData.housingStatus,
            transportation: formData.transportation,
            has_childcare: formData.hasChildcare === 'yes',
            has_criminal_record: formData.hasCriminalRecord === 'yes',
            criminal_record_detail: formData.criminalRecordDetail,
            barriers: formData.barriers,
            support_needed: formData.supportNeeded,
            motivation: formData.motivation,
            availability: formData.availability,
            start_date: formData.startDate,
            referral_source: formData.referralSource,
            additional_info: formData.additionalInfo
          }
        ]);

      if (error) throw error;

      // Still provide a local copy for their records
      doc.save(`${formData.fullName.replace(/\s+/g, '_')}_Application.pdf`);

      // Clear saved data
      localStorage.removeItem('gardenApplicationData');

      setIsSubmitted(true); 
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    } catch (err) {
      console.error(err);
      setSubmitError('We had trouble saving your application. We have downloaded a copy to your device — please email it directly to admissions@gardeninitiative.org.');
      doc.save(`${formData.fullName.replace(/\s+/g, '_')}_Application.pdf`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepTitles = ['About You', 'Employment & Education', 'Your Situation', 'Support & Needs', 'Goals & Availability'];

  if (isSubmitted) {
    return (
      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container">
          <div className="card" style={{ maxWidth: '650px', margin: '0 auto', padding: '4rem 2rem', textAlign: 'center' }}>
            <CheckCircle size={64} color="var(--color-primary)" style={{ marginBottom: '1.5rem', display: 'inline-block' }} />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>You've Taken the First Step</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', marginBottom: '1rem', lineHeight: 1.8 }}>
              Your application has been securely submitted to our database and we have downloaded a PDF copy to your device for your records. A member of our team will personally contact you within <strong style={{ color: 'var(--color-text-main)' }}>48 hours</strong> to discuss next steps.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              No matter where you are in life right now, this program was built for people just like you. We're here to walk with you, not judge you.
            </p>
            <button onClick={() => onNavigate('home')} className="btn btn-primary interactive-btn">Return to Home</button>
          </div>
        </div>
      </section>
    );
  }

  const supportOptions = [
    'Transportation assistance', 'Childcare support', 'Housing resources',
    'Resume / interview help', 'Financial literacy training', 'GED / education resources', 
    'Clothing / work gear'
  ];

  return (
    <section className="section" style={{ minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Program <span className="text-gradient">Application</span></h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', maxWidth: '550px', margin: '0 auto 1rem auto' }}>
            No experience needed. No judgment. Just a real opportunity.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Step {step} of {totalSteps} — {stepTitles[step - 1]}</p>
          <div style={{ width: '100%', maxWidth: '500px', margin: '1rem auto', height: '6px', background: 'rgba(91,140,90,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${(step / totalSteps) * 100}%`, height: '100%', background: 'linear-gradient(90deg, var(--color-secondary), var(--color-primary))', transition: 'width 0.4s ease' }}></div>
          </div>
        </div>

        <div className="card interactive-panel" style={{ maxWidth: '750px', margin: '0 auto', padding: '2.5rem' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* ── Step 1: About You ── */}
            {step === 1 && (
              <div style={{ animation: 'fadeIn 0.5s ease' }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>About You</h3>
                <div style={reassuranceStyle}>
                  <Shield size={20} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>Your information is kept confidential and is only used to determine how we can best support you.</span>
                </div>
                <div style={fieldGap}>
                  <div>
                    <label style={labelStyle}>Full Legal Name *</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="soft-input" required />
                  </div>
                  <div>
                    <label style={labelStyle}>Preferred Name</label>
                    <span style={hintStyle}>What should we call you?</span>
                    <input type="text" name="preferredName" value={formData.preferredName} onChange={handleChange} className="soft-input" />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="soft-input" required />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="soft-input" required />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={labelStyle}>Date of Birth *</label>
                      <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="soft-input" required />
                    </div>
                    <div>
                      <label style={labelStyle}>City / Area *</label>
                      <input type="text" name="city" value={formData.city} onChange={handleChange} className="soft-input" required />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Step 2: Employment & Education ── */}
            {step === 2 && (
              <div style={{ animation: 'fadeIn 0.5s ease' }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>Employment & Education</h3>
                <div style={reassuranceStyle}>
                  <Heart size={20} color="var(--color-accent, #ff6b9d)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>There are no wrong answers here. This program is designed for people who are looking for a fresh start — wherever you're starting from.</span>
                </div>
                <div style={fieldGap}>
                  <div>
                    <label style={labelStyle}>Current Employment Status *</label>
                    <select name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} className="soft-input" style={{ appearance: 'auto' }} required>
                      <option value="">Select one...</option>
                      <option value="unemployed">Unemployed</option>
                      <option value="underemployed">Underemployed (part-time / not enough hours)</option>
                      <option value="gig">Gig work / Informal work</option>
                      <option value="employed-struggling">Employed but struggling financially</option>
                      <option value="recently-laid-off">Recently laid off</option>
                      <option value="recently-incarcerated">Recently incarcerated</option>
                      <option value="student">Student</option>
                      <option value="other">Other</option>
                    </select>
                    {formData.employmentStatus === 'other' && (
                      <div style={{ marginTop: '1rem' }}>
                        <label style={labelStyle}>Please describe your situation</label>
                        <input type="text" name="employmentOtherDetail" value={formData.employmentOtherDetail} onChange={handleChange} className="soft-input" required />
                      </div>
                    )}
                  </div>
                  <div>
                    <label style={labelStyle}>How long since your last steady employment?</label>
                    <select name="lastEmployed" value={formData.lastEmployed} onChange={handleChange} className="soft-input" style={{ appearance: 'auto' }}>
                      <option value="">Select one...</option>
                      <option value="currently">I'm currently working</option>
                      <option value="less-6">Less than 6 months</option>
                      <option value="6-12">6 months to 1 year</option>
                      <option value="1-3">1–3 years</option>
                      <option value="3+">More than 3 years</option>
                      <option value="never">I haven't had steady employment</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Highest Level of Education</label>
                    <select name="educationLevel" value={formData.educationLevel} onChange={handleChange} className="soft-input" style={{ appearance: 'auto' }}>
                      <option value="">Select one...</option>
                      <option value="none">No diploma / still in school</option>
                      <option value="ged">GED</option>
                      <option value="high-school">High School Diploma</option>
                      <option value="some-college">Some College</option>
                      <option value="associates">Associate's Degree</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="other">Trade school / Certificate / Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Do you have any prior film or media experience?</label>
                    <span style={hintStyle}>No experience is required — we train you from the ground up.</span>
                    <select name="hasFilmExperience" value={formData.hasFilmExperience} onChange={handleChange} className="soft-input" style={{ appearance: 'auto' }}>
                      <option value="no">No, none at all</option>
                      <option value="intermediate">Intermediate (e.g. personal projects, volunteer work, basic knowledge)</option>
                      <option value="advanced">Advanced (e.g. professional sets, paid freelance, high-level technical skills)</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>What skills or strengths do you bring?</label>
                    <span style={hintStyle}>These don't have to be "professional" — reliability, teamwork, physical stamina, creativity all count.</span>
                    <textarea name="skills" value={formData.skills} onChange={handleChange} className="soft-input" rows="3" placeholder="e.g. I'm a hard worker, good with my hands, dependable..."></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* ── Step 3: Your Situation ── */}
            {step === 3 && (
              <div style={{ animation: 'fadeIn 0.5s ease' }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>Your Current Situation</h3>
                <div style={reassuranceStyle}>
                  <Shield size={20} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>We ask these questions so we can connect you with the right resources — not to disqualify you. Nothing here will be held against you.</span>
                </div>
                <div style={fieldGap}>
                  <div>
                    <label style={labelStyle}>Current Housing Situation *</label>
                    <select name="housingStatus" value={formData.housingStatus} onChange={handleChange} className="soft-input" style={{ appearance: 'auto' }} required>
                      <option value="">Select one...</option>
                      <option value="stable">Stable housing (renting or owning)</option>
                      <option value="family">Living with family or friends</option>
                      <option value="temporary">Temporary / transitional housing</option>
                      <option value="shelter">Shelter or emergency housing</option>
                      <option value="unstable">Currently without stable housing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Do you have reliable transportation?</label>
                    <select name="transportation" value={formData.transportation} onChange={handleChange} className="soft-input" style={{ appearance: 'auto' }}>
                      <option value="">Select one...</option>
                      <option value="own-car">Yes, I have my own vehicle</option>
                      <option value="shared">Shared vehicle / rides from others</option>
                      <option value="public">Public transportation</option>
                      <option value="none">No reliable transportation</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Do you have children that require childcare during program hours?</label>
                    <select name="hasChildcare" value={formData.hasChildcare} onChange={handleChange} className="soft-input" style={{ appearance: 'auto' }}>
                      <option value="">Select one...</option>
                      <option value="no-children">No children / Not applicable</option>
                      <option value="covered">Yes, but I have childcare covered</option>
                      <option value="need-help">Yes, and I need childcare assistance</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Do you have a criminal record?</label>
                    <span style={hintStyle}>A record does not disqualify you. We believe in second chances.</span>
                    <select name="hasCriminalRecord" value={formData.hasCriminalRecord} onChange={handleChange} className="soft-input" style={{ appearance: 'auto' }}>
                      <option value="">Select one...</option>
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                      <option value="prefer-not">Prefer not to say</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>What is the biggest barrier you face right now?</label>
                    <span style={hintStyle}>Be honest — this helps us understand how to help.</span>
                    <textarea name="barriers" value={formData.barriers} onChange={handleChange} className="soft-input" rows="3" placeholder="e.g. No car, can't find consistent work, lack of experience, housing instability..."></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* ── Step 4: Support & Needs ── */}
            {step === 4 && (
              <div style={{ animation: 'fadeIn 0.5s ease' }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>What Support Do You Need?</h3>
                <div style={reassuranceStyle}>
                  <Heart size={20} color="var(--color-accent, #ff6b9d)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>Our program goes beyond job training. Check any services that would help you succeed.</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {supportOptions.map(opt => (
                    <label key={opt} onClick={() => handleCheckbox('supportNeeded', opt)}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.8rem 1rem', borderRadius: '10px', cursor: 'pointer',
                        background: formData.supportNeeded.includes(opt) ? 'rgba(91,140,90,0.08)' : 'rgba(91,140,90,0.03)',
                        border: formData.supportNeeded.includes(opt) ? '1px solid rgba(91,140,90,0.2)' : '1px solid rgba(91,140,90,0.08)',
                        transition: 'all 0.2s ease', color: formData.supportNeeded.includes(opt) ? '#fff' : 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                      <span style={{ width: 18, height: 18, borderRadius: 4, border: formData.supportNeeded.includes(opt) ? '2px solid var(--color-primary)' : '2px solid rgba(91,140,90,0.15)',
                        background: formData.supportNeeded.includes(opt) ? 'var(--color-primary)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 12, color: 'var(--color-text-main)' }}>
                        {formData.supportNeeded.includes(opt) && '✓'}
                      </span>
                      {opt}
                    </label>
                  ))}
                </div>
                <div>
                  <label style={labelStyle}>How did you hear about Garden Collective?</label>
                  <select name="referralSource" value={formData.referralSource} onChange={handleChange} className="soft-input" style={{ appearance: 'auto' }}>
                    <option value="">Select one...</option>
                    <option value="social-media">Social media</option>
                    <option value="friend-family">Friend or family member</option>
                    <option value="community-org">Community organization</option>
                    <option value="flyer">Flyer or poster</option>
                    <option value="church">Church or faith organization</option>
                    <option value="government">Government agency / workforce center</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            )}

            {/* ── Step 5: Goals & Availability ── */}
            {step === 5 && (
              <div style={{ animation: 'fadeIn 0.5s ease' }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>Your Goals & Availability</h3>
                <div style={reassuranceStyle}>
                  <Heart size={20} color="var(--color-accent, #ff6b9d)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>You're almost done. Tell us what drives you and when you can start — we'll handle the rest.</span>
                </div>
                <div style={fieldGap}>
                  <div>
                    <label style={labelStyle}>Why do you want to join this program? *</label>
                    <span style={hintStyle}>There's no "right" answer. Speak from the heart.</span>
                    <textarea name="motivation" value={formData.motivation} onChange={handleChange} className="soft-input" rows="4" required placeholder="What does a new career path mean for you and your family?"></textarea>
                  </div>
                  <div>
                    <label style={labelStyle}>Are you available for the full duration of the training? *</label>
                    <select name="availability" value={formData.availability} onChange={handleChange} className="soft-input" style={{ appearance: 'auto' }} required>
                      <option value="">Select one...</option>
                      <option value="full">Yes, I can commit fully</option>
                      <option value="accommodations">I would need some accommodations</option>
                      <option value="partial">I can do part-time only</option>
                      <option value="unsure">I'm not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>When can you start?</label>
                    <select name="startDate" value={formData.startDate} onChange={handleChange} className="soft-input" style={{ appearance: 'auto' }}>
                      <option value="">Select one...</option>
                      <option value="immediately">Immediately</option>
                      <option value="2-weeks">Within 2 weeks</option>
                      <option value="1-month">Within a month</option>
                      <option value="flexible">I'm flexible</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Anything else you'd like us to know?</label>
                    <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} className="soft-input" rows="3" placeholder="Optional — share anything that might help us support you better."></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(91,140,90,0.1)' }}>
              {step > 1 ? (
                <button type="button" onClick={prevStep} className="btn btn-outline interactive-btn" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <ArrowLeft size={18} /> Back
                </button>
              ) : (<div></div>)}
              {step < totalSteps ? (
                <button type="button" onClick={nextStep} className="btn btn-primary interactive-btn" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  Next Step <ArrowRight size={18} />
                </button>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                  {submitError && <div style={{ color: '#e11d48', fontSize: '0.85rem', maxWidth: '300px', textAlign: 'right' }}>{submitError}</div>}
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary interactive-btn" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', opacity: isSubmitting ? 0.7 : 1 }}>
                    {isSubmitting ? 'Sending...' : 'Submit Application'} <Send size={18} />
                  </button>
                </div>
              )}
            </div>

          </form>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default ApplicationPage;
