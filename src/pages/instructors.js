import React from 'react'
import { graphql } from 'gatsby'
import Link from '../components/Link'
import styled from '@emotion/styled'

export default function Instructors({ data: { allMdx } }) {
  return (
    <Main>
      <h1>Instructors Guide</h1>
      {allMdx.edges.map(({ node: data }) => (
        <article id={data.frontmatter.slug} key={data.id}>
          {data.frontmatter.chapterTitle && (
            <h2>{data.frontmatter.chapterTitle}</h2>
          )}
          <Link to={data.frontmatter.slug}>
            <h3>{data.frontmatter.title}</h3>
          </Link>
        </article>
      ))}
    </Main>
  )
}

const Main = styled.main`
  margin: 0 auto;
  max-width: 500px;
  padding: 50px 10px;
  h2 {
    margin-top: 2em;
  }
  h3 {
    font-size: 24px;
    line-height: 1;
  }
`

export const pageQuery = graphql`
  query Instructors {
    allMdx(
      sort: { order: ASC, fields: fields___slug }
      filter: { frontmatter: { guide: { eq: "instructor" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            chapterTitle
          }
        }
      }
    }
  }
`
