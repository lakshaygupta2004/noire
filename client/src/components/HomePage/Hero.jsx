// components/homepage/Hero.jsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ModelViewer from "../../../ReactBits/ModelViewer/ModelViewer";
import "../../styles/hero.css";

const Hero = () => {
  const textRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      modelRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="hero-text" ref={textRef}>
          <h1>Luxury Redefined</h1>
          <p>Discover the elegance of NOIRÉ fragrances—crafted to perfection.</p>
          <button className="hero-button">Explore Now</button>
        </div>
        <div className="hero-model" ref={modelRef}>
          <ModelViewer
            url="/models/product8.glb"
            alt="Noire Perfume Bottle"
            className="model-viewer"
            defaultZoom={2}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
