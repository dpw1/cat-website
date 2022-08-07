process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// https://stackoverflow.com/questions/63124432/how-do-i-configure-mini-css-extract-plugin-in-gatsby
exports.onCreateWebpackConfig = (helper) => {
  const { stage, actions, loaders, getConfig } = helper;

  if (stage === 'develop' || stage === 'build-javascript') {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }
};

exports.createPages = async ({ graphql, actions }) => {
  /* Create product pages */
  const _products = await graphql(`
    query getAllWooCommerceProducts {
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
  `);

  console.log('================== products: ', _products);

  if (!_products) {
    throw new Error(`Unable to fetch woocommerce products`);
  }

  const products = _products.data.allWcProducts;

  products.edges.forEach((edge) => {
    const context = edge.node;
    const slug = edge.node.sku;
    const path = `products/${slug}`;

    actions.createPage({
      path,
      component: require.resolve(`./src/pages/product/product.js`),
      context,
    });
  });
};
