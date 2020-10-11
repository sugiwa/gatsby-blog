/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Ryo Blog',
    description: 'プログラミング関連について発信するサイト',
    lang: 'ja',
    siteUrl: `https://****.netlify.app`,
    locale: `ja_JP`,
    fbappid: `XXXXXXXX`,
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
        name: `Ryo Blog`,
        short_name: `Ryo Blog`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGlE_ANALYTICS_TRACKING_ID,
        head: true
      }
    }
  ],
}
