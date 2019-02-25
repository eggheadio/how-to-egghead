import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import ArticleLayout from '../components/article-layout'
import { bpMinLG } from '../utils/breakpoints'

class ArticleTemplate extends React.Component {
  render() {
    const article = this.props.data.mdx
    return (
      <ArticleLayout>
        <h1
          css={css`
            font-size: 15px;
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
        <MDXRenderer>{article.code.body}</MDXRenderer>
      </ArticleLayout>
    )
  }
}

export const pageQuery = graphql`
  query ArticleQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        slug
      }
      code {
        body
      }
    }
  }
`

export default ArticleTemplate
