// components/HomePage/Collections.jsx
import React from 'react';
import ImageTrail from '../../../ReactBits/ImageTrail/ImageTrail';
import '../../../ReactBits/ImageTrail/ImageTrail.css';
import '../../styles/Collection.css';
import Carousel from '../../assets/Product_Carousel/Carousel.png';

const images = [
  "/assets/Products/CelesteEmber.jpg",
  "/assets/Products/EclipseIntense.jpg",
  "/assets/Products/LunaNoire.jpg",
  "/assets/Products/ObsidianVeil.jpg",
  "/assets/Products/TwilightOpal.jpg",  
  "/assets/Products/NoirAbsoluNojre.jpg",
  "/assets/Products/SuvageMyctique.jpg",
  "/assets/Products/PartumCollection.jpg",
  "/assets/Products/SoleifFroid.jpg",
  "/assets/Products/NoieAbsolu.jpg",
];

const Collections = () => {
  return (
    <section className="collections-section">
      <h2 className="collections-title">Our Collections</h2>
      <div className="collections-featured-image-wrapper">
        <img
          src={Carousel}
          alt="Featured Collection"
          className="collections-featured-image"
        />
      </div>
      <div className="image-trail-wrapper">
        <ImageTrail items={images} />
      </div>
      <div className="collections-cta">
        <a href="/collections" className="collections-button">
          View More Collections
        </a>
      </div>
    </section>
  );
};

export default Collections;
