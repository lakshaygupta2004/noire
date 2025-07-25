import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

const products = [
  { name: 'Celeste Ember', price: 2499, image: '/assets/Products/CelesteEmber.jpg' },
  { name: 'Eclipse Intense', price: 2699, image: '/assets/Products/EclipseIntense.jpg' },
  { name: 'Luna Noire', price: 2399, image: '/assets/Products/LunaNoire.jpg' },
  { name: 'Obsidian Veil', price: 2799, image: '/assets/Products/ObsidianVeil.jpg' },
  { name: 'Twilight Opal', price: 2599, image: '/assets/Products/TwilightOpal.jpg' },
  { name: 'Noir Absolu Nojre', price: 2999, image: '/assets/Products/NoirAbsoluNojre.jpg' },
  { name: 'Suvage Myctique', price: 2199, image: '/assets/Products/SuvageMyctique.jpg' },
  { name: 'Partum Collection', price: 4999, image: '/assets/Products/PartumCollection.jpg' },
  { name: 'Essence Collection', price: 5499, image: '/assets/Products/EssenceCollection.jpg' },
  { name: 'Gift Collection', price: 4999, image: '/assets/Products/GiftCollection.jpg' },
  { name: 'Noir Absolu', price: 2899, image: '/assets/Products/NoirAbsolu.jpg' },
  { name: 'Soleif Froid', price: 2299, image: '/assets/Products/SoleifFroid.jpg' }
];

const Products = () => {
  return (
    <div className="products-page luxury-bg">
      <h1 className="products-heading">Our Products</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
