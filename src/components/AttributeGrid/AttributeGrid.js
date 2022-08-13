import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'Worldwide Shipping'}
        subtitle={`Delivering wherever you need!`}
      />
      <Attribute
        icon={'cycle'}
        title={'returns'}
        subtitle={'Hassle-free returns.'}
      />
      <Attribute
        icon={'creditcard'}
        title={'secured payment'}
        subtitle={`Checkout from Amazon's website.`}
      />
    </div>
  );
};

export default AttributeGrid;
