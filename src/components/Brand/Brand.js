import React from 'react';
import { navigate } from 'gatsby';

import './Brand.scss';

const Brand = (props) => {
  return (
    <div
      className={`Brand `}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      <span className="Brand-logo">Memeowcats</span>
    </div>
  );
};

export default Brand;
