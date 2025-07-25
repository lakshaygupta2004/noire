import React from 'react';
import '../styles/Collections.css';

const rollImages = [
  '/assets/Products/CelesteEmber.jpg',
  '/assets/Products/EclipseIntense.jpg',
  '/assets/Products/LunaNoire.jpg',
  '/assets/Products/ObsidianVeil.jpg',
  '/assets/Products/TwilightOpal.jpg',
  '/assets/Products/NoirAbsoluNojre.jpg',
  '/assets/Products/SuvageMyctique.jpg',
  '/assets/Products/PartumCollection.jpg',
  '/assets/Products/EssenceCollection.jpg',
  '/assets/Products/GiftCollection.jpg',
  '/assets/Products/NoirAbsolu.jpg',
  '/assets/Products/SoleifFroid.jpg',
];

const giftLeft = '/assets/Products/GiftCollection.jpg';
const giftRight = '/assets/Products/GiftCollection.jpg';

const CollectionsPage = () => {
  return (
    <div className="collections-page">
      {/* Parallax background */}
      <div className="parallax-bg"></div>

      {/* Blurred glowing heading */}
      <header className="collections-header">
        <h1 className="collections-title">Collections</h1>
      </header>

      {/* Rolling Gallery */}
      <section className="rolling-gallery">
        <div className="rolling-track">
          {rollImages.concat(rollImages).map((img, idx) => (
            <div className="rolling-item" key={idx}>
              <img src={img} alt={`Gallery ${idx}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Gifts Section */}
      <section className="gifts-section">
        <h2 className="gifts-title">Our Gift Collection</h2>
        <div className="gift-stickers">
          <div className="sticker peel-left">
            <img src={giftLeft} alt="Gift Left" loading="lazy" />
          </div>
          <div className="sticker peel-right">
            <img src={giftRight} alt="Gift Right" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionsPage;
