import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { css } from '@emotion/core'
import LayoutReview from '../components/layout-review'
import ScrollableAnchor from 'react-scrollable-anchor'

export default function Review({ data: { allMdx } }) {
  return (
    <LayoutReview>
      {allMdx.edges.map(({ node: data }) => (
        <article id={data.frontmatter.slug} key={data.id}>
          {data.frontmatter.chapterTitle && (
            <ScrollableAnchor id={data.frontmatter.slug}>
              <h1
                css={css`
                  margin: 80px 0 60px 0;
                  ::before {
                    content: '';
                    position: absolute;
                    width: 100px;
                    height: 2px;
                    background: blue;
                    margin-top: 70px;
                  }
                `}>
                {data.frontmatter.chapterTitle}
              </h1>
            </ScrollableAnchor>
          )}
          <ScrollableAnchor id={data.frontmatter.slug}>
            {/* <h1>{data.frontmatter.title}</h1> */}
            <MDXRenderer>{data.code.body}</MDXRenderer>
          </ScrollableAnchor>
        </article>
      ))}
    </LayoutReview>
  )
}

export const pageQuery = graphql`
  query ReviewerGuide {
    allMdx(
      filter: { fileAbsolutePath: { regex: "//reviewerGuide/" } }
      sort: { order: ASC, fields: [frontmatter___chapter] }
    ) {
      edges {
        node {
          tableOfContents
          id
          frontmatter {
            title
            slug
          }
          code {
            body
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
        }
      }
    }
  }
`
