/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Ofek's Portfolio`,
    description: `A website to bring to life some of my favorite projects`,
    author: `ofekp`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cinzel\:bold, regular`,
          `Alegreya\:bold, regular`,
          `Abril Fatface`,
          `Libre Baskerville`,
          `Raleway\:bold,light`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/OfekLogo.png`,
      },
    },
  ],
}
