import React from 'react';
import FlowingMenu from '../../../ReactBits/FlowingMenu/FlowingMenu';
import '../../../ReactBits/FlowingMenu/FlowingMenu.css';
import '../../styles/ProductsGrid.css';

import CelesteEmber from '../../assets/Products/CelesteEmber.jpg';
import SoleifFroid from '../../assets/Products/SoleifFroid.jpg';
import LunaNoire from '../../assets/Products/LunaNoire.jpg';
import TwilightOpal from '../../assets/Products/TwilightOpal.jpg';

const products = [
  { text: 'Celeste Ember', image: CelesteEmber, link: '/products/celeste-ember' },
  { text: 'Soleif Froid', image: SoleifFroid, link: '/products/soleif-froid' },
  { text: 'Luna Noire', image: LunaNoire, link: '/products/luna-noire' },
  { text: 'Twilight Opal', image: TwilightOpal, link: '/products/twilight-opal' },
];

const ProductsGrid = () => {
  return (
    <section className="product-grid-section">
      <h2 className="product-grid-title">Explore Our Creations</h2>
      <div className="flowing-menu-wrapper">
        <FlowingMenu items={products} />
      </div>
    </section>
  );
};

export default ProductsGrid;
