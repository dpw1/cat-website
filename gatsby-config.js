module.exports = {
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  siteMetadata: {
    title: `Memeowcats | Help Cats While Shopping`,
    description: `For every sale we make a donation to help cats in need. All purchases safely made through Amazon.`,
    siteUrl: `https://memeowcats.com`,
  },
  plugins: [
    {
      resolve: 'ez-woocommerce-source',
      options: {
        //https://memeow1copy.local/wp-json/wc/v3/products?consumer_key=ck_73045f5846f35b008ccf559cd898e8985f4350c4&consumer_secret=cs_d9fdef09184c4778af6eb52ca4ea8d3819a13cda
        // Base URL of WordPress site
        api: 'memeow1copy.local',
        // true if using https. false otherwise.
        https: true,
        limit: 1,
        api_keys: {
          consumer_key: `ck_73045f5846f35b008ccf559cd898e8985f4350c4`,
          consumer_secret: `cs_d9fdef09184c4778af6eb52ca4ea8d3819a13cda`,
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ['products'],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `memeowcats-theme`,
        short_name: `MemeowCats`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    {
      resolve: `ez-persistent-cache`,
      options: {
        enabled: true,
        persistentDir: '.custom-cache',
        pluginNames: [`ez-woocommerce-source`],
      },
    },
  ],
};
