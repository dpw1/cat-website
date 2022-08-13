import React, { useState, useContext } from 'react';
import * as styles from './sample.module.css';

import Accordion from '../../components/Accordion';
import AdjustItem from '../../components/AdjustItem';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import Gallery from '../../components/Gallery';
import SizeList from '../../components/SizeList';
import Split from '../../components/Split';
import SwatchList from '../../components/SwatchList';
import Layout from '../../components/Layout/Layout';

import { generateMockProductData } from '../../helpers/mock';
import Icon from '../../components/Icons/Icon';
import ProductCardGrid from '../../components/ProductCardGrid';
import { navigate } from 'gatsby';

import ReactHtmlParser from 'react-html-parser';

import AddItemNotificationContext from '../../context/AddItemNotificationProvider';
import './product.scss';

import { createAmazonURL } from './../../helpers/general';

const ProductPage = (props) => {
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification.showNotification;
  const sampleProduct = generateMockProductData(1, 'sample')[0];

  const [text, setText] = useState(`Buy on Amazon`);
  const [isWishlist, setIsWishlist] = useState(false);
  const [activeSwatch, setActiveSwatch] = useState(
    sampleProduct.colorOptions[0]
  );
  const [activeSize, setActiveSize] = useState(sampleProduct.sizeOptions[0]);
  const suggestions = generateMockProductData(4, 'woman');

  const product = props.pageContext;

  const url = createAmazonURL(product.sku);

  const categories = [
    { link: '/', label: 'Home' },
    {
      link: `/`,
      label: `${ReactHtmlParser(
        product &&
          product.hasOwnProperty('categories') &&
          product.categories[0].hasOwnProperty('name') &&
          product.categories[0].name
      )}`,
    },
  ];

  return (
    <Layout>
      {product && product.hasOwnProperty('name') && (
        <div className={`Product ${styles.root}`}>
          <Container size={'large'} spacing={'min'}>
            <Breadcrumbs crumbs={categories} />
            <div className={styles.content}>
              <div className={styles.gallery}>
                <Gallery images={product.images} />
              </div>
              <div className={styles.details}>
                <h1>{product.name}</h1>

                <div className={styles.priceContainer}>
                  <CurrencyFormatter appendZero amount={product.price} />
                </div>

                <div className={styles.actionContainer}>
                  <div className={styles.addToButtonContainer}>
                    <Button
                      className="Product-atc"
                      onClick={(e) => {
                        const $child = document.querySelector(`.Product-atc a`);
                        $child.click();
                      }}
                      fullWidth
                      level={'primary'}
                    >
                      <a href={url}>{text}</a>
                    </Button>
                  </div>
                </div>

                <div className={`Product-description ${styles.description}`}>
                  {ReactHtmlParser(product.description)}

                  <a href={url}>View this product on Amazon</a>
                </div>

                <div className={styles.informationContainer}>
                  <Accordion
                    type={'plus'}
                    customStyle={styles}
                    title={'Safe purchase'}
                  >
                    <p className={styles.information}>
                      All purchases are redirected to amazon.com for your safety
                      and comfort.
                    </p>
                  </Accordion>
                  <Accordion
                    type={'plus'}
                    customStyle={styles}
                    title={'Help cats while shopping'}
                  >
                    <p className={styles.information}>
                      We've put effort to bring together two amazing things:
                      shopping and helping others. With every purchase we're
                      donating money to help cats in need.
                    </p>
                  </Accordion>
                </div>
              </div>
            </div>
          </Container>

          <div className={styles.attributeContainer}>
            <Split
              image={'/woman-cat-2.jpg'}
              alt={'Woman hugging cat.'}
              title={'Community'}
              description={`<p>
                Your own charitable donations can inspire your nearest and
                dearest to give to causes important to them, and could even
                bring about a family-wide effort to back a charity or charities
                that have special significance to you as a group.
              </p>
              <p>
                Giving creates a bond, helping to bolster relationships through
                a shared goal and raising more money than could otherwise be
                possible through individual donations. Chances are, many of your
                family members are already giving to charity, so working
                together could help you to make even more of a positive impact.
              </p>
              <p>Thank you for joining us!</p>`}
              bgColor={'var(--standard-light-grey)'}
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProductPage;
