import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './ProductCard.module.css';

import Icon from '../Icons/Icon';
import CurrencyFormatter from '../CurrencyFormatter';

const ProductCard = (props) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const { name, price, originalPrice, meta, showQuickView } = props;

  const { product } = props;

  const image = product.images[0].localFile.childImageSharp.fluid.srcSet;

  const handleRouteToProduct = () => {
    // navigate('/product/sample');
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    showQuickView();
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    setIsWishlist(!isWishlist);
  };

  return (
    <div className={`ProductCard ${styles.root}`}>
      <div
        className={styles.imageContainer}
        onClick={() => handleRouteToProduct()}
        role={'presentation'}
      >
        <img srcSet={image} alt={product.name}></img>
      </div>
      <div className={styles.detailsContainer}>
        <span className={`ProductCard-name ${styles.productName}`}>
          {product.name}
        </span>
        <div className={styles.prices}>
          <span
            className={`${originalPrice !== undefined ? styles.salePrice : ''}`}
          >
            <CurrencyFormatter amount={product.price}></CurrencyFormatter>
          </span>
          {/* {originalPrice && (
            <span className={styles.originalPrice}>
              <CurrencyFormatter amount={originalPrice}></CurrencyFormatter>
            </span>
          )} */}
        </div>
        <span className={styles.meta}>{meta}</span>
      </div>
    </div>
  );
};

export default ProductCard;
