import React, { useState, useEffect } from 'react';
import * as styles from './shop.module.css';

import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import CardController from '../components/CardController';
import Container from '../components/Container';
import Chip from '../components/Chip';
import Icon from '../components/Icons/Icon';
import Layout from '../components/Layout';
import LayoutOption from '../components/LayoutOption';
import ProductCardGrid from '../components/ProductCardGrid';
import { generateMockProductData } from '../helpers/mock';
import Button from '../components/Button';
import Config from '../config.json';
import { graphql } from 'gatsby';

export const query = graphql`
  {
    allWcProducts {
      edges {
        node {
          name
          sku
          price
          description
          tags {
            name
            slug
            id
          }
          categories {
            id
            name
          }
          images {
            src
            localFile {
              childImageSharp {
                gatsbyImageData(width: 700)
              }
            }
          }
        }
      }
    }
  }
`;

const ShopPage = ({ data: _products }) => {
  const [showFilter, setShowFilter] = useState(false);
  const data = generateMockProductData(6, 'woman');

  const products = _products.allWcProducts.edges;

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('keydown', escapeHandler);
      return () => window.removeEventListener('keydown', escapeHandler);
    }
  }, []);

  const escapeHandler = (e) => {
    if (e?.keyCode === undefined) return;
    if (e.keyCode === 27) setShowFilter(false);
  };

  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`Cat Products`}
          subtitle={
            'Hand picked collection of the cutest cat products out there. Our collection is always growing!'
          }
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.metaContainer}>
            <span className={styles.itemCount}>{products.length} items</span>
            {/* <div className={styles.controllerContainer}>
              <div
                className={styles.iconContainer}
                role={'presentation'}
                onClick={() => setShowFilter(!showFilter)}
              >
                <Icon symbol={'filter'} />
                <span>Filters</span>
              </div>
              <div
                className={`${styles.iconContainer} ${styles.sortContainer}`}
              >
                <span>Sort by</span>
                <Icon symbol={'caret'} />
              </div>
            </div> */}
          </div>
          {/* <CardController
            closeFilter={() => setShowFilter(false)}
            visible={showFilter}
            filters={Config.filters}
          />
          <div className={styles.chipsContainer}>
            <Chip name={'XS'} />
            <Chip name={'S'} />
          </div> */}
          <div className={styles.productContainer}>
            <span className={styles.mobileItemCount}>476 items</span>
            <ProductCardGrid
              columns={4}
              products={products}
              data={data}
            ></ProductCardGrid>
          </div>
          {/* <div className={styles.loadMoreContainer}>
            <span>X of {products.length}</span>
            <Button fullWidth level={'secondary'}>
              LOAD MORE
            </Button>
          </div> */}
        </Container>
      </div>

      <LayoutOption />
    </Layout>
  );
};

export default ShopPage;
