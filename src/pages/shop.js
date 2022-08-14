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
import { graphql, useScrollRestoration } from 'gatsby';
import {
  getCollectionScrollPosition,
  getProducts,
  isCollectionsPage,
  storeCollectionScrollPosition,
  storeProducts,
} from '../helpers/utils';

export const query = graphql`
  query teststyje {
    allWcProducts {
      edges {
        node {
          name
          sku
          price
          description

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
  const [products, setProducts] = React.useState([]);

  function handleScrolling() {
    if (window && isCollectionsPage()) {
      function scrollToCorrectPosition() {
        const position = getCollectionScrollPosition();
        console.log('must return', position);
        window.scrollTo(0, position);
      }

      scrollToCorrectPosition();

      window.addEventListener('scroll', function () {
        console.log('storing: ', window.scrollY);
        storeCollectionScrollPosition(window.scrollY);
      });
    }
  }

  useEffect(() => {
    if (products.length <= 0) {
      const storedProducts = getProducts();

      setProducts(
        storedProducts ? storedProducts : _products.allWcProducts.edges
      );

      if (!storedProducts) {
        storeProducts(_products.allWcProducts.edges);
      }
    }
  }, []);

  const ulScrollRestoration = useScrollRestoration(
    `memeowcats-collection-page`
  );

  return (
    <Layout {...ulScrollRestoration}>
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
            <span className={styles.mobileItemCount}>
              {products.length} items
            </span>
            <ProductCardGrid columns={4} products={products}></ProductCardGrid>
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

export const Head = ({ location, params, data, pageContext }) => {
  const seo = {
    title: `Memeowcats | Shop`,
    description: `The best cat products in one place!`,
    image: `/woman-cat-1.jpg`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" data-seo content={seo.image} />
    </>
  );
};
