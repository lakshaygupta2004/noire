import React, { useRef } from "react";
import VariableProximity from "../../ReactBits/VariableProximity/VariableProximity";
import "../styles/About.css";

const About = () => {
  const containerRef = useRef(null);

  return (
    <section className="about-section" id="about">
      <h1 className="about-title">About Us</h1>
      <div className="about-container" ref={containerRef}>
        <div className="about-image-container">
          <img
            src="/assets/Founder/file.png"
            alt="Founder"
            className="about-image"
          />
        </div>
        <div className="about-text">
          <VariableProximity
            label={`NOIRÉ was born from the desire to craft perfumes that echo timeless luxury. Our fragrances blend rare ingredients and modern alchemy to create a sensory journey unlike any other. Guided by an obsession for detail, every bottle is a piece of art — made to mesmerize, to inspire, to last. We believe scent is not just an accessory, but a signature — a memory sealed in time. Welcome to NOIRÉ — where elegance meets essence.`}
            className="variable-proximity-text"
            fromFontVariationSettings="'wght' 300, 'opsz' 12"
            toFontVariationSettings="'wght' 900, 'opsz' 40"
            containerRef={containerRef}
            radius={120}
            falloff="linear"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
