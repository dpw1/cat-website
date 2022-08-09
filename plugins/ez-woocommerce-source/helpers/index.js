const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
let TOTAL_IMAGES = 0;
let DOWNLOADING_IMAGES_LOOP = 0;

/**
 * Add date and time stamp to message before logging to console.
 *
 * @param {string} message
 */
const timeStampedLog = (message) => {
  console.log(
    `${
      new Date().toISOString().match(/(\d\d\:\d\d\:\d\d\.\d\d\d\w)/)[0]
    } > ${message}`
  );
};

// @8ctopotamus customization
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

let processNodeTimer = 0;
const processNode = (
  createContentDigest,
  node,
  verbose,
  processNodeStartTime
) => {
  if (0 === processNodeTimer) {
    processNodeTimer = processNodeStartTime;
  }

  const { __type } = node;
  delete node.__type;

  if (__type === 'wcProducts' && node.categories) {
    node.categories.forEach((category) => {
      // Add wordpress_id field when there is no
      // categories connection to keep the id access
      // consistent between just products & products with
      // categories
      category.wordpress_id = category.id;
    });
  }

  const nodeContent = JSON.stringify(node);

  const nodeData = Object.assign({}, node, {
    id: node.id,
    wordpress_id: node.wordpress_id,
    parent: null,
    children: [],
    internal: {
      type: __type,
      contentDigest: createContentDigest(nodeContent),
    },
  });

  if (verbose) {
    //print progress every 1500 ms
    if (new Date().getTime() - processNodeTimer > 1500) {
      processNodeTimer = new Date().getTime();
      if (__type === 'wcProducts') {
        timeStampedLog(
          `ez-woocommerce-source: Importing product { id: ${node.id}, name: ${node.name} }, with ${node.variations.length} variations`
        );
      } else {
        timeStampedLog(
          `ez-woocommerce-source: Importing { id: ${node.id}, name: ${node.name} }`
        );
      }
    }
  }

  return nodeData;
};

/**
 * Get product variations data for variable products and add to nodes.
 * Asynchronous function.
 *
 * @param {array} nodes
 * @param {object} WooCommerce
 *
 * @return {array} Processed nodes
 */
const asyncGetProductVariations = async (nodes, WooCommerce, verbose) => {
  if (verbose) {
    timeStampedLog(
      `ez-woocommerce-source: Fetching product variations for ${nodes.length} nodes`
    );
  }
  const asyncGetProductVariationsStartTime = new Date().getTime();
  let asyncGetProductVariationsTimer = asyncGetProductVariationsStartTime;
  const processedNodes = [];
  const promises = nodes.map(async (node) => {
    if (node.__type === 'wcProducts') {
      if (node.variations && node.variations.length) {
        let page = 1;
        let pages = 1;
        node.product_variations = [];
        const variations_path = `products/${node.wordpress_id}/variations`;

        do {
          const args = { page, per_page: 100 };
          await WooCommerce.get(variations_path, args)
            .then((response) => {
              if (response.status === 200) {
                node.product_variations = [
                  ...node.product_variations,
                  ...response.data,
                ];
                pages = parseInt(response.headers['x-wp-totalpages']);
                page++;
                if (verbose) {
                  //print progress every 1500 ms
                  if (
                    new Date().getTime() - asyncGetProductVariationsTimer >
                    1500
                  ) {
                    asyncGetProductVariationsTimer = new Date().getTime();
                    timeStampedLog(
                      `ez-woocommerce-source: Retrieved ${variations_path}...`
                    );
                  }
                }
              } else {
                console.warn(`
                Warning: error while fetching variations for ${node.name}.
                Error data: ${response.data}.
              `);
                pages = 0;
              }
            })
            .catch((error) => {
              console.warn(`
              Warning: error while fetching variations for ${node.name}.
              Error: ${error}.
            `);
              pages = 0;
            });
        } while (page <= pages);
      } else {
        node.product_variations = [];
      }
    }
    return new Promise((res, rej) => {
      res(node);
    });
  });

  await Promise.all(promises).then((results) => {
    results.forEach(async (node) => {
      processedNodes.push(node);
    });
  });

  timeStampedLog(
    `ez-woocommerce-source: ${
      promises.length
    } product variations retrieved for ${nodes.length} nodes in ${
      (new Date().getTime() - asyncGetProductVariationsStartTime) / 1000
    }s`
  );
  return processedNodes;
};

/**
 * Get product attributes terms.
 * Asynchronous function.
 *
 * @param {array} nodes
 * @param {object} WooCommerce
 *
 * @return {array} Processed nodes
 */
const asyncGetProductAttributes = async (nodes, WooCommerce, verbose) => {
  if (verbose) {
    timeStampedLog(
      `ez-woocommerce-source: Fetching product attributes for ${nodes.length} nodes`
    );
  }
  const asyncGetProductAttributesStartTime = new Date().getTime();
  let asyncGetProductAttributesTimer = asyncGetProductAttributesStartTime;
  const processedNodes = [];
  const promises = nodes.map(async (node) => {
    if (node.__type === 'wcProductsAttributes') {
      let page = 1;
      let pages = 1;
      node.attribute_options = [];
      const attributes_path = `products/attributes/${node.wordpress_id}/terms`;
      do {
        const args = { page, per_page: 100 };
        await WooCommerce.get(attributes_path, args)
          .then((response) => {
            if (response.status === 200) {
              node.attribute_options = [
                ...node.attribute_options,
                ...response.data,
              ];
              pages = parseInt(response.headers['x-wp-totalpages']);
              page++;
              if (verbose) {
                //print progress every 1500 ms
                if (
                  new Date().getTime() - asyncGetProductAttributesTimer >
                  1500
                ) {
                  asyncGetProductAttributesTimer = new Date().getTime();
                  timeStampedLog(
                    `ez-woocommerce-source: Retrieved ${attributes_path}...`
                  );
                }
              }
            } else {
              console.warn(`
                Warning: error while fetching attributes terms for ${node.name}.
                Error data: ${response.data}.
              `);
              pages = 0;
            }
          })
          .catch((error) => {
            console.warn(`
              Warning: error while fetching attributes terms for ${node.name}.
              Error: ${error}.
            `);
            pages = 0;
          });
      } while (page <= pages);
    }
    return new Promise((res, rej) => {
      res(node);
    });
  });

  await Promise.all(promises).then((results) => {
    results.forEach(async (node) => {
      processedNodes.push(node);
    });
  });

  timeStampedLog(
    `ez-woocommerce-source: ${
      promises.length
    } product attributes terms retrieved for ${nodes.length} nodes in ${
      (new Date().getTime() - asyncGetProductAttributesStartTime) / 1000
    }s`
  );
  return processedNodes;
};

/**
 * Create links between products and categories (bi-directional)
 * @param {array} nodes
 *
 * @return {array} Processed nodes
 */
const mapProductsToCategories = (nodes) => {
  const categories = nodes.filter(
    (node) => node.__type === 'wcProductsCategories'
  );

  return nodes.map((node) => {
    if (categories.length && node.__type === 'wcProducts') {
      node.categories.forEach(({ id }) => {
        const category = categories.find((c) => id === c.wordpress_id);
        if (category) {
          if (!node.categories___NODE) {
            // Initialise the connection array if necessary
            node.categories___NODE = [];
          }
          // Add the current category ID to the connection array
          node.categories___NODE.push(category.id);

          if (!category.products___NODE) {
            // Initialise the product connection array if necessary
            category.products___NODE = [];
          }
          // Add the current product's ID to the connection array
          category.products___NODE.push(node.id);
        }
      });
      if (node.categories___NODE) {
        // Remove the old categories field if
        // nodes are now being referenced
        delete node.categories;
      }
    }
    return node;
  });
};

/**
 * Create links between products and tags (bi-directional)
 *
 * @param {array} nodes
 *
 * @return {array} Processed nodes
 */
const mapProductsToTags = (nodes) => {
  const tags = nodes.filter((node) => node.__type === 'wcProductsTags');

  return nodes.map((node) => {
    if (tags.length && node.__type === 'wcProducts') {
      node.tags.forEach(({ id }) => {
        const tag = tags.find((t) => id === t.wordpress_id);
        if (tag) {
          if (!node.tags___NODE) {
            // Initialise the connection array if necessary
            node.tags___NODE = [];
          }
          // Add the current tag ID to the connection array
          node.tags___NODE.push(tag.id);

          if (!tag.products___NODE) {
            // Initialise the connection array if necessary
            tag.products___NODE = [];
          }

          //Add the current product's ID to the connection array
          tag.products___NODE.push(node.id);
        }
      });
      if (node.tags___NODE) {
        // Remove the old tags field if
        // nodes are now being referenced
        delete node.tags;
      }
    }
    return node;
  });
};

/**
 * Map nodes of related products to products
 *
 * @param {array} nodes
 *
 * @return {array} Processed nodes
 */
const mapRelatedProducts = (nodes) => {
  const products = nodes.filter((node) => node.__type === 'wcProducts');

  return nodes.map((node) => {
    try {
      if (node && node.__type === 'wcProducts') {
        const related_products = node.related_ids
          ? node.related_ids.map((id) => {
              const product = products.find(
                (product) => product.wordpress_id === id
              );
              return product ? product.id : null;
            })
          : null;
        if (related_products) {
          node.related_products___NODE = related_products;
        } else {
          node.related_products = [];
        }
      }
      return node;
    } catch (err) {
      return null;
    }
  });
};

/**
 * Map nodes of each product in a grouped product to the parent product.
 *
 * @param {array} nodes
 *
 * @return {array} Processed nodes
 */
const mapGroupedProducts = (nodes) => {
  const products = nodes.filter((node) => node.__type === 'wcProducts');

  return nodes.map((node) => {
    if (node.__type === 'wcProducts') {
      const grouped_products = node.grouped_products
        ? node.grouped_products.map((id) => {
            const product = products.find(
              (product) => product.wordpress_id === id
            );
            return product ? product.id : null;
          })
        : null;
      if (grouped_products) {
        node.grouped_products_nodes___NODE = grouped_products;
      } else {
        node.grouped_products_nodes = [];
      }
    }
    return node;
  });
};

/**
 * Turn multi part endpoints into camelCase
 * i.e products/categories becomes productsCategories
 *
 * @param {string} name Non-normalised field name (e.g. products/categories)
 *
 * @return The camelCase field name
 */
const normaliseFieldName = (name) => {
  const parts = name.split('/');
  return parts.reduce((whole, partial) => {
    if (whole === '') {
      return whole.concat(partial);
    }
    return whole.concat(partial[0].toUpperCase() + partial.slice(1));
  }, '');
};

const downloadMedia = async ({
  n,
  image,
  store,
  cache,
  getNode,
  touchNode,
  createNode,
  createNodeId,
  index,
}) => {
  let fileNodeID;
  let fileNode;
  const mediaDataCacheKey = `wordpress-media-${image.id}`;
  const cacheMediaData = await cache.get(mediaDataCacheKey);

  /* TODO
  do not download image on deve
  */

  if (cacheMediaData && n.modified === cacheMediaData.modified) {
    fileNode = getNode(cacheMediaData.fileNodeID);

    if (fileNode) {
      fileNodeID = cacheMediaData.fileNodeID;
      touchNode(fileNode);
    }
  }

  if (!fileNodeID) {
    try {
      /* If dev mode, use a dummy image instead of the real "image.src". 
      This will make images load faster during development
      */

      if (
        DOWNLOADING_IMAGES_LOOP > 0 &&
        process.env.NODE_ENV !== 'development'
      ) {
        console.log(
          `ez-woocommerce-source: Downloading images. ${
            (DOWNLOADING_IMAGES_LOOP / TOTAL_IMAGES) * 100
          }%`
        );
      }

      fileNode = await createRemoteFileNode({
        url:
          process.env.NODE_ENV === 'development'
            ? `https://cdnb.artstation.com/p/assets/images/images/008/358/375/large/emily-ritchie-white-n-black.jpg?1512240335`
            : image.src,

        store,
        cache,
        createNode,
        createNodeId,
        parentNodeId: n.id.toString(),
      });

      if (fileNode) {
        fileNodeID = fileNode.id;

        await cache.set(mediaDataCacheKey, {
          fileNodeID,
          modified: n.modified,
        });
      }
    } catch (e) {
      // Ignore
    } finally {
      DOWNLOADING_IMAGES_LOOP += 1;
    }
  }
  if (fileNodeID) {
    image.localFile___NODE = fileNodeID;
  }
};

// @8ctopotamus customization
const downloadACFMedia = async ({
  n,
  field,
  src,
  store,
  cache,
  getNode,
  touchNode,
  createNode,
  createNodeId,
}) => {
  let fileNodeID;
  let fileNode;
  const mediaDataCacheKey = `woocommerce-acf-media-${src}`;
  const cacheMediaData = await cache.get(mediaDataCacheKey);

  if (cacheMediaData && n.modified === cacheMediaData.modified) {
    fileNode = getNode(cacheMediaData.fileNodeID);

    if (fileNode) {
      fileNodeID = cacheMediaData.fileNodeID;
      touchNode(fileNode);
    }
  }

  if (!fileNodeID) {
    try {
      const fileNode = await createRemoteFileNode({
        url: src,
        store,
        cache,
        createNode,
        createNodeId,
        parentNodeId: n.id.toString(),
      });

      if (fileNode) {
        fileNodeID = fileNode.id;

        await cache.set(mediaDataCacheKey, {
          fileNodeID,
          modified: n.modified,
        });
      }
    } catch (e) {
      // Ignore
    }
  }
  if (fileNodeID) {
    n.acf[field + '_localFile___NODE'] = fileNodeID;
  }
};

const mapMediaToNodes = async ({
  nodes,
  store,
  cache,
  verbose,
  createNode,
  createNodeId,
  touchNode,
  getNode,
}) => {
  return Promise.all(
    nodes.map(async (n) => {
      const commonParams = {
        n,
        store,
        cache,
        touchNode,
        createNode,
        createNodeId,
        getNode,
      };

      /* Todo
      check why images take so long
      */

      if (n.product_variations && n.product_variations.length) {
        for await (let [index, variation] of n.product_variations.entries()) {
          const { image } = variation;
          if (image) {
            await downloadMedia({
              image,
              index,
              ...commonParams,
            });
          }
        }
      }

      // @8ctopotamus customization
      if (n.acf) {
        console.log(`ACF FOUND`);
        Object.entries(n.acf).forEach(async (entry) => {
          const [field, val] = entry;
          if (val && typeof val === 'string') {
            const isImage = imageExtensions.some((ext) => val.includes(ext));
            if (isImage) {
              await downloadACFMedia({
                field,
                src: val,
                ...commonParams,
              });
            }
          }
        });
      }

      if (n.images && n.images.length) {
        TOTAL_IMAGES += n.images.length;

        if (verbose) {
          console.log(`Downloading total of ${TOTAL_IMAGES} images.`);
        }

        for (let [index, image] of n.images.entries()) {
          await downloadMedia({
            image,
            ...commonParams,
          });
        }
        return n;
      } else if (n.image && n.image.id) {
        console.log(`N.IMAGE AND SSS`);
        const { image } = n;
        await downloadMedia({
          image,
          index,
          ...commonParams,
        });

        return n;
      } else {
        return n;
      }
    })
  );
};

module.exports = {
  processNode,
  normaliseFieldName,
  mapMediaToNodes,
  mapProductsToCategories,
  mapProductsToTags,
  mapRelatedProducts,
  mapGroupedProducts,
  asyncGetProductVariations,
  asyncGetProductAttributes,
  timeStampedLog,
};
