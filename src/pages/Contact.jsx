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

  const [errors, setErrors] = useState({
    phone: '',
    email: '',
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Allow only digits
    return /^\d*$/.test(phone);
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    // Phone validation - only allow numbers, max 10 digits
    if (name === 'phone') {
      if (!validatePhone(value)) {
        setErrors((prev) => ({ ...prev, phone: 'Only numbers are allowed' }));
        return; // Don't update if invalid
      } else if (value.length > 10) {
        setErrors((prev) => ({ ...prev, phone: 'Maximum 10 digits allowed' }));
        return; // Don't update if too long
      } else {
        setErrors((prev) => ({ ...prev, phone: '' }));
      }
    }

    // Email validation
    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address' }));
      } else {
        setErrors((prev) => ({ ...prev, email: '' }));
      }
    }

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

      // Build a comprehensive message with all details
      const fullMessage = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}

Message:
${formData.message}
      `.trim();

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: fullMessage,
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
                  <p>9851209024</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-details">
                  <h3>Email</h3>
                  <p>trilochanakapadaudyog@gmail.com</p>
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
                  <p>Sun - Sat: 9:00 AM - 6:00 PM</p>
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
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={onChange} placeholder="Numbers only" />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={onChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" value={formData.message} onChange={onChange} required></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={submitState.status === 'sending' || errors.email || errors.phone}>
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
