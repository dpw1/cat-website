import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';
import { graphql, useStaticQuery } from 'gatsby';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';
import Message from './../components/Message/Message';
import { getProducts, storeProducts } from '../helpers/utils';

export const query = graphql`
  query {
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

const IndexPage = ({ data: _products }) => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const [products, setProducts] = React.useState([]);

  const goToShop = () => {
    navigate('/shop');
  };

  React.useEffect(() => {
    if (products.length <= 0) {
      const storedProducts = getProducts();

      console.log('mmm', storedProducts);

      setProducts(
        storedProducts ? storedProducts : _products.allWcProducts.edges
      );

      if (!storedProducts) {
        storeProducts(_products.allWcProducts.edges);
      }
    }
  }, []);

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        image={'/woman-cat-1.jpg'}
        title={`Help cats while Amazon shopping.`}
        subtitle={`Every sale via our links equals a donation to <b>Cat Rescue Toronto</b>.<br/>All transactions made safely on Amazon's website.`}
        ctaText={'shop now'}
        ctaAction={goToShop}
      />

      <Message></Message>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer} style={{ marginBottom: 60 }}>
        <Container>
          <Title name={'New Arrivals'} link={'/shop'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider={false}
            columns={4}
            limit={8}
            products={products}
          />

          <div style={{ display: 'block', marginTop: 60 }}>
            <Title
              name={'More products?'}
              link={'/shop'}
              textLink={'view the complete list here'}
            />
          </div>
        </Container>
      </div>

      {/* Collection Container */}
      {/* <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'New Collection'} />
          <ProductCollectionGrid />
        </Container>
      </div> */}

      {/* Highlight  */}
      {/* <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'Luxury Knitwear'}
            description={`This soft lambswool jumper is knitted in Scotland, using yarn from one of the world's oldest spinners based in Fife`}
            textLink={'shop now'}
            link={'/shop'}
          />
        </Container>
      </div> */}

      {/* Promotion */}
      {/* <div className={styles.promotionContainer}>
        <Hero image={'/banner2.png'} title={`-50% off \n All Essentials`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>WOMAN</Link>
          <Link to={'/shop'}>MAN</Link>
        </div>
      </div> */}

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'– Brian Tracy'}
        quote={`“Always give without remembering and always receive without forgetting.”`}
      />

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'With you, for you'}
          subtitle={
            'Follow us on Instagram @memeowcats to join our Memeowers family. ♡'
          }
        />

        <div className={styles.socialContentGrid}>
          <img src={`/instagram-4.jpg`} alt={`Memeowcats' meme image`} />
          <img src={`/instagram-2.jpg`} alt={`Memeowcats' meme image`} />
          <img src={`/instagram-1.jpg`} alt={`Memeowcats' meme image`} />
          <img src={`/instagram-3.jpg`} alt={`Memeowcats' meme image`} />

          <a href="https://instagram.com/memeowcats" target="_blank"></a>
        </div>
      </div>

      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
