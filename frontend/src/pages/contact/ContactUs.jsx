// src/pages/ContactUs.jsx
import React, { useState } from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', null

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionStatus('pending');

    // Simulate an API call (replace with your actual backend endpoint)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
      console.log('Form submitted:', { name, email, subject, message });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setSubmissionStatus('success');
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div className={styles.contactUsPage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>We'd love to hear from you! Reach out with any questions, feedback, or inquiries.</p>
        </div>
      </section>

      <section className={styles.contactFormSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Send us a Message</h2>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name:</label>
              <input
                type="text"
                id="name"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email:</label>
              <input
                type="email"
                id="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject:</label>
              <input
                type="text"
                id="subject"
                className={styles.input}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message:</label>
              <textarea
                id="message"
                className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton} disabled={submissionStatus === 'pending'}>
              {submissionStatus === 'pending' ? 'Sending...' : 'Send Message'}
            </button>

            {submissionStatus === 'success' && (
              <div className={styles.successMessage}>
                Thank you for your message! We'll get back to you as soon as possible.
              </div>
            )}

            {submissionStatus === 'error' && (
              <div className={styles.errorMessage}>
                Oops! Something went wrong. Please try again later.
              </div>
            )}
          </form>
        </div>
      </section>

      <section className={styles.contactInfoSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Our Contact Information</h2>
          <ul className={styles.contactInfoList}>
            <li className={styles.contactInfoItem}>
              <i className="fas fa-map-marker-alt"></i>
              <span>[Addis Ababa, Ethiopia]</span>
            </li>
            <li className={styles.contactInfoItem}>
              <i className="fas fa-phone"></i>
              <span>[096321478]</span>
            </li>
            <li className={styles.contactInfoItem}>
              <i className="fas fa-envelope"></i>
              <span>[some@gmail.com]</span>
            </li>
            {/* Add more contact information as needed */}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;