module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/About this lab notebook`,
      },
    },
  ],
  siteMetadata: {
    title: `Jess's Research Notes`,
  },
}
