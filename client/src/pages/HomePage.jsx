import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from '../components/HomePage/Hero';
import FeaturedSpotlight from '../components/HomePage/FeaturedSpotlight';
import Collections from '../components/HomePage/Collections';
import ProductGrid from '../components/HomePage/ProductsGrid';
import Testimonials from '../components/HomePage/Testimonials';
import TextEffect from '../components/HomePage/TextEffect';
import Footer from '../components/HomePage/Footer';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollToId;
    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main className="homepage">
      <Hero />
      <FeaturedSpotlight />
      <Collections />
      <ProductGrid />
      <Testimonials />
      <TextEffect />
      <Footer />
    </main>
  );
};

export default HomePage;
