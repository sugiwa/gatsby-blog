/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'ESSENTIALS',
    description: '美味しい食材と食事を探求するサイト',
    lang: 'ja',
    siteUrl: `https://****.netlify.app`,
    locale: `ja_JP`,
    fbappid: `XXXXXXXXX`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ESSENTIALS エッセンシャルズ`,
        short_name: `ESSENTIALS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#477294`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `yogly1cmx2lv`,
        accessToken: `URY2Q5qGFRJDmRWcUCgtRu8iskBMdfsBUkkB1TBeaas`,
        host: `cdn.contentful.com`,
      },
    },
  ],
}
