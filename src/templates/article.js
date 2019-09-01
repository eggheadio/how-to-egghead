import React from 'react'
import {graphql, Link} from 'gatsby'
import {css} from '@emotion/core'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/layout'
import {bpMinLG} from '../utils/breakpoints'
import without from 'lodash/without'
import dropRight from 'lodash/dropRight'

class ArticleTemplate extends React.Component {
  render() {
    const article = this.props.data.mdx
    const {slug} = article.fields

    const breadCrumbs = dropRight(
      article.fields.slug.split('/').reduce((breadcrumbArray, path, idx) => {
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

    let image, description

    switch (article.fields.guide) {
      case 'instructor-guide':
        image = `https://og-image-react-egghead.now.sh/instructor-guide/${encodeURI(
          article.frontmatter.title
        )}`
        description = article.excerpt
    }
    return (
      <Layout
        title={article.frontmatter.title}
        image={image}
        description={description}>
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
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query ArticleQuery($id: String) {
    mdx(id: {eq: $id}) {
      id
      excerpt(pruneLength: 250)
      fields {
        slug
        guide
      }
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`

export default ArticleTemplate
