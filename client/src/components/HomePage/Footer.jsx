import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import gsap from 'gsap';
import '../../styles/Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const brandRef = useRef(null);
  const h2Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    if (h2Ref.current && pRef.current) {
      gsap.fromTo(
        h2Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
      gsap.fromTo(
        pRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      );
    }
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const API_URL = import.meta.env.VITE_API_URL || '/api';
      await axios.post(`${API_URL}/contact`, formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-brand" ref={brandRef}>
          <h2 ref={h2Ref}>NOIRÉ</h2>
          <p ref={pRef}>Elegance in every drop.</p>
        </div>
        <form className="footer-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </footer>
  );
};

export default Footer;
