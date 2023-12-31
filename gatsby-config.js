/**
* Configure your Gatsby site with this file.
*
* See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
*/

const { resolve } = require('path');

/**
* @type {import('gatsby').GatsbyConfig}
*/
module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    lang: `en`,
    author: {
      name: `Ashutosh Kumar Singh`,
    },
    description: `Gatsby Starter Blog built with MDX and Styled Components.`,
    image: `/cover.png`,
    siteUrl: `https://lelouchb-gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `@noharashutosh`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Satisfy", "Montserrat", "JetBrains Mono"],
        display: "swap"
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      }
    },
    `gatsby-plugin-styled-components`,
  ],
}
