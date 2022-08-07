import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './ProductCard.module.css';
import './ProductCard.scss';

import Icon from '../Icons/Icon';
import CurrencyFormatter from '../CurrencyFormatter';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const ProductCard = (props) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const { name, price, originalPrice, meta, showQuickView } = props;

  const { product } = props;

  const image = getImage(product.images[0].localFile.childImageSharp);

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
        <GatsbyImage
          className={`ProductCard-image`}
          image={image}
        ></GatsbyImage>
      </div>
      <div className={`ProductCard-content ${styles.detailsContainer}`}>
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
      <Link className="ProductCard-link" to={`/products/${product.sku}`}></Link>
    </div>
  );
};

export default ProductCard;
