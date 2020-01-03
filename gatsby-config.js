/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  plugins: [
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Cinzel`,
    //         variants: [`Regular`, `Bold`],
    //       },
    //       {
    //         family: `Alegreya`,
    //         subsets: [`Regular`, `Medium`, `Bold`, `Italic`],
    //       },
    //     ],
    //   },
    // },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cinzel\:bold, regular`,
          `Alegreya\:bold, regular`,
          `Abril Fatface`,
        ],
        display: "swap",
      },
    },
  ],
}
