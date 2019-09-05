const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

process.env.BUILD_ALGOLIA_INDEX && process.env.BRANCH === 'master'

module.exports = {
  siteMetadata: {
    title: 'Learn how to egghead like a pro.',
    description: 'A series of guides for badass eggheads.',
    author: '@eggheadio',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: 'autolink-header',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false,
              tracedSVG: true,
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
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries: [
          {
            query: `
            {
              allMdx(filter: {frontmatter:{published: {ne: false}}}) {
                edges {
                  node {
                    id
                    frontmatter {
                      title
                      slug
                      guide
                      description
                      chapterTitle 
                    }
                    fields {
                      slug
                    }
                    excerpt(pruneLength: 250)
                    rawBody
                  }
                }
              }
            }
          `,
            transformer: ({data}) =>
              data.allMdx.edges.reduce((records, {node}) => {
                const {title, description} = node.frontmatter
                const path = node.fields.slug
                // for old guides, we take slug from frontmatter, while for the new one from fields
                const slug = node.frontmatter.slug ? `/${node.frontmatter.slug}` : node.fields.slug
                const {excerpt} = node.excerpt
                const base = {slug, title, path, excerpt, description}
                const chunks = node.rawBody.split('\n\n')

                return [
                  ...records,
                  ...chunks.map((text, index) => ({
                    ...base,
                    objectID: `${slug}-${index}`,
                    text,
                  })),
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
