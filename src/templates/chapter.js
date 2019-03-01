import React from 'react'
import { graphql } from 'gatsby'
import { css, keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/Layout'
import Link from '../components/Link'
import { bpMinLG } from '../utils/breakpoints'

class ChapterTemplate extends React.Component {
  render() {
    const guide = this.props.data.mdx
    const { previous } = this.props.pageContext
    return (
      <Layout>
        <h5
          css={css`
            font-size: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
            opacity: 0.7;
            ${bpMinLG} {
              ${guide.frontmatter.chapterTitle && 'margin-top: -10px;'}
            }
            margin-top: 20px;
          `}>
          {guide.frontmatter.chapterTitle && guide.frontmatter.chapterTitle}
        </h5>
        <MDXRenderer>{guide.code.body}</MDXRenderer>
        {/*
          {next && next.frontmatter.slug !== `what-is-egghead` && (
            <Link to={`/${next.frontmatter.slug}`} rel='next'>
              ← {next.frontmatter.title}
            </Link>
          )}
          */}
        {previous && (
          <Link to={`/${previous.frontmatter.slug}`} rel="previous">
            <ReadNext>
              <h5>read next</h5>
              <h4>
                {previous.frontmatter.title} <span>→</span>
              </h4>
            </ReadNext>
          </Link>
        )}
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        slug
        chapterTitle
      }
      code {
        body
      }
    }
  }
`

const ArrowMovement = keyframes`
from, to {
margin-left: 8px;
}
50% {
  margin-left: 15px;
}
`

const ReadNext = styled.div`
  margin: 60px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 25px 30px;
  background: #f5f7fa;
  border-radius: 5px;
  span {
    margin-left: 8px;
  }
  h4 {
    margin: 0;
  }
  h5 {
    text-transform: uppercase;
    margin: 0 0 3px 0;
    color: #9aa5b1;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 1px;
  }
  transition: all 250ms ease;
  :hover {
    background: #e8ecf3;
    transition: all 250ms ease;
    span {
      animation: ${ArrowMovement} 1s infinite;
    }
    h5 {
      color: #7b8794;
    }
  }
`

export default ChapterTemplate
