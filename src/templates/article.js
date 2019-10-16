import React from 'react'
import {graphql} from 'gatsby'
import Link from '../components/link'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import dropRight from 'lodash/dropRight'
import {css} from '@emotion/core'
import {bpMinLG} from '../utils/breakpoints'

const ArticleTemplate = ({data}) => {
  const article = data.mdx
  const {slug, guide} = article.fields

  const breadCrumbs = dropRight(
    dropRight(
      slug.split('/').reduce((breadcrumbArray, path, idx) => {
        return [
          ...breadcrumbArray,
          {
            name: path || 'home',
            to: breadcrumbArray[idx - 1]
              ? `${breadcrumbArray[idx - 1].to}/${path}`.replace('//', '/')
              : path || '/',
          },
        ]
      }, [])
    )
  )

  let image, description

  switch (guide) {
    case 'instructor-guide':
      image = `https://og-image-react-egghead.now.sh/instructor-guide/${encodeURI(
        article.frontmatter.title
      )}?background=${encodeURI(article.frontmatter.shareImage)}`
      description = article.excerpt
  }
  return (
    <Layout
      title={article.frontmatter.title}
      image={image}
      description={description}>
      {guide && (
        <ul>
          {breadCrumbs.map((path, index) => {
            if (path.to === slug) return null
            return (
              <li
                css={{display: 'inline-block', paddingRight: '5px'}}
                key={path.name}>
                <Link to={path.to}>{path.name}</Link>{' '}
                {index < breadCrumbs.length - 1 && '→'}
              </li>
            )
          })}
        </ul>
      )}
      <h1
        css={css`
          font-size: 24px;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.7;
          ${bpMinLG} {
            ${article.frontmatter.title && 'margin-top: -10px;'}
          }
          margin-top: 20px;
        `}>
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
      fields {
        slug
        guide
      }
      frontmatter {
        title
        shareImage
      }
    }
  }
`
