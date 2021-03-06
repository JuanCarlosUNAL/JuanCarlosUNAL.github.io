/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-react-intl",
      options: {
        path: `${__dirname}/src/i18n`,
        languages: ["en", "es"],
        defaultLanguage: "en",
        redirect: true,
        redirectDefaultLanguageToRoot: false,
        ignoredPaths: ["/wltw/.+/"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: "./gatsby-graphql.ts",
      },
    },
  ],
  siteMetadata: {
    title: "Juan Carlos Gama Roa",
  },
}
