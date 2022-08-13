import React from 'react';

import Button from '../Button';
import * as styles from './Split.module.css';
import ReactHtmlParser from 'react-html-parser';

const Split = (props) => {
  const { image, alt, title, description, ctaText, cta, bgColor } = props;
  return (
    <div className={styles.root}>
      <div
        className={styles.contentContainer}
        style={{ backgroundColor: bgColor }}
      >
        <div className={styles.detailContainer}>
          <h4>{title}</h4>
          <div>{ReactHtmlParser(description)}</div>
          {/* <Button className={styles.button} level={'primary'} onClick={cta}>
            {ctaText}
          </Button> */}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={alt}></img>
      </div>
    </div>
  );
};

export default Split;
