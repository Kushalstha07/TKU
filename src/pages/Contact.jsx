import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitState, setSubmitState] = useState({
    status: 'idle', // idle | sending | success | error
    message: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitState({
        status: 'error',
        message: 'Email is not configured yet. Please set EmailJS env variables.',
      });
      return;
    }

    try {
      setSubmitState({ status: 'sending', message: '' });

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        { publicKey }
      );

      setSubmitState({ status: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setSubmitState({
        status: 'error',
        message: 'Failed to send message. Please try again.',
      });
    }
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Contact Us</p>
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="content-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="info-title">Contact Information</h2>
              
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-details">
                  <h3>Phone</h3>
                  <p>9841529303</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-details">
                  <h3>Email</h3>
                  <p>example@.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-details">
                  <h3>Location</h3>
                  <p>Lubhu, Lalitpur</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div className="info-details">
                  <h3>Business Hours</h3>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2 className="form-title">Send Us a Message</h2>
              {submitState.status !== 'idle' && (
                <div
                  className={`form-status ${submitState.status}`}
                  role="status"
                  aria-live="polite"
                >
                  {submitState.message || (submitState.status === 'sending' ? 'Sending…' : '')}
                </div>
              )}

              <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={onChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={onChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={onChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={onChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" value={formData.message} onChange={onChange} required></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={submitState.status === 'sending'}>
                  {submitState.status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
