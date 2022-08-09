import React, { useState } from 'react';
import * as styles from './ProductCardGrid.module.css';

import Drawer from '../Drawer';
import ProductCard from '../ProductCard';
import QuickView from '../QuickView';
import Slider from '../Slider';

const ProductCardGrid = (props) => {
  const [showQuickView, setShowQuickView] = useState(false);
  const { columns = 4, data, products, spacing, showSlider = false } = props;

  const columnCount = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  const renderCards = () => {
    return (
      products &&
      products.length >= 1 &&
      products.map((_product, index) => {
        const product = _product.node;
        return (
          <ProductCard
            key={index}
            image={product.image}
            meta={product.meta}
            originalPrice={product.originalPrice}
            link={product.link}
            product={product}
            showQuickView={() => setShowQuickView(true)}
          />
        );
      })
    );
  };

  return (
    <div className={styles.root} style={columnCount}>
      <div
        className={`${styles.cardGrid} ${
          showSlider === false ? styles.show : ''
        }`}
        style={columnCount}
      >
        {data && renderCards()}
      </div>

      {showSlider === true && (
        <div className={styles.mobileSlider}>
          <Slider spacing={spacing}>{data && renderCards()}</Slider>
        </div>
      )}

      <Drawer visible={showQuickView} close={() => setShowQuickView(false)}>
        <QuickView close={() => setShowQuickView(false)} />
      </Drawer>
    </div>
  );
};

export default ProductCardGrid;
