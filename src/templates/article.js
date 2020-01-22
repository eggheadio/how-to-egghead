/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react'
import {graphql} from 'gatsby'
import Link from '../components/link'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import dropRight from 'lodash/dropRight'
import defaultShareCard from '../images/social-card.jpg'

const ArticleTemplate = ({data}) => {
  const article = data.mdx
  const {slug, guide, github} = article.fields

  const breadCrumbs = dropRight(
    dropRight(
      slug.split('/').reduce((breadcrumbArray, path, idx) => {
        return [
          ...breadcrumbArray,
          {
            name: path,
            to: breadcrumbArray[idx - 1]
              ? `${breadcrumbArray[idx - 1].to}/${path}`.replace('//', '/')
              : path,
          },
        ]
      }, [])
    )
  )

  const image = `https://og-image-react-egghead.now.sh/instructor-guide/${encodeURI(
    article.frontmatter.title
  )}${
    article.frontmatter.shareImage
      ? `?bgImage=${encodeURI(article.frontmatter.shareImage)}&y=20191212`
      : '?y=20191212'
  }`

  const description = article.frontmatter.description || article.excerpt

  return (
    <Layout
      title={article.frontmatter.title}
      image={article.frontmatter.title ? image : defaultShareCard}
      description={description}
      github={github}
      timeToRead={article.timeToRead}
      categories={article.frontmatter.categories}
    >
      <h1
        sx={{
          fontSize: [4, 5, 6],
          lineHeight: 'normal',
          letterSpacing: 'normal',
          mt: [4, 4, 5],
        }}
      >
        {guide &&
          breadCrumbs.map((path, index) => {
            if (path.to === slug) return null
            return (
              <span
                sx={{display: 'inline-block', m: 0, paddingRight: '5px'}}
                key={path.name}
              >
                {index !== breadCrumbs.length ? (
                  <Link to={path.to}>{path.name}</Link>
                ) : (
                  path.name
                )}
                {/* {index < breadCrumbs.length  && '→'} */}
                {path.name && index !== breadCrumbs.length && ' / '}
              </span>
            )
          })}

        {article.frontmatter.title && article.frontmatter.title}
      </h1>
      <MDXRenderer>{article.body}</MDXRenderer>
    </Layout>
  )
}

export default ArticleTemplate

export const pageQuery = graphql`
  query ArticleQuery($id: String) {
    mdx(id: {eq: $id}) {
      id
      excerpt(pruneLength: 250)
      body
      timeToRead
      fields {
        slug
        guide
        github
      }
      frontmatter {
        title
        shareImage
        categories
      }
    }
  }
`
