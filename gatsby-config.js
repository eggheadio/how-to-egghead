const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Learn how to egghead like a pro.',
    description: 'Instructor 101 Guide.',
    author: '@eggheadio',
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        globalScope: `
          import ResponsiveEmbed from "react-responsive-embed";
          import { TwitterTweetEmbed } from "react-twitter-embed";

          export default { ResponsiveEmbed, TwitterTweetEmbed };
        `,
        defaultLayouts: {
          default: path.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              sizeByPixelDensity: true,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: 'guides',
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'articles',
        ignore: [`**/\.*`], // ignore files starting with a dot,
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
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'how-to-egghead',
        short_name: 'egghead',
        background_color: '#3852E4',
        theme_color: '#3852E4',
        display: 'minimal-ui',
        icon: 'src/images/egghead-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        //appId: 'NLOD4N9T1X',
        //apiKey: 'd84c71f054a14caad8cef14f34d38673',
        //indexName: 'guides',
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        //indexName: 'guides',
        queries: [
          {
            query: `
            {
              allMdx(
                sort: { order: ASC, fields: fields___slug }
                filter: { frontmatter: { guide: { eq: "instructor" } } }) {
                edges {
                  node {
                    id
                    rawBody
                    excerpt(pruneLength: 250)
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      slug
                      guide
                      chapterTitle 
                    }
                  }
                }
              }
            }
          `,
            transformer: ({ data }) =>
              data.allMdx.edges.reduce((records, { node }) => {
                const { title, slug, chapterTitle } = node.frontmatter
                // const { excerpt } = node.excerpt
                // const { slug } = node.fields
                const base = { slug, title, chapterTitle }
                const chunks = node.rawBody.split('\n\n')

                return [
                  ...records,
                  {
                    ...base,
                    objectID: `${slug}-${node.id}`,
                    text: node.rawBody,
                  },
                  // ...chunks.map((text, index) => ({
                  //   ...base,
                  //   objectID: `${slug}-${node.id}`,
                  //   text,
                  // })),
                  // ...chunks.map((text, index) => ({
                  //   ...base,
                  //   objectID: `${slug}-${index}`,
                  //   text,
                  // })),
                ]
              }, []),
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
