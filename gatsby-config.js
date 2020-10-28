module.exports = {
  siteMetadata: {
    title: `Kisha Prudente`,
    description: `Second iteration of my portfolio`,
    author: `@kishaprudente`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Karla`,
            variants: [`400`, `700`],
          },
          {
            family: `Dancing Script`,
            variant: [`400`, `600`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kp-v2`,
        short_name: `v2`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/NAME.png`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};
