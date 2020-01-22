const {createFilePath} = require('gatsby-source-filesystem')
const _ = require('lodash')

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField, createRedirect} = actions

  createRedirect({
    fromPath: '/old-url',
    toPath: '/new-url',
    isPermanent: true,
  })

  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent)
    if (parent.sourceInstanceName === 'articles') {
      const [guideBase] = parent.relativeDirectory.split('/')
      if (guideBase) {
        createNodeField({
          name: 'guide',
          node,
          value: `${guideBase}-guide`,
        })
      } else {
        createNodeField({
          name: 'guide',
          node,
          value: `index`,
        })
      }
    }

    const value = createFilePath({node, getNode})
    createNodeField({
      name: 'slug',
      node,
      value: _.get(node, 'internal.frontmatter.slug', value),
    })

    function extractFirstText(str) {
      const matches = str.match(/"(.*?)"/)
      return matches ? matches[1] : str
    }

    const rootFilePath = extractFirstText(parent.internal.description)

    createNodeField({
      name: 'github',
      node,
      value: `${process.env.REPO_ROOT}/${rootFilePath}`,
    })
  }
}
const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx(sort: {order: ASC, fields: fields___slug}) {
              edges {
                node {
                  id
                  parent {
                    ... on File {
                      extension
                      relativeDirectory
                      name
                      sourceInstanceName
                    }
                  }
                  excerpt(pruneLength: 250)
                  fields {
                    slug
                    guide
                  }
                  frontmatter {
                    title
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }

        const guides = result.data.allMdx.edges.filter(e => {
          return e.node.parent.sourceInstanceName !== 'articles'
        })

        const articles = result.data.allMdx.edges.filter(e => {
          return e.node.parent.sourceInstanceName === 'articles'
        })

        articles.forEach(edge => {
          const {node} = edge

          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/article.js`),
            context: {id: node.id},
          })
        })

        guides.forEach(({node}, index) => {
          createPage({
            path: node.frontmatter.slug,
            component: path.resolve(`./src/templates/article.js`),
            context: {id: node.id},
          })
        })
      })
    )
  })
}
