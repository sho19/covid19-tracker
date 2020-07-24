module.exports = {
  siteMetadata: {
    title: `Covid 19 tracker`,
    description: `website to track countries effected with covid 19`,
    author: `@shoaib`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options:{
        spaceId:'67ndya8i2232',
        accessToken:'UORn0mY2Kz5OdAKe8Y8m2IpR3MVowkUexdRGyKLs7Ps'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
