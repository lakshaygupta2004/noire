import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import '../../styles/FeaturedSpotlight.css'; // ensure this is imported
import NoirAbsoluNojre from '../../assets/Products/NoirAbsoluNojre.jpg';
import SuvageMyctique from '../../assets/Products/SuvageMyctique.jpg';

const FeaturedSpotlight = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { x: -120, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      rightRef.current,
      { x: 120, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  return (
    <section className="spotlight-section">
      <div className="spotlight-overlay">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="spotlight-title"
        >
          Featured Spotlight
        </motion.h2>

        <div className="spotlight-products">
          {/* Left Product */}
            <div className="spotlight-card" ref={leftRef}>
              <img src={NoirAbsoluNojre} alt="Noir Absolu Nojre" />
              <div className="spotlight-content">
                <h3>Noir Absolu Nojre</h3>
                <p>
                  Deep, enigmatic, and bold. Crafted for the mysterious soul,
                  this scent whispers of midnight allure.
                </p>
              </div>
            </div>

          {/* Right Product */}
          
            <div className="spotlight-card" ref={rightRef}>
              <img src={SuvageMyctique} alt="Suvage Myctique" />
              <div className="spotlight-content">
                <h3>Suvage Myctique</h3>
                <p>
                  A rugged essence born of nature and spirit. Smoky, fresh, and
                  infinitely captivating.
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpotlight;
