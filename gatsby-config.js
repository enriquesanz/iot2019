module.exports = {
  pathPrefix: `/iot2019`,
  siteMetadata: {
    title: `IoT Conference 2019`,
    description: `The 9th International Conference on the Internet of Things (IoT 2019) in bilbao, Spain, building on the success of its predecessors since 2008, is the premier forum to share, discuss and witness cutting edge research in all areas of development for the Internet of Things.`,
    author: `@enriquesanz`,
  },
  plugins: [
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
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/style.css'], // Purge only tailwind
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
		trackingId: "UA-29274620-3",
	       },
                   
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}


