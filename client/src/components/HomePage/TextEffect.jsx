// components/HomePage/TextEffects.jsx
import React from 'react';
import CurvedLoop from '../../../ReactBits/CurvedLoop/CurvedLoop';
import '../../styles/TextEffect.css';


const TextEffect = () => {
  const marqueeText = "NOIRÉ 🖤 — The Art of Perfume ✨ | Crafted Elegance 💫 | Timeless Luxury 🌟 | Experience the Essence 🌹 | ";
    return (
      <section className="text-effect-section">
        <CurvedLoop marqueeText={marqueeText} 
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        />


    </section>
  );
};

export default TextEffect;
