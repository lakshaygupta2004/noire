// Testimonials.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import '../../styles/Testimonials.css';

const testimonials = [
  {
    name: 'Ava Moreau',
    feedback: 'NOIRÉ fragrances redefine elegance. Every bottle tells a story.',
    gradient: 'linear-gradient(135deg, #1f1f1f, #302626)',
  },
  {
    name: 'Liam Hart',
    feedback: 'The essence of NOIRÉ lingers and captivates. An absolute masterpiece.',
    gradient: 'linear-gradient(135deg, #1e2b2e, #2c3e50)',
  },
  {
    name: 'Isla Bennett',
    feedback: 'Luxury bottled. Each scent is a beautiful journey in itself.',
    gradient: 'linear-gradient(135deg, #2c2b40, #3e3b6d)',
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current.children, {
      opacity: 1,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }, []);

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-grid" ref={containerRef}>
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="testimonial-card"
            whileHover={{ scale: 1.05 }}
            style={{ background: t.gradient }}
          >
            <div className="testimonial-content">
              <p className="testimonial-feedback">{t.feedback}</p>
              <p className="testimonial-name">– {t.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
