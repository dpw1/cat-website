import React from 'react';

import Slider from '../Slider';

import * as styles from './Gallery.module.css';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

import './Gallery.scss';
import { isDevEnvironment } from './../../helpers/utils';

const Gallery = (props) => {
  const { images } = props;

  const customSliderSettings = {
    slidesToShow: 1,
  };

  const renderImages = () => {
    return images?.map((imageObject, index) => {
      const src = imageObject.src;
      const image = imageObject.hasOwnProperty('localFile')
        ? getImage(imageObject.localFile.childImageSharp)
        : '';

      return (
        <div key={index} className={styles.imageContainer}>
          {isDevEnvironment() ? (
            <img src={src}></img>
          ) : (
            <GatsbyImage image={image}></GatsbyImage>
          )}
        </div>
      );
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.cardGrid}>
        {images?.map((imageObject, index) => {
          const src = imageObject.src;
          const image = imageObject.hasOwnProperty('localFile')
            ? getImage(imageObject.localFile.childImageSharp)
            : '';

          return (
            <div
              key={index}
              className={`Gallery-imageContainer ${styles.imageContainer}`}
            >
              <GatsbyImage image={image}></GatsbyImage>
              {isDevEnvironment() ? (
                <img src={src}></img>
              ) : (
                <GatsbyImage image={image}></GatsbyImage>
              )}
            </div>
          );
        })}
      </div>
      {/* Mobile */}
      <div className={styles.mobileSlider}>
        <Slider settings={customSliderSettings}>
          {images && renderImages()}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
